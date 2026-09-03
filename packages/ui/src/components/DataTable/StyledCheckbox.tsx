"use client";
import React, { memo, useMemo } from "react";
import {
  Checkbox as MuiCheckbox,
  Box,
  useTheme,
  SxProps,
  Theme,
} from "@mui/material";

const VARIANTS = {
  sm: { size: 18, tick: 8, borderRadius: "5px", iconSize: 10 },
  md: { size: 20, tick: 10, borderRadius: "6.25px", iconSize: 14 },
  lg: { size: 22, tick: 12, borderRadius: "7.5px", iconSize: 20 },
} as const;

// Static sx object — defined once outside component, never re-allocated
const BASE_SX: SxProps<Theme> = {
  p: 0,
  "&:hover": { backgroundColor: "transparent" },
};

// Tick path is static — extract as a constant to avoid re-parsing on every render
const TICK_PATH = "M1 3.5L4 6.5L10 1";

export interface StyledCheckboxProps {
  checked?: boolean;
  indeterminate?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  variant?: keyof typeof VARIANTS;
  borderColor?: string;
  checkedColor?: string;
  sx?: SxProps<Theme>;
}

export const StyledCheckbox = memo(
  ({
    borderColor,
    checkedColor,
    variant = "md",
    sx,
    ...props
  }: StyledCheckboxProps) => {
    const theme = useTheme();

    // Resolve colors — only recalculated when inputs change
    const activeBorderColor = borderColor || theme.palette.divider || "#D3D6E2";
    const activeCheckedColor =
      checkedColor || theme.palette.primary.main || "#4772FF";
    const contrastText = theme.palette.primary.contrastText || "#ffffff";
    const paperBg = theme.palette.background.paper;

    const v = VARIANTS[variant] ?? VARIANTS.md;

    // Memoize each icon — only rebuilds when the relevant color/size changes
    const uncheckedIcon = useMemo(
      () => (
        <Box
          sx={{
            width: v.size,
            height: v.size,
            borderRadius: v.borderRadius,
            border: 1,
            borderColor: activeBorderColor,
            backgroundColor: paperBg,
          }}
        />
      ),
      [v, activeBorderColor, paperBg],
    );

    const checkedIcon = useMemo(
      () => (
        <Box
          sx={{
            width: v.size,
            height: v.size,
            borderRadius: v.borderRadius,
            border: 1,
            borderColor: activeCheckedColor,
            backgroundColor: activeCheckedColor,
            color: contrastText,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width={v.tick}
            height={v.tick}
            viewBox="0 0 11 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={TICK_PATH}
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Box>
      ),
      [v, activeCheckedColor, contrastText],
    );

    const indeterminateIcon = useMemo(
      () => (
        <Box
          sx={{
            width: v.size,
            height: v.size,
            borderRadius: v.borderRadius,
            border: 1,
            borderColor: activeCheckedColor,
            backgroundColor: activeCheckedColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: v.iconSize,
              height: "1.8px",
              backgroundColor: contrastText,
              borderRadius: "2px",
            }}
          />
        </Box>
      ),
      [v, activeCheckedColor, contrastText],
    );

    // Merge sx only when a custom sx is provided
    const mergedSx = useMemo(
      () => (sx ? ([BASE_SX, sx] as SxProps<Theme>) : BASE_SX),
      [sx],
    );

    return (
      <MuiCheckbox
        size="small"
        {...props}
        icon={uncheckedIcon}
        checkedIcon={checkedIcon}
        indeterminateIcon={indeterminateIcon}
        sx={mergedSx}
      />
    );
  },
);

StyledCheckbox.displayName = "StyledCheckbox";

export default StyledCheckbox;
