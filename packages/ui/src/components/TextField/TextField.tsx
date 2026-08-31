"use client";
import { InfoOutlined } from "@mui/icons-material";
import Box from "@mui/material/Box";
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import React from "react";
import { TextFieldProps } from "./TextField.types";

interface StyledTextFieldProps extends Omit<MuiTextFieldProps, "error"> {
  hasLabel?: boolean;
  error?: boolean;
  bgColor?: string;
}

const StyledTextField = styled(
  React.forwardRef<HTMLDivElement, StyledTextFieldProps>((props, ref) => {
    const { hasLabel, bgColor, variant = "filled", ...rest } = props;

    return (
      <MuiTextField
        ref={ref}
        variant={variant as any}
        {...rest}
        InputProps={{
          disableUnderline: true,
          ...rest.InputProps,
          sx: {
            overflow: "hidden",
            borderRadius: "10px",
            backgroundColor: "background.paper",
            border: (theme) => `1px solid ${theme.palette.divider}`,
            height: "46px",
            transition: (theme) =>
              theme.transitions.create([
                "border-color",
                "background-color",
                "box-shadow",
              ]),
            "&:hover": { backgroundColor: bgColor || "background.default" },
            "&:before, &:after": { display: "none" },
            "&.VortexUI-focused": {
              backgroundColor: bgColor || "background.paper",
              borderColor: (theme) => theme.palette.primary.main,
            },
            "&.VortexUI-error": {
              borderColor: (theme) => theme.palette.error.main,
              backgroundColor: bgColor || "background.paper",
            },
            ...(rest.InputProps?.sx || {}),
          },
        }}
      />
    );
  }),
  {
    shouldForwardProp: (prop) => prop !== "hasLabel" && prop !== "bgColor",
  },
)(({ theme, bgColor, hasLabel }) => {
  return {
    "& .VortexUIInputLabel-root.VortexUIInputLabel-filled": {
      transform: `translate(12px, 14px) scale(1)`,
      fontSize: "14px",
      fontWeight: 400,
      "&.VortexUIInputLabel-shrink": {
        transform: "translate(10px, 10px) scale(0.75)",
        lineHeight: 1,
      },
      "&.VortexUI-error": {
        color: theme.palette.error.main,
      },
    },

    "& .VortexUIFilledInput-input": {
      padding: "0 10px",
      fontSize: "14px",
      fontWeight: 400,
      height: "100%",
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
    },

    "& .VortexUIInputLabel-shrink ~ .VortexUIFilledInput-root .VortexUIFilledInput-input":
      {
        padding: `24px 10px 10px 10px`,
      },

    "& label.VortexUI-focused": {
      color: theme.palette.text.primary,
    },

    "& .VortexUIFormHelperText-root": {
      display: "none",
    },
  };
});

export const TextField = React.forwardRef<HTMLDivElement, TextFieldProps>(
  ({ error, sx, bgColor = "#fff", ...props }, ref) => {
    return (
      <Box sx={{ width: props.fullWidth ? "100%" : "auto", ...sx }}>
        <StyledTextField
          ref={ref}
          error={!!error}
          hasLabel={!!props.label}
          bgColor={bgColor}
          {...props}
        />
        {error && typeof error === "string" && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              mt: "8px",
              ml: 0.5,
            }}
          >
            <InfoOutlined
              sx={{ width: 14, height: 14, color: "error.main", flexShrink: 0 }}
            />
            <Typography
              sx={{
                fontSize: "12px",
                color: "error.main",
                lineHeight: 1.4,
                fontWeight: 400,
              }}
            >
              {error}
            </Typography>
          </Box>
        )}
      </Box>
    );
  },
);

TextField.displayName = "TextField";
