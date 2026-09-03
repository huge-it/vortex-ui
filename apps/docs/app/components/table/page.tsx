"use client";

import { ComponentCode } from "@docs/ComponentCode";
import { ComponentHeader } from "@docs/ComponentHeader";
import { ComponentInstallation } from "@docs/ComponentInstallation";
import { ComponentProps } from "@docs/ComponentProps";
import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import { StatusFilter } from "vortex-ui";
import {
  mockData as advancedMockData,
  customers,
  statusOptions,
} from "./mockdata";
import { TableHeadData, TableRowData, VortexTable } from "vortex-ui";

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

  console.log(selectedItems, searchValue, "sdfsd");
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
            PO: {row.po_num} • {row.date}
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
            Status: {row.status} • Assignee: {row.assignee}
          </Typography>
        </Box>
      ),
    },
  ];

  const tableHeadDetailed: TableHeadData[] = [
    { id: 1.1, label: "# PO", value: "po_num" },
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
    { id: 2, label: "Company", value: "company" },
    {
      id: 3,
      label: "Budget ($)",
      value: "budget",
      align: "right",
      renderCell: (row: TableRowData) => row.budget?.toLocaleString(),
    },
    { id: 4, label: "Status", value: "status" },
    { id: 5, label: "Assignee", value: "assignee" },
    { id: 6, label: "Date", value: "date" },
    { id: 7, label: "Priority", value: "priority" },
    { id: 8, label: "Region", value: "region" },
    { id: 9, label: "Department", value: "department" },
    { id: 10, label: "Project Manager", value: "project_manager" },
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
      <StatusFilter
        label="Filter Status"
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
        Preview
      </Typography>
      <Box sx={{ width: "100%", mb: 4 }}>
        <VortexTable
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
          filterBadgeVisible={handlefilterBadgeVisible()}
          ActionComponent={BulkActionComponent}
        />
      </Box>

      <ComponentCode
        title="Usage"
        code={`import { VortexTable } from "./VortexTable";
import { mockData, tableHeadCompact, tableHeadDetailed } from "./mockdata";
import { useState } from "react";

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
    />
  );
}`}
      />

      <ComponentProps propsList={tablePropsList} />

      <Box sx={{ mt: 2 }}>
        <ComponentProps propsList={columnSchemaProps} />
      </Box>

      <Divider sx={{ my: 4 }} />

      <ComponentInstallation />
    </Box>
  );
}
