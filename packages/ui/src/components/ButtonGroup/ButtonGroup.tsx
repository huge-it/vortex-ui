"use client";
import React, { useState, useRef, useLayoutEffect } from "react";
import {
  Box,
  Tooltip,
  Typography,
} from "@mui/material";
import { TextField } from "../TextField";
import { Select } from "../Select";
import { ButtonGroupProps, ButtonGroupMethod } from "./ButtonGroup.types";

// ─── Built-in SVG icons (color-aware fallback) ──────────────────────────────
const DefaultIcons: Record<string, (color: string) => React.ReactNode> = {
  video: (color: string) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  location: (color: string) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5z"
        fill={color}
      />
    </svg>
  ),
  phone: (color: string) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.56 21 3 13.44 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"
        fill={color}
      />
    </svg>
  ),
  whatsapp: (color: string) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={color}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.38 1.26 4.8L2.05 22l5.44-1.43a9.84 9.84 0 004.55 1.13c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.52 13.49c-.23.64-1.36 1.22-1.87 1.28-.48.06-1.08.08-1.74-.11-.4-.12-.91-.28-1.56-.55-2.73-1.18-4.5-3.94-4.64-4.12-.13-.18-1.1-1.47-1.1-2.8 0-1.33.7-1.98.95-2.25.23-.26.5-.33.67-.33.17 0 .33 0 .48.01.15.01.36-.06.56.43.2.49.69 1.68.75 1.8.06.12.1.26.02.41-.08.15-.12.25-.24.38-.12.13-.25.29-.36.39-.12.11-.24.22-.1.44.14.22.62.97 1.32 1.57.9.79 1.67 1.04 1.9 1.16.23.12.36.1.5-.06.13-.17.57-.67.72-.9.15-.23.3-.19.5-.11.2.08 1.26.59 1.48.7.22.11.36.17.41.26.05.09.05.53-.18 1.17z" />
    </svg>
  ),
  email: (color: string) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="22,6 12,13 2,6"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};
const ACTIVE_COLOR = "#4772FF";

const DynamicFields = ({
  method,
  values,
  onChange,
  disabled,
  bgColor,
}: {
  method: ButtonGroupMethod;
  values?: Record<string, string>;
  onChange: (fieldName: string, fieldVal: string) => void;
  disabled?: boolean;
  bgColor?: string;
}) => {
  if (!method) return null;

  const handlePhoneChange = (
    fieldName: string,
    rawValue: string,
    maxLength?: number,
  ) => {
    // Keep digits only
    let digitsOnly = rawValue.replace(/\D/g, "");
    if (maxLength) digitsOnly = digitsOnly.slice(0, maxLength);
    onChange(fieldName, digitsOnly);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 1.5,
        mt: 1.5,
        animation: "cmsIn 0.22s ease",
        "@keyframes cmsIn": {
          from: { opacity: 0, transform: "translateY(-4px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      }}
    >
      {method.fields.map((field) => (
        <Box key={field.name} sx={{ flex: "1 1 160px", minWidth: 140 }}>
          {field.type === "select" ? (
            <Select
              variant="icon"
              label={field.label}
              placeholder={field.label}
              value={values?.[field.name] || ""}
              onChange={(val) => onChange(field.name, String(val))}
              disabled={disabled}
              options={field.options || []}
              fullWidth
              size="small"
              bgColor={bgColor}
            />
          ) : field.type === "phone" ? (
            <TextField
              fullWidth
              size="small"
              label={field.label}
              value={values?.[field.name] || ""}
              onChange={(e) =>
                handlePhoneChange(field.name, e.target.value, field.maxLength)
              }
              onKeyDown={(e) => {
                // Allow control keys (backspace, delete, arrows, tab) but block letters/symbols
                const allowedKeys = [
                  "Backspace",
                  "Delete",
                  "ArrowLeft",
                  "ArrowRight",
                  "Tab",
                  "Home",
                  "End",
                ];
                if (allowedKeys.includes(e.key) || e.ctrlKey || e.metaKey)
                  return;
                if (!/^[0-9]$/.test(e.key)) {
                  e.preventDefault();
                }
              }}
              onPaste={(e) => {
                const pasted = e.clipboardData.getData("text");
                if (/\D/.test(pasted)) {
                  e.preventDefault();
                  handlePhoneChange(
                    field.name,
                    (values?.[field.name] || "") + pasted,
                    field.maxLength,
                  );
                }
              }}
              disabled={disabled}
              inputProps={{
                inputMode: "numeric",
                pattern: "[0-9]*",
                maxLength: field.maxLength || undefined,
              }}
              sx={{
                "& .VortexUIOutlinedInput-root": {
                  fontSize: 13,
                  bgcolor: bgColor || "#fff",
                  borderRadius: "8px",
                  "& fieldset": { borderColor: "#E5E7EB" },
                  "&.Mui-focused fieldset": { borderColor: ACTIVE_COLOR },
                },
              }}
            />
          ) : (
            <TextField
              fullWidth
              size="small"
              label={field.label}
              value={values?.[field.name] || ""}
              onChange={(e) => onChange(field.name, e.target.value)}
              disabled={disabled}
              sx={{
                "& .VortexUIOutlinedInput-root": {
                  fontSize: 13,
                  bgcolor: bgColor || "#fff",
                  borderRadius: "8px",
                  "& fieldset": { borderColor: "#E5E7EB" },
                  "&.Mui-focused fieldset": { borderColor: ACTIVE_COLOR },
                },
              }}
            />
          )}
        </Box>
      ))}
    </Box>
  );
};

const SIZE_HEIGHTS: Record<string, number> = {
  sm: 32,
  md: 36,
  lg: 40,
};

export const ButtonGroup = ({
  value,
  onChange,
  disabled = false,
  bgColor = "#FFFFFF",
  variant = "icon",
  size = "lg",
  buttonHeight: buttonHeightProp,
  buttonWidth: buttonWidthProp,
  methods: methodsProp,
  fullWidth = false,
}: ButtonGroupProps) => {
  const methods = methodsProp || [];
  const showIcon = variant === "icon" || variant === "both";
  const showText = variant === "text" || variant === "both";
  const buttonWidth = buttonWidthProp ?? undefined;
  const buttonHeight = buttonHeightProp ?? SIZE_HEIGHTS[size] ?? 40;

  const activeKey = value?.type || null;
  const activeIdx = methods.findIndex((m) => m.key === activeKey);
  const activeMethod = activeIdx !== -1 ? methods[activeIdx] : null;

  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const buttonRefs = useRef<Array<HTMLElement | null>>([]);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    if (activeIdx !== -1 && buttonRefs.current[activeIdx]) {
      const el = buttonRefs.current[activeIdx];
      if (el) {
        setPillStyle({ left: el.offsetLeft, width: el.offsetWidth });
      }
    }
  }, [activeIdx, buttonWidth, variant]);

  const handleSelect = (key: string) => {
    if (disabled) return;
    if (onChange) {
      onChange(
        activeKey === key
          ? { type: null, fields: {} }
          : { type: key, fields: {} },
      );
    }
  };

  const handleFieldChange = (fieldName: string, fieldVal: string) => {
    if (onChange) {
      onChange({
        type: activeKey,
        fields: { ...(value?.fields || {}), [fieldName]: fieldVal },
      });
    }
  };

  const resolveIcon = (m: ButtonGroupMethod, color: string) => {
    if (!showIcon) return null;
    if (m.icon) return typeof m.icon === "function" ? m.icon(color) : m.icon;
    if (DefaultIcons[m.key]) return DefaultIcons[m.key](color);
    return null;
  };

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          display: "inline-flex",
          height: buttonHeight,
          borderRadius: "10px",
          bgcolor: "#F3F4F6", // Segmented control background
          p: "4px", // Inner padding
          width: fullWidth
            ? "100%"
            : buttonWidth
              ? methods.length * buttonWidth + (methods.length - 1) + 8
              : "max-content",
          userSelect: "none",
        }}
      >
        {/* Sliding active pill */}
        {activeMethod && pillStyle.width > 0 && (
          <Box
            sx={{
              position: "absolute",
              top: "4px",
              height: "calc(100% - 8px)",
              left: pillStyle.left,
              width: pillStyle.width,
              bgcolor: ACTIVE_COLOR,
              borderRadius: "6px",
              boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)",
              zIndex: 0,
              pointerEvents: "none",
              transition:
                "left 0.28s cubic-bezier(0.4,0,0.2,1), width 0.28s cubic-bezier(0.4,0,0.2,1)",
            }}
          />
        )}

        {methods.map((m, i: number) => {
          const isActive = activeKey === m.key;
          const isHovered = hoveredIdx === i;
          const iconColor = isActive
            ? "#fff"
            : isHovered
              ? ACTIVE_COLOR
              : "#9CA3AF";
          const textColor = isActive
            ? "#fff"
            : isHovered
              ? ACTIVE_COLOR
              : "#6B7280";
          const iconNode = resolveIcon(m, iconColor);

          const button = (
            <Box
              ref={(el: HTMLElement | null) => {
                buttonRefs.current[i] = el;
              }}
              key={m.key}
              onClick={() => handleSelect(m.key)}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              sx={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: showIcon && showText ? "8px" : 0,
                flex: fullWidth ? 1 : undefined,
                width: fullWidth ? "auto" : (buttonWidth || "auto"),
                minWidth: buttonWidth ? undefined : (variant === "icon" ? 48 : 80),
                px: showText ? 3 : 2,
                height: "100%",
                borderRadius: "6px",
                cursor: disabled ? "not-allowed" : "pointer",
                opacity: disabled ? 0.5 : 1,
                bgcolor:
                  !isActive && isHovered ? "rgba(0,0,0,0.04)" : "transparent",
                transition: "background-color 0.15s ease",
                whiteSpace: "nowrap",
              }}
            >
              {/* Icon */}
              {iconNode && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "transform 0.15s ease",
                    transform: isActive ? "scale(1.08)" : "scale(1)",
                  }}
                >
                  {iconNode}
                </Box>
              )}

              {/* Label */}
              {showText && (
                <Typography
                  component="span"
                  sx={{
                    fontSize: 13,
                    fontWeight: isActive ? 500 : 400,
                    color: textColor,
                    lineHeight: 1,
                    transition: "color 0.15s ease",
                  }}
                >
                  {m.label}
                </Typography>
              )}
            </Box>
          );

          // Tooltip only needed in icon-only mode (label already visible otherwise)
          return variant === "icon" ? (
            <Tooltip key={m.key} title={m.label} placement="top" arrow>
              {button}
            </Tooltip>
          ) : (
            button
          );
        })}
      </Box>

      {activeMethod && (
        <DynamicFields
          method={activeMethod}
          values={value?.fields}
          onChange={handleFieldChange}
          disabled={disabled}
          bgColor={bgColor}
        />
      )}
    </Box>
  );
};

export default ButtonGroup;
