import { SxProps, Theme } from "@mui/material";

export interface DatePickerProps {
  /** Label for the picker */
  label?: string;
  /** Current value in YYYY-MM-DD format (or matching format) */
  value?: string;
  /** Callback fired when a date is selected */
  onChange?: (value: string) => void;
  /** Minimum selectable date */
  minDate?: string;
  /** Maximum selectable date */
  maxDate?: string;
  /** Background color for the input */
  bgColor?: string;
  /** Error message string or boolean flag */
  error?: string | boolean;
  /** Whether the field is disabled */
  disabled?: boolean;
  /** Format of the displayed date (default DD/MM/YYYY) */
  format?: string;
  /** Whether the field takes up full width */
  fullWidth?: boolean;
  /** Additional styling */
  sx?: SxProps<Theme>;
}
