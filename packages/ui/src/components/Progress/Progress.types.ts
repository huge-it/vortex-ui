import { SxProps, Theme } from "@mui/material";

export interface ProgressProps {
  /** The target percentage (0 to 100). */
  value?: number;
  /** Whether to display the percentage value. */
  showValue?: boolean;
  /** "right" | "top" | "inside" */
  valuePosition?: "right" | "top" | "inside";
  /** Height of the progress bar in px. */
  height?: number;
  /** Border radius of the bar. */
  borderRadius?: number | string;
  /** Background color of the track. */
  bgColor?: string;
  /** Optional function to determine color based on value: (val) => string */
  getColor?: (val: number) => string;
  /** Animation duration in seconds. */
  animationDuration?: number;
  /** "default" | "stepper" */
  variant?: "default" | "stepper";
  /** Number of steps when variant is "stepper". */
  steps?: number;
  /** If > 0, animates the progress bar visually in discrete jumps. */
  stepJump?: number;
  sx?: SxProps<Theme>;
}
