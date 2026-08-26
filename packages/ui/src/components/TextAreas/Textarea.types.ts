import React from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "default" | "expandable" | "minLength";
  label?: string;
  error?: boolean | string;
  bgColor?: string;
  fullWidth?: boolean;
  minRows?: number;
  inputProps?: any;
}
