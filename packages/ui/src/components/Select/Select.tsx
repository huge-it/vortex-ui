"use client";
import React from "react";
import { Box, Typography, MenuItem } from "@mui/material";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { SelectProps, DefaultSelectProps } from "./Select.types";
import { SearchableSelect } from "./SearchableSelect";
import { IconSelect } from "./IconSelect";
import { ExpandMore } from "@mui/icons-material";
import { TextField } from "../TextField";

const OPTIONS: Record<number, { label: string; value: number; color: string }> =
  {
    1: { label: "Low", value: 1, color: "#4772FF" },
    2: { label: "Medium", value: 2, color: "#FF8447" },
    3: { label: "High", value: 3, color: "#FF4750" },
  };

const DROPDOWN_HEIGHT = 130;

export const DefaultSelect = ({
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
              {loading ? (
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    border: `2px solid ${cfg.color}`,
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
                  color: "#1F2937",
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
              color: "#374151",
              "&:hover": { bgcolor: "#F0F5FF" },
              "&.Mui-selected": { bgcolor: "#F9FAFB", fontWeight: 500 },
              "&.Mui-selected:hover": { bgcolor: "#F0F5FF" },
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor: opt.color,
                flexShrink: 0,
              }}
            />
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
  return <DefaultSelect {...props} />;
};
