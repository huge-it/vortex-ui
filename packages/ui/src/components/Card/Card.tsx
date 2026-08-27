import React from "react";
import { Card as MuiCard } from "@mui/material";
import { CardProps } from "./Card.types";

const SHADOWS = {
  none: "none",
  sm: "0px 2px 4px 0px rgba(0,0,0,0.075)",
  md: "0px 4px 8px 0px rgba(0,0,0,0.075)",
  lg: "0px 8px 12px 0px rgba(0,0,0,0.075)",
  xl: "0px 12px 16px 0px rgba(0,0,0,0.075)",
};

export const Card = ({
  variant = "none",
  fullWidth = true,
  children,
  sx,
  ...rest
}: CardProps) => {
  const shadow = SHADOWS[variant] ?? SHADOWS.none;

  return (
    <MuiCard
      elevation={0}
      sx={{
        ...(fullWidth && { width: "100%" }),
        bgcolor: "#FFFFFF",
        border: "1px solid #CDCDCD",
        borderRadius: "10px",
        boxShadow: shadow,
        p: 2,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </MuiCard>
  );
};
