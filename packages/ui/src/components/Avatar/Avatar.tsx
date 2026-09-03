"use client";
import React, { useState, useRef } from "react";
import { Box, Popover, Stack, SxProps, Theme } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EditIcon from "@mui/icons-material/Edit";
import { TextField } from "../TextField";
import { Button } from "../Button";

export type AvatarVariant = "sm" | "md" | "lg";
export type AvatarType = "letter" | "image";

export interface AvatarProps {
  /** Mode of the avatar */
  type?: AvatarType;
  /** Size variant */
  variant?: AvatarVariant;
  /** Whether the avatar is editable */
  editable?: boolean;

  /** Name used for letter generation (letter mode) */
  name?: string;
  /** Callback when name is updated (letter mode) */
  onLetterChange?: (name: string) => void;

  /** Image source url (image mode) */
  src?: string;
  /** Image alt text (image mode) */
  alt?: string;
  /** Callback when image file is selected (image mode) */
  onImageChange?: (file: File, url: string) => void;

  /** Custom background color for letter mode and image fallback */
  bgcolor?: string;
  /** Custom text color for letter mode and image fallback */
  color?: string;
  /** Custom styles for the container */
  sx?: SxProps<Theme>;
  /** Custom children to render inside the avatar */
  children?: React.ReactNode;
  /** Callback fired when the avatar is clicked */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const VARIANTS = {
  sm: {
    size: 24,
    fontSize: "11px",
    fontWeight: 500,
    borderRadius: "6px",
    iconSize: 14,
  },
  md: {
    size: 32,
    fontSize: "14px",
    fontWeight: 500,
    borderRadius: "8px",
    iconSize: 18,
  },
  lg: {
    size: 56,
    fontSize: "24px",
    fontWeight: 400,
    borderRadius: "12px",
    iconSize: 24,
  },
};

export const Avatar = ({
  type = "letter",
  variant = "md",
  editable = false,
  name,
  onLetterChange,
  src,
  alt = "",
  onImageChange,
  bgcolor = "#E5E7F0",
  color = "#808697",
  sx = {},
  children,
  onClick,
}: AvatarProps) => {
  const { size, fontSize, fontWeight, borderRadius, iconSize } =
    VARIANTS[variant] ?? VARIANTS.md;

  const isImage = type === "image" || !!src;

  // ---- letter-mode state ----
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [draft, setDraft] = useState(name || "");
  const boxRef = useRef<HTMLDivElement>(null);
  const open = Boolean(anchorEl);

  const handleOpenPopover = () => {
    setDraft(name || "");
    setAnchorEl(boxRef.current);
  };
  const handleClosePopover = () => setAnchorEl(null);
  const handleSaveLetter = () => {
    const trimmed = draft.trim();
    if (trimmed && trimmed !== name) {
      onLetterChange?.(trimmed);
    }
    handleClosePopover();
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSaveLetter();
    if (e.key === "Escape") handleClosePopover();
  };

  // ---- image-mode state ----
  const [imgError, setImgError] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [hovered, setHovered] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const activeSrc = preview ?? src;
  const showFallback = !activeSrc || imgError;

  const handleOpenFilePicker = () => inputRef.current?.click();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreview(url);
    setImgError(false);
    onImageChange?.(file, url);

    e.target.value = ""; // allow re-selecting the same file
  };

  const handleEditClick = isImage ? handleOpenFilePicker : handleOpenPopover;

  return (
    <>
      <Box
        ref={boxRef}
        onClick={onClick}
        sx={{
          position: "relative",
          width: size,
          height: size,
          borderRadius,
          flexShrink: 0,
          "&:hover .avatar-overlay": editable && !isImage ? { opacity: 1 } : {},
          ...sx,
        }}
        onMouseEnter={() => isImage && editable && setHovered(true)}
        onMouseLeave={() => isImage && editable && setHovered(false)}
      >
        {/* Content */}
        {isImage ? (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "inherit",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: showFallback ? bgcolor : "transparent",
              color: showFallback ? color : "inherit",
            }}
          >
            {showFallback ? (
              children || (name ? name.charAt(0) : <PersonIcon sx={{ fontSize: size * 0.55 }} />)
            ) : (
              <Box
                component="img"
                src={activeSrc}
                alt={alt}
                onError={() => setImgError(true)}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            )}
          </Box>
        ) : (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "inherit",
              bgcolor,
              color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight,
              fontSize,
              textTransform: "uppercase",
              userSelect: "none",
              lineHeight: 1,
            }}
          >
            {children || name?.charAt(0) || <PersonIcon sx={{ fontSize: size * 0.55 }} />}
          </Box>
        )}

        {/* Edit overlay */}
        {editable && (
          <Box
            className="avatar-overlay"
            onClick={handleEditClick}
            sx={{
              position: "absolute",
              inset: 0,
              borderRadius: "inherit",
              bgcolor: "rgba(0, 0, 0, 0.45)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              opacity: isImage ? (hovered ? 1 : 0) : 0,
              transition: "opacity 0.18s ease",
            }}
          >
            <EditIcon sx={{ fontSize: iconSize, color: "#ffffff" }} />
          </Box>
        )}

        {/* Hidden file input (image mode only) */}
        {isImage && editable && (
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        )}
      </Box>

      {/* Rename popover (letter mode only) */}
      {!isImage && (
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClosePopover}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
        >
          <Stack spacing={1.5} sx={{ p: 2, width: 240 }}>
            <TextField
              autoFocus
              size="small"
              label="Name"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <Stack direction="row" spacing={1} justifyContent="flex-end">
              <Button size="sm" variant="outlined" onClick={handleClosePopover}>
                Cancel
              </Button>
              <Button size="sm" variant="filled" onClick={handleSaveLetter}>
                Save
              </Button>
            </Stack>
          </Stack>
        </Popover>
      )}
    </>
  );
};
