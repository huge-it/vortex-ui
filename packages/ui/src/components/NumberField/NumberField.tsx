"use client";
import { Divider, InputAdornment } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { useEffect, useRef, useState } from "react";

const StyledTextField = styled(
  ({
    bgColor = "transparent",
    hasLabel,
    hasValue,
    showButton,
    InputProps,
    ...props
  }: any) => (
    <TextField
      variant="filled"
      fullWidth
      InputProps={{
        disableUnderline: true,
        ...InputProps,
        sx: {
          overflow: "visible",
          borderRadius: showButton
            ? "10px 0 0 10px !important"
            : "10px !important",
          backgroundColor: bgColor,
          border: (theme: any) => `1px solid ${theme.palette.divider}`,
          borderRight: showButton
            ? "none"
            : (theme: any) => `1px solid ${theme.palette.divider}`,
          height: "46px",
          transition: (theme: any) =>
            theme.transitions.create([
              "border-color",
              "background-color",
              "box-shadow",
            ]),
          "&:hover": { backgroundColor: bgColor },
          "&:before, &:after": { display: "none" },
          "&.Mui-focused": {
            backgroundColor: bgColor,
            borderColor: (theme: any) => theme.palette.primary.main,
          },
          ...(InputProps?.sx || {}),
        },
      }}
      {...props}
    />
  ),
)(({ theme, bgColor, hasLabel, hasValue, showButton }: any) => ({
  "& .VortexUIInputLabel-root": {
    transform: "translate(10px, 13px) scale(1)",
    fontSize: "13px",
    color: theme.palette.text.primary,
    fontWeight: 400,
    transition: "transform 0.2s ease",
    "&.VortexUIInputLabel-shrink": {
      transform: "translate(10px, 6px) scale(0.75)",
      lineHeight: 1,
    },
  },

  "& .VortexUIFilledInput-input": {
    padding: "0 8px",
    fontSize: "14px",
    color: theme.palette.text.primary,
    fontWeight: 400,
    backgroundColor: "transparent",
    height: "100%",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
  },

  "& .VortexUIInputLabel-shrink ~ .VortexUIFilledInput-root .VortexUIFilledInput-input":
    {
      padding: "24px 10px 10px 10px",
    },

  "& label.Mui-focused": {
    color: theme.palette.text.secondary,
  },
}));

const ArrowContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "bgColor",
})<{ bgColor?: string }>(({ theme, bgColor = "transparent" }) => ({
  display: "flex",
  flexDirection: "column",
  border: `1px solid ${theme.palette.divider}`,
  borderLeft: `1px solid ${theme.palette.divider}`,
  borderRadius: "0 10px 10px 0",
  overflow: "hidden",
  backgroundColor: bgColor,
  width: "32px",
  height: "46px",
  transition: "border-color 300ms ease",
}));

const ArrowButton = styled(IconButton)(({ theme }) => ({
  borderRadius: 0,
  padding: "2px",
  height: "50%",
  width: "100%",
  color: theme.palette.text.primary,
  backgroundColor: "transparent",
  transition: "background-color 100ms ease",
  "&:hover": {
    backgroundColor: "transparent",
  },
  "&:active": {
    backgroundColor: theme.palette.divider,
  },
  "&.Mui-disabled": {
    opacity: 0.4,
  },
  "& .VortexUISvgIcon-root": {
    fontSize: "16px",
  },
}));

import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { NumberFieldProps } from "./NumberField.types";

export function NumberField({
  label = "Number Field",
  value: externalValue,
  onChange,
  onBlur,
  disabled = false,
  bgColor = "transparent",
  showButton = true,
  allowDecimal = false,
  allowNegative = false,
  min = allowNegative ? -Infinity : 0,
  max = Infinity,
  step = 1,
  decimalPlaces = 2,
  sx,
  prefix,
  unit,
  ...props
}: NumberFieldProps) {
  const [internalValue, setInternalValue] = useState(
    externalValue !== undefined ? String(externalValue) : "",
  );

  const value =
    externalValue !== undefined ? String(externalValue) : internalValue;

  const isIntermediate = ["", "-", ".", "-."].includes(value);
  const numericValue = isIntermediate ? 0 : parseFloat(value);

  const valueRef = useRef(numericValue);
  valueRef.current = numericValue;

  const setValue = (val: string) => {
    setInternalValue(val);
    onChange?.({ target: { value: val } });
  };

  const clamp = (num: number) => {
    let n = num;
    if (n < min) n = min;
    if (n > max) n = max;
    return n;
  };

  const roundStep = (num: number) => {
    if (!allowDecimal) return Math.round(num);
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(num * factor) / factor;
  };

  const getPattern = () => {
    if (allowNegative && allowDecimal) return /^-?\d*\.?\d*$/;
    if (allowNegative && !allowDecimal) return /^-?\d*$/;
    if (!allowNegative && allowDecimal) return /^\d*\.?\d*$/;
    return /^\d*$/;
  };

  const intermediateStates = allowNegative
    ? allowDecimal
      ? ["-", ".", "-."]
      : ["-"]
    : allowDecimal
      ? ["."]
      : [];

  const handleChange = (e: any) => {
    const raw = e.target.value;

    if (raw === "") {
      setValue("");
      return;
    }

    if (!getPattern().test(raw)) return;

    if (intermediateStates.includes(raw)) {
      setValue(raw);
      return;
    }

    const parsed = parseFloat(raw);
    if (isNaN(parsed)) return;

    setValue(raw);
  };

  const handleBlur = (e: any) => {
    if (isIntermediate) {
      setValue("");
      onBlur?.(e);
      return;
    }
    let parsed = parseFloat(value);
    if (isNaN(parsed)) parsed = 0;
    parsed = clamp(parsed);
    setValue(allowDecimal ? String(parsed) : String(Math.round(parsed)));
    onBlur?.(e);
  };

  const increment = () => {
    const next = clamp(roundStep(valueRef.current + step));
    setValue(String(next));
  };

  const decrement = () => {
    const next = clamp(roundStep(valueRef.current - step));
    setValue(String(next));
  };

  const repeatTimeoutRef = useRef<any>(null);
  const repeatIntervalRef = useRef<any>(null);

  const stopRepeat = () => {
    if (repeatTimeoutRef.current) {
      clearTimeout(repeatTimeoutRef.current);
      repeatTimeoutRef.current = null;
    }
    if (repeatIntervalRef.current) {
      clearInterval(repeatIntervalRef.current);
      repeatIntervalRef.current = null;
    }
  };

  const startRepeat = (action: () => void) => {
    action();
    repeatTimeoutRef.current = setTimeout(() => {
      repeatIntervalRef.current = setInterval(action, 100);
    }, 400);
  };

  useEffect(() => stopRepeat, []);

  const canIncrement = !disabled && numericValue < max;
  const canDecrement = !disabled && numericValue > min;

  return (
    <Box
      display="flex"
      alignItems="stretch"
      width="fit-content"
      sx={{
        width: 1,
        "&:focus-within .arrow-container": {
          borderTopColor: (theme) => theme.palette.primary.main,
          borderRightColor: (theme) => theme.palette.primary.main,
          borderBottomColor: (theme) => theme.palette.primary.main,
        },
        ...sx,
      }}
    >
      <StyledTextField
        label={label}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        hasLabel={!!label}
        hasValue={value !== ""}
        disabled={disabled}
        bgColor={bgColor}
        showButton={showButton}
        inputProps={{
          inputMode: allowDecimal ? "decimal" : "numeric",
          pattern: allowNegative
            ? allowDecimal
              ? "-?[0-9]*\\.?[0-9]*"
              : "-?[0-9]*"
            : allowDecimal
              ? "[0-9]*\\.?[0-9]*"
              : "[0-9]*",
          min,
          max,
        }}
        InputProps={{
          ...(prefix && {
            startAdornment: (
              <InputAdornment position="start">{prefix}</InputAdornment>
            ),
          }),
          ...(unit && {
            endAdornment: (
              <InputAdornment position="end" sx={{ mr: 1, ml: 0 }}>
                {unit}
              </InputAdornment>
            ),
          }),
        }}
        {...props}
      />

      {showButton && (
        <ArrowContainer className="arrow-container" bgColor={bgColor}>
          <ArrowButton
            onMouseDown={(e) => {
              e.preventDefault();
              if (canIncrement) startRepeat(increment);
            }}
            onMouseUp={stopRepeat}
            onMouseLeave={stopRepeat}
            onTouchStart={(e) => {
              e.preventDefault();
              if (canIncrement) startRepeat(increment);
            }}
            onTouchEnd={stopRepeat}
            disableRipple
            size="small"
            disabled={!canIncrement}
          >
            <ExpandLess color="secondary" />
          </ArrowButton>
          <Divider orientation="horizontal" flexItem sx={{ marginX: "4px" }} />
          <ArrowButton
            onMouseDown={(e) => {
              e.preventDefault();
              if (canDecrement) startRepeat(decrement);
            }}
            onMouseUp={stopRepeat}
            onMouseLeave={stopRepeat}
            onTouchStart={(e) => {
              e.preventDefault();
              if (canDecrement) startRepeat(decrement);
            }}
            onTouchEnd={stopRepeat}
            disableRipple
            size="small"
            disabled={!canDecrement}
          >
            <ExpandMore color="secondary" />
          </ArrowButton>
        </ArrowContainer>
      )}
    </Box>
  );
}
