"use client";

import { Box, Divider, Typography } from "@mui/material";
import { ComponentCode } from "@comp/docs/ComponentCode";
import { ComponentHeader } from "@comp/docs/ComponentHeader";
import { ComponentProps } from "@comp/docs/ComponentProps";
import { ComponentPreview } from "@comp/docs/ComponentPreview";
import { ComponentInstallation } from "@comp/docs/ComponentInstallation";
import { useState } from "react";
import { FilterButton } from "vortex-ui";

const filterButtonPropsList = [
  {
    name: "label",
    type: "string",
    default: '"Filter"',
    description:
      "The text displayed on the button when no options are selected.",
  },
  {
    name: "options",
    type: "Array<{ label?: string; value?: string | number } | any>",
    description: "The list of options to display inside the popover menu.",
  },
  {
    name: "selectedValues",
    type: "Array<string | number>",
    description:
      "The currently selected values. Use this for controlled state.",
  },
  {
    name: "onChange",
    type: "(values: Array<string | number>) => void",
    description: "Callback fired when the selection changes.",
  },
  {
    name: "multiSelect",
    type: "boolean",
    default: "true",
    description: "If false, the popover will close immediately upon selection.",
  },
  {
    name: "showSearch",
    type: "boolean",
    default: "true",
    description: "If true, renders a search box to filter the options.",
  },
];

export default function FilterButtonDocs() {
  const [selectedStatus, setSelectedStatus] = useState<Array<string | number>>([
    1,
  ]);
  const [selectedCategory, setSelectedCategory] = useState<
    Array<string | number>
  >([]);
  const [selectedSingle, setSelectedSingle] = useState<Array<string | number>>(
    [],
  );

  const statusOptions = [
    { label: "Created", value: 1 },
    { label: "Waiting for Arrival", value: 2 },
    { label: "In Transit", value: 3 },
    { label: "Fully Received", value: 4 },
  ];

  const categoryOptions = [
    { label: "Electronics", value: "electronics" },
    { label: "Furniture", value: "furniture" },
    { label: "Office Supplies", value: "office" },
  ];

  return (
    <Box sx={{ pb: 10 }}>
      <ComponentHeader
        title="FilterButton"
        description={
          <>
            A highly customizable and minimalist filter button that renders its
            menu in a popover, perfect for table filters and complex layouts.
          </>
        }
      />

      <Typography
        variant="h5"
        sx={{
          color: "text.secondary",
          fontWeight: 600,
          mb: 2,
          fontSize: "1.25rem"
        }}>
        Preview
      </Typography>
      <ComponentPreview>
        <Box>
          <Typography
            variant="caption"
            sx={{
              color: "text.secondary",
              display: "block",
              mb: 1
            }}>
            Multi-select with Search
          </Typography>
          <FilterButton
            label="Status"
            options={statusOptions}
            selectedValues={selectedStatus}
            onChange={(vals) => setSelectedStatus(vals)}
            onReset={() => setSelectedStatus([])}
          />
        </Box>

        <Box>
          <Typography
            variant="caption"
            sx={{
              color: "text.secondary",
              display: "block",
              mb: 1
            }}>
            Multi-select without Search
          </Typography>
          <FilterButton
            label="Category"
            options={categoryOptions}
            selectedValues={selectedCategory}
            onChange={(vals) => setSelectedCategory(vals)}
            onReset={() => setSelectedCategory([])}
            showSearch={false}
          />
        </Box>

        <Box>
          <Typography
            variant="caption"
            sx={{
              color: "text.secondary",
              display: "block",
              mb: 1
            }}>
            Single-select
          </Typography>
          <FilterButton
            label="Type"
            options={categoryOptions}
            selectedValues={selectedSingle}
            onChange={(vals) => setSelectedSingle(vals)}
            onReset={() => setSelectedSingle([])}
            multiSelect={false}
          />
        </Box>
      </ComponentPreview>

      <ComponentCode
        title="Usage"
        code={`import { FilterButton } from "vortex-ui";
import { useState } from "react";

export function Example() {
  const [selected, setSelected] = useState([]);
  const options = [
    { label: "Created", value: 1 },
    { label: "Waiting for Arrival", value: 2 },
  ];
  return (
    <FilterButton
      label="Status"
      options={options}
      selectedValues={selected}
      onChange={(vals) => setSelected(vals)}
      onReset={() => setSelected([])}
    />
  );
}`}
      />

      <ComponentProps propsList={filterButtonPropsList} />

      <Divider sx={{ my: 4 }} />

      <ComponentInstallation />
    </Box>
  );
}
