import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Box } from '@mui/material';
import { ModalProps } from './Modal.types';

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ open, title, onClose, actions, children, fullWidth = true, maxWidth = 'sm', ...props }, ref) => {
    return (
      <Dialog
        ref={ref}
        open={open}
        onClose={onClose}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        {...props}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between" pr={1}>
          {title && <DialogTitle sx={{ m: 0, p: 2, flexGrow: 1 }}>{title}</DialogTitle>}
          {onClose && (
            <IconButton
              aria-label="close"
              onClick={onClose}
              sx={{
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          )}
        </Box>
        <DialogContent sx={{ p: 3, pt: title ? 1 : 3 }}>
          {children}
        </DialogContent>
        {actions && <DialogActions sx={{ p: 2 }}>{actions}</DialogActions>}
      </Dialog>
    );
  }
);

Modal.displayName = 'Modal';
export type { ModalProps };
