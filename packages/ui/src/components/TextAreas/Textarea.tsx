"use client";
import React, { useRef, useLayoutEffect } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

// ─── Styled wrapper ───────────────────────────────────────────────────────────
const Wrapper = styled(Box, {
  shouldForwardProp: (p) =>
    p !== "bgColor" && p !== "isError" && p !== "isDisabled",
})<{ bgColor?: string; isError?: boolean; isDisabled?: boolean }>(
  ({ theme, bgColor = "background.default", isError, isDisabled }) => {
    const resolveColor = (c: string) => {
      if (c === "background.default" || c === "#FAFBFF") return theme.palette.background.default;
      if (c === "background.paper" || c === "#fff" || c === "#FFFFFF") return theme.palette.background.paper;
      return c;
    };
    return {
      width: "100%",
      borderRadius: "10px",
      backgroundColor: isDisabled
        ? theme.palette.action.disabledBackground
        : resolveColor(bgColor),
      border: "1px solid",
      borderColor: isError ? theme.palette.error.main : theme.palette.divider,
      padding: "8px 12px",
      boxSizing: "border-box",
      cursor: isDisabled ? "not-allowed" : "text",
      transition: "border-color 0.2s, box-shadow 0.2s, background-color 0.2s",

      "&:focus-within": {
        backgroundColor: theme.palette.background.paper,
        borderColor: isError
          ? theme.palette.error.main
          : theme.palette.primary.main,
      },

      "&:hover:not(:focus-within)": {
        backgroundColor: isDisabled ? undefined : theme.palette.background.paper,
      },
    };
  }
);

const StyledTextarea = styled("textarea", {
  shouldForwardProp: (p) => p !== "isExpandable",
})<{ isExpandable?: boolean }>(({ theme, isExpandable }) => ({
  width: "100%",
  border: "none",
  outline: "none",
  resize: isExpandable ? "vertical" : "none",
  overflow: isExpandable ? "hidden" : undefined,
  backgroundColor: "transparent",
  fontSize: "14px",
  color: theme.palette.text.primary,
  fontFamily: theme.typography.fontFamily,
  lineHeight: isExpandable ? "21px" : 1.5,
  padding: 0,
  marginTop: "2px",
  display: "block",
  boxSizing: "border-box",

  "&::placeholder": {
    color: theme.palette.text.disabled,
  },

  "&:disabled": {
    cursor: "not-allowed",
    color: theme.palette.text.disabled,
    resize: "none",
  },
}));

import { TextareaProps } from "./Textarea.types";

// ─── Unified Textarea Component ───────────────────────────────────────────────
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      variant = "default",
      label,
      value,
      onChange,
      maxLength,
      rows = 3,
      minRows,
      bgColor = "background.default",
      error,
      disabled,
      placeholder,
      fullWidth,
      inputProps,
      ...rest
    },
    ref
  ) => {
    const isExpandable = variant === "expandable";
    const isMinLength = variant === "minLength";

    const internalRef = useRef<HTMLTextAreaElement>(null);
    const textareaRef = (ref as any) || internalRef;
    
    const [internalValue, setInternalValue] = React.useState(
      rest.defaultValue !== undefined ? String(rest.defaultValue) : ""
    );
    const currentValue = value !== undefined ? String(value) : internalValue;

    const charCount = currentValue.length;

    // ── Default & Expandable: show counter when maxLength is set
    // ── MinLength: always show counter (maxLength acts as min-char threshold)
    const showCounter = isMinLength || maxLength != null;

    // ── MinLength-specific logic ────────────────────────────────────────────────
    const minLengthError =
      isMinLength && charCount > 0 && maxLength != null && charCount < maxLength;
    const resolvedError = isMinLength ? minLengthError || error : error;
    const resolvedLabel = isMinLength
      ? `${label} (Min ${maxLength} chars)`
      : label;
    const resolvedRows = isMinLength && rows === 3 ? 4 : rows;

    // ── Expandable-specific logic ───────────────────────────────────────────────
    const effectiveMinRows = minRows ?? (resolvedRows as number);
    const LINE_HEIGHT = 21; // must match StyledTextarea lineHeight for expandable

    const resize = (el: HTMLTextAreaElement | null) => {
      if (!el) return;
      const minH = LINE_HEIGHT * effectiveMinRows;
      el.style.height = "0px";
      el.style.height = `${Math.max(el.scrollHeight, minH)}px`;
    };

    useLayoutEffect(() => {
      if (isExpandable) {
        resize(textareaRef.current);
      }
    }, [currentValue, effectiveMinRows, isExpandable]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (value === undefined) {
        setInternalValue(e.target.value);
      }
      if (isExpandable) {
        resize(e.target);
      }
      onChange?.(e);
    };

    // ── Counter text ────────────────────────────────────────────────────────────
    const counterText = isMinLength
      ? `${charCount}/${maxLength}`
      : `${charCount}/${maxLength}`;

    return (
      <Box sx={{ width: fullWidth ? "100%" : undefined }}>
        <Wrapper
          bgColor={bgColor}
          isError={!!resolvedError}
          isDisabled={!!disabled}
        >
          {/* ── Top row: label left · counter right ── */}
          {(resolvedLabel || showCounter) && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {resolvedLabel && (
                <Typography
                  component="span"
                  sx={{
                    fontSize: "11px",
                    color: resolvedError ? "error.main" : "text.secondary",
                    fontWeight: 400,
                    lineHeight: 1,
                    userSelect: "none",
                  }}
                >
                  {resolvedLabel}
                </Typography>
              )}
              {showCounter && (
                <Typography
                  component="span"
                  sx={{
                    fontSize: "12px",
                    color: resolvedError ? "error.main" : "text.secondary",
                    lineHeight: 1,
                    ml: "auto",
                    userSelect: "none",
                    fontWeight: 400,
                  }}
                >
                  {counterText}
                </Typography>
              )}
            </Box>
          )}

          {/* ── Textarea ── */}
          <StyledTextarea
            ref={textareaRef}
            isExpandable={isExpandable}
            value={currentValue}
            onChange={handleChange}
            rows={isExpandable ? effectiveMinRows : resolvedRows}
            maxLength={isMinLength ? undefined : maxLength}
            disabled={disabled}
            placeholder={placeholder}
            {...inputProps}
            {...rest}
          />
        </Wrapper>

        {/* ── Helper / error text below ── */}
        {resolvedError && typeof resolvedError === "string" && (
          <Typography
            sx={{
              fontSize: "12px",
              mt: 0.5,
              mx: "14px",
              color: "error.main",
            }}
          >
            {resolvedError}
          </Typography>
        )}

        {/* ── MinLength helper text ── */}
        {isMinLength && minLengthError && (
          <Typography
            sx={{
              fontSize: "12px",
              mt: 0.5,
              mx: "14px",
              color: "error.main",
            }}
          >
            {`Minimum ${maxLength} characters required.`}
          </Typography>
        )}
      </Box>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
