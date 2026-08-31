"use client";

import React, { useState, useRef, useCallback, useMemo } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import { alpha } from "@mui/material/styles";
import { Close, VisibilityOutlined, DeleteOutline, CloudUploadOutlined } from "@mui/icons-material";
import { DragDropUploadProps, FileItem } from "./Uploads.types";
import {
  getAcceptedTypes,
  getAllowedLabel,
  isImageType,
  resolveFileSrc,
  toBase64WithProgress,
  getFileIcon,
} from "./Uploads.utils";

export const DragDropUpload: React.FC<DragDropUploadProps> = ({
  value = [],
  onChange,
  disabled = false,
  multiple = true,
  maxFiles,
  maxSizeMB = 10,
  label,
  required = false,
  error,
  helperText,
  fileTypes = "all",
  imgPreview = false,
  visibleLimit = 8,
  imgEndpoint = "http://192.168.0.109:8001/",
  className,
  sx,
  onUploadStart,
  onUploadError,
  onUploadSuccess,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [progressMap, setProgressMap] = useState<Record<string, number>>({});
  const [previewFile, setPreviewFile] = useState<FileItem | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const acceptedTypes = useMemo(() => getAcceptedTypes(fileTypes), [fileTypes]);
  const acceptString = useMemo(() => Object.keys(acceptedTypes).join(","), [acceptedTypes]);
  const allowedLabel = useMemo(() => getAllowedLabel(fileTypes), [fileTypes]);

  const getPreviewUrl = (file: File) => {
    if (file.type.startsWith("image/")) return URL.createObjectURL(file);
    return null;
  };

  const processFiles = useCallback(
    async (rawFiles: FileList | File[]) => {
      setUploadError("");
      const fileArray = Array.from(rawFiles);

      if (maxFiles && value.length + fileArray.length > maxFiles) {
        const err = `Maximum ${maxFiles} file(s) allowed.`;
        setUploadError(err);
        onUploadError?.(err);
        return;
      }

      const oversized = fileArray.filter((f) => f.size > maxSizeMB * 1024 * 1024);
      if (oversized.length > 0) {
        const err = `File(s) exceed ${maxSizeMB}MB limit.`;
        setUploadError(err);
        onUploadError?.(err);
        return;
      }

      const unsupported = fileArray.filter((f) => !Object.keys(acceptedTypes).includes(f.type));
      if (unsupported.length > 0) {
        const err = `Unsupported file type. Allowed: ${allowedLabel}.`;
        setUploadError(err);
        onUploadError?.(err);
        return;
      }

      onUploadStart?.();

      const placeholders: FileItem[] = fileArray.map((file) => ({
        file_name: file.name,
        file_type: file.type,
        file_data: null,
        preview_url: null,
        size: file.size,
        uploading: true,
      }));

      const baseList = multiple ? [...value, ...placeholders] : [...placeholders];
      onChange?.(baseList);

      const initProgress: Record<string, number> = {};
      fileArray.forEach((f) => {
        initProgress[f.name] = 0;
      });
      setProgressMap((prev) => ({ ...prev, ...initProgress }));

      const processed: FileItem[] = await Promise.all(
        fileArray.map(async (file) => {
          const file_data = await toBase64WithProgress(file, (pct) => {
            setProgressMap((prev) => ({ ...prev, [file.name]: pct }));
          });
          return {
            file_name: file.name,
            file_type: file.type,
            file_data,
            preview_url: getPreviewUrl(file),
            size: file.size,
            uploading: false,
          };
        }),
      );

      const updatedList = multiple ? [...value, ...processed] : processed;
      onChange?.(updatedList);
      onUploadSuccess?.(updatedList);

      setProgressMap((prev) => {
        const next = { ...prev };
        fileArray.forEach((f) => delete next[f.name]);
        return next;
      });
    },
    [value, onChange, multiple, maxFiles, maxSizeMB, acceptedTypes, allowedLabel, onUploadStart, onUploadError, onUploadSuccess],
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      if (disabled) return;
      processFiles(e.dataTransfer.files);
    },
    [disabled, processFiles],
  );

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);
  
  const handleBrowseClick = () => {
    if (!disabled) inputRef.current?.click();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      processFiles(e.target.files);
      e.target.value = "";
    }
  };

  const handleRemove = (index: number) => {
    const file = value[index];
    if (file?.preview_url) URL.revokeObjectURL(file.preview_url);
    const updated = value.filter((_, i) => i !== index);
    onChange?.(updated);
  };

  const handlePreview = (e: React.MouseEvent, file: FileItem) => {
    e.stopPropagation();
    setUploadError("");
    const src = resolveFileSrc(file, imgEndpoint);
    if (!src) return;

    if (isImageType(file.file_type)) {
      setPreviewFile({ ...file, src });
      return;
    }

    const win = window.open(src, "_blank", "noreferrer");
    setTimeout(() => {
      if (win && win.closed) {
        setUploadError("Preview was blocked by the browser. Please allow pop-ups for this site.");
      }
    }, 300);
  };

  const displayError = uploadError || (typeof error === "string" ? error : error ? "Upload error" : "");

  const renderFileItem = (file: FileItem, index: number) => {
    const progress = progressMap[file.file_name];
    const isUploading = file.uploading || progress !== undefined;

    return (
      <Box
        key={index}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: "12px",
          width: "100%",
          maxWidth: "348px",
          height: "54px",
          borderRadius: "10px",
          border: "1px solid",
          borderColor: "divider",
          bgcolor: "background.paper",
          boxShadow: "0px 3px 4.6px 0px rgba(0,0,0,0.05)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, overflow: "hidden", flex: 1 }}>
          <Box sx={{ width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            {getFileIcon(file.file_name, { fontSize: 20 })}
          </Box>

          {isUploading ? (
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography
                sx={{
                  fontSize: "13px",
                  color: "text.primary",
                  fontWeight: 400,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  mb: 0.5,
                }}
                title={file.file_name}
              >
                {file.file_name}
              </Typography>
              <Box sx={{ height: "4px", bgcolor: "action.hover", borderRadius: "99px", overflow: "hidden", width: "100%" }}>
                <Box
                  sx={{
                    height: "100%",
                    width: `${progress ?? 0}%`,
                    bgcolor: "primary.main",
                    borderRadius: "100px",
                    transition: "width 0.2s ease",
                  }}
                />
              </Box>
            </Box>
          ) : (
            <Typography
              sx={{
                fontSize: "13px",
                color: "text.primary",
                fontWeight: 400,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                maxWidth: "220px",
              }}
              title={file.file_name}
            >
              {file.file_name}
            </Typography>
          )}
        </Box>

        {isUploading ? (
          <Typography sx={{ fontSize: "13px", fontWeight: 500, color: "primary.main", ml: 1, flexShrink: 0 }}>
            {progress ?? 0}%
          </Typography>
        ) : (
          <Box sx={{ display: "flex", gap: 1, flexShrink: 0 }}>
            <IconButton
              onClick={(e) => handlePreview(e, file)}
              size="small"
              sx={{
                width: 30,
                height: 30,
                border: "1px solid",
                borderColor: "divider",
                bgcolor: "background.default",
                borderRadius: "5px",
                "&:hover": { bgcolor: "action.hover" },
              }}
            >
              <VisibilityOutlined sx={{ fontSize: 16, color: "text.secondary" }} />
            </IconButton>

            {!disabled && (
              <IconButton
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove(index);
                }}
                size="small"
                sx={{
                  width: 30,
                  height: 30,
                  border: "1px solid",
                  borderColor: "divider",
                  bgcolor: "background.default",
                  borderRadius: "5px",
                  "&:hover": { bgcolor: "action.hover" },
                }}
              >
                <DeleteOutline sx={{ fontSize: 16, color: "text.secondary" }} />
              </IconButton>
            )}
          </Box>
        )}
      </Box>
    );
  };

  return (
    <Box className={className} sx={{ width: "100%", mb: 2, ...sx }}>
      {label && (
        <Typography sx={{ fontSize: "14px", fontWeight: 500, color: "text.primary", mb: 1 }}>
          {label} {required && <Box component="span" sx={{ color: "error.main" }}>*</Box>}
        </Typography>
      )}

      <Box
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={disabled ? undefined : handleBrowseClick}
        sx={{
          border: "1.5px dashed",
          borderColor: isDragging ? "primary.main" : displayError ? "error.main" : "divider",
          borderRadius: "10px",
          minHeight: "100px",
          py: 1.5,
          width: "100%",
          maxWidth: "348px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 0.5,
          cursor: disabled ? "not-allowed" : "pointer",
          bgcolor: isDragging ? (theme) => alpha(theme.palette.primary.main, 0.08) : disabled ? "background.default" : "background.paper",
          transition: "all 0.18s ease",
          "&:hover": disabled ? {} : { borderColor: "primary.main", bgcolor: (theme) => alpha(theme.palette.primary.main, 0.04) },
        }}
      >
        <Box sx={{ width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <CloudUploadOutlined sx={{ fontSize: 28, color: "text.secondary" }} />
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography sx={{ color: "text.secondary", fontSize: "14px", fontWeight: 400 }}>
            Drag & Drop (or) <Box component="span" sx={{ color: "primary.main", fontWeight: 500 }}>Browse</Box>
          </Typography>
          <Typography sx={{ color: "text.secondary", fontSize: "11.5px", fontWeight: 400, opacity: 0.8, mt: 0.25 }}>
            {allowedLabel} • Max {maxSizeMB}MB {maxFiles ? `• Up to ${maxFiles} files` : ""}
          </Typography>
        </Box>
      </Box>

      <input
        ref={inputRef}
        type="file"
        multiple={multiple}
        accept={acceptString}
        style={{ display: "none" }}
        onChange={handleInputChange}
        disabled={disabled}
      />

      {displayError && (
        <Typography variant="caption" sx={{ color: "error.main", mt: 0.5, display: "block" }}>
          {displayError}
        </Typography>
      )}

      {helperText && !displayError && (
        <Typography variant="caption" sx={{ color: "text.secondary", mt: 0.5, display: "block" }}>
          {helperText}
        </Typography>
      )}

      {value.length > 0 && (
        <Box sx={{ mt: 1.5, display: "flex", flexDirection: "column", gap: 1, width: "100%", maxWidth: "348px" }}>
          {imgPreview && fileTypes === "image" ? (
            <>
              <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
                {value.slice(0, visibleLimit).map((file, index) => {
                  const src = resolveFileSrc(file, imgEndpoint);
                  if (!src) return null;
                  return (
                    <Box
                      key={index}
                      onClick={(e) => handlePreview(e, file)}
                      sx={{
                        width: 72,
                        height: 72,
                        borderRadius: "8px",
                        overflow: "hidden",
                        border: "1px solid",
                        borderColor: "divider",
                        position: "relative",
                        cursor: "pointer",
                      }}
                    >
                      <img src={src} alt="preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      {!disabled && (
                        <IconButton
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemove(index);
                          }}
                          size="small"
                          sx={{
                            position: "absolute",
                            top: 4,
                            right: 4,
                            width: 20,
                            height: 20,
                                bgcolor: (theme) => alpha(theme.palette.background.paper, 0.8),
                                "&:hover": { bgcolor: "background.paper" },
                          }}
                        >
                          <Close sx={{ fontSize: 14, color: "error.main" }} />
                        </IconButton>
                      )}
                    </Box>
                  );
                })}
              </Box>

              {value.length > visibleLimit && (
                <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                  <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", mt: 1.5 }}>
                    {value.slice(visibleLimit).map((file, sliceIndex) => {
                      const actualIndex = sliceIndex + visibleLimit;
                      const src = resolveFileSrc(file, imgEndpoint);
                      if (!src) return null;
                      return (
                        <Box
                          key={actualIndex}
                          onClick={(e) => handlePreview(e, file)}
                          sx={{
                            width: 72,
                            height: 72,
                            borderRadius: "8px",
                            overflow: "hidden",
                            border: "1px solid",
                            borderColor: "divider",
                            position: "relative",
                            cursor: "pointer",
                          }}
                        >
                          <img src={src} alt="preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                          {!disabled && (
                            <IconButton
                              onClick={(e) => {
                                e.stopPropagation();
                                handleRemove(actualIndex);
                              }}
                              size="small"
                              sx={{
                                position: "absolute",
                                top: 4,
                                right: 4,
                                width: 20,
                                height: 20,
                                bgcolor: (theme) => alpha(theme.palette.background.paper, 0.8),
                                "&:hover": { bgcolor: "background.paper" },
                              }}
                            >
                              <Close sx={{ fontSize: 14, color: "error.main" }} />
                            </IconButton>
                          )}
                        </Box>
                      );
                    })}
                  </Box>
                </Collapse>
              )}

              {value.length > visibleLimit && (
                <Button
                  variant="text"
                  onClick={() => setIsExpanded(!isExpanded)}
                  disableRipple
                  sx={{
                    alignSelf: "flex-start",
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "13px",
                    color: "primary.main",
                    p: 0.5,
                    px: 1,
                    minWidth: 0,
                    "&:hover": { bgcolor: "action.hover", borderRadius: "6px" },
                  }}
                >
                  {isExpanded ? "View Less" : `View All (+${value.length - visibleLimit})`}
                </Button>
              )}
            </>
          ) : (
            <>
              {value.slice(0, visibleLimit).map(renderFileItem)}

              {value.length > visibleLimit && (
                <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    {value.slice(visibleLimit).map((file, sliceIndex) => renderFileItem(file, sliceIndex + visibleLimit))}
                  </Box>
                </Collapse>
              )}

              {value.length > visibleLimit && (
                <Button
                  variant="text"
                  onClick={() => setIsExpanded(!isExpanded)}
                  disableRipple
                  sx={{
                    alignSelf: "flex-start",
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "13px",
                    color: "primary.main",
                    p: 0.5,
                    px: 1,
                    minWidth: 0,
                    "&:hover": { bgcolor: "action.hover", borderRadius: "6px" },
                  }}
                >
                  {isExpanded ? "View Less" : `View All (${value.length})`}
                </Button>
              )}
            </>
          )}
        </Box>
      )}

      <Dialog
        open={!!previewFile}
        onClose={() => setPreviewFile(null)}
        PaperProps={{
          sx: {
            borderRadius: "10px",
            overflow: "visible",
            position: "relative",
            bgcolor: "background.paper"
          },
        }}
      >
        <IconButton
          onClick={() => setPreviewFile(null)}
          size="small"
          sx={{
            position: "absolute",
            top: -16,
            right: -16,
            width: 36,
            height: 36,
            bgcolor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
            boxShadow: "0px 3px 8px rgba(0,0,0,0.15)",
            zIndex: 10,
            "&:hover": { bgcolor: "background.default" },
          }}
        >
          <Close sx={{ fontSize: 18, color: "text.secondary" }} />
        </IconButton>

        <DialogContent sx={{ p: 2 }}>
          {previewFile && (
            <Box sx={{ width: 400, height: 400, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img
                src={previewFile.src}
                alt={previewFile.file_name}
                style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
              />
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};
