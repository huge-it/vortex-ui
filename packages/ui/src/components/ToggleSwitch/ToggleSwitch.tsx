"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { ToggleSwitchProps } from "./ToggleSwitch.types";

const TOGGLE_VARIANTS = {
  sm: {
    trackWidth: 32,
    trackHeight: 18,
    thumbSize: 14,
    padding: 2,
    fontSize: "13px",
  },
  md: {
    trackWidth: 35,
    trackHeight: 20,
    thumbSize: 16,
    padding: 2,
    fontSize: "13px",
  },
  lg: {
    trackWidth: 39,
    trackHeight: 22,
    thumbSize: 18,
    padding: 2,
    fontSize: "13px",
  },
};

export const ToggleSwitch = ({
  label = "",
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  variant = "md",
  color = "#4772FF",
  unselectedColor = "#C5C9D6",
  labelProps = {},
}: ToggleSwitchProps) => {
  const isControlled = checked !== undefined;
  const [internalChecked, setInternalChecked] = useState(
    isControlled ? checked : defaultChecked,
  );

  useEffect(() => {
    if (isControlled) {
      setInternalChecked(checked);
    }
  }, [isControlled, checked]);

  const isOn = isControlled ? checked : internalChecked;

  const { trackWidth, trackHeight, thumbSize, padding, fontSize } =
    TOGGLE_VARIANTS[variant] || TOGGLE_VARIANTS.md;

  const onOffsetX = trackWidth - thumbSize - padding;

  const handleToggle = () => {
    if (disabled) return;
    const nextState = !isOn;
    if (!isControlled) {
      setInternalChecked(nextState);
    }
    if (onChange) {
      onChange(nextState);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        userSelect: "none",
      }}
      onClick={handleToggle}
    >
      {/* Track */}
      <Box
        sx={{
          width: trackWidth,
          height: trackHeight,
          borderRadius: "999px",
          bgcolor: isOn ? color : unselectedColor,
          position: "relative",
          transition: "background-color 0.25s ease",
          flexShrink: 0,
        }}
      >
        {/* Thumb */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            transform: `translateY(-50%) translateX(${isOn ? onOffsetX : padding}px)`,
            width: thumbSize,
            height: thumbSize,
            borderRadius: "50%",
            bgcolor: "#FFFFFF",
            boxShadow: "0px 1px 3px rgba(0,0,0,0.25)",
            transition: "transform 0.25s ease",
          }}
        />
      </Box>

      {/* Label */}
      {label && (
        <Typography
          variant="body2"
          fontWeight={400}
          fontSize={fontSize}
          color="#1F2A40"
          {...labelProps}
        >
          {label}
        </Typography>
      )}
    </Box>
  );
};
