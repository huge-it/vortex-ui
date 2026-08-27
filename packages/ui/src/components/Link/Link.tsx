import React from "react";
import NextLink from "next/link";
import { Link as MuiLink, Box } from "@mui/material";
import { LinkProps } from "./Link.types";

/**
 * Link Component
 * @param {string} href - Link destination.
 * @param {ReactNode} children - Link text.
 * @param {string} variant - "primary" | "secondary" | "neutral" | "success" | "danger"
 * @param {string} size - "sm" | "md" | "lg"
 * @param {string} underline - "none" | "hover" | "always"
 * @param {ReactNode} startIcon - Icon component to display before text.
 * @param {ReactNode} endIcon - Icon component to display after text.
 * @param {boolean} disabled - Disables the link.
 */
export const Link = ({
  href = "#",
  children,
  variant = "primary",
  size = "md",
  underline = "hover",
  startIcon,
  endIcon,
  disabled = false,
  sx = {},
  ...props
}: LinkProps) => {
  const getThemeColors = () => {
    switch (variant) {
      case "secondary":
        return { color: "#6B7280", hover: "#374151" };
      case "neutral":
        return { color: "#111827", hover: "#4772FF" };
      case "success":
        return { color: "#10B981", hover: "#059669" };
      case "danger":
        return { color: "#EF4444", hover: "#DC2626" };
      case "primary":
      default:
        return { color: "#4772FF", hover: "#2F58E6" };
    }
  };

  const getFontSize = () => {
    switch (size) {
      case "sm": return "12px";
      case "lg": return "16px";
      case "md":
      default: return "14px";
    }
  };

  const colors = getThemeColors();

  return (
    <MuiLink
      component={NextLink}
      href={disabled ? "#" : href}
      underline={underline}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 0.8,
        color: disabled ? "#9CA3AF" : colors.color,
        fontSize: getFontSize(),
        fontWeight: 500,
        transition: "color 0.2s ease",
        pointerEvents: disabled ? "none" : "auto",
        cursor: disabled ? "default" : "pointer",
        "&:hover": {
          color: disabled ? "#9CA3AF" : colors.hover,
        },
        ...sx,
      }}
      {...props}
    >
      {startIcon && (
        <Box component="span" sx={{ display: "flex", alignItems: "center", "& svg": { fontSize: "1.2em" } }}>
          {startIcon}
        </Box>
      )}
      {children}
      {endIcon && (
        <Box component="span" sx={{ display: "flex", alignItems: "center", "& svg": { fontSize: "1.2em" } }}>
          {endIcon}
        </Box>
      )}
    </MuiLink>
  );
};
