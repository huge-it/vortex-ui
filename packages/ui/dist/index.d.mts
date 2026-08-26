import * as React$1 from 'react';
import React__default, { ReactNode } from 'react';
import { TextFieldProps as TextFieldProps$1 } from '@mui/material/TextField';
import * as _mui_material from '@mui/material';
import { ButtonProps as ButtonProps$1, DialogProps, PaletteMode } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

interface AccordionPanelProps {
    title?: React__default.ReactNode;
    count?: number;
    items?: React__default.ReactNode[];
    children?: React__default.ReactNode;
    expanded?: boolean;
    onChange?: (event: React__default.SyntheticEvent, expanded: boolean) => void;
}
interface CustomAccordionProps extends AccordionPanelProps {
    data?: AccordionPanelProps[];
    singleOpen?: boolean;
}
type AccordionProps = CustomAccordionProps;

declare function CustomAccordion({ data, singleOpen, ...singleProps }: CustomAccordionProps): React$1.JSX.Element;

interface TextFieldProps extends Omit<TextFieldProps$1, "error"> {
    error?: boolean | string;
    bgColor?: string;
    showButton?: boolean;
}

declare const TextField: React__default.ForwardRefExoticComponent<Omit<TextFieldProps, "ref"> & React__default.RefAttributes<HTMLDivElement>>;

interface AutoPopulateProps extends Omit<TextFieldProps, "key" | "onChange" | "value" | "SelectProps"> {
    children?: React__default.ReactNode;
    value?: string;
    onChange?: (event: {
        target: {
            value: string;
        };
    }) => void;
    bgColor?: string;
    label?: string;
}

declare const AutoPopulate: React__default.FC<AutoPopulateProps>;

interface AutoPopulateItemProps {
    value: string | number;
    subtitle?: string;
    children?: React__default.ReactNode;
}
/**
 * A declarative component used to define options for AutoPopulate.
 * It is not rendered directly; AutoPopulate reads its props.
 */
declare const AutoPopulateItem: React__default.FC<AutoPopulateItemProps>;

type ButtonSize = "lg" | "md" | "sm";
type ButtonVariant = "filled" | "outlined" | "ghost" | "text";
type ButtonSeverity = "primary" | "error" | "success" | "info" | "warning";
type ButtonIconPosition = "start" | "end";
interface ButtonProps extends Omit<ButtonProps$1, "variant" | "color" | "size"> {
    /**
     * The size of the button.
     * @default 'md'
     */
    size?: ButtonSize;
    /**
     * The design variant of the button.
     * @default 'filled'
     */
    variant?: ButtonVariant;
    /**
     * The color severity of the button.
     * @default 'primary'
     */
    severity?: ButtonSeverity;
    /**
     * Optional icon to display.
     */
    icon?: React__default.ReactNode;
    /**
     * Position of the icon relative to the text.
     * @default 'start'
     */
    iconPosition?: ButtonIconPosition;
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
    component?: React__default.ElementType;
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
    children?: React__default.ReactNode;
}
interface IconButtonProps extends Omit<ButtonProps, "children" | "iconPosition" | "iconOnly"> {
    /**
     * The icon to display.
     */
    icon: React__default.ReactNode;
}

declare const Button: ({ size, variant, severity, icon, iconPosition, iconOnly, loading, loadingText, disabled, children, sx, ...rest }: ButtonProps) => React$1.JSX.Element;

interface ButtonGroupMethodField {
    name: string;
    label: string;
    type: "text" | "select" | "phone";
    maxLength?: number;
    options?: Array<{
        value: string;
        label: string;
        icon?: React__default.ReactNode;
    }>;
}
interface ButtonGroupMethod {
    key: string;
    label: string;
    icon?: React__default.ReactNode | ((color: string) => React__default.ReactNode);
    fields: ButtonGroupMethodField[];
}
interface ButtonGroupValue {
    type: string | null;
    fields: Record<string, string>;
}
interface ButtonGroupProps {
    /**
     * The currently selected method and its field values.
     */
    value?: ButtonGroupValue;
    /**
     * Callback fired when a method or field value changes.
     */
    onChange?: (value: ButtonGroupValue) => void;
    /**
     * Disables the button group and fields.
     */
    disabled?: boolean;
    /**
     * Background color for the dynamic fields.
     */
    bgColor?: string;
    /**
     * Determines what is displayed on the method buttons.
     */
    variant?: "icon" | "text" | "both";
    /**
     * Preset sizes for the method buttons.
     */
    size?: "sm" | "md" | "lg";
    /**
     * Custom explicit height for the method buttons (overrides size).
     */
    buttonHeight?: number;
    /**
     * Custom explicit width for each method button.
     */
    buttonWidth?: number;
    /**
     * Configuration for available methods and their dynamic fields.
     */
    methods?: ButtonGroupMethod[];
    /**
     * If true, the button group will take up the full width of its container.
     */
    fullWidth?: boolean;
}

declare const ButtonGroup: ({ value, onChange, disabled, bgColor, variant, size, buttonHeight: buttonHeightProp, buttonWidth: buttonWidthProp, methods: methodsProp, fullWidth, }: ButtonGroupProps) => React__default.JSX.Element;

interface ChipInputProps {
    label?: string;
    chips?: string[];
    onChipsChange?: (chips: string[]) => void;
    bgColor?: string;
    disabled?: boolean;
    error?: boolean | string;
    helperText?: string;
    fullWidth?: boolean;
    sx?: SxProps<Theme>;
}

declare const ChipInput: ({ label, chips, onChipsChange, bgColor, disabled, error, helperText, fullWidth, sx, }: ChipInputProps) => React__default.JSX.Element;

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
    render?: (row: T) => React__default.ReactNode;
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

declare const DataTable: React__default.ForwardRefExoticComponent<DataTableProps & React__default.RefAttributes<HTMLDivElement>>;

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

declare const Modal: React__default.ForwardRefExoticComponent<Omit<ModalProps, "ref"> & React__default.RefAttributes<HTMLDivElement>>;

type NumberFieldProps = Omit<TextFieldProps$1, "error" | "onChange" | "value"> & {
    error?: string | boolean;
    bgColor?: string;
    showButton?: boolean;
    allowDecimal?: boolean;
    allowNegative?: boolean;
    min?: number;
    max?: number;
    step?: number;
    decimalPlaces?: number;
    prefix?: ReactNode;
    unit?: ReactNode;
    value?: number | string;
    onChange?: (e: {
        target: {
            value: string;
        };
    }) => void;
};

declare function NumberField({ label, value: externalValue, onChange, onBlur, disabled, bgColor, showButton, allowDecimal, allowNegative, min, max, step, decimalPlaces, sx, prefix, unit, ...props }: NumberFieldProps): React$1.JSX.Element;

interface SearchableSelectProps extends Omit<TextFieldProps, 'onChange'> {
    children?: React__default.ReactNode;
    bgColor?: string;
    label?: string;
    value?: string | number;
    onChange?: (e: {
        target: {
            value: string | number;
        };
    }) => void;
    disabled?: boolean;
}

interface OptionItem {
    label: string;
    color: string;
}
interface IconSelectOption {
    value: string | number;
    label?: string;
    icon?: React__default.ReactNode;
    img?: string;
}
interface IconSelectProps {
    value?: string | number | null;
    onChange?: (val: string | number) => void;
    options: IconSelectOption[];
    disabled?: boolean;
    label?: string;
    placeholder?: string;
    fullWidth?: boolean;
    size?: "small" | "medium";
    bgColor?: string;
    error?: boolean | string;
    helperText?: React__default.ReactNode;
    name?: string;
    id?: string;
    sx?: any;
}
interface DefaultSelectProps {
    value?: string | number;
    recordId?: string | number;
    onUpdate?: (recordId: string | number, value: string | number) => Promise<void> | void;
    options?: Record<number | string, OptionItem>;
    disabled?: boolean;
    label?: string;
    placeholder?: string;
    fullWidth?: boolean;
    size?: "small" | "medium";
    bgColor?: string;
    error?: boolean | string;
    helperText?: React__default.ReactNode;
    name?: string;
    id?: string;
    sx?: any;
}
type SelectProps = (DefaultSelectProps & {
    variant?: "default";
}) | (Omit<SearchableSelectProps, "variant"> & {
    variant: "searchable";
}) | (IconSelectProps & {
    variant: "icon";
});

declare const DefaultSelect: ({ value, recordId, onUpdate, options, disabled, label, placeholder, fullWidth, size, bgColor, error, helperText, name, id, sx, }: DefaultSelectProps) => React__default.JSX.Element;
declare const Select: (props: SelectProps) => React__default.JSX.Element;

interface TextareaProps extends React__default.TextareaHTMLAttributes<HTMLTextAreaElement> {
    variant?: "default" | "expandable" | "minLength";
    label?: string;
    error?: boolean | string;
    bgColor?: string;
    fullWidth?: boolean;
    minRows?: number;
    inputProps?: any;
}

declare const Textarea: React__default.ForwardRefExoticComponent<TextareaProps & React__default.RefAttributes<HTMLTextAreaElement>>;

declare const ColorModeContext: React__default.Context<{
    toggleColorMode: () => void;
    mode: PaletteMode;
}>;
declare const useColorMode: () => {
    toggleColorMode: () => void;
    mode: PaletteMode;
};
interface VortexUIProviderProps {
    children: React__default.ReactNode;
    disableCustomCache?: boolean;
    initialMode?: PaletteMode;
}
declare function VortexUIProvider({ children, disableCustomCache, initialMode }: VortexUIProviderProps): React__default.JSX.Element;

declare const getTheme: (mode: PaletteMode) => _mui_material.Theme;

export { CustomAccordion as Accordion, type AccordionPanelProps, type AccordionProps, AutoPopulate, AutoPopulateItem, type AutoPopulateItemProps, type AutoPopulateProps, Button, ButtonGroup, type ButtonGroupMethod, type ButtonGroupMethodField, type ButtonGroupProps, type ButtonGroupValue, type ButtonIconPosition, type ButtonProps, type ButtonSeverity, type ButtonSize, type ButtonVariant, ChipInput, type ChipInputProps, ColorModeContext, type CustomAccordionProps, DataTable, type DataTableColumn, type DataTableProps, DefaultSelect, type DefaultSelectProps, type IconButtonProps, type IconSelectOption, type IconSelectProps, Modal, type ModalProps, NumberField, type NumberFieldProps, type OptionItem, Select, type SelectProps, TextField, type TextFieldProps, Textarea, VortexUIProvider, useColorMode, getTheme as vortexTheme };
