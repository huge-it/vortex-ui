import * as React$1 from 'react';
import React__default, { ReactNode } from 'react';
import { TextFieldProps as TextFieldProps$1 } from '@mui/material/TextField';
import * as _mui_material from '@mui/material';
import { ButtonProps as ButtonProps$1, DialogProps, SxProps as SxProps$1, Theme as Theme$1, TypographyProps, CardProps as CardProps$1, BoxProps, Grid2Props, SkeletonProps as SkeletonProps$1, PaletteMode } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { SxProps as SxProps$2, Theme as Theme$2 } from '@mui/system';
import { TooltipProps as TooltipProps$1 } from '@mui/material/Tooltip';

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

interface LinkProps {
    href?: string;
    children?: ReactNode;
    variant?: "primary" | "secondary" | "neutral" | "success" | "danger";
    size?: "sm" | "md" | "lg";
    underline?: "none" | "hover" | "always";
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    disabled?: boolean;
    sx?: SxProps$1<Theme$1>;
    [key: string]: any;
}

/**
 * Link Component
 * @param {string} href - Link destination.
 * @param {ReactNode} children - Link text.
 * @param {string} variant - "primary" | "secondary" | "neutral" | "success" | "danger"
 * @param {string} size - "sm" | "md" | "lg"
 * @param {string} underline - "none" | "hover" | "always"
 * @param {ReactNode} startIcon - Icon component to display before text.
 * @param {ReactNode} endIcon - Icon component to display after text.
 * @param {boolean} disabled - Disables the link.
 */
declare const Link: ({ href, children, variant, size, underline, startIcon, endIcon, disabled, sx, ...props }: LinkProps) => React__default.JSX.Element;

interface CheckboxOption {
    label: ReactNode;
    value: string;
    color?: string;
}
interface CheckboxGroupProps {
    value?: string[];
    onChange?: (value: string[]) => void;
    options?: (CheckboxOption | string)[];
    orientation?: "horizontal" | "vertical";
    variant?: "sm" | "md" | "lg";
    disabled?: boolean;
    color?: string;
    borderColor?: string;
    label?: string;
    sx?: SxProps$1<Theme$1>;
    children?: ReactNode;
}
interface CheckboxProps {
    value: string;
    label?: ReactNode;
    disabled?: boolean;
    color?: string;
    borderColor?: string;
    variant?: "sm" | "md" | "lg";
    sx?: SxProps$1<Theme$1>;
}

declare const Checkbox: ({ value, label, disabled, color, borderColor, variant, sx, }: CheckboxProps) => React__default.JSX.Element;
declare const CheckboxGroup: ({ value, onChange, options, orientation, variant, disabled, color, borderColor, label, sx, children, }: CheckboxGroupProps) => React__default.JSX.Element;

interface RadioOption {
    label: ReactNode;
    value: string;
    color?: string;
}
interface RadioGroupProps {
    value?: string;
    onChange?: (value: string) => void;
    options?: (RadioOption | string)[];
    orientation?: "horizontal" | "vertical";
    variant?: "sm" | "md" | "lg";
    disabled?: boolean;
    color?: string;
    unselectedColor?: string;
    label?: string;
    sx?: SxProps$1<Theme$1>;
    children?: ReactNode;
}
interface RadioProps {
    value: string;
    label?: ReactNode;
    disabled?: boolean;
    color?: string;
    unselectedColor?: string;
    variant?: "sm" | "md" | "lg";
    sx?: SxProps$1<Theme$1>;
}

declare const Radio: ({ value, label, disabled, color, unselectedColor, variant, sx, }: RadioProps) => React__default.JSX.Element;
declare const RadioGroup: ({ value, onChange, options, orientation, variant, disabled, color, unselectedColor, label, sx, children, }: RadioGroupProps) => React__default.JSX.Element;

interface ToggleSwitchProps {
    label?: ReactNode;
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    variant?: "sm" | "md" | "lg";
    color?: string;
    unselectedColor?: string;
    labelProps?: TypographyProps;
}

declare const ToggleSwitch: ({ label, checked, defaultChecked, onChange, disabled, variant, color, unselectedColor, labelProps, }: ToggleSwitchProps) => React__default.JSX.Element;

interface CardProps extends Omit<CardProps$1, "variant"> {
    variant?: "none" | "sm" | "md" | "lg" | "xl";
    fullWidth?: boolean;
}

declare const Card: ({ variant, fullWidth, children, sx, ...rest }: CardProps) => React__default.JSX.Element;

interface SheetProps extends Omit<BoxProps, "variant"> {
    variant?: "none" | "sm" | "md" | "lg" | "xl";
    fullHeight?: boolean;
}

declare const Sheet: ({ variant, fullHeight, children, sx, ...rest }: SheetProps) => React__default.JSX.Element;

type CustomGridSpacing = "none" | "xs" | "sm" | "md" | "lg" | "xl";
interface GridProps extends Omit<Grid2Props, "spacing"> {
    spacing?: CustomGridSpacing | Grid2Props["spacing"];
}

declare const Grid: React__default.ForwardRefExoticComponent<Omit<GridProps, "ref"> & React__default.RefAttributes<HTMLDivElement>>;

interface CountBadgeProps {
    /** The count to display. If null or undefined, the badge will not render. */
    count?: React.ReactNode;
    /** The maximum number to display. If count is a number and exceeds maxCount, it renders as {maxCount}+ */
    maxCount?: number;
    /** Whether the badge is in an active state. */
    active?: boolean;
    /** Background color when active. */
    activeBg?: string;
    /** Text color when active. */
    activeColor?: string;
    /** Background color when inactive. */
    inactiveBg?: string;
    /** Text color when inactive. */
    inactiveColor?: string;
    /** Font size of the count. */
    fontSize?: number | string;
    /** Font weight of the count. */
    fontWeight?: number | string;
    /** The minimum width and height of the badge. */
    size?: number | string;
    /** Additional custom styles. */
    sx?: SxProps$1<Theme$1>;
}

declare const CountBadge: ({ count, maxCount, active, activeBg, activeColor, inactiveBg, inactiveColor, fontSize, fontWeight, size, sx, }: CountBadgeProps) => React__default.JSX.Element | null;

interface BaseSliderProps {
    label?: React.ReactNode;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    trackColor?: string;
    railColor?: string;
    showMinMaxLabels?: boolean;
    sx?: SxProps$1<Theme$1>;
}
interface SliderProps extends BaseSliderProps {
    value: number;
    onChange: (value: number) => void;
    valueSuffix?: string;
}
interface RangeSliderProps extends BaseSliderProps {
    value: number[];
    onChange: (value: number[]) => void;
    minDistance?: number;
    showRangeText?: boolean;
}

declare const Slider: ({ label, value, onChange, min, max, step, disabled, trackColor, railColor, showMinMaxLabels, valueSuffix, sx, }: SliderProps) => React__default.JSX.Element;

declare const RangeSlider: ({ label, value, onChange, min, max, step, minDistance, disabled, trackColor, railColor, showMinMaxLabels, showRangeText, sx, }: RangeSliderProps) => React__default.JSX.Element;

interface ProgressProps {
    /** The target percentage (0 to 100). */
    value?: number;
    /** Whether to display the percentage value. */
    showValue?: boolean;
    /** "right" | "top" | "inside" */
    valuePosition?: "right" | "top" | "inside";
    /** Height of the progress bar in px. */
    height?: number;
    /** Border radius of the bar. */
    borderRadius?: number | string;
    /** Background color of the track. */
    bgColor?: string;
    /** Optional function to determine color based on value: (val) => string */
    getColor?: (val: number) => string;
    /** Animation duration in seconds. */
    animationDuration?: number;
    /** "default" | "stepper" */
    variant?: "default" | "stepper";
    /** Number of steps when variant is "stepper". */
    steps?: number;
    /** If > 0, animates the progress bar visually in discrete jumps. */
    stepJump?: number;
    sx?: SxProps$2<Theme$2>;
}
declare const Progress: React__default.FC<ProgressProps>;

interface SkeletonProps extends Omit<SkeletonProps$1, 'variant'> {
    /**
     * The type of content that will be rendered.
     */
    variant?: "text" | "circular" | "rectangular" | "rounded" | "card" | "list-item" | "table-row" | "profile" | "cascading";
    /**
     * For complex variants like card and profile, determines the layout orientation.
     */
    orientation?: "horizontal" | "vertical";
    /**
     * Number of lines to render for the text variant.
     */
    lines?: number;
    /**
     * Number of rows to render for the table-row variant.
     */
    rows?: number;
    /**
     * Number of columns to render for each row in the table-row variant.
     */
    cols?: number;
    /**
     * Applies border radius to the skeleton. Can be a boolean, string (e.g. "sm", "md", "lg"), or number.
     */
    rounded?: boolean | "sm" | "md" | "lg" | number | string;
}

declare const Skeleton: React__default.FC<SkeletonProps>;

interface BackdropProps {
    /**
     * If true, the backdrop is open and visible.
     */
    open: boolean;
    /**
     * Callback fired when the backdrop is clicked.
     */
    onClick?: React__default.MouseEventHandler<HTMLDivElement>;
    /**
     * The z-index of the backdrop.
     */
    zIndex?: number;
    /**
     * The color of the loading spinner.
     */
    color?: string;
    /**
     * If true, the backdrop will be absolute positioned and rendered inline instead of using a portal.
     * Useful for showing a loading state inside a specific container (which must have position relative).
     */
    absolute?: boolean;
    /**
     * The size of the loading spinner in pixels.
     */
    size?: number;
}

declare const Backdrop: React__default.FC<BackdropProps>;

interface TooltipProps extends Omit<TooltipProps$1, "componentsProps" | "slotProps"> {
    /**
     * The background color of the tooltip and its arrow.
     * @default "#fff"
     */
    bgColor?: string;
    /**
     * The text color of the tooltip.
     * @default "#1F2937"
     */
    textColor?: string;
}

declare const Tooltip: React__default.FC<TooltipProps>;

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

export { CustomAccordion as Accordion, type AccordionPanelProps, type AccordionProps, AutoPopulate, AutoPopulateItem, type AutoPopulateItemProps, type AutoPopulateProps, Backdrop, type BackdropProps, type BaseSliderProps, Button, ButtonGroup, type ButtonGroupMethod, type ButtonGroupMethodField, type ButtonGroupProps, type ButtonGroupValue, type ButtonIconPosition, type ButtonProps, type ButtonSeverity, type ButtonSize, type ButtonVariant, Card, type CardProps, Checkbox, CheckboxGroup, type CheckboxGroupProps, type CheckboxOption, type CheckboxProps, ChipInput, type ChipInputProps, ColorModeContext, CountBadge, type CountBadgeProps, type CustomAccordionProps, type CustomGridSpacing, DataTable, type DataTableColumn, type DataTableProps, DefaultSelect, type DefaultSelectProps, Grid, type GridProps, type IconButtonProps, type IconSelectOption, type IconSelectProps, Link, type LinkProps, Modal, type ModalProps, NumberField, type NumberFieldProps, type OptionItem, Progress, type ProgressProps, Radio, RadioGroup, type RadioGroupProps, type RadioOption, type RadioProps, RangeSlider, type RangeSliderProps, Select, type SelectProps, Sheet, type SheetProps, Skeleton, type SkeletonProps, Slider, type SliderProps, TextField, type TextFieldProps, Textarea, ToggleSwitch, type ToggleSwitchProps, Tooltip, type TooltipProps, VortexUIProvider, useColorMode, getTheme as vortexTheme };
