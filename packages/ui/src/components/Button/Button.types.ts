import { ButtonProps as MuiButtonProps } from '@mui/material';

export interface ButtonProps extends Omit<MuiButtonProps, 'variant' | 'color'> {
  /**
   * The design variant of the button.
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'outlined' | 'text' | 'danger';
  /**
   * The size of the button.
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * If true, displays a loading spinner and disables the button.
   * @default false
   */
  loading?: boolean;
  /**
   * The element component or string tag to render (e.g. 'a', Link).
   */
  component?: React.ElementType;
  /**
   * URL for link buttons.
   */
  href?: string;
  /**
   * Target attribute for link buttons (e.g. '_blank').
   */
  target?: string;
  /**
   * Button content
   */
  children?: React.ReactNode;
}
