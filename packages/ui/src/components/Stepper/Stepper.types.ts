import React from "react";

export interface StepItem {
  label: React.ReactNode;
  description?: React.ReactNode;
  value?: string | number;
}

export interface StepperProps {
  /**
   * Array of steps for the stepper. Can be strings or detailed objects.
   */
  steps: (string | StepItem)[];
  /**
   * The value (or index) of the currently active step.
   * @default 0
   */
  value?: number | string;
  /**
   * Callback fired when a step is clicked. Passes the step's value or index.
   */
  onStepClick?: (value: number | string) => void;
  /**
   * The visual variant of the stepper. On mobile, it will always fallback to horizontal.
   * @default "horizontal"
   */
  variant?: "horizontal" | "vertical";
  /**
   * The size of the stepper.
   * @default "md"
   */
  size?: "sm" | "md" | "lg";
  /**
   * Theme color override for active and completed steps.
   */
  color?: string;
  /**
   * Whether to show the labels under/next to the step bubbles.
   * @default true
   */
  showLabels?: boolean;
  /**
   * Style of the connecting line between steps.
   * @default "solid"
   */
  connectorStyle?: "solid" | "dashed";
  /**
   * If true, allows the user to jump to any step including pending steps.
   * @default false
   */
  allowJump?: boolean;
}
