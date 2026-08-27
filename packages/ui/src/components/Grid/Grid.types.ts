import { Grid2Props as MuiGridProps } from "@mui/material";

export type CustomGridSpacing = "none" | "xs" | "sm" | "md" | "lg" | "xl";

export interface GridProps extends Omit<MuiGridProps, "spacing"> {
  spacing?: CustomGridSpacing | MuiGridProps["spacing"];
}
