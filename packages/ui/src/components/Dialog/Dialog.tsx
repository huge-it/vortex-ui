import * as React from "react";
import {
  Box,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Dialog as MuiDialog,
} from "@mui/material";
import { Button } from "../Button";
import { DialogProps } from "./Dialog.types";

export const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(
  (
    {
      open,
      onClose,
      onSubmit,
      title,
      notes,
      closeText = "Cancel",
      actionText = "Submit",
      variant = "default",
      maxWidth = "sm",
      children,
      ...props
    },
    ref
  ) => {
    const handleSubmit = () => {
      if (onSubmit) onSubmit();
      if (onClose) onClose();
    };

    const titleColor = {
      error: "error.main",
      success: "success.main",
      info: "info.main",
      default: "text.primary",
    }[variant] || "text.primary";

    // Map variant to ButtonSeverity
    const buttonSeverity = variant === "default" ? "primary" : variant;

    return (
      <MuiDialog
        ref={ref}
        open={open}
        onClose={onClose}
        maxWidth={maxWidth}
        fullWidth
        slotProps={{
          backdrop: {
            sx: {
              backdropFilter: "blur(3px)",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            },
          },
        }}
        PaperProps={{
          sx: {
            borderRadius: "10px",
          },
        }}
        {...props}
      >
        {title && (
          <DialogTitle
            sx={{
              color: titleColor,
              fontSize: 18,
              fontWeight: 600,
              px: 3,
              pt: 3,
              pb: 1.5,
            }}
          >
            {title}
          </DialogTitle>
        )}
        <DialogContent
          sx={{ px: 3, pt: children || !title ? 3 : 1, pb: children ? 2 : 1 }}
        >
          {notes && (
            <DialogContentText
              sx={{ color: "text.secondary", fontWeight: 400, pb: children ? 2 : 0 }}
            >
              {notes}
            </DialogContentText>
          )}
          {children}
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              size="lg"
              variant="outlined"
              severity={buttonSeverity}
              onClick={onClose}
            >
              {closeText}
            </Button>
            <Button
              size="lg"
              variant="filled"
              severity={buttonSeverity}
              onClick={handleSubmit}
            >
              {actionText}
            </Button>
          </Box>
        </DialogActions>
      </MuiDialog>
    );
  }
);

Dialog.displayName = "Dialog";
