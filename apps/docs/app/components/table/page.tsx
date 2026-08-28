"use client";

import React from "react";
import { Typography, Box, Divider, Chip } from "@mui/material";
import { DataTable } from "vortex-ui";
import { ComponentPreview } from "@docs/ComponentPreview";
import { ComponentCode } from "@docs/ComponentCode";
import { ComponentStates } from "@docs/ComponentStates";
import { ComponentProps } from "@docs/ComponentProps";
import { ComponentHeader } from "@docs/ComponentHeader";
import { ComponentInstallation } from "@docs/ComponentInstallation";

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

interface ClientData {
  name: string;
  tier: string;
  sla: string;
}

const mockColumns = [
  { key: "name", header: "Client Name" },
  { key: "tier", header: "Support Tier" },
  {
    key: "sla",
    header: "SLA Status",
    align: "center" as const,
    render: (row: ClientData) => (
      <Chip
        label={row.sla}
        size="small"
        color={row.sla === "Active" ? "success" : "warning"}
      />
    ),
  },
];

const mockData = [
  { name: "Acme Corporation", tier: "Enterprise Plus", sla: "Active" },
  { name: "Stark Industries", tier: "Enterprise Premium", sla: "Active" },
  { name: "Globex Corp", tier: "Basic Starter", sla: "Breached" },
];

export default function TableDocs() {
  return (
    <Box>
      <ComponentHeader
        title="DataTable"
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
        sx={{ fontWeight: 600, mb: 2, fontSize: "1.25rem" }}
      >
        Preview
      </Typography>
      <ComponentPreview>
        <Box sx={{ width: "100%" }}>
          <DataTable columns={mockColumns} data={mockData} />
        </Box>
      </ComponentPreview>

      <ComponentStates
        states={[
          {
            name: "Loading",
            element: (
              <Box sx={{ width: "250px" }}>
                <DataTable columns={mockColumns} data={[]} isLoading />
              </Box>
            ),
          },
          {
            name: "Empty",
            element: (
              <Box sx={{ width: "250px" }}>
                <DataTable
                  columns={mockColumns}
                  data={[]}
                  emptyMessage="Nothing found."
                />
              </Box>
            ),
          },
        ]}
      />

      <ComponentCode
        title="Usage"
        code={`import { DataTable } from "vortex-ui";
import { Chip } from "@mui/material";

const columns = [
  { key: 'name', header: 'Client Name' },
  { key: 'tier', header: 'Support Tier' },
  {
    key: 'sla',
    header: 'SLA Status',
    align: 'center',
    render: (row) => (
      <Chip
        label={row.sla}
        size="small"
        color={row.sla === 'Active' ? 'success' : 'warning'}
      />
    ),
  },
];

const data = [
  { name: 'Acme Corporation', tier: 'Enterprise Plus', sla: 'Active' },
  { name: 'Stark Industries', tier: 'Enterprise Premium', sla: 'Active' },
];

function Dashboard() {
  return (
    <DataTable
      columns={columns}
      data={data}
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
