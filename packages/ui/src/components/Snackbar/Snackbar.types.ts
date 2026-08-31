import React from "react";
import { SnackbarOrigin } from "@mui/material";

export type SnackbarSeverity = "success" | "info" | "warning" | "error";
export type SnackbarVariant = "filled" | "light" | "cookie";
export type SnackbarPosition =
  | "top-right"
  | "top-left"
  | "top-center"
  | "bottom-right"
  | "bottom-left"
  | "bottom-center";

export interface SnackbarAction {
  label: string;
  variant?: "contained" | "outlined" | "text" | "filled" | "light";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface SnackbarProps {
  /** If true, the component is shown. */
  open: boolean;
  /** Callback fired when the component requests to be closed. */
  onClose?: () => void;
  /** The severity of the snackbar (used for icons and colors). */
  severity?: SnackbarSeverity;
  /** The main message to display. */
  message: string;
  /** The bold title above the message (enables two-line variant). */
  title?: string;
  /** The visual variant of the snackbar. */
  variant?: SnackbarVariant;
  /** If true, shows an UNDO button. */
  showUndo?: boolean;
  /** Callback fired when the UNDO button is clicked. */
  onAction?: () => void;
  /** The number of milliseconds to wait before automatically calling the onClose function. */
  autoHideDuration?: number | null;
  /** The position of the snackbar. */
  position?: SnackbarPosition;
  /** Pixel offset from the top of the viewport. */
  topOffset?: number;
  /** Pixel offset from the bottom of the viewport. */
  bottomOffset?: number;
  /** Array of custom action buttons to display. */
  actionButtons?: SnackbarAction[];
  /** If true, hides the close icon button. */
  hideCloseIcon?: boolean;
}
