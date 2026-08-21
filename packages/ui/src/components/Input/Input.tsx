import React from 'react';
import { TextField } from '@mui/material';
import { InputProps } from './Input.types';

export const Input = React.forwardRef<HTMLDivElement, InputProps>(
  ({ variant = 'outlined', fullWidth = true, ...props }, ref) => {
    return (
      <TextField
        ref={ref}
        variant={variant}
        fullWidth={fullWidth}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
export type { InputProps };
