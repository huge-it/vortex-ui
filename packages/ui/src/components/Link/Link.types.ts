import { ReactNode } from "react";
import { SxProps, Theme } from "@mui/material";

export interface LinkProps {
  href?: string;
  children?: ReactNode;
  variant?: "primary" | "secondary" | "neutral" | "success" | "danger";
  size?: "sm" | "md" | "lg";
  underline?: "none" | "hover" | "always";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  disabled?: boolean;
  sx?: SxProps<Theme>;
  [key: string]: any;
}
