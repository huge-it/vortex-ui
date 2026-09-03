import React from "react";

export interface DataTableColumn<T = any> {
  /** Unique key identifier for the column */
  key: string;
  /** Heading text displayed at the top of the column */
  header: string;
  /** Optional custom render function for cells in this column */
  render?: (row: T) => React.ReactNode;
  /** Alignment of column content */
  align?: "left" | "center" | "right" | "justify" | "inherit";
  /** Optional width in pixels */
  width?: number;
  /** Filter options for column header menu */
  filterOptions?: any[];
}

export interface TableHeadItem {
  id: string | number;
  label: string;
  value?: string;
  align?: "left" | "center" | "right" | "justify" | "inherit";
  filterOptions?: any[];
  width?: number | string;
}

export interface TableCellItem {
  comp: React.ReactNode;
  align?: "left" | "center" | "right" | "justify" | "inherit";
  actionIcon?: React.ReactNode;
}

export interface TableRowItem {
  id: string | number;
  data: TableCellItem[];
}

export interface DataTableProps {
  /** Column definitions (simple mode) */
  columns?: DataTableColumn[];
  /** Array of data records (simple mode) */
  data?: any[];

  /** Advanced table header definitions */
  tableHead?: TableHeadItem[];
  /** Advanced table row definitions */
  tableRow?: TableRowItem[];

  /** Loading state */
  loading?: boolean;
  /** Legacy loading prop */
  isLoading?: boolean;

  /** Pagination details */
  pageCount?: number;
  pageNumber?: number;
  onPageChange?: (event: any, page: number) => void;
  setPageNumber?: (page: number) => void;
  totalItems?: number;
  limitEnd?: string | number;
  onLimitChange?: (event: any) => void;
  pageSizeOptions?: number[];

  /** Sorting details */
  order?: "asc" | "desc";
  orderBy?: string;
  setOrderBy?: (property: string) => void;
  setOrder?: (order: "asc" | "desc") => void;

  /** Selection details */
  selected?: (string | number)[];
  setSelected?: (selected: (string | number)[]) => void;
  noCheckBox?: boolean;
  showSelection?: boolean;

  /** Empty state message */
  emptyMessage?: string;

  /** Column freezing and resizing */
  frozenCount?: number;
  colWidths?: number[];
  groupMode?: "compact" | "normal";
  frozenColumnIds?: (string | number)[];

  /** Callbacks for header actions */
  onVisibilityChange?: (colId: string | number, visible: boolean) => void;
  onColumnReorder?: (colId: string | number, isPinning: boolean) => void;
  onColumnFilter?: (colId: string | number, vals: any[]) => void;
  columnFilters?: Record<string | number, any[]>;

  /** Component rendered when rows are selected */
  ActionComponent?: React.ComponentType<any> | React.ReactNode;

  /** Maximum height of the table container for vertical scrolling */
  maxHeight?: number | string;
  /** Whether the table header should stick to the top during vertical scroll */
  stickyHeader?: boolean;
}
