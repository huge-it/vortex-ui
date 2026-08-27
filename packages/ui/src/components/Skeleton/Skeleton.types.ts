import { SkeletonProps as MuiSkeletonProps } from "@mui/material";

export interface SkeletonProps extends Omit<MuiSkeletonProps, 'variant'> {
  /**
   * The type of content that will be rendered.
   */
  variant?: "text" | "circular" | "rectangular" | "rounded" | "card" | "list-item" | "table-row" | "profile" | "cascading";
  
  /**
   * For complex variants like card and profile, determines the layout orientation.
   */
  orientation?: "horizontal" | "vertical";
  
  /**
   * Number of lines to render for the text variant.
   */
  lines?: number;
  
  /**
   * Number of rows to render for the table-row variant.
   */
  rows?: number;
  
  /**
   * Number of columns to render for each row in the table-row variant.
   */
  cols?: number;

  /**
   * Applies border radius to the skeleton. Can be a boolean, string (e.g. "sm", "md", "lg"), or number.
   */
  rounded?: boolean | "sm" | "md" | "lg" | number | string;
}
