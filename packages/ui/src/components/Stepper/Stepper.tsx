"use client";

import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { StepperProps } from "./Stepper.types";

const sizeMap = {
  sm: { bubble: 26, font: 11, labelFont: 12, connector: 2 },
  md: { bubble: 32, font: 13, labelFont: 13, connector: 2 },
  lg: { bubble: 40, font: 15, labelFont: 14, connector: 3 },
};

export const Stepper = ({
  steps = [],
  value = 0,
  onStepClick,
  variant = "horizontal",
  size = "md",
  color,
  showLabels = true,
  connectorStyle = "solid",
  allowJump = false,
}: StepperProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const effectiveVariant = isMobile ? "horizontal" : variant;

  const primaryColor = color || theme.palette.primary.main;

  const { bubble, font, labelFont, connector } = sizeMap[size] || sizeMap.md;

  const activeIndex = steps.findIndex((step, i) => {
    if (typeof step === "object" && step !== null && "value" in step) {
      return (step as any).value === value;
    }
    return i === value;
  });

  const getStepState = (index: number) => {
    if (index < activeIndex) return "completed";
    if (index === activeIndex) return "active";
    return "pending";
  };

  const bubbleStyles = (state: "completed" | "active" | "pending") => {
    const isDark = theme.palette.mode === "dark";
    return {
      completed: {
        bg: primaryColor,
        border: primaryColor,
        textColor: "#fff",
        cursor: onStepClick ? "pointer" : "default",
      },
      active: {
        bg: primaryColor,
        border: primaryColor,
        textColor: "#fff",
        cursor: "default",
      },
      pending: {
        bg: isDark ? theme.palette.background.paper : "#fff",
        border: isDark ? theme.palette.grey[700] : "#D1D5DB",
        textColor: isDark ? theme.palette.grey[500] : "#9CA3AF",
        cursor: allowJump && onStepClick ? "pointer" : "default",
      },
    }[state];
  };

  const connectorColor = (index: number) =>
    index < activeIndex
      ? primaryColor
      : theme.palette.mode === "dark"
      ? theme.palette.grey[800]
      : "#E5E7EB";

  // ── HORIZONTAL ──────────────────────────────────────────────────────────
  if (effectiveVariant === "horizontal") {
    return (
      <Box sx={{ width: "100%", display: "flex", alignItems: "flex-start" }}>
        {steps.map((stepItem, i) => {
          const label = typeof stepItem === "object" && stepItem !== null && "label" in stepItem ? (stepItem as any).label : stepItem;
          const description = typeof stepItem === "object" && stepItem !== null && "description" in stepItem ? (stepItem as any).description : null;
          const stepValue = typeof stepItem === "object" && stepItem !== null && "value" in stepItem ? (stepItem as any).value : i;
          const state = getStepState(i);
          const styles = bubbleStyles(state);
          const isLast = i === steps.length - 1;

          return (
            <Box
              key={i}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                flex: isLast ? "0 0 auto" : 1,
                minWidth: 0,
              }}
            >
              {/* Bubble + Label stacked */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: bubble,
                }}
              >
                {/* Bubble */}
                <Box
                  onClick={() => (allowJump || state !== "pending") && onStepClick?.(stepValue)}
                  sx={{
                    width: bubble,
                    height: bubble,
                    borderRadius: "50%",
                    border: `2px solid ${styles.border}`,
                    bgcolor: styles.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    cursor: styles.cursor,
                    transition: "all 0.2s ease",
                    "&:hover":
                      (state === "completed" || (allowJump && state === "pending")) && onStepClick
                        ? { opacity: 0.85 }
                        : {},
                  }}
                >
                  {state === "completed" ? (
                    <CheckIcon sx={{ fontSize: font + 2, color: "#fff" }} />
                  ) : (
                    <Typography
                      sx={{
                        fontSize: font,
                        fontWeight: state === "active" ? 700 : 500,
                        color: styles.textColor,
                        lineHeight: 1,
                        userSelect: "none",
                      }}
                    >
                      {i + 1}
                    </Typography>
                  )}
                </Box>

                {/* Label directly under bubble */}
                {showLabels && (
                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Typography
                      sx={{
                        mt: 0.75,
                        fontSize: isMobile ? 10 : labelFont,
                        fontWeight: state === "active" ? 600 : 400,
                        color:
                          state === "active"
                            ? primaryColor
                            : state === "completed"
                            ? theme.palette.text.primary
                            : theme.palette.text.secondary,
                        textAlign: "center",
                        whiteSpace: "nowrap",
                        lineHeight: 1.3,
                        userSelect: "none",
                        transition: "color 0.2s ease",
                      }}
                    >
                      {label as React.ReactNode}
                    </Typography>
                    {description && (
                      <Typography
                        sx={{
                          fontSize: (isMobile ? 10 : labelFont) - 1,
                          color: theme.palette.text.secondary,
                          textAlign: "center",
                          mt: 0.5,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {description as React.ReactNode}
                      </Typography>
                    )}
                  </Box>
                )}
              </Box>

              {/* Connector line (not after last step) */}
              {!isLast && (
                <Box
                  sx={{
                    flex: 1,
                    height: connector,
                    mt: `${bubble / 2 - connector / 2}px`,
                    bgcolor: connectorStyle === "dashed" ? "transparent" : connectorColor(i),
                    borderTop: connectorStyle === "dashed" ? `${connector}px dashed ${connectorColor(i)}` : "none",
                    transition: "background 0.3s ease, border-color 0.3s ease",
                  }}
                />
              )}
            </Box>
          );
        })}
      </Box>
    );
  }

  // ── VERTICAL ────────────────────────────────────────────────────────────
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {steps.map((stepItem, i) => {
        const label = typeof stepItem === "object" && stepItem !== null && "label" in stepItem ? (stepItem as any).label : stepItem;
        const description = typeof stepItem === "object" && stepItem !== null && "description" in stepItem ? (stepItem as any).description : null;
        const stepValue = typeof stepItem === "object" && stepItem !== null && "value" in stepItem ? (stepItem as any).value : i;
        const state = getStepState(i);
        const styles = bubbleStyles(state);
        const isLast = i === steps.length - 1;

        return (
          <Box key={i} sx={{ display: "flex", gap: 1.5 }}>
            {/* Left: bubble + vertical connector */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                onClick={() => (allowJump || state !== "pending") && onStepClick?.(stepValue)}
                sx={{
                  width: bubble,
                  height: bubble,
                  borderRadius: "50%",
                  border: `2px solid ${styles.border}`,
                  bgcolor: styles.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  cursor: styles.cursor,
                  transition: "all 0.2s ease",
                  "&:hover":
                    (state === "completed" || (allowJump && state === "pending")) && onStepClick
                      ? { opacity: 0.85 }
                      : {},
                }}
              >
                {state === "completed" ? (
                  <CheckIcon sx={{ fontSize: font + 2, color: "#fff" }} />
                ) : (
                  <Typography
                    sx={{
                      fontSize: font,
                      fontWeight: state === "active" ? 700 : 500,
                      color: styles.textColor,
                      lineHeight: 1,
                      userSelect: "none",
                    }}
                  >
                    {i + 1}
                  </Typography>
                )}
              </Box>

              {!isLast && (
                <Box
                  sx={{
                    width: connector,
                    flex: 1,
                    minHeight: 28,
                    bgcolor: connectorStyle === "dashed" ? "transparent" : connectorColor(i),
                    borderLeft: connectorStyle === "dashed" ? `${connector}px dashed ${connectorColor(i)}` : "none",
                    my: 0.5,
                    transition: "background 0.3s ease",
                  }}
                />
              )}
            </Box>

            {/* Right: label */}
            {showLabels && (
              <Box
                sx={{
                  pt: `${(bubble - labelFont * 1.4) / 2}px`,
                  pb: isLast ? 0 : 3,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    fontSize: labelFont,
                    fontWeight: state === "active" ? 600 : 400,
                    color:
                      state === "active"
                        ? primaryColor
                        : state === "completed"
                        ? theme.palette.text.primary
                        : theme.palette.text.secondary,
                    lineHeight: 1.4,
                    userSelect: "none",
                    transition: "color 0.2s ease",
                  }}
                >
                  {label as React.ReactNode}
                </Typography>
                {description && (
                  <Typography
                    sx={{
                      fontSize: labelFont - 1,
                      color: theme.palette.text.secondary,
                      mt: 0.25,
                    }}
                  >
                    {description as React.ReactNode}
                  </Typography>
                )}
              </Box>
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default Stepper;
