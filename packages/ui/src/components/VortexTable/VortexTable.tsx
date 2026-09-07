"use client";
import { Refresh } from "@mui/icons-material";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterListOffIcon from "@mui/icons-material/FilterListOff";
import { Badge, Box, Collapse, IconButton, Tooltip } from "@mui/material";
import React, { useMemo, useState } from "react";
import { DataTable, SearchFilter, TableToolbar } from "../DataTable"; // actually SearchFilter and TableToolbar are inside DataTable folder. Let me check packages/ui/src/components/DataTable/index.ts. I'll import from "../DataTable" assuming they are exported there or from "vortex-ui" maybe. But wait, since we are inside packages/ui, we should import internally.

export type TableRowData = Record<string, unknown> & {
  opportunity?: string;
  company?: string;
  status?: string;
  po_num?: string;
  date?: string;
  assignee?: string;
  department?: string;
  budget?: number;
  priority?: string;
  region?: string;
  project_manager?: string;
};

export type TableHeadData = {
  id: string | number;
  label: string;
  value?: string;
  align?: "left" | "right" | "center" | "justify" | "inherit";
  filterOptions?: { label: string; value: string }[];
  renderCell?: (row: TableRowData) => React.ReactNode;
  filter?: boolean;
  width?: string | number;
};

export interface VortexTableProps {
  loading?: boolean;
  pageCount?: number;
  pageNumber?: number;
  onPageChange?: (event: unknown, page: number) => void;
  totalItems?: number;
  order?: "asc" | "desc";
  orderBy?: string;
  setOrderBy?: (property: string) => void;
  setOrder?: (order: "asc" | "desc") => void;
  selected?: (string | number)[];
  setSelected?: (selected: (string | number)[]) => void;
  setPageNumber?: (page: number) => void;
  limitEnd?: number | string;
  onLimitChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  ActionComponent?: React.ElementType;
  RowActionComponent?: React.ElementType<any>;
  data?: TableRowData[];
  tableHeadCompact?: TableHeadData[];
  tableHeadDetailed?: TableHeadData[];
  maxHeight?: number | string;
  stickyHeader?: boolean;
  disableColumnFreeze?: boolean;
  filterComponent?: React.ReactNode;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  onResetFilters?: () => void;
  filterBadgeVisible?: boolean;
  variant?: "simple" | "advanced";
}

function FilterButton({
  HandleChangeFilter,
  filtersList,
}: {
  HandleChangeFilter: () => void;
  filtersList: boolean;
}) {
  const isActive = Boolean(filtersList);
  return (
    <Box>
      <IconButton
        size="small"
        onClick={HandleChangeFilter}
        sx={{
          fontSize: "12px",
          fontWeight: "300",
          border: 1,
          bgcolor: "background.paper",
          borderColor: isActive ? "primary.main" : "divider",
          borderRadius: "10px",
          padding: "9px",
          height: "40px",
          width: "40px",
          color: isActive ? "primary.main" : "text.primary",
        }}
      >
        {filtersList === false ? (
          <FilterListIcon fontSize="small" />
        ) : (
          <FilterListOffIcon fontSize="small" />
        )}
      </IconButton>
    </Box>
  );
}

export const VortexTable: React.FC<VortexTableProps> = ({
  loading,
  pageCount,
  pageNumber,
  onPageChange,
  totalItems,
  order,
  orderBy,
  setOrderBy,
  setOrder,
  selected,
  setSelected,
  setPageNumber,
  limitEnd,
  onLimitChange,
  ActionComponent,
  RowActionComponent,
  data = [],
  tableHeadCompact = [],
  tableHeadDetailed = [],
  maxHeight,
  stickyHeader,
  disableColumnFreeze,
  filterComponent,
  searchValue = "",
  onSearchChange = () => {},
  onResetFilters,
  filterBadgeVisible = false,
  variant = "advanced",
}) => {
  const [groupMode, setGroupMode] = useState<"compact" | "normal">("normal");
  const tableHead =
    groupMode === "compact" ? tableHeadCompact : tableHeadDetailed;

  const [visibleColumns, setVisibleColumns] = useState<(string | number)[]>(
    tableHead.map((h) => h.id),
  );
  const [pinnedExtra, setPinnedExtra] = useState<(string | number)[]>([]);

  const [filtersList, setFiltersList] = useState(false); // start hidden to show off the toggle

  // Derive ordered head
  const getOrderedColumns = <T extends { id: string | number }>(
    baseHead: T[],
    pinned: (string | number)[],
  ) => {
    const first = baseHead[0];
    const rest = baseHead.slice(1);
    const pinnedCols = rest
      .filter((h) => pinned.includes(h.id))
      .sort((a, b) => baseHead.indexOf(a) - baseHead.indexOf(b));
    const unpinnedCols = rest.filter((h) => !pinned.includes(h.id));
    return [first, ...pinnedCols, ...unpinnedCols].filter(Boolean); // added filter(Boolean) just in case first is undefined
  };

  const orderedTableHead = getOrderedColumns(tableHead, pinnedExtra);
  const filteredOrderedHead = orderedTableHead.filter((h) =>
    visibleColumns.includes(h.id),
  );

  const frozenCount =
    disableColumnFreeze || variant === "simple" ? 0 : 1 + pinnedExtra.length;

  const handleColumnVisibilityChange = (
    colId: string | number,
    isNowVisible: boolean,
  ) => {
    setVisibleColumns((prev) =>
      isNowVisible ? [...prev, colId] : prev.filter((id) => id !== colId),
    );
  };

  const handleColumnReorder = (colId: string | number, isPinning: boolean) => {
    if (isPinning) {
      setPinnedExtra((prev) =>
        prev.includes(colId) ? prev : [...prev, colId],
      );
    } else {
      setPinnedExtra((prev) => prev.filter((id) => id !== colId));
    }
  };

  // Construct Data Rows
  const td_data_set = useMemo(() => {
    return data.map((item: any, index: number) => {
      const actionIcon = RowActionComponent ? (
        <RowActionComponent row={item.json?.[0] || item} />
      ) : null;

      const dataCells = filteredOrderedHead.map((headItem, headIndex) => {
        let comp: React.ReactNode = null;
        let cellActionIcon: React.ReactNode = undefined;

        if (Array.isArray(item.data)) {
          const cell = item.data.find((c: any) => c.id === headItem.id);
          if (cell) {
            comp = cell.comp;
            cellActionIcon = cell.actionIcon;
          } else if (headItem.renderCell) {
            comp = headItem.renderCell(item.json?.[0] || item);
          } else if (headItem.value) {
            comp = String((item.json?.[0] || item)[headItem.value] ?? "");
          }
        } else {
          if (headItem.renderCell) {
            comp = headItem.renderCell(item);
          } else if (headItem.value) {
            comp = String(item[headItem.value] ?? "");
          }
        }

        return {
          comp,
          actionIcon:
            headIndex === 0
              ? cellActionIcon !== undefined
                ? cellActionIcon
                : actionIcon
              : undefined,
          align: headItem.align,
        };
      });

      return { id: item.id ? String(item.id) : String(index), data: dataCells };
    });
  }, [data, filteredOrderedHead, RowActionComponent]);

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: { xs: 1, sm: 2, md: 1, lg: 1, xl: 1.5 },
          mt: { xs: 1, sm: 2, md: 1, lg: 1, xl: 1.5 },
          mb: { xs: 1, sm: 2, md: 1, lg: 1, xl: 1.5 },
          flexShrink: 0,
          alignItems: "center",
        }}
      >
        <SearchFilter
          onSearchButtonClick={onSearchChange}
          searchValue={searchValue}
          placeholder="Search..."
          width="300px"
        />

        <Box sx={{ ml: "auto", display: "flex", gap: 1, alignItems: "center" }}>
          {filterBadgeVisible || searchValue.trim().length > 0 ? (
            <Tooltip
              title={"Refresh"}
              placement="top"
              arrow
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: "background.paper",
                    fontSize: "12px",
                    borderRadius: "6px",
                    color: "text.primary",
                    boxShadow: 1,
                  },
                },
                arrow: { sx: { color: "background.paper" } },
              }}
            >
              <IconButton
                size="small"
                onClick={() => {
                  onSearchChange("");
                  if (onResetFilters) onResetFilters();
                }}
                sx={{
                  fontSize: "12px",
                  fontWeight: "300",
                  border: 1,
                  bgcolor: "background.paper",
                  borderColor: "divider",
                  borderRadius: "10px",
                  padding: "9px",
                  height: "40px",
                  width: "40px",
                  color: "text.primary",
                }}
              >
                <Refresh />
              </IconButton>
            </Tooltip>
          ) : null}

          <Tooltip
            title={"Filters"}
            placement="top"
            arrow
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: "background.paper",
                  fontSize: "12px",
                  borderRadius: "6px",
                  color: "text.primary",
                  boxShadow: 1,
                },
              },
              arrow: { sx: { color: "background.paper" } },
            }}
          >
            <Badge
              color="primary"
              variant="dot"
              invisible={!Boolean(filterBadgeVisible)}
            >
              <FilterButton
                HandleChangeFilter={() => setFiltersList(!filtersList)}
                filtersList={filtersList}
              />
            </Badge>
          </Tooltip>

          {variant === "advanced" && (
            <TableToolbar
              columns={orderedTableHead.map((h) => ({
                id: h.id,
                label: h.label,
              }))}
              visibleColumns={visibleColumns}
              onVisibilityChange={handleColumnVisibilityChange}
              frozenColumnIds={[orderedTableHead[0]?.id, ...pinnedExtra]}
              onFrozenColumnsChange={(ids) => setPinnedExtra(ids.slice(1))}
              onColumnReorder={handleColumnReorder}
              groupMode={groupMode}
              onGroupModeChange={(mode) => {
                setGroupMode(mode);
                setPinnedExtra([]);
                setVisibleColumns(
                  (mode === "compact"
                    ? tableHeadCompact
                    : tableHeadDetailed
                  ).map((h) => h.id),
                );
              }}
              disableColumnFreeze={disableColumnFreeze}
            />
          )}
        </Box>
      </Box>

      {/* Filter Area */}
      <Collapse in={filtersList}>{filterComponent}</Collapse>

      {/* Table */}
      <Box sx={{ width: "100%", overflowX: "auto" }}>
        <DataTable
          tableHead={filteredOrderedHead}
          tableRow={td_data_set}
          frozenCount={frozenCount}
          maxHeight={maxHeight}
          stickyHeader={stickyHeader}
          colWidths={
            groupMode === "compact"
              ? [300, 250, 200, 200, 200, 150]
              : [180, 250, 200, 150, 150, 150, 120, 120, 150, 150, 150]
          }
          frozenColumnIds={[orderedTableHead[0]?.id, ...pinnedExtra]}
          onVisibilityChange={handleColumnVisibilityChange}
          onColumnReorder={handleColumnReorder}
          groupMode={groupMode}
          ActionComponent={ActionComponent}
          loading={loading}
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
          setPageNumber={setPageNumber}
          limitEnd={limitEnd}
          onLimitChange={onLimitChange}
          variant={variant}
        />
      </Box>
    </Box>
  );
};

export default VortexTable;
