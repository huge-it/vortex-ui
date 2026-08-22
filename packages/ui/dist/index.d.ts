import React$1 from 'react';
import * as _mui_material from '@mui/material';
import { ButtonProps as ButtonProps$1, TextFieldProps, SelectProps as SelectProps$1, DialogProps, PaletteMode } from '@mui/material';

interface ButtonProps extends Omit<ButtonProps$1, "variant" | "color" | "size"> {
    /**
     * The size of the button.
     * @default 'md'
     */
    size?: "lg" | "md" | "sm";
    /**
     * The design variant of the button.
     * @default 'filled'
     */
    variant?: "filled" | "outlined" | "ghost" | "text";
    /**
     * The color severity of the button.
     * @default 'primary'
     */
    severity?: "primary" | "error" | "success" | "info" | "warning";
    /**
     * Optional icon to display.
     */
    icon?: React$1.ReactNode;
    /**
     * Position of the icon relative to the text.
     * @default 'left'
     */
    iconPosition?: "start" | "end";
    /**
     * If true, styles the button as an icon-only square button.
     * @default false
     */
    iconOnly?: boolean;
    /**
     * If true, displays a loading spinner and disables the button.
     * @default false
     */
    loading?: boolean;
    /**
     * Optional text to display while loading.
     */
    loadingText?: string;
    /**
     * The element component or string tag to render (e.g. 'a', Link).
     */
    component?: React$1.ElementType;
    /**
     * URL for link buttons.
     */
    href?: string;
    /**
     * Target attribute for link buttons (e.g. '_blank').
     */
    target?: string;
    /**
     * Button content
     */
    children?: React$1.ReactNode;
}

declare const Button: ({ size, variant, severity, icon, iconPosition, iconOnly, loading, loadingText, disabled, children, sx, ...rest }: ButtonProps) => React$1.JSX.Element;

type InputProps = Omit<TextFieldProps, 'variant'> & {
    /**
     * The variant of the input field.
     * @default 'outlined'
     */
    variant?: 'outlined' | 'filled' | 'standard';
};

declare const Input: React$1.ForwardRefExoticComponent<Omit<InputProps, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

interface SelectOption {
    label: string;
    value: string | number;
}
interface SelectProps extends Omit<SelectProps$1, 'variant'> {
    /**
     * Label for the select field
     */
    label?: string;
    /**
     * Supporting descriptive text below the select field
     */
    helperText?: string;
    /**
     * Predefined options to render. Alternatively, pass MenuItem children directly.
     */
    options?: SelectOption[];
    /**
     * Display input in error state
     */
    error?: boolean;
}

declare const Select: React$1.ForwardRefExoticComponent<Omit<SelectProps, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

interface ModalProps extends Omit<DialogProps, 'open'> {
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

declare const Modal: React$1.ForwardRefExoticComponent<Omit<ModalProps, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

interface DataTableColumn<T = any> {
    /**
     * Unique key identifier for the column
     */
    key: string;
    /**
     * Heading text displayed at the top of the column
     */
    header: string;
    /**
     * Optional custom render function for cells in this column
     */
    render?: (row: T) => React$1.ReactNode;
    /**
     * Alignment of column content
     */
    align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
}
interface DataTableProps {
    /**
     * Column definitions
     */
    columns: DataTableColumn[];
    /**
     * Array of data records to display
     */
    data: any[];
    /**
     * Toggles standard loading overlay/spinner
     * @default false
     */
    isLoading?: boolean;
    /**
     * Message shown when no records are available
     * @default 'No data available'
     */
    emptyMessage?: string;
}

declare const DataTable: React$1.ForwardRefExoticComponent<DataTableProps & React$1.RefAttributes<HTMLDivElement>>;

declare const ColorModeContext: React$1.Context<{
    toggleColorMode: () => void;
    mode: PaletteMode;
}>;
declare const useColorMode: () => {
    toggleColorMode: () => void;
    mode: PaletteMode;
};
interface VortexUIProviderProps {
    children: React$1.ReactNode;
    disableCustomCache?: boolean;
    initialMode?: PaletteMode;
}
declare function VortexUIProvider({ children, disableCustomCache, initialMode }: VortexUIProviderProps): React$1.JSX.Element;

declare const getTheme: (mode: PaletteMode) => _mui_material.Theme;

export { Button, type ButtonProps, ColorModeContext, DataTable, type DataTableColumn, type DataTableProps, Input, type InputProps, Modal, type ModalProps, Select, type SelectOption, type SelectProps, VortexUIProvider, useColorMode, getTheme as vortexTheme };
