import React from 'react';
import { FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText } from '@mui/material';
import { SelectProps } from './Select.types';

export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  ({ label, helperText, options = [], error, fullWidth = true, children, ...props }, ref) => {
    // Generate a unique label ID for accessibility mapping
    const labelId = `vortexui-select-label-${React.useId()}`;

    return (
      <FormControl ref={ref} fullWidth={fullWidth} error={error} variant="outlined">
        {label && <InputLabel id={labelId}>{label}</InputLabel>}
        <MuiSelect
          labelId={labelId}
          label={label}
          {...props}
        >
          {options.length > 0
            ? options.map((opt) => (
                <MenuItem key={opt.value} value={opt.value}>
                  {opt.label}
                </MenuItem>
              ))
            : children}
        </MuiSelect>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    );
  }
);

Select.displayName = 'Select';
export type { SelectProps };
