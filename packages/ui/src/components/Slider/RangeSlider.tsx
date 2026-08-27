"use client";

import React from "react";
import { Box, Slider as MuiSlider, Typography } from "@mui/material";
import { RangeSliderProps } from "./Slider.types";

const getRangeSliderSx = (trackColor: string, railColor: string) => ({
  color: trackColor,
  height: 6,
  padding: "13px 0",

  "& .MuiSlider-rail": {
    backgroundColor: railColor,
    opacity: 1,
    height: 6,
    borderRadius: 4,
  },
  "& .MuiSlider-track": {
    backgroundColor: trackColor,
    border: "none",
    height: 6,
    borderRadius: 4,
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

export const RangeSlider = ({
  label,
  value, // [min, max]
  onChange,
  min = 0,
  max = 100,
  step = 1,
  minDistance = 0,
  disabled = false,
  trackColor = "#4772FF",
  railColor = "#E5EBFF",
  showMinMaxLabels = true,
  showRangeText = true,
  sx = {},
}: RangeSliderProps) => {
  const marks = showMinMaxLabels
    ? [
        { value: min, label: `${min}` },
        { value: max, label: `${max}` },
      ]
    : undefined;

  const handleChange = (
    e: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) return;

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        // Moving the start thumb, cap it relative to the existing end thumb
        onChange([value[1] - minDistance, value[1]]);
      } else {
        // Moving the end thumb, cap it relative to the existing start thumb
        onChange([value[0], value[0] + minDistance]);
      }
    } else {
      onChange(newValue);
    }
  };

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
      <Box sx={{ px: 0.5, pb: showMinMaxLabels ? 3.5 : 0, pt: 2.5 }}>
        <MuiSlider
          value={value}
          onChange={handleChange}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          marks={marks}
          valueLabelDisplay="auto"
          disableSwap
          sx={getRangeSliderSx(trackColor, railColor)}
        />
        {showRangeText && (
          <Typography
            sx={{
              textAlign: "center",
              fontSize: 14,
              fontWeight: 500,
              color: "#4F6FFA",
              mt: showMinMaxLabels ? -4 : 1,
            }}
          >
            {value[0]} - {value[1]}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default RangeSlider;
