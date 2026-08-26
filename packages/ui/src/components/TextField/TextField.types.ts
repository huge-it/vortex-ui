import { TextFieldProps as MuiTextFieldProps } from "@mui/material/TextField";

export interface TextFieldProps extends Omit<MuiTextFieldProps, "error"> {
  error?: boolean | string;
  bgColor?: string;
  showButton?: boolean;
}
