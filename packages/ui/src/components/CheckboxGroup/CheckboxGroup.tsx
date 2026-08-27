"use client";
import React, { createContext, useContext } from "react";
import {
  Checkbox as MuiCheckbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Box,
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
  borderColor = "#D3D6E2",
  checkedColor = "#4772FF",
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
            border: `1px solid ${borderColor}`,
            backgroundColor: "transparent",
          }}
        />
      }
      checkedIcon={
        <Box
          sx={{
            ...boxBase,
            border: `1px solid ${checkedColor}`,
            backgroundColor: checkedColor,
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
              stroke="#fff"
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
            border: `1px solid ${checkedColor}`,
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
              backgroundColor: "#fff",
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
  const activeColor = color || context.color || "#4772FF";

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
      sx={{
        m: 0,
        gap: 1,
        "& .MuiFormControlLabel-label": {
          fontSize,
          fontWeight,
          color: isDisabled ? "#9CA3AF" : "#313952",
        },
        ...sx,
      }}
    />
  );
};

export const CheckboxGroup = ({
  value = [],
  onChange,
  options = [],
  orientation = "horizontal",
  variant = "md",
  disabled = false,
  color,
  borderColor = "#D3D6E2",
  label,
  sx = {},
  children,
}: CheckboxGroupProps) => {
  const handleChange = (optionValue: string, checked: boolean) => {
    if (!onChange) return;
    const next = checked
      ? [...value, optionValue]
      : value.filter((v) => v !== optionValue);
    onChange(next);
  };

  const contextValue: CheckboxGroupContextValue = {
    value,
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
        <FormGroup row={orientation === "horizontal"} sx={{ gap: 1.5, ...sx }}>
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
