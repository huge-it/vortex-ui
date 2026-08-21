import { SelectProps as MuiSelectProps } from '@mui/material';

export interface SelectOption {
  label: string;
  value: string | number;
}

export interface SelectProps extends Omit<MuiSelectProps, 'variant'> {
  /**
   * Label for the select field
   */
  label?: string;
  /**
   * Supporting descriptive text below the select field
   */
  helperText?: string;
  /**
   * Predefined options to render. Alternatively, pass MenuItem children directly.
   */
  options?: SelectOption[];
  /**
   * Display input in error state
   */
  error?: boolean;
}
