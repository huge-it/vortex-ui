import { DialogProps } from '@mui/material';

export interface ModalProps extends Omit<DialogProps, 'open'> {
  /**
   * Whether the modal is open or not.
   */
  open: boolean;
  /**
   * Title shown at the top of the modal.
   */
  title?: string;
  /**
   * Callback fired when the component requests to be closed.
   */
  onClose?: () => void;
  /**
   * Footer actions (typically buttons).
   */
  actions?: React.ReactNode;
  /**
   * Modal content.
   */
  children?: React.ReactNode;
}
