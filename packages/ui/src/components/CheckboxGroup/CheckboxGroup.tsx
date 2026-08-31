"use client";
import React, { createContext, useContext, useState } from "react";
import {
  Checkbox as MuiCheckbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Box,
  formControlLabelClasses,
  formLabelClasses,
} from "@mui/material";
import { CheckboxGroupProps, CheckboxProps } from "./CheckboxGroup.types";

const VARIANTS = {
  sm: {
    size: 18,
    tick: 8,
    fontSize: "13px",
    fontWeight: 400,
    borderRadius: "5px",
    iconSize: 10,
  },
  md: {
    size: 20,
    tick: 10,
    fontSize: "13px",
    fontWeight: 400,
    borderRadius: "6.25px",
    iconSize: 14,
  },
  lg: {
    size: 22,
    tick: 12,
    fontSize: "13px",
    fontWeight: 400,
    borderRadius: "7.5px",
    iconSize: 20,
  },
};

interface CheckboxGroupContextValue {
  value: string[];
  onChange: (value: string, checked: boolean) => void;
  disabled: boolean;
  variant: "sm" | "md" | "lg";
  color?: string;
  borderColor: string;
}

const CheckboxGroupContext = createContext<
  CheckboxGroupContextValue | undefined
>(undefined);

const StyledCheckbox = ({
  borderColor = "divider",
  checkedColor = "primary.main",
  variant = "md",
  ...props
}: any) => {
  const v = VARIANTS[variant as keyof typeof VARIANTS] ?? VARIANTS.md;
  const boxBase = {
    width: `${v.size}px`,
    height: `${v.size}px`,
    borderRadius: v.borderRadius,
  };

  return (
    <MuiCheckbox
      size="small"
      {...props}
      icon={
        <Box
          sx={{
            ...boxBase,
            border: 1,
            borderColor: borderColor,
            backgroundColor: "transparent",
          }}
        />
      }
      checkedIcon={
        <Box
          sx={{
            ...boxBase,
            border: 1,
            borderColor: checkedColor,
            backgroundColor: checkedColor,
            color: "primary.contrastText",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width={v.tick}
            height={v.tick}
            viewBox="0 0 11 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 3.5L4 6.5L10 1"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Box>
      }
      indeterminateIcon={
        <Box
          sx={{
            ...boxBase,
            border: 1,
            borderColor: checkedColor,
            backgroundColor: checkedColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: `${v.iconSize}px`,
              height: "1.8px",
              backgroundColor: "primary.contrastText",
              borderRadius: "2px",
            }}
          />
        </Box>
      }
      sx={{ p: 0, "&:hover": { backgroundColor: "transparent" }, ...props.sx }}
    />
  );
};

export const Checkbox = ({
  value,
  label,
  disabled,
  color,
  borderColor,
  variant,
  sx = {},
}: CheckboxProps) => {
  const context = useContext(CheckboxGroupContext);

  if (!context) {
    throw new Error("Checkbox must be used within a CheckboxGroup");
  }

  const isChecked = context.value.includes(value);
  const isDisabled = disabled || context.disabled;
  const activeVariant = variant || context.variant;
  const activeBorderColor = borderColor || context.borderColor;
  const activeColor = color || context.color || "primary.main";

  const { fontSize, fontWeight } = VARIANTS[activeVariant] ?? VARIANTS.md;

  return (
    <FormControlLabel
      control={
        <StyledCheckbox
          checked={isChecked}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            context.onChange(value, e.target.checked)
          }
          disabled={isDisabled}
          variant={activeVariant}
          borderColor={activeBorderColor}
          checkedColor={activeColor}
        />
      }
      label={label}
      disabled={isDisabled}
      sx={[
        (theme) => ({
          m: 0,
          gap: 1,
          [`& .${formControlLabelClasses.label}`]: {
            fontSize,
            fontWeight,
            color: isDisabled
              ? theme.palette.text.disabled
              : theme.palette.text.primary,
          },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    />
  );
};

export const CheckboxGroup = ({
  value,
  defaultValue = [],
  onChange,
  options = [],
  orientation = "horizontal",
  variant = "md",
  disabled = false,
  color,
  borderColor = "divider",
  label,
  sx = {},
  children,
}: CheckboxGroupProps) => {
  const [internalValue, setInternalValue] = useState<string[]>(defaultValue);
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const handleChange = (optionValue: string, checked: boolean) => {
    const next = checked
      ? [...currentValue, optionValue]
      : currentValue.filter((v) => v !== optionValue);

    if (!isControlled) {
      setInternalValue(next);
    }
    if (onChange) {
      onChange(next);
    }
  };

  const contextValue: CheckboxGroupContextValue = {
    value: currentValue,
    onChange: handleChange,
    disabled,
    variant,
    color,
    borderColor,
  };

  return (
    <CheckboxGroupContext.Provider value={contextValue}>
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
        <FormGroup
          row={orientation === "horizontal"}
          sx={[{ gap: 1.5 }, ...(Array.isArray(sx) ? sx : [sx])]}
        >
          {options.length > 0
            ? options.map((opt, i) => {
                const optObj =
                  typeof opt === "string" ? { label: opt, value: opt } : opt;
                return (
                  <Checkbox
                    key={optObj.value ?? i}
                    value={optObj.value}
                    label={optObj.label}
                    color={optObj.color}
                  />
                );
              })
            : children}
        </FormGroup>
      </FormControl>
    </CheckboxGroupContext.Provider>
  );
};
