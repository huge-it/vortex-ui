import { DialogProps as MuiDialogProps } from '@mui/material';

export interface DialogProps extends Omit<MuiDialogProps, 'open' | 'title'> {
  open: boolean;
  title?: string;
  onClose?: () => void;
  onSubmit?: () => void;
  notes?: React.ReactNode;
  closeText?: string;
  actionText?: string;
  variant?: 'error' | 'success' | 'info' | 'default';
  actions?: React.ReactNode;
  children?: React.ReactNode;
}
