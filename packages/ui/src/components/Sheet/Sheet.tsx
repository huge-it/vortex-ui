import React from "react";
import { Box } from "@mui/material";
import { SheetProps } from "./Sheet.types";

const SHADOWS = {
  none: "none",
  sm: "0px 2px 4px 0px rgba(0,0,0,0.075)",
  md: "0px 4px 8px 0px rgba(0,0,0,0.075)",
  lg: "0px 8px 12px 0px rgba(0,0,0,0.075)",
  xl: "0px 12px 16px 0px rgba(0,0,0,0.075)",
};

export const Sheet = ({
  variant = "none",
  fullHeight = false,
  children,
  sx,
  ...rest
}: SheetProps) => {
  const shadow = SHADOWS[variant] ?? SHADOWS.none;

  return (
    <Box
      sx={{
        bgcolor: "#FFFFFF",
        border: "1px solid #CDCDCD",
        borderRadius: "10px",
        boxShadow: shadow,
        ...(fullHeight && { flex: 1 }),
        // Default padding — override via sx prop
        p: 2,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};
