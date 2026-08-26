import { TextFieldProps as MuiTextFieldProps } from "@mui/material/TextField";
import { ReactNode } from "react";

export type NumberFieldProps = Omit<MuiTextFieldProps, "error" | "onChange" | "value"> & {
  error?: string | boolean;
  bgColor?: string;
  showButton?: boolean;
  allowDecimal?: boolean;
  allowNegative?: boolean;
  min?: number;
  max?: number;
  step?: number;
  decimalPlaces?: number;
  prefix?: ReactNode;
  unit?: ReactNode;
  value?: number | string;
  onChange?: (e: { target: { value: string } }) => void;
};
