"use client";

import React from "react";
import { Box } from "@mui/material";
import { CountBadgeProps } from "./CountBadge.types";

export const CountBadge = ({
  count,
  maxCount = 9,
  active = false,
  activeBg = "#4772FF",
  activeColor = "#fff",
  inactiveBg = "#D6DEEA",
  inactiveColor = "#313952",
  fontSize = 11,
  fontWeight = 500,
  size = 17,
  sx = {},
}: CountBadgeProps) => {
  if (count == null) return null;

  const displayCount =
    typeof count === "number" && maxCount != null && count > maxCount
      ? `${maxCount}+`
      : count;

  return (
    <Box
      sx={{
        bgcolor: active ? activeBg : inactiveBg,
        color: active ? activeColor : inactiveColor,
        fontSize,
        fontWeight,
        borderRadius: "100%",
        minWidth: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: "6px",
        pt: 0.2,
        ...sx,
      }}
    >
      {displayCount}
    </Box>
  );
};

export default CountBadge;
