import { SxProps, Theme } from "@mui/material";

export interface BaseSliderProps {
  label?: React.ReactNode;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  trackColor?: string;
  railColor?: string;
  showMinMaxLabels?: boolean;
  sx?: SxProps<Theme>;
}

export interface SliderProps extends BaseSliderProps {
  value: number;
  onChange: (value: number) => void;
  valueSuffix?: string;
}

export interface RangeSliderProps extends BaseSliderProps {
  value: number[];
  onChange: (value: number[]) => void;
  minDistance?: number;
  showRangeText?: boolean;
}
