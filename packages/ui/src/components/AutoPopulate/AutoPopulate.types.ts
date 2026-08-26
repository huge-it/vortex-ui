import React from "react";
import { TextFieldProps } from "../TextField";

export interface AutoPopulateProps extends Omit<TextFieldProps, "key" | "onChange" | "value" | "SelectProps"> {
  children?: React.ReactNode;
  value?: string;
  onChange?: (event: { target: { value: string } }) => void;
  bgColor?: string;
  label?: string;
}
