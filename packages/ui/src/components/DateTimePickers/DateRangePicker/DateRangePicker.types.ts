export interface DateRange {
  startDate: string;
  endDate: string;
}

export interface DateRangePickerProps {
  label?: string;
  startDate?: string;
  endDate?: string;
  onChange?: (range: DateRange) => void;
  minDate?: string;
  maxDate?: string;
  bgColor?: string;
  error?: string | boolean;
  disabled?: boolean;
  format?: string;
  /**
   * If true, shows dropdowns for Month and Year in the calendar headers.
   * Default: true
   */
  showDropdowns?: boolean;
  /**
   * If true, shows a sidebar with quick select options (e.g. "Today", "Last 30 Days").
   * Default: true
   */
  showQuickSelect?: boolean;
  sx?: any;
}
