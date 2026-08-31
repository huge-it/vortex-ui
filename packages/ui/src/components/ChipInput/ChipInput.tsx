"use client";
import React, { useState } from "react";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { TextField } from "../TextField";
import { ChipInputProps } from "./ChipInput.types";

// ─── Chip ─────────────────────────────────────────────────────────────────────
const Chip = ({
  label,
  onDelete,
  disabled,
}: {
  label: string;
  onDelete: () => void;
  disabled?: boolean;
}) => (
  <Box
    sx={(theme) => ({
      display: "inline-flex",
      alignItems: "center",
      gap: 0.5,
      bgcolor: alpha(theme.palette.primary.main, 0.1),
      border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
      color: theme.palette.text.primary,
      fontSize: "13px",
      fontWeight: 400,
      px: 1.2,
      py: 0.5,
      borderRadius: "10px",
      userSelect: "none",
    })}
  >
    {label}
    {!disabled && (
      <IconButton
        onClick={onDelete}
        size="small"
        sx={{
          p: "2px",
          ml: 0.3,
        }}
      >
        <svg
          width="8"
          height="8"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 1L1 13M1 1L13 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </IconButton>
    )}
  </Box>
);

export const ChipInput = ({
  label,
  chips = [],
  onChipsChange,
  bgColor,
  disabled = false,
  error = false,
  helperText,
  fullWidth = false,
  sx,
}: ChipInputProps) => {
  const [inputValue, setInputValue] = useState("");
  const [duplicateError, setDuplicateError] = useState(false);

  const handleAdd = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    const isDuplicate = chips.some(
      (c) => c.toLowerCase() === trimmed.toLowerCase(),
    );

    if (isDuplicate) {
      setDuplicateError(true);
      return;
    }

    onChipsChange?.([...chips, trimmed]);
    setInputValue("");
    setDuplicateError(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (duplicateError) setDuplicateError(false);
  };

  const handleDelete = (chip: string) => {
    onChipsChange?.(chips.filter((c) => c !== chip));
    if (duplicateError) setDuplicateError(false);
  };

  const showError = error || duplicateError;
  const displayHelperText = duplicateError
    ? "This entry already exists"
    : helperText;

  // Let TextField handle the error prop rendering if it's an error.
  // Otherwise we render the normal helperText manually below it if it's not an error.
  const passErrorToTextField = showError ? displayHelperText || true : false;

  return (
    <Box sx={{ width: fullWidth ? "100%" : undefined, ...sx }}>
      {/* ── Input ── */}
      <TextField
        fullWidth={fullWidth}
        label={label}
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        error={passErrorToTextField}
        bgColor={bgColor}
        inputProps={{ "aria-label": label }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleAdd}
                size="small"
                disabled={disabled || !inputValue.trim()}
                sx={{
                  mr: -0.5,
                  color: "#6B7280",
                  "&:hover": {
                    color: "#374151",
                    backgroundColor: "transparent",
                  },
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 5V19M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {/* ── Helper text (non-error) ── */}
      {displayHelperText && !showError && (
        <Typography
          sx={{
            fontSize: "11px",
            mt: 0.5,
            fontWeight: 500,
            mx: "1px",
            color: "text.secondary",
          }}
        >
          {displayHelperText}
        </Typography>
      )}

      {/* ── Chips ── */}
      {chips.length > 0 && (
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 1 }}>
          {chips.map((chip) => (
            <Chip
              key={chip}
              label={chip}
              onDelete={() => handleDelete(chip)}
              disabled={disabled}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};
