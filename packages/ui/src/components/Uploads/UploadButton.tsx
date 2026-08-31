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
import { Close, VisibilityOutlined, DeleteOutline } from "@mui/icons-material";
import { UploadButtonProps, FileItem } from "./Uploads.types";
import {
  getAcceptedTypes,
  getAllowedLabel,
  isImageType,
  resolveFileSrc,
  toBase64WithProgress,
  getFileIcon,
} from "./Uploads.utils";

export const UploadButton: React.FC<UploadButtonProps> = ({
  value = [],
  onChange,
  disabled = false,
  multiple = true,
  maxFiles,
  maxSizeMB = 10,
  label = "Upload File",
  error,
  fileTypes = "all",
  imgPreview = false,
  visibleLimit = 6,
  imgEndpoint = "http://192.168.0.109:8001/",
  className,
  sx,
  onUploadStart,
  onUploadError,
  onUploadSuccess,
  variant,
  color,
  startIcon,
}) => {
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
          px: 1.5,
          py: 1,
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
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, overflow: "hidden", flex: 1 }}>
          <Box sx={{ width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            {getFileIcon(file.file_name, { fontSize: 22 })}
          </Box>

          {isUploading ? (
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography
                sx={{
                  fontSize: "13px",
                  color: "text.primary",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  mb: 0.5,
                }}
                title={file.file_name}
              >
                {file.file_name}
              </Typography>
              <Box sx={{ height: "4px", bgcolor: "action.hover", borderRadius: "99px", overflow: "hidden" }}>
                <Box
                  sx={{
                    height: "100%",
                    width: `${progress ?? 0}%`,
                    bgcolor: "primary.main",
                    borderRadius: "99px",
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
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                maxWidth: "220px",
                fontWeight: 400,
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
          <Box sx={{ display: "flex", gap: 0.75, flexShrink: 0 }}>
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
      <Button
        variant={variant || (disabled ? "contained" : "contained")}
        color={color || "primary"}
        onClick={() => !disabled && inputRef.current?.click()}
        disabled={disabled}
        startIcon={startIcon || (
          <svg
            width="16"
            height="16"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 13V4M6 8l4-4 4 4" />
            <path d="M3 14v1a2 2 0 002 2h10a2 2 0 002-2v-1" />
          </svg>
        )}
        sx={{
          textTransform: "none",
          fontWeight: 500,
          borderRadius: "8px",
          height: "40px",
          px: 2.25,
        }}
      >
        {label}
      </Button>

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
                        cursor: "pointer"
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
                            cursor: "pointer"
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
                  onClick={() => setIsExpanded(!isExpanded)}
                  disableRipple
                  sx={{
                    alignSelf: "flex-start",
                    textTransform: "none",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "primary.main",
                    mt: 0.5,
                    p: 0,
                    minWidth: "auto",
                    "&:hover": { bgcolor: "transparent", textDecoration: "underline" },
                  }}
                >
                  {isExpanded ? "Show Less" : `View All (+${value.length - visibleLimit})`}
                </Button>
              )}
            </>
          ) : (
            <>
              {value.slice(0, visibleLimit).map((file, index) => renderFileItem(file, index))}
              
              {value.length > visibleLimit && (
                <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    {value.slice(visibleLimit).map((file, sliceIndex) => renderFileItem(file, sliceIndex + visibleLimit))}
                  </Box>
                </Collapse>
              )}

              {value.length > visibleLimit && (
                <Button
                  onClick={() => setIsExpanded(!isExpanded)}
                  disableRipple
                  sx={{
                    alignSelf: "flex-start",
                    textTransform: "none",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "primary.main",
                    mt: 0.5,
                    p: 0,
                    minWidth: "auto",
                    "&:hover": { bgcolor: "transparent", textDecoration: "underline" },
                  }}
                >
                  {isExpanded ? "Show Less" : `View All (${value.length - visibleLimit} more)`}
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
