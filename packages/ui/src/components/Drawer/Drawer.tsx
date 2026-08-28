"use client";
import React, { useEffect, useState } from "react";
import {
  Drawer as MuiDrawer,
  Box,
  Typography,
  IconButton,
  Divider,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { DrawerProps } from "./Drawer.types";
import { Dialog } from "../Dialog";
import { Button } from "../Button";

export const Drawer: React.FC<DrawerProps> = ({
  open,
  onClose,
  title,
  anchor = "right",
  width = 600,
  children,
  onSubmit,
  actionText = "Submit",
  closeText = "Cancel",
  showFooter = true,
  requireConfirmOnClose = true,
  type = "",
  subtitle,
  showHeaderActions = true,
}) => {
  const isView = type.trim().toLowerCase() === "view";
  const effectiveRequireConfirm = isView ? false : requireConfirmOnClose;
  const effectiveOnSubmit = isView ? undefined : onSubmit;

  // Header and Footer actions are mutually exclusive.
  const hasHeaderActions = showHeaderActions;
  const hasFooterActions = !hasHeaderActions && showFooter;

  // Show CloseIcon in header if there are no header actions.
  // However, if there are footer actions, we hide the CloseIcon (per previous request)
  const showCloseIcon = !hasHeaderActions && !hasFooterActions;

  const [confirmOpen, setConfirmOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // ESC - Cancel/Close
      if (e.key === "Escape") {
        handleClose();
      }
      // Ctrl + Enter - Submit
      if (e.ctrlKey && e.key === "Enter") {
        if (effectiveOnSubmit) handleSubmit();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose, effectiveOnSubmit, effectiveRequireConfirm]);

  const handleSubmit = () => {
    if (effectiveOnSubmit) effectiveOnSubmit();
    onClose();
  };

  const handleClose = (
    event?: {},
    reason?: "backdropClick" | "escapeKeyDown",
  ) => {
    if (effectiveRequireConfirm) {
      setConfirmOpen(true);
      return;
    }
    if (onClose) onClose(event, reason);
  };

  const handleConfirmDiscard = () => {
    setConfirmOpen(false);
    if (onClose) onClose();
  };

  return (
    <>
      <MuiDrawer
        anchor={anchor}
        open={open}
        onClose={handleClose}
        sx={{ zIndex: 1300, "& .MuiDrawer-paper": { zIndex: 1300 } }}
        ModalProps={{
          BackdropProps: {
            sx: {
              backdropFilter: "blur(3px)",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            },
          },
        }}
        PaperProps={{
          sx: {
            width:
              anchor === "top" || anchor === "bottom"
                ? "100%"
                : { xs: "100%", sm: width },
            borderRadius:
              anchor === "top"
                ? "0 0 16px 16px"
                : anchor === "bottom"
                  ? "16px 16px 0 0"
                  : anchor === "left"
                    ? "0 16px 16px 0"
                    : "16px 0 0 16px",
            m: 0,
            backgroundColor: "background.paper",
            backgroundImage: "none",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2.5,
            py: 2,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Stack>
                <Typography
                  variant="h6"
                  color="text.primary"
                  sx={{ fontWeight: 500, fontSize: "1.1rem", lineHeight: 1.2 }}
                >
                  {type ? `${type} ${title}` : title}
                </Typography>
                {subtitle && (
                  <Typography variant="caption" color="text.secondary">
                    {subtitle}
                  </Typography>
                )}
              </Stack>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 1.5,
              mt: hasHeaderActions && !isView ? 0 : -0.5,
            }}
          >
            {hasHeaderActions && !isView && (
              <>
                <Button onClick={handleClose} variant="outlined" size="sm">
                  {closeText}
                </Button>
                {effectiveOnSubmit && (
                  <Button onClick={handleSubmit} variant="filled" size="sm">
                    {actionText}
                  </Button>
                )}
              </>
            )}
            {((hasHeaderActions && isView) || showCloseIcon) && (
              <IconButton
                onClick={handleClose}
                sx={{
                  backgroundColor: "action.hover",
                  "&:hover": { backgroundColor: "action.selected" },
                }}
                size="small"
              >
                <CloseIcon fontSize="small" sx={{ color: "text.primary" }} />
              </IconButton>
            )}
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: "action.hover",
            px: 3,
            py: 0.8,
            textAlign: "right",
          }}
        >
          <Typography
            sx={{ fontSize: "12px", color: "text.secondary", fontWeight: 400 }}
          >
            Press <b>ESC</b> - Close
            {effectiveOnSubmit && (
              <>
                , <b>Ctrl + Enter</b> - {actionText}
              </>
            )}
          </Typography>
        </Box>

        <Box
          sx={{
            p: 2.5,
            overflowY: "auto",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 2.5,
            "&::-webkit-scrollbar": { width: 6 },
            "&::-webkit-scrollbar-track": { background: "transparent" },
            "&::-webkit-scrollbar-thumb": {
              bgcolor: "divider",
              borderRadius: 10,
            },
          }}
        >
          {children}
        </Box>

        {hasFooterActions && (
          <Box>
            <Divider />
            <Box
              sx={{
                display: "flex",
                gap: 2,
                p: 2.5,
                justifyContent: "flex-end",
              }}
            >
              <Button variant="outlined" onClick={handleClose} size="md">
                {isView ? "Close" : closeText}
              </Button>
              {effectiveOnSubmit && (
                <Button variant="filled" onClick={handleSubmit} size="md">
                  {actionText}
                </Button>
              )}
            </Box>
          </Box>
        )}
      </MuiDrawer>

      {requireConfirmOnClose && (
        <Dialog
          open={confirmOpen}
          title="Discard changes?"
          notes="Are you sure you want to close this? Any unsaved changes will be lost."
          onClose={() => setConfirmOpen(false)}
          onSubmit={handleConfirmDiscard}
          actionText="Discard"
          closeText="Cancel"
          variant="error"
          maxWidth="xs"
        />
      )}
    </>
  );
};
