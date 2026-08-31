"use client";
import React, { createContext, useContext, useState } from "react";
import {
  Radio as MuiRadio,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup as MuiRadioGroup,
  formLabelClasses,
} from "@mui/material";
import { RadioGroupProps, RadioProps } from "./RadioGroup.types";

const VARIANTS = {
  sm: { size: 18 },
  md: { size: 20 },
  lg: { size: 22 },
};

interface RadioGroupContextValue {
  value?: string;
  onChange: (value: string) => void;
  disabled: boolean;
  variant: "sm" | "md" | "lg";
  color?: string;
  unselectedColor?: string;
}

const RadioGroupContext = createContext<RadioGroupContextValue | undefined>(
  undefined,
);

export const Radio = ({
  value,
  label,
  disabled,
  color,
  unselectedColor,
  variant,
  sx = {},
}: RadioProps) => {
  const context = useContext(RadioGroupContext);

  if (!context) {
    throw new Error("Radio must be used within a RadioGroup");
  }

  const isDisabled = disabled || context.disabled;
  const activeVariant = variant || context.variant;
  const activeColor = color || context.color || "primary.main";
  const activeUnselectedColor =
    unselectedColor || context.unselectedColor || activeColor;

  const { size } = VARIANTS[activeVariant] ?? VARIANTS.md;

  return (
    <FormControlLabel
      value={value}
      control={
        <MuiRadio
          size="small"
          disabled={isDisabled}
          sx={[
            {
              p: 0,
              width: size,
              height: size,
              color: activeUnselectedColor,
              "&.Mui-checked": { color: activeColor },
              "& svg": { width: size, height: size },
              "&:hover": { bgcolor: "transparent" },
            },
            ...(Array.isArray(sx) ? sx : [sx]),
          ]}
          disableRipple
        />
      }
      label={label}
      disabled={isDisabled}
      sx={(theme) => ({
        m: 0,
        gap: 0.5,
        "& .VortexUIFormControlLabel-label": {
          fontSize: "13px",
          color: isDisabled
            ? theme.palette.text.disabled
            : theme.palette.text.primary,
          fontWeight: 400,
        },
      })}
    />
  );
};

export const RadioGroup = ({
  value,
  defaultValue,
  onChange,
  options = [],
  orientation = "horizontal",
  variant = "md",
  disabled = false,
  color,
  unselectedColor = "primary.main",
  label,
  sx = {},
  children,
}: RadioGroupProps) => {
  const [internalValue, setInternalValue] = useState<string | undefined>(
    defaultValue,
  );
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (!isControlled) {
      setInternalValue(val);
    }
    if (onChange) {
      onChange(val);
    }
  };

  const contextValue: RadioGroupContextValue = {
    value: currentValue,
    onChange: (val) => {
      if (!isControlled) setInternalValue(val);
      onChange?.(val);
    },
    disabled,
    variant,
    color,
    unselectedColor,
  };

  return (
    <RadioGroupContext.Provider value={contextValue}>
      <FormControl disabled={disabled}>
        {label && (
          <FormLabel
            sx={(theme) => ({
              fontSize: "13px",
              fontWeight: 400,
              color: theme.palette.text.primary,
              mb: 1,
              [`&.${formLabelClasses.focused}`]: { color: theme.palette.text.primary },
              [`&.${formLabelClasses.disabled}`]: { color: theme.palette.text.primary },
            })}
          >
            {label}
          </FormLabel>
        )}
        <MuiRadioGroup
          row={orientation === "horizontal"}
          value={currentValue ?? ""}
          onChange={handleChange}
          sx={[{ gap: 1.5 }, ...(Array.isArray(sx) ? sx : [sx])]}
        >
          {options.length > 0
            ? options.map((opt, i) => {
                const optObj =
                  typeof opt === "string" ? { label: opt, value: opt } : opt;
                return (
                  <Radio
                    key={optObj.value ?? i}
                    value={optObj.value}
                    label={optObj.label}
                    color={optObj.color}
                  />
                );
              })
            : children}
        </MuiRadioGroup>
      </FormControl>
    </RadioGroupContext.Provider>
  );
};
