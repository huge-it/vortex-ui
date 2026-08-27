import { TooltipProps as MuiTooltipProps } from "@mui/material/Tooltip";

export interface TooltipProps extends Omit<MuiTooltipProps, "componentsProps" | "slotProps"> {
  /**
   * The background color of the tooltip and its arrow.
   * @default "#fff"
   */
  bgColor?: string;
  /**
   * The text color of the tooltip.
   * @default "#1F2937"
   */
  textColor?: string;
}
