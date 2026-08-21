import { TextFieldProps } from '@mui/material';

export type InputProps = Omit<TextFieldProps, 'variant'> & {
  /**
   * The variant of the input field.
   * @default 'outlined'
   */
  variant?: 'outlined' | 'filled' | 'standard';
};
