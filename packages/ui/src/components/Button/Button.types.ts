import { ButtonProps as MuiButtonProps } from "@mui/material";
import React from "react";

export type ButtonSize = "lg" | "md" | "sm";
export type ButtonVariant = "filled" | "outlined" | "ghost" | "text";
export type ButtonSeverity = "primary" | "error" | "success" | "info" | "warning";
export type ButtonIconPosition = "start" | "end";

export interface ButtonProps extends Omit<
  MuiButtonProps,
  "variant" | "color" | "size"
> {
  /**
   * The size of the button.
   * @default 'md'
   */
  size?: ButtonSize;
  /**
   * The design variant of the button.
   * @default 'filled'
   */
  variant?: ButtonVariant;
  /**
   * The color severity of the button.
   * @default 'primary'
   */
  severity?: ButtonSeverity;
  /**
   * Optional icon to display.
   */
  icon?: React.ReactNode;
  /**
   * Position of the icon relative to the text.
   * @default 'start'
   */
  iconPosition?: ButtonIconPosition;
  /**
   * If true, styles the button as an icon-only square button.
   * @default false
   */
  iconOnly?: boolean;
  /**
   * If true, displays a loading spinner and disables the button.
   * @default false
   */
  loading?: boolean;
  /**
   * Optional text to display while loading.
   */
  loadingText?: string;
  /**
   * The element component or string tag to render (e.g. 'a', Link).
   */
  component?: React.ElementType;
  /**
   * URL for link buttons.
   */
  href?: string;
  /**
   * Target attribute for link buttons (e.g. '_blank').
   */
  target?: string;
  /**
   * Button content
   */
  children?: React.ReactNode;
}

export interface IconButtonProps
  extends Omit<ButtonProps, "children" | "iconPosition" | "iconOnly"> {
  /**
   * The icon to display.
   */
  icon: React.ReactNode;
}
