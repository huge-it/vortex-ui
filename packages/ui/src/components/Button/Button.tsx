import React from "react";
import {
  Button as MuiButton,
  CircularProgress,
  useTheme,
  buttonClasses,
  svgIconClasses,
  circularProgressClasses,
} from "@mui/material";
import { ButtonProps } from "./Button.types";

const SIZE_MAP = {
  lg: {
    height: 40,
    fontSize: 14,
    px: 2.5,
    borderRadius: "10px",
    iconSize: 20,
    gap: "8px",
  },
  md: {
    height: 36,
    fontSize: 13,
    px: 2,
    borderRadius: "9px",
    iconSize: 18,
    gap: "7px",
  },
  sm: {
    height: 32,
    fontSize: 12,
    px: 1.5,
    borderRadius: "8px",
    iconSize: 16,
    gap: "6px",
  },
};

const ICON_ONLY_SIZE_MAP = {
  lg: { box: 36, iconSize: 20, borderRadius: "10px" },
  md: { box: 32, iconSize: 18, borderRadius: "9px" },
  sm: { box: 28, iconSize: 16, borderRadius: "8px" },
};

function DefaultCircleIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: "block", flexShrink: 0 }}
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export const Button = ({
  size = "md",
  variant = "filled",
  severity = "primary",
  icon,
  iconPosition = "start",
  iconOnly = false,
  loading = false,
  loadingText,
  disabled,
  children,
  sx,
  ...rest
}: ButtonProps) => {
  const { height, fontSize, px, borderRadius, iconSize, gap } =
    SIZE_MAP[size] ?? SIZE_MAP.md;

  const theme = useTheme();
  const isDisabled = disabled || loading;

  // Use the theme palette for the given severity, fallback to primary
  const paletteColor =
    (theme.palette as any)[severity] || theme.palette.primary;

  const colors = {
    main: paletteColor.main,
    hover: paletteColor.hover || paletteColor.dark,
    light: paletteColor.disabledBackground || theme.palette.action.hover,
    lightHover: paletteColor.disabled || theme.palette.action.selected,
    disabledMain:
      paletteColor.disabled || theme.palette.action.disabledBackground,
    disabledLight: "transparent",
    disabledText: paletteColor.disabled || theme.palette.action.disabled,
    disabledBorder:
      paletteColor.disabledBackground ||
      theme.palette.action.disabledBackground,
  };

  // ---- variant color recipes ----
  const filledSx = {
    bgcolor: colors.main,
    color: "#fff",
    border: "none",
    "&:hover": { bgcolor: colors.hover },
    [`&.${buttonClasses.disabled}`]: {
      bgcolor: colors.disabledMain,
      color: "#ffffff",
    },
  };

  const outlinedSx = {
    bgcolor: colors.light,
    color: colors.main,
    border: `1.5px solid ${colors.main}`,
    "&:hover": {
      bgcolor: colors.lightHover,
      border: `1.5px solid ${colors.hover}`,
    },
    [`&.${buttonClasses.disabled}`]: {
      bgcolor: colors.disabledLight,
      color: colors.disabledText,
      border: `1.5px solid ${colors.disabledBorder}`,
    },
  };

  const ghostSx = {
    bgcolor: "transparent",
    color: colors.main,
    border: "none",
    boxShadow: "none",
    "&:hover": { bgcolor: colors.light, border: "none" },
    [`&.${buttonClasses.disabled}`]: { color: colors.disabledText },
  };

  const textSx = {
    bgcolor: "transparent",
    color: colors.main,
    border: "none",
    boxShadow: "none",
    "&:hover": {
      bgcolor: "transparent",
      color: colors.hover,
      textDecoration: "underline",
    },
    [`&.${buttonClasses.disabled}`]: { color: colors.disabledText },
  };

  const variantSxMap = {
    filled: filledSx,
    outlined: outlinedSx,
    ghost: ghostSx,
    text: textSx,
  };
  const variantSx = variantSxMap[variant] ?? filledSx;

  const spinnerColor =
    variant === "filled"
      ? "#fff"
      : isDisabled
        ? colors.disabledText
        : colors.main;

  // ============================================================
  // Icon-only mode — square button, no label
  // ============================================================
  if (iconOnly) {
    const {
      box,
      iconSize: ionSize,
      borderRadius: iconBorderRadius,
    } = ICON_ONLY_SIZE_MAP[size] ?? ICON_ONLY_SIZE_MAP.md;

    const iconOnlyVariantSx =
      variant === "text" ? { ...textSx, px: 0 } : variantSx;

    const spinner = (
      <CircularProgress
        size={ionSize - 2}
        thickness={5}
        sx={{ color: spinnerColor }}
      />
    );

    return (
      <MuiButton
        disableElevation
        disabled={isDisabled}
        sx={{
          minWidth: box,
          width: box,
          height: box,
          padding: 0,
          borderRadius: iconBorderRadius,
          [`& .${svgIconClasses.root}`]: { fontSize: ionSize },
          ...iconOnlyVariantSx,
          ...sx,
        }}
        {...rest}
      >
        {loading ? spinner : (icon ?? <DefaultCircleIcon size={ionSize} />)}
      </MuiButton>
    );
  }

  // ============================================================
  // Standard mode — text, with optional icon on either side
  // ============================================================
  const spinner = (
    <CircularProgress
      size={iconSize - 2}
      thickness={5}
      sx={{ color: spinnerColor }}
    />
  );

  const content = loading ? (
    loadingText ? (
      <span style={{ textTransform: "capitalize" }}>{loadingText}</span>
    ) : (
      children
    )
  ) : (
    children
  );

  const activeIconPosition = icon ? iconPosition : loading ? "start" : null;

  const startIcon =
    activeIconPosition === "start" ? (loading ? spinner : icon) : null;
  const endIcon =
    activeIconPosition === "end" ? (loading ? spinner : icon) : null;

  return (
    <MuiButton
      variant={
        variant === "filled"
          ? "contained"
          : variant === "outlined"
            ? "outlined"
            : "text"
      }
      disableElevation
      disabled={isDisabled}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={{
        textTransform: "none",
        borderRadius,
        height,
        px: variant === "text" ? 0.5 : px,
        py: 0,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize,
        lineHeight: 1,
        minWidth: 90,
        fontWeight: 500,
        letterSpacing: 0,
        gap,

        [`& .${buttonClasses.startIcon}`]: {
          marginRight: 0,
          marginLeft: "-4px",
          [`& svg:not(.${circularProgressClasses.svg})`]: {
            fontSize: iconSize,
            width: iconSize,
            height: iconSize,
          },
        },
        [`& .${buttonClasses.endIcon}`]: {
          marginLeft: 0,
          marginRight: "-4px",
          [`& svg:not(.${circularProgressClasses.svg})`]: {
            fontSize: iconSize,
            width: iconSize,
            height: iconSize,
          },
        },

        ...(variant === "ghost" || variant === "text"
          ? { border: "none", "&:hover": { border: "none" } }
          : {}),

        ...variantSx,
        ...sx,
      }}
      {...rest}
    >
      {content}
    </MuiButton>
  );
};
