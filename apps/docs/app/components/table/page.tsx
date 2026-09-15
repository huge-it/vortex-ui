"use client";

import { ComponentCode } from "@docs/ComponentCode";
import { ComponentHeader } from "@docs/ComponentHeader";
import { ComponentInstallation } from "@docs/ComponentInstallation";
import { ComponentProps } from "@docs/ComponentProps";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  FilterButton,
  TableHeadData,
  TableRowData,
  VortexTable,
} from "vortex-ui";
import {
  mockData as advancedMockData,
  customers,
  statusOptions,
} from "./mockdata";

const tablePropsList = [
  {
    name: "data",
    type: "{ id, data: { id, comp, actionIcon?, align? }[], json? }[]",
    default: "[]",
    description:
      "Array of row objects. Each row has an id, a data array of pre-rendered cells (matched to tableHead by cell.id), and an optional json array holding the original record.",
  },
  {
    name: "tableHeadCompact",
    type: "TableHeadData[]",
    default: "[]",
    description:
      "Column definitions for compact (grouped) view. Each entry has id, label, and optional value/align/width/filterOptions.",
  },
  {
    name: "tableHeadDetailed",
    type: "TableHeadData[]",
    default: "[]",
    description:
      "Column definitions for detailed (expanded) view. Same shape as tableHeadCompact.",
  },
  {
    name: "loading",
    type: "boolean",
    default: "false",
    description: "Shows skeleton loading rows when true and data is empty.",
  },
  {
    name: "variant",
    type: "'simple' | 'advanced'",
    default: "'advanced'",
    description:
      "'simple' hides the column toolbar and freezing. 'advanced' shows full toolbar with column visibility, freezing, and group mode toggle.",
  },
  {
    name: "ActionComponent",
    type: "React.ElementType",
    default: "undefined",
    description:
      "Component rendered in the bulk-action bar when rows are selected. Enables row selection checkboxes.",
  },
  {
    name: "RowActionComponent",
    type: "React.ElementType<{ row }>",
    default: "undefined",
    description:
      "Per-row action component (e.g. a ⋮ menu). Receives the original row record via the row prop.",
  },
  {
    name: "filterComponent",
    type: "React.ReactNode",
    default: "undefined",
    description:
      "Custom filter UI rendered inside a collapsible panel toggled by the filter button.",
  },
  {
    name: "searchValue",
    type: "string",
    default: "''",
    description: "Controlled value for the built-in search input.",
  },
  {
    name: "onSearchChange",
    type: "(value: string) => void",
    default: "() => {}",
    description: "Callback fired when the search input value changes.",
  },
  {
    name: "maxHeight",
    type: "number | string",
    default: "undefined",
    description: "Maximum height of the scrollable table area.",
  },
  {
    name: "stickyHeader",
    type: "boolean",
    default: "false",
    description: "When true, the table header sticks to the top on scroll.",
  },
];

const columnSchemaProps = [
  {
    name: "id",
    type: "string | number",
    default: "required",
    description:
      "Unique identifier that matches cell.id in the data array. Use integer ids for compact columns (e.g. 1, 2) and decimal ids for detailed columns (e.g. 1.1, 1.2).",
  },
  {
    name: "label",
    type: "string",
    default: "required",
    description: "Text displayed in the column header.",
  },
  {
    name: "value",
    type: "string",
    default: "undefined",
    description:
      "Field key used for sorting. When provided, the column header becomes sortable.",
  },
  {
    name: "align",
    type: "'left' | 'center' | 'right'",
    default: "'left'",
    description: "Text alignment for the column header and cells.",
  },
  {
    name: "width",
    type: "string | number",
    default: "undefined",
    description: "Fixed width for the column (e.g. '160px').",
  },
  {
    name: "filterOptions",
    type: "{ label: string; value: string }[]",
    default: "[]",
    description: "Options shown in the column header dropdown filter menu.",
  },
];

export default function TableDocs() {
  const [pageNumber, setPageNumber] = useState(1);
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<string>("opportunity");
  const [selectedItems, setSelectedItems] = useState<(string | number)[]>([]);
  const [limitEnd, setLimitEnd] = useState(15);
  const [activeStatusFilter, setActiveStatusFilter] = useState<
    (string | number)[]
  >([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const tableHeadCompact: TableHeadData[] = [
    { id: 1, label: "Opportunity Info", value: "opportunity" },
    {
      id: 2,
      label: "Company & Status",
      filterOptions: customers.map((c) => ({
        label: c.name,
        value: c.name,
      })),
    },
    { id: 3, label: "Budget & Priority" },
    { id: 4, label: "Team" },
    { id: 5, label: "Location" },
    { id: 6, label: "Date", value: "date" },
  ];

  const tableHeadDetailed: TableHeadData[] = [
    { id: 1.1, label: "# PO", value: "po_num", width: "160px" },
    { id: 1.2, label: "Opportunity Name", value: "opportunity" },
    { id: 2.1, label: "Company", value: "company" },
    { id: 2.2, label: "Status", value: "status" },
    { id: 3.1, label: "Budget ($)", value: "budget", align: "right" },
    { id: 3.2, label: "Priority", value: "priority" },
    { id: 4.1, label: "Assignee", value: "assignee" },
    { id: 4.2, label: "Project Manager", value: "project_manager" },
    { id: 5.1, label: "Region", value: "region" },
    { id: 5.2, label: "Department", value: "department" },
    { id: 6, label: "Date", value: "date" },
  ];

  const filteredData = React.useMemo(() => {
    const data = advancedMockData;
    const limit = Number(limitEnd);
    const paginatedData = data.slice(
      (pageNumber - 1) * limit,
      pageNumber * limit,
    );

    const td_data_set: {
      id: number;
      data: { id: number; comp: React.ReactNode }[];
      json: TableRowData[];
    }[] = [];
    paginatedData.forEach((item: TableRowData, index: number) => {
      const allCells = [
        {
          id: 1,
          comp: (
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                {item.opportunity}
              </Typography>
              <Typography variant="caption" sx={{
                color: "text.secondary"
              }}>
                PO: {item.po_num}
              </Typography>
            </Box>
          ),
        },
        {
          id: 2,
          comp: (
            <Box>
              <Typography variant="body2">{item.company}</Typography>
              <Typography variant="caption" sx={{
                color: "text.secondary"
              }}>
                Status: {item.status}
              </Typography>
            </Box>
          ),
        },
        {
          id: 3,
          comp: (
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                ${item.budget?.toLocaleString()}
              </Typography>
              <Typography variant="caption" sx={{
                color: "text.secondary"
              }}>
                Priority: {item.priority}
              </Typography>
            </Box>
          ),
        },
        {
          id: 4,
          comp: (
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                {item.project_manager}
              </Typography>
              <Typography variant="caption" sx={{
                color: "text.secondary"
              }}>
                Assignee: {item.assignee}
              </Typography>
            </Box>
          ),
        },
        {
          id: 5,
          comp: (
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                {item.region}
              </Typography>
              <Typography variant="caption" sx={{
                color: "text.secondary"
              }}>
                Dept: {item.department}
              </Typography>
            </Box>
          ),
        },
        {
          id: 6,
          comp: item.date,
        },
        {
          id: 1.1,
          comp: (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="body2">{item.po_num}</Typography>
              <Typography variant="caption" sx={{
                color: "text.secondary"
              }}>
                #REG-12345
              </Typography>
            </Box>
          ),
        },
        {
          id: 1.2,
          comp: (
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              {item.opportunity}
            </Typography>
          ),
        },
        { id: 2.1, comp: item.company },
        { id: 2.2, comp: item.status },
        { id: 3.1, comp: item.budget?.toLocaleString() },
        { id: 3.2, comp: item.priority },
        { id: 4.1, comp: item.assignee },
        { id: 4.2, comp: item.project_manager },
        { id: 5.1, comp: item.region },
        { id: 5.2, comp: item.department },
      ];

      td_data_set.push({
        id: (item.id as number) || index,
        data: allCells,
        json: [item],
      });
    });

    return td_data_set;
  }, [limitEnd, pageNumber]);

  const filterComponent = (
    <Box
      sx={{
        pt: 0.5,
        p: 2,
        display: "flex",
        gap: 2,
        // bgcolor: "background.paper",
        justifyContent: "flex-end",
      }}
    >
      <FilterButton
        label="Status"
        options={statusOptions}
        selectedValues={activeStatusFilter}
        onChange={(vals) => setActiveStatusFilter(vals)}
        multiSelect={true}
        buttonWidth="140px"
      />
    </Box>
  );

  const BulkActionComponent = () => (
    <Button
      variant="contained"
      color="primary"
      size="small"
      sx={{ textTransform: "none" }}
    >
      Update Status
    </Button>
  );

  const RowActionComponent = ({ row }: { row: TableRowData }) => {
    console.log("Selected Row", row);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleActionClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(e.currentTarget);
    };
    const handleActionClose = () => {
      setAnchorEl(null);
    };
    return (
      <>
        <IconButton size="small" onClick={handleActionClick}>
          <MoreVertIcon fontSize="small" />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleActionClose}
          slotProps={{
            paper: {
              sx: {
                minWidth: 150,
                borderRadius: 2,
                boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
              },
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
      </>
    );
  };

  const handlefilterBadgeVisible = () => {
    return activeStatusFilter.length > 0;
  };

  return (
    <Box>
      <ComponentHeader
        title="VortexTable"
        description={
          <>
            A table presentation component with built-in empty displays and
            loading hooks, wrapping MUI Table.
          </>
        }
      />

      <Typography
        variant="h5"
        sx={{
          color: "text.secondary",
          fontWeight: 600,
          mt: 4,
          mb: 2,
          fontSize: "1.25rem"
        }}>
        Simple Table
      </Typography>
      <Box sx={{ width: "100%", mb: 4 }}>
        <VortexTable
          variant="simple"
          data={filteredData}
          tableHeadCompact={tableHeadCompact}
          tableHeadDetailed={tableHeadDetailed}
          loading={false}
          pageCount={3}
          pageNumber={pageNumber}
          onPageChange={(_, p) => setPageNumber(p)}
          totalItems={40}
          order={order}
          orderBy={orderBy}
          setOrderBy={setOrderBy}
          setOrder={setOrder}
          selected={selectedItems}
          setSelected={setSelectedItems}
          setPageNumber={setPageNumber}
          limitEnd={limitEnd}
          onLimitChange={(e) => setLimitEnd(Number(e.target.value))}
          maxHeight={500}
          stickyHeader={true}
          filterComponent={filterComponent}
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          onResetFilters={() => setActiveStatusFilter([])}
          filterBadgeVisible={handlefilterBadgeVisible()}
          ActionComponent={BulkActionComponent}
          RowActionComponent={RowActionComponent}
        />
      </Box>

      <Typography
        variant="h5"
        sx={{
          color: "text.secondary",
          fontWeight: 600,
          mt: 4,
          mb: 2,
          fontSize: "1.25rem"
        }}>
        Advanced Table (w/ Toolbar & Column Freezing)
      </Typography>
      <Box sx={{ width: "100%", mb: 4 }}>
        <VortexTable
          variant="advanced"
          data={filteredData}
          tableHeadCompact={tableHeadCompact}
          tableHeadDetailed={tableHeadDetailed}
          loading={false}
          pageCount={3}
          pageNumber={pageNumber}
          onPageChange={(_, p) => setPageNumber(p)}
          totalItems={40}
          order={order}
          orderBy={orderBy}
          setOrderBy={setOrderBy}
          setOrder={setOrder}
          selected={selectedItems}
          setSelected={setSelectedItems}
          setPageNumber={setPageNumber}
          limitEnd={limitEnd}
          onLimitChange={(e) => setLimitEnd(Number(e.target.value))}
          maxHeight={500}
          stickyHeader={true}
          filterComponent={filterComponent}
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          onResetFilters={() => setActiveStatusFilter([])}
          filterBadgeVisible={handlefilterBadgeVisible()}
          ActionComponent={BulkActionComponent}
          RowActionComponent={RowActionComponent}
        />
      </Box>

      <Typography
        variant="h5"
        sx={{
          color: "text.secondary",
          fontWeight: 600,
          mt: 4,
          mb: 2,
          fontSize: "1.25rem"
        }}>
        Loading State
      </Typography>
      <Box sx={{ width: "100%", mb: 4 }}>
        <VortexTable
          variant="simple"
          data={[]}
          tableHeadCompact={tableHeadCompact}
          tableHeadDetailed={tableHeadDetailed}
          loading={true}
          maxHeight={300}
        />
      </Box>

      <Typography
        variant="h5"
        sx={{
          color: "text.secondary",
          fontWeight: 600,
          mt: 4,
          mb: 2,
          fontSize: "1.25rem"
        }}>
        Empty State
      </Typography>
      <Box sx={{ width: "100%", mb: 4 }}>
        <VortexTable
          variant="simple"
          data={[]}
          tableHeadCompact={tableHeadCompact}
          tableHeadDetailed={tableHeadDetailed}
          loading={false}
          maxHeight={300}
        />
      </Box>

      <ComponentCode
        title="Usage"
        code={`import { VortexTable } from "vortex-ui";
import { useState, useMemo } from "react";
import { Box, Typography, IconButton, Menu, MenuItem, Button } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// 1. Define column headers (compact view groups columns, detailed view expands them)
const tableHeadCompact = [
  { id: 1, label: "Supplier Info", value: "supplier_name" },
  { id: 2, label: "Contact" },
  { id: 3, label: "Amount", align: "right" },
  { id: 4, label: "Status" },
];

const tableHeadDetailed = [
  { id: 1.1, label: "PO #", value: "purchase_order_num", width: "160px" },
  { id: 1.2, label: "Supplier Name", value: "supplier_name" },
  { id: 2.1, label: "Phone" },
  { id: 2.2, label: "Email" },
  { id: 3, label: "Total", value: "grand_total", align: "right" },
  { id: 4, label: "Status" },
];

// 2. Build pre-rendered cell data (td_data_set pattern)
function buildTableRows(data) {
  return data.map((item, index) => {
    const allCells = [
      // Compact cells (id matches tableHeadCompact ids)
      {
        id: 1,
        comp: (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
            <Box>
              <Typography fontSize="14px" fontWeight={500} color="#4772FF">
                {item.supplier_name}
              </Typography>
              <Typography fontSize="14px" color="#6A759B">
                {item.purchase_order_num}
              </Typography>
            </Box>
          </Box>
        ),
        actionIcon: (
          <IconButton size="small"><MoreVertIcon fontSize="small" /></IconButton>
        ),
      },
      {
        id: 2,
        comp: (
          <Box>
            <Typography fontSize="14px">{item.phone}</Typography>
            <Typography fontSize="14px">{item.email}</Typography>
          </Box>
        ),
      },
      {
        id: 3,
        align: "right",
        comp: <Typography fontSize="14px" fontWeight={500}>{item.grand_total}</Typography>,
      },
      { id: 4, comp: <Typography fontSize="14px">{item.status_label}</Typography> },

      // Detailed cells (id matches tableHeadDetailed ids)
      { 
        id: 1.1, 
        comp: (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography fontSize="14px">{item.purchase_order_num}</Typography>
            <Typography fontSize="12px" color="#6A759B">
              #REG-12345
            </Typography>
          </Box>
        )
      },
      {
        id: 1.2,
        comp: <Typography fontSize="14px" fontWeight={500}>{item.supplier_name}</Typography>,
        actionIcon: (
          <IconButton size="small"><MoreVertIcon fontSize="small" /></IconButton>
        ),
      },
      { id: 2.1, comp: item.phone },
      { id: 2.2, comp: item.email },
    ];

    return {
      id: item.data_uniq_id,     // unique row identifier
      data: allCells,             // array of pre-rendered cells
      json: [item],              // original record (passed to RowActionComponent)
    };
  });
}

// 3. Render the table
function PurchaseOrderList() {
  const [pageNumber, setPageNumber] = useState(1);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("supplier_name");
  const [selected, setSelected] = useState([]);
  const [limitEnd, setLimitEnd] = useState(15);

  const tableData = useMemo(() => buildTableRows(apiData), [apiData]);

  return (
    <VortexTable
      data={tableData}
      tableHeadCompact={tableHeadCompact}
      tableHeadDetailed={tableHeadDetailed}
      loading={false}
      pageCount={4}
      pageNumber={pageNumber}
      onPageChange={(_, p) => setPageNumber(p)}
      totalItems={40}
      order={order}
      orderBy={orderBy}
      setOrderBy={setOrderBy}
      setOrder={setOrder}
      selected={selected}
      setSelected={setSelected}
      limitEnd={limitEnd}
      onLimitChange={(e) => setLimitEnd(Number(e.target.value))}
      maxHeight={500}
      stickyHeader={true}
    />
  );
}`}
      />

      <ComponentProps title="Table Properties" propsList={tablePropsList} />

      <Box sx={{ mt: 4 }}>
        <ComponentProps
          title="TableHeadData Properties"
          propsList={columnSchemaProps}
        />
      </Box>

      <Divider sx={{ my: 4 }} />

      <ComponentInstallation />
    </Box>
  );
}
