"use client";
import { ExpandMore } from "@mui/icons-material";
import { Box, MenuItem, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TextField } from "../TextField";
import { IconSelect } from "./IconSelect";
import { SearchableSelect } from "./SearchableSelect";
import { DefaultSelectProps, SelectProps } from "./Select.types";

const OPTIONS: Record<number, { label: string; value: number; color: string }> =
  {
    1: { label: "Low", value: 1, color: "info.main" },
    2: { label: "Medium", value: 2, color: "warning.main" },
    3: { label: "High", value: 3, color: "error.main" },
  };

export const VortexUISelect = ({
  value,
  recordId,
  onUpdate,
  options = OPTIONS,
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
  dropdownHeight = 130,
}: DefaultSelectProps) => {
  const generatedId = React.useId();
  const selectId = id || generatedId;
  const labelId = `${selectId}-label`;

  const [current, setCurrent] = useState<any>(value || 2);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCurrent(value || 2);
  }, [value]);

  const handleChange = async (e: any) => {
    const value = e.target.value;
    if (value === current) return;

    setLoading(true);
    try {
      if (onUpdate && recordId !== undefined) {
        await onUpdate(recordId, value);
      }
      setCurrent(value);
    } catch (err) {
      console.error("Value update failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const selectedOption =
    (options as Record<any, any>)[current] ||
    Object.values(options)[0] ||
    OPTIONS[2];

  const selectNode = (
    <TextField
      select
      id={selectId}
      label={label}
      name={name}
      value={current ?? ""}
      onChange={handleChange}
      disabled={disabled || loading}
      error={error}
      helperText={helperText}
      fullWidth={fullWidth}
      size={size as any}
      bgColor={bgColor}
      SelectProps={{
        displayEmpty: true,
        IconComponent: ExpandMore,
        renderValue: (selected: any) => {
          const cfg = (options as Record<any, any>)[selected] || selectedOption;
          if (!cfg) {
            if (placeholder) {
              return (
                <Typography
                  component="span"
                  sx={{ fontSize: 13, color: "text.disabled" }}
                >
                  {placeholder}
                </Typography>
              );
            }
            return null;
          }
          return (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {loading ? (
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    border: 2,
                    borderStyle: "solid",
                    borderColor: cfg.color,
                    borderTopColor: "transparent",
                    animation: "spin 0.6s linear infinite",
                    flexShrink: 0,
                    "@keyframes spin": { to: { transform: "rotate(360deg)" } },
                  }}
                />
              ) : (
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor: cfg.color,
                    flexShrink: 0,
                  }}
                />
              )}
              <Typography
                component="span"
                sx={{
                  fontSize: 13,
                  fontWeight: 400,
                  color: "text.primary",
                  lineHeight: 1,
                }}
              >
                {cfg.label}
              </Typography>
            </Box>
          );
        },
        MenuProps: {
          PaperProps: {
            sx: {
              mt: 0.5,
              borderRadius: "8px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
              border: 1,
              borderColor: "divider",
              maxHeight: dropdownHeight,
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
    >
      {Object.entries(options).map(([key, opt]: [string, any]) => {
        const val = isNaN(Number(key)) ? key : Number(key);
        return (
          <MenuItem
            key={key}
            value={val}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.2,
              px: 1.8,
              py: 1,
              fontSize: 13,
              color: "text.primary",
              "&:hover": { bgcolor: "primary.lightHover" },
              "&.Mui-selected": {
                bgcolor: "background.default",
                fontWeight: 500,
              },
              "&.Mui-selected:hover": { bgcolor: "primary.lightHover" },
            }}
          >
            {opt.color && (
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: opt.color,
                  flexShrink: 0,
                }}
              />
            )}
            <Typography component="span" sx={{ fontSize: 13 }}>
              {opt.label}
            </Typography>
          </MenuItem>
        );
      })}
    </TextField>
  );

  return selectNode;
};

export const Select = (props: SelectProps) => {
  if (props.variant === "searchable") {
    const { variant, ...rest } = props;
    return <SearchableSelect {...rest} />;
  }
  if (props.variant === "icon") {
    const { variant, ...rest } = props;
    return <IconSelect {...rest} />;
  }
  return <VortexUISelect {...props} />;
};
