"use client";
import React, { createContext, useContext } from "react";
import {
  Radio as MuiRadio,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup as MuiRadioGroup,
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
  const activeColor = color || context.color || "#4772FF";
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
          sx={{
            p: 0,
            width: size,
            height: size,
            color: activeUnselectedColor,
            "&.Mui-checked": { color: activeColor },
            "& svg": { width: size, height: size },
            "&:hover": { bgcolor: "transparent" },
            ...sx,
          }}
          disableRipple
        />
      }
      label={label}
      disabled={isDisabled}
      sx={{
        m: 0,
        gap: 0.5,
        "& .MuiFormControlLabel-label": {
          fontSize: "13px",
          color: isDisabled ? "#9CA3AF" : "#313952",
          fontWeight: 400,
        },
      }}
    />
  );
};

export const RadioGroup = ({
  value,
  onChange,
  options = [],
  orientation = "horizontal",
  variant = "md",
  disabled = false,
  color,
  unselectedColor = "#4772FF",
  label,
  sx = {},
  children,
}: RadioGroupProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const contextValue: RadioGroupContextValue = {
    value,
    onChange: (val) => onChange?.(val),
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
            sx={{
              fontSize: "13px",
              fontWeight: 400,
              color: "#313952",
              mb: 1,
              "&.Mui-focused": { color: "#313952" },
              "&.Mui-disabled": { color: "#313952" },
            }}
          >
            {label}
          </FormLabel>
        )}
        <MuiRadioGroup
          row={orientation === "horizontal"}
          value={value}
          onChange={handleChange}
          sx={{ gap: 1.5, ...sx }}
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
