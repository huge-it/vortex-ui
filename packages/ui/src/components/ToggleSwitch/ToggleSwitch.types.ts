import { TypographyProps } from "@mui/material";
import { ReactNode } from "react";

export interface ToggleSwitchProps {
  label?: ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  variant?: "sm" | "md" | "lg";
  color?: string;
  unselectedColor?: string;
  labelProps?: TypographyProps;
}
