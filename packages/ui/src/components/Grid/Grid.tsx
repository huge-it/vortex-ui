import React from "react";
import { Grid2 as MuiGrid } from "@mui/material";
import { GridProps, CustomGridSpacing } from "./Grid.types";

const CUSTOM_SPACING_MAP: Record<CustomGridSpacing, number> = {
  none: 0,
  xs: 1, // 8px
  sm: 2, // 16px
  md: 3, // 24px
  lg: 4, // 32px
  xl: 6, // 48px
};

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ spacing = "sm", children, ...rest }, ref) => {
    const resolvedSpacing = 
      typeof spacing === "string" && spacing in CUSTOM_SPACING_MAP
        ? CUSTOM_SPACING_MAP[spacing as CustomGridSpacing]
        : spacing;

    return (
      <MuiGrid ref={ref} spacing={resolvedSpacing} {...rest}>
        {children}
      </MuiGrid>
    );
  }
);

Grid.displayName = "Grid";

export default Grid;
