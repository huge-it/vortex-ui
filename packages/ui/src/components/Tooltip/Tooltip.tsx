"use client";

import React from "react";
import MuiTooltip from "@mui/material/Tooltip";
import { TooltipProps } from "./Tooltip.types";

export const Tooltip: React.FC<TooltipProps> = ({
  title,
  children,
  placement = "top",
  bgColor = "#fff",
  textColor = "#1F2937",
  ...props
}) => {
  return (
    <MuiTooltip
      title={title}
      placement={placement}
      arrow
      componentsProps={{
        tooltip: {
          sx: {
            bgcolor: bgColor,
            fontSize: "12px",
            borderRadius: "6px",
            color: textColor,
            boxShadow:
              "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)", // Added subtle shadow for white tooltip
            "& .MuiTooltip-arrow": {
              color: bgColor,
            },
          },
        },
      }}
      {...props}
    >
      {children}
    </MuiTooltip>
  );
};
