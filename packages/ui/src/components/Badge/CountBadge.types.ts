import { SxProps, Theme } from "@mui/material";

export interface CountBadgeProps {
  /** The count to display. If null or undefined, the badge will not render. */
  count?: React.ReactNode;
  /** The maximum number to display. If count is a number and exceeds maxCount, it renders as {maxCount}+ */
  maxCount?: number;
  /** Whether the badge is in an active state. */
  active?: boolean;
  /** Background color when active. */
  activeBg?: string;
  /** Text color when active. */
  activeColor?: string;
  /** Background color when inactive. */
  inactiveBg?: string;
  /** Text color when inactive. */
  inactiveColor?: string;
  /** Font size of the count. */
  fontSize?: number | string;
  /** Font weight of the count. */
  fontWeight?: number | string;
  /** The minimum width and height of the badge. */
  size?: number | string;
  /** Additional custom styles. */
  sx?: SxProps<Theme>;
}
