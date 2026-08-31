import { ReactNode } from "react";
import { SxProps, Theme } from "@mui/material";

export interface RadioOption {
  label: ReactNode;
  value: string;
  color?: string;
}

export interface RadioGroupProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  options?: (RadioOption | string)[];
  orientation?: "horizontal" | "vertical";
  variant?: "sm" | "md" | "lg";
  disabled?: boolean;
  color?: string;
  unselectedColor?: string;
  label?: string;
  sx?: SxProps<Theme>;
  children?: ReactNode;
}

export interface RadioProps {
  value: string;
  label?: ReactNode;
  disabled?: boolean;
  color?: string;
  unselectedColor?: string;
  variant?: "sm" | "md" | "lg";
  sx?: SxProps<Theme>;
}
