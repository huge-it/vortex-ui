import { SxProps, Theme } from "@mui/material/styles";

export interface ChipInputProps {
  label?: string;
  chips?: string[];
  onChipsChange?: (chips: string[]) => void;
  bgColor?: string;
  disabled?: boolean;
  error?: boolean | string;
  helperText?: string;
  fullWidth?: boolean;
  sx?: SxProps<Theme>;
}
