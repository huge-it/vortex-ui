import React from "react";

export interface ButtonGroupMethodField {
  name: string;
  label: string;
  type: "text" | "select" | "phone";
  maxLength?: number;
  options?: Array<{ value: string; label: string; icon?: React.ReactNode }>;
}

export interface ButtonGroupMethod {
  key: string;
  label: string;
  icon?: React.ReactNode | ((color: string) => React.ReactNode);
  fields: ButtonGroupMethodField[];
}

export interface ButtonGroupValue {
  type: string | null;
  fields: Record<string, string>;
}

export interface ButtonGroupProps {
  /**
   * The currently selected method and its field values.
   */
  value?: ButtonGroupValue;
  /**
   * Callback fired when a method or field value changes.
   */
  onChange?: (value: ButtonGroupValue) => void;
  /**
   * Disables the button group and fields.
   */
  disabled?: boolean;
  /**
   * Background color for the dynamic fields.
   */
  bgColor?: string;
  /**
   * Determines what is displayed on the method buttons.
   */
  variant?: "icon" | "text" | "both";
  /**
   * Preset sizes for the method buttons.
   */
  size?: "sm" | "md" | "lg";
  /**
   * Custom explicit height for the method buttons (overrides size).
   */
  buttonHeight?: number;
  /**
   * Custom explicit width for each method button.
   */
  buttonWidth?: number;
  /**
   * Configuration for available methods and their dynamic fields.
   */
  methods?: ButtonGroupMethod[];
  /**
   * If true, the button group will take up the full width of its container.
   */
  fullWidth?: boolean;
}
