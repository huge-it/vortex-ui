"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Snackbar as MuiSnackbar,
  Slide,
  Box,
  Stack,
  Typography,
  Paper,
  SnackbarOrigin,
  SlideProps,
  useTheme,
  alpha,
} from "@mui/material";
import { Button } from "../Button";
import { SnackbarProps, SnackbarPosition } from "./Snackbar.types";
import { CheckCircle, CheckCircleOutline } from "@mui/icons-material";

// ── Icons ──────────────────────────────────────────────────────────────────
const SuccessIcon = ({ color }: { color: string }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="9" stroke={color} strokeWidth="1.8" />
    <path
      d="M6 10.5l3 3 5-5"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ color }: { color: string }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="9" stroke={color} strokeWidth="1.8" />
    <circle cx="10" cy="6.5" r="1" fill={color} />
    <path
      d="M10 9.5v5"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const WarningIcon = ({ color }: { color: string }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M10 2.5L18 17H2L10 2.5Z"
      stroke={color}
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path d="M10 8v4" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="10" cy="14.5" r="1" fill={color} />
  </svg>
);

const ErrorIcon = ({ color }: { color: string }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="9" stroke={color} strokeWidth="1.8" />
    <path d="M10 6v5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="10" cy="14" r="1" fill={color} />
  </svg>
);

const CloseIcon = ({ color }: { color: string }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M2 2l10 10M12 2L2 12"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const POSITION_MAP: Record<SnackbarPosition, SnackbarOrigin> = {
  "top-right": { vertical: "top", horizontal: "right" },
  "top-left": { vertical: "top", horizontal: "left" },
  "top-center": { vertical: "top", horizontal: "center" },
  "bottom-right": { vertical: "bottom", horizontal: "right" },
  "bottom-left": { vertical: "bottom", horizontal: "left" },
  "bottom-center": { vertical: "bottom", horizontal: "center" },
};

const SLIDE_DIRECTION_MAP: Record<SnackbarPosition, SlideProps["direction"]> = {
  "top-right": "down",
  "top-left": "down",
  "top-center": "down",
  "bottom-right": "up",
  "bottom-left": "up",
  "bottom-center": "up",
};

export const Snackbar: React.FC<SnackbarProps> = ({
  open,
  onClose,
  severity = "success",
  message = "",
  title = "",
  variant = "filled",
  showUndo = false,
  onAction,
  autoHideDuration = 5000,
  position = "top-right",
  topOffset = 64,
  bottomOffset = 16,
  actionButtons = [],
  hideCloseIcon = false,
}) => {
  const theme = useTheme();

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const remainRef = useRef<number>(autoHideDuration || 0);
  const startRef = useRef<number | null>(null);

  const startTimer = () => {
    if (!autoHideDuration) return;
    startRef.current = Date.now();
    timerRef.current = setTimeout(() => onClose?.(), remainRef.current);
  };

  const pauseTimer = () => {
    if (!autoHideDuration) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    remainRef.current = Math.max(
      0,
      remainRef.current - (Date.now() - (startRef.current ?? Date.now())),
    );
  };

  useEffect(() => {
    if (open && autoHideDuration) {
      remainRef.current = autoHideDuration;
      startTimer();
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [open, autoHideDuration]);

  const handleMouseEnter = () => {
    pauseTimer();
  };
  const handleMouseLeave = () => {
    startTimer();
  };

  const paletteColor =
    (theme.palette as any)[severity] || theme.palette.success;
  const isLight = variant === "light";

  const colors = {
    bg: isLight ? alpha(paletteColor.main, 0.1) : paletteColor.main,
    text: isLight
      ? paletteColor.dark || paletteColor.main
      : paletteColor.contrastText || "#fff",
    icon: isLight ? paletteColor.main : paletteColor.contrastText || "#fff",
    border: isLight ? paletteColor.dark || paletteColor.main : "transparent",
    undoColor: isLight
      ? paletteColor.main
      : paletteColor.light || alpha(paletteColor.main, 0.5),
  };

  const Icon =
    severity === "info"
      ? InfoIcon
      : severity === "warning"
        ? WarningIcon
        : severity === "error"
          ? ErrorIcon
          : SuccessIcon;
  const hasTitle = Boolean(title);

  const anchorOrigin = POSITION_MAP[position] ?? POSITION_MAP["top-right"];
  const slideDirection = SLIDE_DIRECTION_MAP[position] ?? "down";

  const SlideTransition = useMemo(
    () =>
      function Transition(props: SlideProps) {
        return <Slide {...props} direction={slideDirection} />;
      },
    [slideDirection],
  );

  const positionSx = {
    ...(anchorOrigin.vertical === "top"
      ? { top: `${topOffset}px !important` }
      : { bottom: `${bottomOffset}px !important` }),
    ...(position.includes("left")
      ? { left: `calc(var(--sidebar-width, 228px) + 24px) !important` }
      : {}),
  };

  if (variant === "cookie") {
    return (
      <MuiSnackbar
        open={open}
        anchorOrigin={anchorOrigin}
        TransitionComponent={SlideTransition}
        sx={{
          "&.MuiSnackbar-root": positionSx,
          zIndex: 2000,
        }}
      >
        <Paper
          elevation={4}
          sx={{
            p: 2.5,
            maxWidth: 400,
            borderRadius: 3,
            border: `1px solid ${theme.palette.divider}`,
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Stack spacing={2.5}>
            <Stack direction="row" spacing={2} alignItems="flex-start">
              <Box sx={{ mt: 0.5, color: theme.palette.primary.main }}>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="10.5" cy="8.5" r="1.5"></circle>
                  <circle cx="8.5" cy="13.5" r="1.5"></circle>
                  <circle cx="15" cy="15" r="1"></circle>
                  <path d="M21.95 10.99c-1.79-.03-3.7-1.95-2.68-4.22-2.97 1-5.78-1.59-5.19-4.56C7.11.74 2 6.41 2 12c0 5.52 4.48 10 10 10 5.89 0 10.54-5.08 9.95-11.01M12 20c-4.41 0-8-3.59-8-8 0-3.31 2.73-8.18 8.08-8.02.42 2.54 2.44 4.56 4.99 4.94.07.36.52 2.55 2.92 3.63C19.7 16.86 16.06 20 12 20"></path>
                </svg>
              </Box>
              <Stack spacing={0.5}>
                <Typography variant="subtitle2" fontWeight={600} fontSize={16}>
                  {title || "Cookie preferences"}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  lineHeight={1.5}
                >
                  {message}
                </Typography>
              </Stack>
            </Stack>
            {actionButtons && actionButtons.length > 0 && (
              <Stack direction="row" spacing={1.5}>
                {actionButtons.map((btn, i) => (
                  <Button
                    key={i}
                    variant={
                      btn.variant === "contained" || btn.variant === "filled"
                        ? "contained"
                        : (btn.variant as any)
                    }
                    onClick={(e) => {
                      btn.onClick?.(e);
                      onClose?.();
                    }}
                    sx={
                      btn.variant === "contained" || btn.variant === "filled"
                        ? {
                            bgcolor: theme.palette.primary.main,
                            color: theme.palette.primary.contrastText || "#fff",
                            "&:hover": { bgcolor: theme.palette.primary.dark },
                          }
                        : { color: theme.palette.primary.main }
                    }
                  >
                    {btn.label}
                  </Button>
                ))}
              </Stack>
            )}
          </Stack>
        </Paper>
      </MuiSnackbar>
    );
  }

  return (
    <MuiSnackbar
      open={open}
      anchorOrigin={anchorOrigin}
      TransitionComponent={SlideTransition}
      sx={{
        "&.MuiSnackbar-root": positionSx,
        zIndex: 2000,
      }}
    >
      <Box
        role="alert"
        aria-live="assertive"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          display: "flex",
          alignItems: hasTitle ? "flex-start" : "center",
          gap: "10px",
          minWidth: 300,
          maxWidth: 460,
          padding: hasTitle ? "12px 14px" : "11px 14px",
          borderRadius: "10px",
          border: variant === "light" ? `1px solid ${colors.icon}` : "none",
          background: colors.bg,
          boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
          fontFamily: "Inter, system-ui, sans-serif",
          transition: "background 0.2s ease",
        }}
      >
        {/* Icon */}
        <span
          style={{ flexShrink: 0, lineHeight: 0, marginTop: hasTitle ? 2 : 0 }}
        >
          <Icon color={colors.icon} />
        </span>

        {/* Text area */}
        <span style={{ flex: 1 }}>
          {hasTitle && (
            <span
              style={{
                display: "block",
                fontSize: 14,
                fontWeight: 600,
                color: colors.text,
                lineHeight: 1.4,
                marginBottom: 2,
              }}
            >
              {title}
            </span>
          )}
          <span
            style={{
              display: "block",
              fontSize: hasTitle ? 13 : 14,
              fontWeight: 450,
              color: colors.text,
              lineHeight: 1.4,
              opacity: hasTitle ? 0.88 : 1,
            }}
          >
            {message}
          </span>
        </span>

        {/* Action Buttons */}
        {actionButtons && actionButtons.length > 0 && (
          <div
            style={{
              display: "flex",
              gap: "8px",
              marginLeft: "auto",
              flexShrink: 0,
            }}
          >
            {actionButtons.map((btn, i) => (
              <Button
                key={i}
                size="sm"
                variant={
                  btn.variant === "contained" || btn.variant === "filled"
                    ? "filled"
                    : (btn.variant as any)
                }
                onClick={(e: any) => {
                  btn.onClick?.(e);
                  onClose?.();
                }}
                sx={{
                  ...(btn.variant === "contained" || btn.variant === "filled"
                    ? {
                        bgcolor: colors.text,
                        color: colors.bg,
                        "&:hover": { bgcolor: colors.text, opacity: 0.9 },
                      }
                    : btn.variant === "outlined"
                      ? {
                          borderColor: colors.text,
                          color: colors.undoColor,
                          "&:hover": { borderColor: colors.text, opacity: 0.9 },
                        }
                      : { color: colors.undoColor }),
                  fontSize: 13,
                  fontWeight: 600,
                  borderRadius: "6px",
                  px: "12px",
                  py: "6px",
                  height: "auto",
                  minWidth: "auto",
                }}
              >
                {btn.label}
              </Button>
            ))}
          </div>
        )}

        {/* UNDO button */}
        {showUndo && (
          <button
            onClick={() => {
              onAction?.();
              onClose?.();
            }}
            style={{
              flexShrink: 0,
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.04em",
              color: colors.undoColor,
              padding: "0 6px",
              fontFamily: "inherit",
            }}
          >
            UNDO
          </button>
        )}

        {/* Close button */}
        {!hideCloseIcon && (
          <button
            onClick={onClose}
            aria-label="Close notification"
            style={{
              flexShrink: 0,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 2,
              lineHeight: 0,
              opacity: 0.75,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.75")}
          >
            <CloseIcon color={colors.text} />
          </button>
        )}
      </Box>
    </MuiSnackbar>
  );
};
