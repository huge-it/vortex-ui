import { CardProps as MuiCardProps } from "@mui/material";

export interface CardProps extends Omit<MuiCardProps, "variant"> {
  variant?: "none" | "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
}
