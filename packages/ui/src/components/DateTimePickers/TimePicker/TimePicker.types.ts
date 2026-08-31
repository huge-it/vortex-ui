import { SxProps, Theme } from "@mui/material";

export interface TimePickerProps {
  /** Label for the picker */
  label?: string;
  /** Current value */
  value?: string;
  /** Callback fired when a time is selected */
  onChange?: (value: string) => void;
  /** Background color for the input */
  bgColor?: string;
  /** Error message string or boolean flag */
  error?: string | boolean;
  /** Whether the field is disabled */
  disabled?: boolean;
  /** Format of the time ("12h" or "24h") */
  format?: "12h" | "24h";
  /** Whether the field takes up full width */
  fullWidth?: boolean;
  /** Additional styling */
  sx?: SxProps<Theme>;
}
