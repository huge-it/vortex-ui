import React from 'react';

export interface DataTableColumn<T = any> {
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
  render?: (row: T) => React.ReactNode;
  /**
   * Alignment of column content
   */
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
}

export interface DataTableProps {
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
