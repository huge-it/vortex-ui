"use client";

import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { PipelineStepperProps } from "./PipelineStepper.types";

export const PipelineStepper = ({
  stages,
  value,
  onChange,
  width = "100%",
  height = 38,
}: PipelineStepperProps) => {
  const ARROW = 12;
  const theme = useTheme();

  if (!stages || stages.length === 0) return null;

  const activeIndex = stages.findIndex((s) => s.value === value);

  return (
    <Box sx={{ display: "flex", alignItems: "center", width }}>
      {stages.map((s, i) => {
        const isFirst = i === 0;
        const isDone = activeIndex !== -1 && i < activeIndex;
        const isActive = activeIndex !== -1 ? i === activeIndex : false;

        let bgColor;
        let textColor;

        if (isDone || isActive) {
          bgColor = theme.palette.primary.main;
          textColor = theme.palette.primary.contrastText;
        } else {
          bgColor = theme.palette.mode === "dark" ? theme.palette.grey[800] : "#EFEFEF";
          textColor = theme.palette.mode === "dark" ? theme.palette.grey[400] : "#6B7280";
        }

        const clipPath = isFirst
          ? `polygon(0% 0%, calc(100% - ${ARROW}px) 0%, 100% 50%, calc(100% - ${ARROW}px) 100%, 0% 100%)`
          : `polygon(0% 0%, calc(100% - ${ARROW}px) 0%, 100% 50%, calc(100% - ${ARROW}px) 100%, 0% 100%, ${ARROW}px 50%)`;

        return (
          <Box
            key={s.value}
            onClick={() => onChange?.(s.value)}
            sx={{
              position: "relative",
              flex: 1,
              height,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: bgColor,
              color: textColor,
              cursor: onChange ? "pointer" : "default",
              clipPath,
              borderRadius: isFirst ? "8px 0 0 8px" : 0,
              transition: "filter 0.18s",
              pl: isFirst ? 1 : ARROW / 12 + 2,
              pr: 2.5,
              "&:hover": onChange ? { filter: "brightness(0.93)" } : {},
            }}
          >
            {isDone ? (
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <polyline
                    points="2,6 5,9 10,3"
                    stroke={textColor}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <Typography
                  sx={{
                    fontSize: 13,
                    fontWeight: 400,
                    whiteSpace: "nowrap",
                    userSelect: "none",
                    color: textColor,
                  }}
                >
                  {s.label}
                </Typography>
              </Box>
            ) : (
              <Typography
                sx={{
                  fontSize: 13,
                  fontWeight: isActive ? 600 : 400,
                  whiteSpace: "nowrap",
                  userSelect: "none",
                  color: textColor,
                }}
              >
                {s.label}
              </Typography>
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default PipelineStepper;
