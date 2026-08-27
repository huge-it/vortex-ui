"use client";

import React from "react";
import { Box, Slider as MuiSlider, Typography } from "@mui/material";
import { SliderProps } from "./Slider.types";

const getSliderSx = (trackColor: string, railColor: string) => ({
  color: trackColor,
  height: 6,
  padding: "13px 0",

  "& .MuiSlider-rail": {
    backgroundColor: railColor,
    opacity: 1,
    height: 6,
    borderRadius: 3,
  },
  "& .MuiSlider-track": {
    backgroundColor: trackColor,
    border: "none",
    height: 6,
    borderRadius: 3,
  },
  "& .MuiSlider-thumb": {
    width: 18,
    height: 18,
    backgroundColor: trackColor,
    boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
    "&:hover, &.Mui-focusVisible": {
      boxShadow: `0 0 0 8px ${trackColor}22`,
    },
    "&.Mui-active": {
      boxShadow: `0 0 0 10px ${trackColor}33`,
    },
  },
  "& .MuiSlider-valueLabel": {
    backgroundColor: "#E8EDFF",
    color: "#1E2746",
    fontSize: 13,
    fontWeight: 400,
    borderRadius: "8px",
    padding: "5px 12px",
    "&::before": {
      backgroundColor: "#E8EDFF",
      width: 8,
      height: 8,
    },
  },
  "& .MuiSlider-mark": {
    display: "none",
  },
  "& .MuiSlider-markLabel": {
    fontSize: 13,
    color: "#1E2746",
    fontWeight: 400,
    top: 30,
    '&[data-index="0"]': {
      left: "0px !important",
      transform: "none",
    },
    '&[data-index="1"]': {
      right: "0px !important",
      left: "auto !important",
      transform: "none",
    },
  },
});

export const Slider = ({
  label,
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  trackColor = "#4772FF",
  railColor = "#E5EBFF",
  showMinMaxLabels = true,
  valueSuffix = "",
  sx = {},
}: SliderProps) => {
  const marks = showMinMaxLabels
    ? [
        { value: min, label: `${min}` },
        { value: max, label: `${max}` },
      ]
    : undefined;

  return (
    <Box sx={{ width: "100%", ...sx }}>
      {label && (
        <Typography
          variant="caption"
          fontSize={13}
          fontWeight={400}
          color="#374151"
          mb={1}
          display="block"
        >
          {label}
        </Typography>
      )}
      <Box sx={{ px: 0.5, pb: showMinMaxLabels ? 2.5 : 0, pt: 2.5 }}>
        <MuiSlider
          value={value}
          onChange={(e, newValue) => onChange(newValue as number)}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          marks={marks}
          valueLabelDisplay="auto"
          sx={getSliderSx(trackColor, railColor)}
        />
      </Box>

      {/* Current value displayed below */}
      <Typography
        fontSize={13}
        fontWeight={500}
        color="#4F6FFA"
        textAlign="center"
        mt={-6}
      >
        {value}
        {valueSuffix}
      </Typography>
    </Box>
  );
};

export default Slider;
