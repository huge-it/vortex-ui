import React from "react";
import { SearchableSelectProps } from "./SearchableSelect";

export interface OptionItem {
  label: string;
  color: string;
}

export interface IconSelectOption {
  value: string | number;
  label?: string;
  icon?: React.ReactNode;
  img?: string;
}

export interface IconSelectProps {
  value?: string | number | null;
  onChange?: (val: string | number) => void;
  options: IconSelectOption[];
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  fullWidth?: boolean;
  size?: "small" | "medium";
  bgColor?: string;
  error?: boolean | string;
  helperText?: React.ReactNode;
  name?: string;
  id?: string;
  sx?: any;
}

export interface DefaultSelectProps {
  value?: string | number;
  recordId?: string | number;
  onUpdate?: (
    recordId: string | number,
    value: string | number,
  ) => Promise<void> | void;
  options?: Record<number | string, OptionItem>;
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  fullWidth?: boolean;
  size?: "small" | "medium";
  bgColor?: string;
  error?: boolean | string;
  helperText?: React.ReactNode;
  name?: string;
  id?: string;
  sx?: any;
}

export type SelectProps =
  | (DefaultSelectProps & { variant?: "default" })
  | (Omit<SearchableSelectProps, "variant"> & { variant: "searchable" })
  | (IconSelectProps & { variant: "icon" });
