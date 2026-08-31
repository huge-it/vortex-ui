export interface FileItem {
  file_name: string;
  file_type: string;
  file_data: string | null;
  preview_url: string | null;
  file_path?: string;
  size: number;
  uploading?: boolean;
  src?: string;
}

export interface UploadBaseProps {
  /** Array of file objects */
  value?: FileItem[];
  /** Callback fired when files change */
  onChange?: (files: FileItem[]) => void;
  /** If true, the upload is disabled */
  disabled?: boolean;
  /** If true, multiple files can be selected */
  multiple?: boolean;
  /** Maximum number of files allowed */
  maxFiles?: number;
  /** Maximum size per file in MB (defaults to 10) */
  maxSizeMB?: number;
  /** Label for the upload component */
  label?: string;
  /** Error state or error message */
  error?: string | boolean;
  /** Helper text below the component */
  helperText?: string;
  /** Allowed file types */
  fileTypes?: "all" | "image" | "document";
  /** If true, shows an image preview grid instead of a list for images */
  imgPreview?: boolean;
  /** Maximum number of files to show before collapsing (defaults to 8 for DragDropUpload, 6 for UploadButton) */
  visibleLimit?: number;
  /** Base URL for hosted images (defaults to "http://192.168.0.109:8001/" for backwards compatibility) */
  imgEndpoint?: string;
  /** Custom CSS class name for the root container */
  className?: string;
  /** Custom Material-UI styles for the root container */
  sx?: any;
  /** Callback fired when upload starts */
  onUploadStart?: () => void;
  /** Callback fired when an error occurs during upload */
  onUploadError?: (error: string) => void;
  /** Callback fired when upload is completely successful */
  onUploadSuccess?: (files: FileItem[]) => void;
}

export interface DragDropUploadProps extends UploadBaseProps {
  /** If true, shows an asterisk next to label (if you implement a label wrapper) */
  required?: boolean;
}

export interface UploadButtonProps extends UploadBaseProps {
  /** Button variant */
  variant?: 'text' | 'outlined' | 'contained';
  /** Button color */
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  /** Custom start icon for the button */
  startIcon?: React.ReactNode;
}
