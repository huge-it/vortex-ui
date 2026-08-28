import React from "react";

export interface DrawerProps {
  /**
   * Drawer open state
   */
  open: boolean;
  /**
   * Close handler
   */
  onClose: (event?: {}, reason?: "backdropClick" | "escapeKeyDown") => void;
  /**
   * Title of the drawer
   */
  title?: string;
  /**
   * Drawer anchor direction
   */
  anchor?: "left" | "right" | "top" | "bottom";
  /**
   * Width of the drawer (only applies to left/right anchors)
   */
  width?: number | string;
  /**
   * Drawer main content
   */
  children?: React.ReactNode;
  /**
   * Optional submit handler. Shows the footer if provided (unless showFooter is false).
   */
  onSubmit?: () => void;
  /**
   * Text for the submit button
   */
  actionText?: string;
  /**
   * Text for the cancel button
   */
  closeText?: string;
  /**
   * Whether to show the footer with action buttons
   */
  showFooter?: boolean;
  /**
   * Whether to show a confirmation dialog when closing
   */
  requireConfirmOnClose?: boolean;
  /**
   * Type text shown before the title (e.g. "Create", "Edit")
   */
  type?: string;
  /**
   * Optional subtitle shown below the title
   */
  subtitle?: React.ReactNode;
  /**
   * Whether to show action buttons in the header
   */
  showHeaderActions?: boolean;
}
