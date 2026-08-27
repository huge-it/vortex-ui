import { BoxProps as MuiBoxProps } from "@mui/material";

export interface SheetProps extends Omit<MuiBoxProps, "variant"> {
  variant?: "none" | "sm" | "md" | "lg" | "xl";
  fullHeight?: boolean;
}
