import { ReactNode } from "react";
import { SxProps, Theme } from "@mui/material";

export interface CheckboxOption {
  label: ReactNode;
  value: string;
  color?: string;
}

export interface CheckboxGroupProps {
  value?: string[];
  defaultValue?: string[];
  onChange?: (value: string[]) => void;
  options?: (CheckboxOption | string)[];
  orientation?: "horizontal" | "vertical";
  variant?: "sm" | "md" | "lg";
  disabled?: boolean;
  color?: string;
  borderColor?: string;
  label?: string;
  sx?: SxProps<Theme>;
  children?: ReactNode;
}

export interface CheckboxProps {
  value?: string;
  label?: ReactNode;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  color?: string;
  borderColor?: string;
  variant?: "sm" | "md" | "lg";
  sx?: SxProps<Theme>;
}
