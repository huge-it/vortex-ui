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
  FormControlLabel,
  IconButton,
  Menu,
  MenuItem,
  Switch,
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
    name: "columns",
    type: "DataTableColumn[]",
    default: "[]",
    description:
      "Schema array defining column header names, keys, alignment, and custom rendering callbacks.",
  },
  {
    name: "data",
    type: "any[]",
    default: "[]",
    description: "Array of data records containing row cell contents.",
  },
  {
    name: "isLoading",
    type: "boolean",
    default: "false",
    description: "Triggers global loading spinner overlay.",
  },
  {
    name: "emptyMessage",
    type: "string",
    default: "'No data available'",
    description: "Custom message displayed when data is empty.",
  },
];

const columnSchemaProps = [
  {
    name: "key",
    type: "string",
    default: "required",
    description: "Unique key mapping to object key values.",
  },
  {
    name: "header",
    type: "string",
    default: "required",
    description: "Text string displayed at top header cell.",
  },
  {
    name: "align",
    type: "'left' | 'center' | 'right'",
    default: "'left'",
    description: "Text alignment alignment styles inside cells.",
  },
  {
    name: "render",
    type: "(row: any) => ReactNode",
    default: "undefined",
    description: "Custom rendering callback for displaying customized cells.",
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
    {
      id: 1,
      label: "Opportunity Info",
      value: "opportunity",
      renderCell: (row: TableRowData) => (
        <Box>
          <Typography variant="body2" fontWeight={500}>
            {row.opportunity}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            PO: {row.po_num}
          </Typography>
        </Box>
      ),
    },
    {
      id: 2,
      label: "Company & Status",
      filterOptions: customers.map((c) => ({
        label: c.name,
        value: c.name,
      })),
      renderCell: (row: TableRowData) => (
        <Box>
          <Typography variant="body2">{row.company}</Typography>
          <Typography variant="caption" color="text.secondary">
            Status: {row.status}
          </Typography>
        </Box>
      ),
    },
    {
      id: 3,
      label: "Budget & Priority",
      renderCell: (row: TableRowData) => (
        <Box>
          <Typography variant="body2" fontWeight={500}>
            ${row.budget?.toLocaleString()}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Priority: {row.priority}
          </Typography>
        </Box>
      ),
    },
    {
      id: 4,
      label: "Team",
      renderCell: (row: TableRowData) => (
        <Box>
          <Typography variant="body2" fontWeight={500}>
            {row.project_manager}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Assignee: {row.assignee}
          </Typography>
        </Box>
      ),
    },
    {
      id: 5,
      label: "Location",
      renderCell: (row: TableRowData) => (
        <Box>
          <Typography variant="body2" fontWeight={500}>
            {row.region}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Dept: {row.department}
          </Typography>
        </Box>
      ),
    },
    {
      id: 6,
      label: "Date",
      value: "date",
    },
  ];

  const tableHeadDetailed: TableHeadData[] = [
    { id: 1.1, label: "# PO", value: "po_num", width: "160px" },
    {
      id: 1.2,
      label: "Opportunity Name",
      value: "opportunity",
      renderCell: (row: TableRowData) => (
        <Typography variant="body2" fontWeight={500}>
          {row.opportunity}
        </Typography>
      ),
    },
    { id: 2.1, label: "Company", value: "company" },
    { id: 2.2, label: "Status", value: "status" },
    {
      id: 3.1,
      label: "Budget ($)",
      value: "budget",
      align: "right",
      renderCell: (row: TableRowData) => row.budget?.toLocaleString(),
    },
    { id: 3.2, label: "Priority", value: "priority" },
    { id: 4.1, label: "Assignee", value: "assignee" },
    { id: 4.2, label: "Project Manager", value: "project_manager" },
    { id: 5.1, label: "Region", value: "region" },
    { id: 5.2, label: "Department", value: "department" },
    { id: 6, label: "Date", value: "date" },
  ];

  const filteredData = React.useMemo(() => {
    let data = advancedMockData;
    if (searchValue) {
      data = data.filter(
        (d: TableRowData) =>
          d.opportunity?.toLowerCase().includes(searchValue.toLowerCase()) ||
          d.company?.toLowerCase().includes(searchValue.toLowerCase()),
      );
    }
    if (activeStatusFilter.length > 0) {
      data = data.filter((d: TableRowData) =>
        activeStatusFilter.includes(d.status as string),
      );
    }
    const limit = Number(limitEnd);
    return data.slice((pageNumber - 1) * limit, pageNumber * limit);
  }, [searchValue, activeStatusFilter, limitEnd, pageNumber]);

  const filterComponent = (
    <Box
      sx={{
        pt: 0.5,
        p: 2,
        display: "flex",
        gap: 2,
        bgcolor: "background.paper",
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
        color="text.secondary"
        sx={{ fontWeight: 600, mt: 4, mb: 2, fontSize: "1.25rem" }}
      >
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
        color="text.secondary"
        sx={{ fontWeight: 600, mt: 4, mb: 2, fontSize: "1.25rem" }}
      >
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
        color="text.secondary"
        sx={{ fontWeight: 600, mt: 4, mb: 2, fontSize: "1.25rem" }}
      >
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
        color="text.secondary"
        sx={{ fontWeight: 600, mt: 4, mb: 2, fontSize: "1.25rem" }}
      >
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
        code={`import { VortexTable } from "./VortexTable";
import { mockData, tableHeadCompact, tableHeadDetailed } from "./mockdata";
import { useState } from "react";
import { IconButton, Menu, MenuItem, Button } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const RowActionComponent = ({ row }: any) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  return (
    <>
      <IconButton size="small" onClick={(e) => setAnchorEl(e.currentTarget)}>
        <MoreVertIcon fontSize="small" />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
        <MenuItem onClick={() => setAnchorEl(null)}>Edit</MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>Delete</MenuItem>
      </Menu>
    </>
  );
};

const BulkActionComponent = () => (
  <Button variant="contained" size="small">Update Status</Button>
);

function Dashboard() {
  const [pageNumber, setPageNumber] = useState(1);
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<string>("opportunity");
  const [selectedItems, setSelectedItems] = useState<(string | number)[]>([]);
  const [limitEnd, setLimitEnd] = useState(15);

  return (
    <VortexTable
      data={mockData}
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
      selected={selectedItems}
      setSelected={setSelectedItems}
      setPageNumber={setPageNumber}
      limitEnd={limitEnd}
      onLimitChange={(e) => setLimitEnd(Number(e.target.value))}
      maxHeight={500}
      stickyHeader={true}
      ActionComponent={BulkActionComponent}
      RowActionComponent={RowActionComponent}
    />
  );
}`}
      />

      <ComponentProps title="Table Properties" propsList={tablePropsList} />

      <Box sx={{ mt: 4 }}>
        <ComponentProps
          title="Column Schema Properties"
          propsList={columnSchemaProps}
        />
      </Box>

      <Divider sx={{ my: 4 }} />

      <ComponentInstallation />
    </Box>
  );
}
