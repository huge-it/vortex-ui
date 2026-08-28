"use client";
import React, { useState, useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ProgressProps } from "./Progress.types";

interface ProgressBarContainerProps {
  bheight?: number;
  bgcolor?: string;
  bradius?: number | string;
}

const ProgressBarContainer = styled(Box)<ProgressBarContainerProps>(
  ({ theme, bheight, bgcolor, bradius }) => ({
    width: "100%",
    backgroundColor: bgcolor || "#EEF2FF",
    borderRadius: bradius || 10,
    overflow: "hidden",
    height: bheight || 8,
    position: "relative",
  }),
);

interface ProgressFillProps {
  fillcolor?: string;
  duration?: number;
  stepjump?: number;
}

const ProgressFill = styled(Box)<ProgressFillProps>(
  ({ fillcolor, duration, stepjump }) => ({
    height: "100%",
    backgroundColor: fillcolor || "#4772FF",
    transition:
      (stepjump || 0) > 0
        ? `background-color ${duration || 1}s ease`
        : `width ${duration || 1}s cubic-bezier(0.4, 0, 0.2, 1), background-color ${duration || 1}s ease`,
    borderRadius: "inherit",
    position: "relative",
  }),
);

export const Progress: React.FC<ProgressProps> = ({
  value = 0,
  showValue = false,
  valuePosition = "right",
  height = 8,
  borderRadius = 10,
  bgColor = "#EEF2FF",
  getColor,
  animationDuration = 1.2,
  variant = "default", // "default" | "stepper"
  steps = 5,
  stepJump = 0,
  ...props
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const targetRef = useRef(0);
  const intervalRef = useRef<any>(null);

  // Clear interval if config changes
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, [stepJump, animationDuration]);

  useEffect(() => {
    let finalTarget = Math.min(100, Math.max(0, value));
    if (stepJump > 0) {
      finalTarget = Math.floor(finalTarget / stepJump) * stepJump;
    }
    targetRef.current = finalTarget;

    if (stepJump > 0) {
      if (!intervalRef.current) {
        intervalRef.current = setInterval(
          () => {
            setCurrentValue((prev) => {
              const target = targetRef.current;
              if (prev < target) {
                const next =
                  Math.floor((prev + 0.01) / stepJump) * stepJump + stepJump;
                return Math.min(target, next);
              } else if (prev > target) {
                const next =
                  Math.ceil((prev - 0.01) / stepJump) * stepJump - stepJump;
                return Math.max(target, next);
              } else {
                if (intervalRef.current) {
                  clearInterval(intervalRef.current);
                  intervalRef.current = null;
                }
                return prev;
              }
            });
          },
          (animationDuration * 1000) / (100 / stepJump || 1),
        );
      }
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      const timer = setTimeout(() => {
        setCurrentValue(targetRef.current);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [value, stepJump, animationDuration]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const defaultGetColor = (val: number) => {
    if (val >= 90) return "#10B981"; // Success Green
    if (val >= 50) return "#4772FF"; // Primary Blue
    if (val >= 25) return "#F59E0B"; // Warning Orange
    return "#FF4750"; // Error Red
  };

  const colorValue =
    stepJump > 0
      ? Math.floor(currentValue / stepJump) * stepJump
      : currentValue;
  const fillColor = getColor
    ? getColor(colorValue)
    : defaultGetColor(colorValue);

  return (
    <Box
      sx={[
        {
          display: "flex",
          flexDirection: "column",
          gap: 0.8,
          width: "100%",
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    >
      {showValue && valuePosition === "top" && (
        <Typography
          variant="caption"
          sx={{
            alignSelf: "flex-end",
            fontWeight: 600,
            color: "#374151",
            fontSize: "12px",
          }}
        >
          {Math.round(currentValue)}%
        </Typography>
      )}
      <Box
        sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%" }}
      >
        {variant === "stepper" ? (
          <Box sx={{ display: "flex", gap: 1, width: "100%" }}>
            {Array.from({ length: steps }).map((_, i) => {
              const stepPercentage = 100 / steps;
              const stepStart = i * stepPercentage;
              const stepEnd = (i + 1) * stepPercentage;
              let fillPercent = 0;

              if (currentValue >= stepEnd) {
                fillPercent = 100;
              } else if (currentValue > stepStart) {
                fillPercent =
                  ((currentValue - stepStart) / stepPercentage) * 100;
              }

              return (
                <ProgressBarContainer
                  key={i}
                  bheight={height}
                  bgcolor={bgColor}
                  bradius={borderRadius}
                  sx={{ flex: 1 }}
                >
                  <ProgressFill
                    style={{ width: `${fillPercent}%` }}
                    fillcolor={fillColor}
                    duration={animationDuration}
                    stepjump={stepJump}
                  />
                </ProgressBarContainer>
              );
            })}
          </Box>
        ) : (
          <ProgressBarContainer
            bheight={height}
            bgcolor={bgColor}
            bradius={borderRadius}
          >
            <ProgressFill
              style={{ width: `${currentValue}%` }}
              fillcolor={fillColor}
              duration={animationDuration}
              stepjump={stepJump}
            >
              {showValue &&
                valuePosition === "inside" &&
                currentValue >= 15 && (
                  <Typography
                    variant="caption"
                    sx={{
                      position: "absolute",
                      right: 8,
                      top: "50%",
                      transform: "translateY(-50%)",
                      color:
                        currentValue >= 25 && currentValue < 50
                          ? "#374151"
                          : "#fff",
                      fontWeight: 700,
                      fontSize: "10px",
                    }}
                  >
                    {Math.round(currentValue)}%
                  </Typography>
                )}
            </ProgressFill>
            {showValue && valuePosition === "inside" && currentValue < 15 && (
              <Typography
                variant="caption"
                sx={{
                  position: "absolute",
                  left: `calc(${currentValue}% + 8px)`,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#374151",
                  fontWeight: 700,
                  fontSize: "10px",
                }}
              >
                {Math.round(currentValue)}%
              </Typography>
            )}
          </ProgressBarContainer>
        )}

        {showValue && valuePosition === "right" && (
          <Typography
            variant="caption"
            sx={{
              fontWeight: 600,
              minWidth: 35,
              color: "#374151",
              fontSize: "13px",
            }}
          >
            {Math.round(currentValue)}%
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Progress;
