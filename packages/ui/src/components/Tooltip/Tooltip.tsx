"use client";

import React from "react";
import Tooltip from "@mui/material/Tooltip";
import { TooltipProps } from "./Tooltip.types";

const VortexTooltip: React.FC<TooltipProps> = ({
  title,
  children,
  placement = "top",
  bgColor = "background.paper",
  textColor = "text.primary",
  ...props
}) => {
  return (
    <Tooltip
      title={title}
      placement={placement}
      arrow
      slotProps={{
        tooltip: {
          sx: {
            bgcolor: bgColor,
            fontSize: "12px",
            borderRadius: "6px",
            color: textColor,
            boxShadow:
              "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
          },
        },
      }}
      {...props}
    >
      {children}
    </Tooltip>
  );
};

export { VortexTooltip as Tooltip };
