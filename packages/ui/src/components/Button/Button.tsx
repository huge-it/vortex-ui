import React from 'react';
import { Button as MuiButton, CircularProgress } from '@mui/material';
import { ButtonProps } from './Button.types';

export const Button = React.forwardRef<any, ButtonProps>(
  ({ variant = 'primary', size = 'medium', loading = false, disabled, children, ...props }, ref) => {
    let muiVariant: 'contained' | 'outlined' | 'text' = 'contained';
    let muiColor: 'primary' | 'secondary' | 'error' | 'inherit' = 'primary';

    switch (variant) {
      case 'secondary':
        muiVariant = 'contained';
        muiColor = 'secondary';
        break;
      case 'danger':
        muiVariant = 'contained';
        muiColor = 'error';
        break;
      case 'outlined':
        muiVariant = 'outlined';
        muiColor = 'primary';
        break;
      case 'text':
        muiVariant = 'text';
        muiColor = 'primary';
        break;
      case 'primary':
      default:
        muiVariant = 'contained';
        muiColor = 'primary';
        break;
    }

    return (
      <MuiButton
        ref={ref}
        variant={muiVariant}
        color={muiColor}
        size={size}
        disabled={disabled || loading}
        startIcon={loading ? <CircularProgress size={16} color="inherit" /> : props.startIcon}
        {...props}
      >
        {children}
      </MuiButton>
    );
  }
);

Button.displayName = 'Button';
export type { ButtonProps };
