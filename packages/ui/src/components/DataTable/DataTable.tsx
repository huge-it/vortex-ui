"use client";
import { ChevronLeft, ChevronRight, LockOutlined } from "@mui/icons-material";
import NoDataIcon from "@mui/icons-material/InboxOutlined";
import {
  alpha,
  Box,
  Button,
  ButtonGroup,
  Collapse,
  IconButton,
  MenuItem,
  Paper,
  Select,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import ColumnHeaderMenu from "./ColumnHeaderMenu";
import { DataTableProps, TableHeadItem, TableRowItem } from "./DataTable.types";
import StyledCheckbox from "./StyledCheckbox";

const visuallyHidden = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: -1,
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px",
} as const;

interface UIColors {
  headerBg: string;
  borderColor: string;
  linkBlue: string;
  textDark: string;
  oddRowBg: string;
  evenRowBg: string;
  frozenShadow: string;
  hoverBg: string;
  selectedBg: string;
  selectedHoverBg: string;
}

const LoadingTable = ({
  colSpan,
  rowCount = 5,
  uiColors,
}: {
  colSpan: number;
  rowCount?: number;
  uiColors: UIColors;
}) => (
  <>
    {[...Array(rowCount)].map((_, i) => (
      <TableRow
        key={i}
        sx={{ bgcolor: i % 2 === 0 ? uiColors.oddRowBg : uiColors.evenRowBg }}
      >
        {[...Array(colSpan)].map((_, j) => (
          <TableCell
            key={j}
            sx={{
              borderRight: `1px solid ${uiColors.borderColor}`,
              borderBottom: `1px solid ${uiColors.borderColor}`,
              p: 1.5,
            }}
          >
            <Skeleton variant="text" height={25} />
          </TableCell>
        ))}
      </TableRow>
    ))}
  </>
);

const TableNoData = ({
  colSpan,
  message,
}: {
  colSpan: number;
  message?: string;
}) => (
  <TableRow>
    <TableCell colSpan={colSpan} sx={{ py: 10, border: "none" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          opacity: 0.6,
        }}
      >
        <NoDataIcon sx={{ fontSize: 60, mb: 1, color: "text.secondary" }} />
        <Typography variant="body1" color="text.secondary" fontWeight={500}>
          {message || "No Data Available"}
        </Typography>
      </Box>
    </TableCell>
  </TableRow>
);

const getFrozenLeft = (colIndex: number, colWidths: number[]) => {
  return colWidths.slice(0, colIndex).reduce((sum, w) => sum + w, 0);
};

const sortLabelSx = (uiColors: UIColors) => ({
  fontWeight: 600,
  whiteSpace: "nowrap",
  "& .MuiTableSortLabel-icon": {
    opacity: "1 !important",
    color: `${uiColors.textDark} !important`,
  },
});

function EnhancedTableHead({
  onSelectAllClick,
  order,
  orderBy,
  numSelected,
  rowCount,
  onRequestSort,
  tableHead,
  noCheckBox,
  showSelection,
  frozenCount,
  colWidths,
  frozenColumnIds = [],
  onVisibilityChange,
  onColumnReorder,
  onColumnFilter,
  columnFilters = {},
  uiColors,
  stickyHeader,
}: {
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: "asc" | "desc";
  orderBy: string;
  numSelected: number;
  rowCount: number;
  onRequestSort: (event: React.MouseEvent, property: string) => void;
  tableHead: TableHeadItem[];
  noCheckBox?: boolean;
  showSelection?: boolean;
  frozenCount: number;
  colWidths: number[];
  frozenColumnIds?: (string | number)[];
  onVisibilityChange?: (colId: string | number, visible: boolean) => void;
  onColumnReorder?: (colId: string | number, isPinning: boolean) => void;
  onColumnFilter?: (colId: string | number, vals: any[]) => void;
  columnFilters?: Record<string | number, any[]>;
  uiColors: UIColors;
  stickyHeader?: boolean;
}) {
  return (
    <TableHead>
      <TableRow
        sx={{
          "& .VortexUITableCell-head": {
            color: uiColors.textDark,
            fontWeight: 500,
            fontSize: "14px",
            borderBottom: `1px solid ${uiColors.borderColor}`,
            borderRight: `1px solid ${uiColors.borderColor}`,
            bgcolor: uiColors.headerBg,
            backgroundColor: uiColors.headerBg,
            py: 1.25,
          },
          "& .VortexUITableCell-head:last-child": { borderRight: "none" },
        }}
      >
        {tableHead.map((headCell, colIndex) => {
          const isFrozen = colIndex < frozenCount;
          const isLastFrozen = colIndex === frozenCount - 1;
          const isFirst = colIndex === 0;
          const isActive = orderBy === headCell.value;

          const SortOrLabel = () =>
            headCell.value ? (
              <TableSortLabel
                active={isActive}
                direction={isActive ? order : "asc"}
                onClick={(e) => onRequestSort(e, headCell.value!)}
                sx={sortLabelSx(uiColors)}
              >
                {headCell.label}
                {isActive && (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                )}
              </TableSortLabel>
            ) : (
              <Typography
                sx={{ fontWeight: 500, fontSize: "14px", whiteSpace: "nowrap" }}
              >
                {headCell.label}
              </Typography>
            );

          return (
            <TableCell
              key={headCell.id}
              align={headCell.align || "left"}
              sortDirection={isActive ? order : false}
              sx={{
                width: colWidths[colIndex] || "auto",
                minWidth: colWidths[colIndex] || "auto",
                maxWidth: colWidths[colIndex] || "none",
                position: stickyHeader ? "sticky" : "static",
                top: stickyHeader ? 0 : "auto",
                zIndex: isFrozen ? 40 : 20,
                bgcolor: uiColors.headerBg,
                backgroundColor: uiColors.headerBg,
                ...(isFrozen && {
                  left: getFrozenLeft(colIndex, colWidths),
                }),
                ...(isLastFrozen && {
                  boxShadow: uiColors.frozenShadow,
                }),
                ...(isFirst && !noCheckBox && showSelection && { pl: 0.5 }),
                overflow: "visible",
                "& .column-header-menu": {
                  opacity: 0,
                  transition: "opacity 0.2s",
                },
                "&:hover .column-header-menu, & .column-header-menu.menu-open":
                  {
                    opacity: 1,
                  },
              }}
            >
              {isFirst && !noCheckBox && showSelection ? (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <StyledCheckbox
                    variant="sm"
                    indeterminate={numSelected > 0 && numSelected < rowCount}
                    checked={rowCount > 0 && numSelected === rowCount}
                    onChange={onSelectAllClick}
                  />

                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <SortOrLabel />
                  </Box>
                </Box>
              ) : (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <SortOrLabel />
                  </Box>

                  <ColumnHeaderMenu
                    colId={headCell.id}
                    isFirstColumn={false}
                    isPinned={
                      frozenColumnIds.includes(headCell.id) && colIndex !== 0
                    }
                    filterOptions={headCell.filterOptions || []}
                    filterValues={columnFilters[headCell.id] || []}
                    onFilter={onColumnFilter}
                    onHide={(colId) => onVisibilityChange?.(colId, false)}
                    onPin={onColumnReorder}
                  />
                </Box>
              )}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
}

function PaginationBar({
  pageNumber,
  pageCount,
  limitEnd,
  onPageChange,
  onLimitChange,
  pageSizeOptions,
  uiColors,
}: {
  pageNumber: number;
  pageCount: number;
  limitEnd: string | number;
  onPageChange?: (event: any, page: number) => void;
  onLimitChange?: (event: any) => void;
  pageSizeOptions: number[];
  uiColors: UIColors;
}) {
  const goTo = (page: number) => {
    if (page < 1 || page > pageCount) return;
    onPageChange?.(null, page);
  };

  const buildPages = () => {
    if (pageCount <= 7)
      return Array.from({ length: pageCount }, (_, i) => i + 1);
    const delta = 2;
    const left = Math.max(2, pageNumber - delta);
    const right = Math.min(pageCount - 1, pageNumber + delta);
    const pages: (number | string)[] = [1];
    if (left > 2) pages.push("…");
    for (let i = left; i <= right; i++) pages.push(i);
    if (right < pageCount - 1) pages.push("…");
    pages.push(pageCount);
    return pages;
  };

  const pages = buildPages();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 2,
        py: 1,
        borderTop: `1px solid ${uiColors.borderColor}`,
        bgcolor: "background.paper",
        flexWrap: "wrap",
        gap: 1,
      }}
    >
      <Select
        size="small"
        value={String(limitEnd)}
        onChange={onLimitChange}
        variant="outlined"
        MenuProps={{
          anchorOrigin: { vertical: "top", horizontal: "left" },
          transformOrigin: { vertical: "bottom", horizontal: "left" },
          PaperProps: {
            sx: {
              mt: "-5px",
              borderRadius: "10px",
              border: `1px solid ${uiColors.borderColor}`,
              boxShadow: "0px 3px 4.6px 0px rgba(0,0,0,0.12)",
              mb: 0.5,
              overflow: "hidden",
              "& .VortexUIList-root": {
                p: 0,
              },
              "& .VortexUIMenuItem-root": {
                borderRadius: 0,
                fontSize: "13px",
                color: uiColors.textDark,
                px: 1.5,
                py: 0.8,
                mx: 0,
                width: "100%",
                boxSizing: "border-box",
                "&:hover": { bgcolor: uiColors.hoverBg },
                "&.VortexUI-selected": {
                  bgcolor: uiColors.hoverBg,
                  fontWeight: 400,
                },
                "&.VortexUI-selected:hover": {
                  bgcolor: uiColors.selectedHoverBg,
                },
              },
            },
          },
        }}
        sx={{
          fontSize: "13px",
          fontWeight: 400,
          color: uiColors.textDark,
          height: "30px",
          "& .VortexUIOutlinedInput-notchedOutline": {
            borderColor: uiColors.borderColor,
            borderRadius: "6px",
          },
          "&:hover .VortexUIOutlinedInput-notchedOutline": {
            borderColor: uiColors.borderColor,
          },
          "&.VortexUI-focused .VortexUIOutlinedInput-notchedOutline": {
            borderColor: uiColors.linkBlue,
            borderWidth: "1px",
          },
          "& .VortexUISelect-select": { py: 0, pr: "24px !important", pl: 1.5 },
        }}
      >
        {pageSizeOptions.map((size) => (
          <MenuItem
            key={size}
            value={String(size)}
            sx={{ fontSize: "13px", color: uiColors.textDark, fontWeight: 400 }}
          >
            {size}/Page
          </MenuItem>
        ))}
      </Select>

      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
        <IconButton
          size="small"
          onClick={() => goTo(pageNumber - 1)}
          disabled={pageNumber <= 1}
          sx={{
            width: 30,
            height: 30,
            borderRadius: "6px",
            color: pageNumber <= 1 ? "text.disabled" : uiColors.textDark,
            "&:hover": {
              bgcolor: pageNumber <= 1 ? "transparent" : uiColors.hoverBg,
            },
            p: 0,
          }}
        >
          <ChevronLeft fontSize="small" />
        </IconButton>

        {pages.map((p, idx) =>
          p === "…" ? (
            <Typography
              key={`e-${idx}`}
              sx={{
                fontSize: "13px",
                color: "text.secondary",
                px: 0.5,
                lineHeight: "30px",
              }}
            >
              ...
            </Typography>
          ) : (
            <IconButton
              key={p}
              size="small"
              onClick={() => goTo(p as number)}
              sx={{
                width: 30,
                height: 30,
                borderRadius: "6px",
                p: 0,
                fontSize: "13px",
                fontWeight: p === pageNumber ? 600 : 400,
                bgcolor: p === pageNumber ? uiColors.linkBlue : "transparent",
                color: p === pageNumber ? "#ffffff" : uiColors.textDark,
                "&:hover": {
                  bgcolor:
                    p === pageNumber ? uiColors.linkBlue : uiColors.hoverBg,
                },
                transition: "background 0.15s",
              }}
            >
              {p}
            </IconButton>
          ),
        )}

        <IconButton
          size="small"
          onClick={() => goTo(pageNumber + 1)}
          disabled={pageNumber >= pageCount}
          sx={{
            width: 30,
            height: 30,
            borderRadius: "6px",
            color:
              pageNumber >= pageCount ? "text.disabled" : uiColors.textDark,
            "&:hover": {
              bgcolor:
                pageNumber >= pageCount ? "transparent" : uiColors.hoverBg,
            },
            p: 0,
          }}
        >
          <ChevronRight fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}

export function FreezeColumnsControl({
  frozenCount,
  onChange,
  maxFreeze = 3,
}: {
  frozenCount: number;
  onChange: (count: number) => void;
  maxFreeze?: number;
}) {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <LockOutlined sx={{ fontSize: 16, color: "primary.main" }} />
      <Typography fontSize="13px" color="text.primary" fontWeight={500}>
        Freeze:
      </Typography>
      <ButtonGroup size="small" variant="outlined">
        {[0, 1, 2].slice(0, maxFreeze + 1).map((n) => (
          <Tooltip
            key={n}
            title={
              n === 0 ? "No freeze" : `Freeze ${n} column${n > 1 ? "s" : ""}`
            }
          >
            <Button
              onClick={() => onChange(n)}
              sx={{
                minWidth: "36px",
                fontSize: "12px",
                fontWeight: 600,
                borderColor: theme.palette.divider,
                "&:hover": {
                  bgcolor:
                    frozenCount === n
                      ? theme.palette.primary.main
                      : alpha(theme.palette.primary.main, 0.08),
                  borderColor: theme.palette.primary.main,
                },
              }}
            >
              {n === 0 ? "None" : n}
            </Button>
          </Tooltip>
        ))}
      </ButtonGroup>
    </Box>
  );
}

export const DataTable = React.forwardRef<HTMLDivElement, DataTableProps>(
  (
    {
      columns,
      data,
      tableHead: customTableHead,
      tableRow: customTableRow,
      loading = false,
      isLoading = false,
      pageCount = 0,
      pageNumber = 1,
      onPageChange,
      order: customOrder,
      orderBy: customOrderBy,
      setOrderBy: customSetOrderBy,
      setOrder: customSetOrder,
      selected: customSelected,
      setSelected: customSetSelected,
      noCheckBox = false,
      showSelection: customShowSelection,
      emptyMessage = "No records found",
      limitEnd = "15",
      onLimitChange,
      pageSizeOptions = [15, 25, 50, 100],
      frozenCount = 0,
      colWidths,
      groupMode = "compact",
      frozenColumnIds = [],
      onVisibilityChange,
      onColumnReorder,
      onColumnFilter,
      columnFilters: externalColumnFilters,
      ActionComponent,
      maxHeight,
      stickyHeader = true,
    },
    ref,
  ) => {
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";

    const uiColors: UIColors = React.useMemo(
      () => ({
        headerBg: isDark ? theme.palette.background.default : "#EDF1FF",
        borderColor: theme.palette.divider || "#D3D6E2",
        linkBlue: theme.palette.primary.main || "#4772FF",
        textDark: theme.palette.text.primary || "#000F41",
        oddRowBg: isDark ? theme.palette.background.default : "#F4F5F8",
        evenRowBg: isDark ? theme.palette.background.paper : "#EDF1FF",
        frozenShadow: isDark
          ? "4px 0 6px 0px rgba(0, 0, 0, 0.4)"
          : "4px 0 2.7px 0px rgba(20, 22, 22, 0.06)",
        hoverBg: isDark ? "#232936" : "#E8ECFF",
        selectedBg: isDark ? "#28334E" : "#E0E7FF",
        selectedHoverBg: isDark ? "#2E3B5C" : "#D6E0FF",
      }),
      [theme, isDark],
    );

    // Adapter for simple columns/data props
    const tableHead: TableHeadItem[] = React.useMemo(() => {
      if (customTableHead && customTableHead.length > 0) return customTableHead;
      if (!columns) return [];
      return columns.map((col) => ({
        id: col.key,
        label: col.header,
        value: col.key,
        align: col.align || "left",
        filterOptions: col.filterOptions,
      }));
    }, [customTableHead, columns]);

    const tableRow: TableRowItem[] = React.useMemo(() => {
      if (customTableRow && customTableRow.length > 0) return customTableRow;
      if (!data || !columns) return [];
      return data.map((row, idx) => ({
        id: row.id ?? idx,
        data: columns.map((col) => ({
          comp: col.render ? col.render(row) : row[col.key],
          align: col.align || "left",
        })),
      }));
    }, [customTableRow, data, columns]);

    // Fallbacks for state
    const [internalOrder, setInternalOrder] = useState<"asc" | "desc">("asc");
    const [internalOrderBy, setInternalOrderBy] = useState<string>("");
    const order = customOrder ?? internalOrder;
    const orderBy = customOrderBy ?? internalOrderBy;
    const setOrder = customSetOrder ?? setInternalOrder;
    const setOrderBy = customSetOrderBy ?? setInternalOrderBy;

    const [internalSelected, setInternalSelected] = useState<
      (string | number)[]
    >([]);
    const selected = customSelected ?? internalSelected;
    const setSelected = customSetSelected ?? setInternalSelected;

    const showSelection =
      customShowSelection !== undefined
        ? customShowSelection
        : !!ActionComponent;

    const effectiveLoading = loading || isLoading;
    const colCount = tableHead.length + (showSelection && !noCheckBox ? 1 : 0);

    const [columnFilters, setColumnFilters] = useState<
      Record<string | number, any[]>
    >({});
    const mergedColumnFilters = { ...columnFilters, ...externalColumnFilters };

    const handleColumnFilter = (colId: string | number, vals: any[]) => {
      setColumnFilters((prev) => ({
        ...prev,
        [colId]: vals,
      }));
      onColumnFilter?.(colId, vals);
    };

    const resolvedColWidths = tableHead.map((head, index) => {
      if (head.width)
        return typeof head.width === "number"
          ? head.width
          : parseInt(head.width as string, 10);
      if (colWidths && colWidths.length === tableHead.length) {
        return colWidths[index];
      }
      return index < frozenCount ? 160 : 0;
    });

    const totalTableWidth = resolvedColWidths.reduce((a, b) => a + b, 0);

    const handleRequestSort = (event: React.MouseEvent, property: string) => {
      const isAsc = orderBy === property && order === "asc";
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(property);
    };

    const handleSelectAllClick = (
      event: React.ChangeEvent<HTMLInputElement>,
    ) => {
      setSelected(event.target.checked ? tableRow.map((n) => n.id) : []);
    };

    const showInitialLoading = effectiveLoading && tableRow.length === 0;

    return (
      <Box
        ref={ref}
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Paper
          variant="outlined"
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            borderRadius: "8px",
            overflow: "hidden",
            borderColor: uiColors.borderColor,
            bgcolor: "background.paper",
          }}
        >
          <Collapse in={selected.length > 0 && !!ActionComponent}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 2,
                py: 1.5,
                bgcolor: alpha(theme.palette.primary.main, 0.08),
                borderBottom: `1px solid ${uiColors.borderColor}`,
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: uiColors.linkBlue,
                }}
              >
                {selected.length} row(s) selected
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                {ActionComponent &&
                  (typeof ActionComponent === "function" ? (
                    <ActionComponent />
                  ) : (
                    ActionComponent
                  ))}
              </Box>
            </Box>
          </Collapse>

          <TableContainer
            sx={{
              flex: 1,
              minHeight: 0,
              maxHeight: maxHeight,
              overflowX: "auto",
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                height: 8,
                width: 8,
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: uiColors.oddRowBg,
                borderRadius: 4,
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: uiColors.borderColor,
                borderRadius: 4,
                "&:hover": {
                  backgroundColor: uiColors.borderColor,
                },
              },
              "&::-webkit-scrollbar:vertical": {
                width: 3,
              },
            }}
          >
            <Table
              stickyHeader={stickyHeader}
              size="small"
              sx={{
                tableLayout: "fixed",
                width: "100%",
                minWidth: totalTableWidth,
              }}
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={tableRow.length}
                tableHead={tableHead}
                noCheckBox={noCheckBox}
                showSelection={showSelection}
                frozenCount={frozenCount}
                colWidths={resolvedColWidths}
                frozenColumnIds={frozenColumnIds}
                onVisibilityChange={onVisibilityChange}
                onColumnReorder={onColumnReorder}
                columnFilters={mergedColumnFilters}
                onColumnFilter={handleColumnFilter}
                uiColors={uiColors}
                stickyHeader={stickyHeader}
              />
              <TableBody>
                {showInitialLoading ? (
                  <LoadingTable colSpan={colCount} uiColors={uiColors} />
                ) : tableRow.length === 0 && !effectiveLoading ? (
                  <TableNoData colSpan={colCount} message={emptyMessage} />
                ) : (
                  tableRow.map((row, index) => {
                    const isItemSelected = selected.indexOf(row.id) !== -1;
                    const isOdd = index % 2 === 0;
                    const rowBg = isOdd
                      ? uiColors.oddRowBg
                      : uiColors.evenRowBg;

                    return (
                      <TableRow
                        hover
                        key={row.id ?? index}
                        selected={isItemSelected}
                        sx={{
                          bgcolor: rowBg,
                          "& .VortexUITableCell-body": {
                            borderRight: `1px solid ${uiColors.borderColor}`,
                            borderBottom: `1px solid ${uiColors.borderColor}`,
                            py: groupMode === "compact" ? 1.5 : 0.5,
                            fontSize: "13px",
                            color: uiColors.textDark,
                          },
                          "& .VortexUITableCell-body:last-child": {
                            borderRight: "none",
                          },
                          "&.VortexUI-selected": {
                            backgroundColor: `${uiColors.selectedBg} !important`,
                          },
                          "&.VortexUI-selected:hover": {
                            backgroundColor: `${uiColors.selectedHoverBg} !important`,
                          },
                          "&:hover .frozen-cell": {
                            backgroundColor: `${uiColors.hoverBg} !important`,
                          },
                          "&.VortexUI-selected .frozen-cell": {
                            backgroundColor: `${uiColors.selectedBg} !important`,
                          },
                          "&.VortexUI-selected:hover .frozen-cell": {
                            backgroundColor: `${uiColors.selectedHoverBg} !important`,
                          },
                        }}
                      >
                        {row?.data?.map((cell, cellIdx) => {
                          const isFrozen = cellIdx < frozenCount;
                          const isLastFrozen = cellIdx === frozenCount - 1;
                          const isFirst = cellIdx === 0;

                          return (
                            <TableCell
                              key={cellIdx}
                              align={cell.align || "left"}
                              className={isFrozen ? "frozen-cell" : undefined}
                              sx={{
                                width: resolvedColWidths[cellIdx] || "auto",
                                minWidth: resolvedColWidths[cellIdx] || "auto",
                                maxWidth: resolvedColWidths[cellIdx] || "none",
                                ...(isFrozen && {
                                  position: "sticky",
                                  left: getFrozenLeft(
                                    cellIdx,
                                    resolvedColWidths,
                                  ),
                                  zIndex: 4,
                                  bgcolor: isItemSelected
                                    ? `${uiColors.selectedBg} !important`
                                    : `${rowBg} !important`,
                                  backgroundColor: isItemSelected
                                    ? `${uiColors.selectedBg} !important`
                                    : `${rowBg} !important`,
                                }),
                                ...(isLastFrozen && {
                                  boxShadow: uiColors.frozenShadow,
                                }),
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                ...(isFirst &&
                                  !noCheckBox &&
                                  showSelection && { pl: 0.5 }),
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 1,
                                  justifyContent: isFirst
                                    ? "flex-start"
                                    : cell.align === "right"
                                      ? "flex-end"
                                      : cell.align === "center"
                                        ? "center"
                                        : "flex-start",
                                }}
                              >
                                {isFirst && !noCheckBox && showSelection && (
                                  <StyledCheckbox
                                    variant="sm"
                                    checked={isItemSelected}
                                    onChange={() => {
                                      const newSelected = isItemSelected
                                        ? selected.filter((id) => id !== row.id)
                                        : [...selected, row.id];
                                      setSelected(newSelected);
                                    }}
                                    sx={{ flexShrink: 0 }}
                                  />
                                )}
                                <Typography
                                  component="span"
                                  sx={{
                                    fontSize: "13px",
                                    fontWeight: 500,
                                    color: isFirst
                                      ? uiColors.linkBlue
                                      : "inherit",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  {cell.comp}
                                </Typography>
                                {cell.actionIcon && (
                                  <Box sx={{ ml: "auto", flexShrink: 0 }}>
                                    {cell.actionIcon}
                                  </Box>
                                )}
                              </Box>
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </TableContainer>

          <PaginationBar
            pageNumber={pageNumber}
            pageCount={pageCount || 1}
            limitEnd={limitEnd}
            onPageChange={onPageChange}
            onLimitChange={onLimitChange}
            pageSizeOptions={pageSizeOptions}
            uiColors={uiColors}
          />
        </Paper>
      </Box>
    );
  },
);

DataTable.displayName = "DataTable";

export default DataTable;
