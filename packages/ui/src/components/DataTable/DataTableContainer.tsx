"use client";
import React, { useState, useEffect, useMemo } from "react";
import { Box, Collapse, useTheme, alpha, Badge } from "@mui/material";
import { Tooltip } from "../Tooltip";
import { IconButton } from "../Button";
import FilterListIcon from "@mui/icons-material/FilterList";
import { DataTable } from "./DataTable";
import { TableToolbar } from "./TableToolbar";
import { DataTableProps, TableHeadItem, TableRowItem } from "./DataTable.types";

export interface DataTableContainerProps extends DataTableProps {
  /** Custom Search Component rendered on the left of toolbar */
  SearchComponent?: React.ReactNode;

  /** Custom Filter Component rendered inside collapse drawer */
  FilterComponent?: React.ReactNode;

  /** Whether filter drawer is open */
  filterOpen?: boolean;
  onFilterToggle?: () => void;

  /** Whether any filters are actively applied (shows badge dot) */
  hasActiveFilters?: boolean;

  /** Enable group mode toggle (compact vs normal) */
  onGroupModeChange?: (mode: "compact" | "normal") => void;

  /** Custom style overrides for container wrapper */
  containerSx?: any;
}

export const DataTableContainer: React.FC<DataTableContainerProps> = ({
  tableHead: inputTableHead = [],
  tableRow: inputTableRow = [],
  columns,
  data,
  loading = false,
  isLoading = false,
  pageCount = 0,
  pageNumber = 1,
  onPageChange,
  totalItems = 0,
  order,
  orderBy,
  setOrderBy,
  setOrder,
  selected,
  setSelected,
  noCheckBox = false,
  showSelection = true,
  emptyMessage = "No records found",
  limitEnd = "15",
  onLimitChange,
  pageSizeOptions = [15, 25, 50, 100],
  frozenCount: initialFrozenCount = 0,
  colWidths: inputColWidths,
  groupMode = "compact",
  onGroupModeChange,
  frozenColumnIds: initialFrozenColumnIds = [],
  onVisibilityChange: externalVisibilityChange,
  onColumnReorder: externalColumnReorder,
  onColumnFilter,
  columnFilters,
  ActionComponent,
  SearchComponent,
  FilterComponent,
  filterOpen: externalFilterOpen,
  onFilterToggle,
  hasActiveFilters = false,
  containerSx,
}) => {
  const theme = useTheme();

  // Internal Filter Collapse Toggle
  const [internalFilterOpen, setInternalFilterOpen] = useState(false);
  const isFilterOpen = externalFilterOpen ?? internalFilterOpen;
  const toggleFilter = () => {
    if (onFilterToggle) {
      onFilterToggle();
    } else {
      setInternalFilterOpen((prev) => !prev);
    }
  };

  // Internal Column Visibility & Pinned Columns State
  const [visibleColumns, setVisibleColumns] = useState<(string | number)[]>(
    inputTableHead.map((h) => h.id),
  );

  const [pinnedExtra, setPinnedExtra] = useState<(string | number)[]>([]);

  useEffect(() => {
    if (inputTableHead.length > 0) {
      setVisibleColumns(inputTableHead.map((h) => h.id));
    }
  }, [inputTableHead]);

  const handleColumnVisibilityChange = (
    colId: string | number,
    visible: boolean,
  ) => {
    if (externalVisibilityChange) {
      externalVisibilityChange(colId, visible);
    } else {
      setVisibleColumns((prev) =>
        visible ? [...prev, colId] : prev.filter((id) => id !== colId),
      );
    }
  };

  const handleColumnReorder = (colId: string | number, isPinning?: boolean) => {
    if (externalColumnReorder) {
      externalColumnReorder(colId, isPinning ?? false);
    } else {
      setPinnedExtra((prev) =>
        isPinning
          ? prev.includes(colId)
            ? prev
            : [...prev, colId]
          : prev.filter((id) => id !== colId),
      );
    }
  };

  // Filter Table Head by Visible Columns
  const filteredHead = useMemo(() => {
    if (!inputTableHead || inputTableHead.length === 0) return inputTableHead;
    return inputTableHead.filter((h) => visibleColumns.includes(h.id));
  }, [inputTableHead, visibleColumns]);

  // Compute Frozen Count & Columns
  const frozenCount = useMemo(() => {
    if (initialFrozenCount > 0) return initialFrozenCount;
    return 1 + pinnedExtra.length;
  }, [initialFrozenCount, pinnedExtra]);

  const frozenColumnIds = useMemo(() => {
    if (initialFrozenColumnIds.length > 0) return initialFrozenColumnIds;
    return [inputTableHead[0]?.id, ...pinnedExtra].filter(Boolean) as (
      string | number
    )[];
  }, [initialFrozenColumnIds, inputTableHead, pinnedExtra]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
        ...containerSx,
      }}
    >
      {/* Top Controls Toolbar: Search + Filter Toggle + Table Toolbar */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          flexShrink: 0,
        }}
      >
        {/* Custom Search Filter Component */}
        {SearchComponent && (
          <Box sx={{ flex: 1, minWidth: 200 }}>{SearchComponent}</Box>
        )}

        {/* Filter Toggle Button */}
        {FilterComponent && (
          <Tooltip title="Filters" placement="top" arrow>
            <Badge
              color="primary"
              variant="dot"
              invisible={!hasActiveFilters}
              sx={{ "& .MuiBadge-dot": { top: 4, right: 4 } }}
            >
              <IconButton
                size="sm"
                onClick={toggleFilter}
                icon={<FilterListIcon sx={{ fontSize: 18 }} />}
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: "6px",
                  border: `1px solid ${theme.palette.divider}`,
                  bgcolor: isFilterOpen
                    ? alpha(theme.palette.primary.main, 0.12)
                    : "background.paper",
                  color: isFilterOpen ? "primary.main" : "text.primary",
                  "&:hover": {
                    bgcolor: alpha(theme.palette.primary.main, 0.08),
                    borderColor: "primary.main",
                  },
                }}
              />
            </Badge>
          </Tooltip>
        )}

        {/* Column Display & View Toolbar */}
        <TableToolbar
          columns={inputTableHead.map((h) => ({ id: h.id, label: h.label }))}
          visibleColumns={visibleColumns}
          onVisibilityChange={handleColumnVisibilityChange}
          frozenColumnIds={frozenColumnIds}
          onColumnReorder={handleColumnReorder}
          groupMode={groupMode}
          onGroupModeChange={onGroupModeChange}
        />
      </Box>

      {/* Filter Drawer / Panel Collapse */}
      {FilterComponent && (
        <Collapse
          in={isFilterOpen}
          timeout="auto"
          unmountOnExit
          sx={{ flexShrink: 0 }}
        >
          <Box
            sx={{
              p: 2,
              borderRadius: "8px",
              border: `1px solid ${theme.palette.divider}`,
              bgcolor: "background.paper",
            }}
          >
            {FilterComponent}
          </Box>
        </Collapse>
      )}

      {/* Core Data Table */}
      <Box
        sx={{
          flex: 1,
          minHeight: 0,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <DataTable
          columns={columns}
          data={data}
          tableHead={filteredHead}
          tableRow={inputTableRow}
          loading={loading || isLoading}
          pageCount={pageCount}
          pageNumber={pageNumber}
          onPageChange={onPageChange}
          totalItems={totalItems}
          order={order}
          orderBy={orderBy}
          setOrderBy={setOrderBy}
          setOrder={setOrder}
          selected={selected}
          setSelected={setSelected}
          noCheckBox={noCheckBox}
          showSelection={showSelection}
          emptyMessage={emptyMessage}
          limitEnd={limitEnd}
          onLimitChange={onLimitChange}
          pageSizeOptions={pageSizeOptions}
          frozenCount={frozenCount}
          colWidths={inputColWidths}
          groupMode={groupMode}
          frozenColumnIds={frozenColumnIds}
          onVisibilityChange={externalVisibilityChange}
          onColumnReorder={externalColumnReorder}
          onColumnFilter={onColumnFilter}
          columnFilters={columnFilters}
          ActionComponent={ActionComponent}
        />
      </Box>
    </Box>
  );
};

export default DataTableContainer;
