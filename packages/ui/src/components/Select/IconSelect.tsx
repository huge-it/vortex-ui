"use client";
import React, { useId } from "react";
import {
  Box,
  MenuItem,
  Typography,
  SelectChangeEvent,
} from "@mui/material";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { IconSelectProps } from "./Select.types";
import { TextField } from "../TextField";

export const IconSelect = ({
  value,
  onChange,
  options = [],
  disabled = false,
  label,
  placeholder,
  fullWidth = false,
  size = "small",
  bgColor = "#FFFFFF",
  error,
  helperText,
  name,
  id,
  sx,
  ...rest
}: IconSelectProps) => {
  const generatedId = useId();
  const selectId = id || generatedId;
  const labelId = `${selectId}-label`;

  const handleChange = (e: SelectChangeEvent<any>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const selectedOption = options.find((opt) => String(opt.value) === String(value));

  const selectNode = (
    <TextField
      select
      id={selectId}
      label={label}
      name={name}
      value={value ?? ""}
      onChange={handleChange as any}
      disabled={disabled}
      error={error}
      helperText={helperText}
      fullWidth={fullWidth}
      size={size as any}
      bgColor={bgColor}
      SelectProps={{
        displayEmpty: true,
        IconComponent: KeyboardArrowDown,
        renderValue: (selected) => {
          if (!selectedOption || selectedOption.value === "") {
            if (placeholder) {
              return (
                <Typography
                  component="span"
                  sx={{ fontSize: 13, color: "#9CA3AF" }}
                >
                  {placeholder}
                </Typography>
              );
            }
            return null;
          }
          return (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {(selectedOption.icon || selectedOption.img) && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 18,
                    height: 18,
                    flexShrink: 0,
                    borderRadius: selectedOption.img ? "50%" : 0,
                    overflow: selectedOption.img ? "hidden" : "visible",
                  }}
                >
                  {selectedOption.img ? (
                    <Box component="img" src={selectedOption.img} alt="" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  ) : (
                    selectedOption.icon
                  )}
                </Box>
              )}
              {selectedOption.label && (
                <Typography
                  component="span"
                  sx={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: "#1F2937",
                    lineHeight: 1,
                  }}
                >
                  {selectedOption.label}
                </Typography>
              )}
            </Box>
          );
        },
        MenuProps: {
          PaperProps: {
            sx: {
              mt: 0.5,
              borderRadius: "8px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
              border: "1px solid #E5E7EB",
              "& .MuiList-root": { py: 1 },
            },
          },
        },
      }}
      sx={{
        "& .MuiSelect-select": {
          display: "flex",
          alignItems: "center",
          py: 0,
          pl: 1.5,
          pr: 4,
          height: "100%",
          boxSizing: "border-box",
        },
        ...(!label ? sx : {}),
      }}
      {...rest}
    >
      {options.map((opt) => (
        <MenuItem
          key={opt.value}
          value={opt.value as any}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.2,
            px: 1.8,
            py: 1,
            fontSize: 13,
            color: "#374151",
            "&:hover": { bgcolor: "#F0F5FF" },
            "&.Mui-selected": { bgcolor: "#F9FAFB", fontWeight: 500 },
            "&.Mui-selected:hover": { bgcolor: "#F0F5FF" },
          }}
        >
          {(opt.icon || opt.img) && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: 18,
                height: 18,
                justifyContent: "center",
                flexShrink: 0,
                borderRadius: opt.img ? "50%" : 0,
                overflow: opt.img ? "hidden" : "visible",
              }}
            >
              {opt.img ? (
                <Box component="img" src={opt.img} alt="" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
              ) : (
                opt.icon
              )}
            </Box>
          )}
          {opt.label && (
            <Typography component="span" sx={{ fontSize: 13 }}>
              {opt.label}
            </Typography>
          )}
        </MenuItem>
      ))}
    </TextField>
  );

  return selectNode;
};
