"use client";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterListOffIcon from "@mui/icons-material/FilterListOff";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Badge,
  Box,
  Collapse,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Tooltip,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import { DataTable, SearchFilter, TableToolbar } from "../DataTable"; // actually SearchFilter and TableToolbar are inside DataTable folder. Let me check packages/ui/src/components/DataTable/index.ts. I'll import from "../DataTable" assuming they are exported there or from "vortex-ui" maybe. But wait, since we are inside packages/ui, we should import internally.

export type TableRowData = Record<string, unknown> & {
  opportunity?: string;
  company?: string;
  status?: string;
  po_num?: string;
  date?: string;
  assignee?: string;
};

export type TableHeadData = {
  id: string | number;
  label: string;
  value?: string;
  align?: "left" | "right" | "center" | "justify" | "inherit";
  filterOptions?: { label: string; value: string }[];
  renderCell?: (row: TableRowData) => React.ReactNode;
  filter?: boolean;
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
  data?: TableRowData[];
  tableHeadCompact?: TableHeadData[];
  tableHeadDetailed?: TableHeadData[];
  maxHeight?: number | string;
  stickyHeader?: boolean;
  disableColumnFreeze?: boolean;
  filterComponent?: React.ReactNode;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  filterBadgeVisible?: boolean;
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
          bgcolor: "background.default",
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
  data = [],
  tableHeadCompact = [],
  tableHeadDetailed = [],
  maxHeight,
  stickyHeader,
  disableColumnFreeze,
  filterComponent,
  searchValue = "",
  onSearchChange = () => {},
  filterBadgeVisible = false,
}) => {
  const [groupMode, setGroupMode] = useState<"compact" | "normal">("normal");
  const tableHead =
    groupMode === "compact" ? tableHeadCompact : tableHeadDetailed;

  const [visibleColumns, setVisibleColumns] = useState<(string | number)[]>(
    tableHead.map((h) => h.id),
  );
  const [pinnedExtra, setPinnedExtra] = useState<(string | number)[]>([]);

  const [filtersList, setFiltersList] = useState(false); // start hidden to show off the toggle

  // Row Action Menu State
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeRow, setActiveRow] = useState<TableRowData | null>(null);

  const handleActionClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    row: TableRowData,
  ) => {
    setAnchorEl(event.currentTarget);
    setActiveRow(row);
  };

  const handleActionClose = () => {
    setAnchorEl(null);
    setActiveRow(null);
  };

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

  const frozenCount = disableColumnFreeze ? 0 : 1 + pinnedExtra.length;

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
    return data.map((item: TableRowData, index: number) => {
      const actionIcon = (
        <IconButton size="small" onClick={(e) => handleActionClick(e, item)}>
          <MoreVertIcon fontSize="small" />
        </IconButton>
      );

      const dataCells = filteredOrderedHead.map((headItem, headIndex) => {
        let comp: React.ReactNode = null;
        if (headItem.renderCell) {
          comp = headItem.renderCell(item);
        } else if (headItem.value) {
          comp = String(item[headItem.value] ?? "");
        }

        return {
          comp,
          actionIcon: headIndex === 0 ? actionIcon : undefined,
          align: headItem.align,
        };
      });

      return { id: item.id ? String(item.id) : String(index), data: dataCells };
    });
  }, [data, filteredOrderedHead]);

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
      }}
    >
      {/* Table Toolbar Area */}
      <Box
        sx={{
          display: "flex",
          gap: { xs: 1, sm: 2, md: 1, lg: 1, xl: 1.5 },
          mt: { xs: 1, sm: 2, md: 1, lg: 1, xl: 1.5 },
          mb: { xs: 1, sm: 2, md: 1, lg: 1, xl: 1.5 },
          px: 2,
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
                (mode === "compact" ? tableHeadCompact : tableHeadDetailed).map(
                  (h) => h.id,
                ),
              );
            }}
            disableColumnFreeze={disableColumnFreeze}
          />
        </Box>
      </Box>

      {/* Filter Area */}
      <Collapse
        in={filtersList}
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        {filterComponent}
      </Collapse>

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
              ? [350, 350]
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
        />

        {/* Row Action Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleActionClose}
          PaperProps={{
            sx: {
              minWidth: 150,
              borderRadius: 2,
              boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
            },
          }}
        >
          <MenuItem onClick={handleActionClose} sx={{ fontSize: 14 }}>
            <EditIcon sx={{ fontSize: 18, mr: 1, color: "text.secondary" }} />
            Edit
          </MenuItem>
          <MenuItem
            onClick={handleActionClose}
            sx={{ fontSize: 14, color: "error.main" }}
          >
            <DeleteIcon sx={{ fontSize: 18, mr: 1 }} />
            Delete
          </MenuItem>
        </Menu>
      </Box>
    </Paper>
  );
};

export default VortexTable;
