"use client";

import React, { useState } from "react";
import { Box, Divider, Stack } from "@mui/material";
import { DateRangePicker } from "vortex-ui";
import { ComponentPreview } from "@comp/docs/ComponentPreview";
import { ComponentCode } from "@comp/docs/ComponentCode";
import { ComponentStates } from "@comp/docs/ComponentStates";
import { ComponentProps } from "@comp/docs/ComponentProps";
import { ComponentHeader } from "@comp/docs/ComponentHeader";
import { ComponentInstallation } from "@comp/docs/ComponentInstallation";

const dateRangePickerPropsList = [
  { name: "label", type: "string", default: '"Date Range"', description: "The label for the field." },
  { name: "startDate", type: "string", default: "undefined", description: "The start date of the range." },
  { name: "endDate", type: "string", default: "undefined", description: "The end date of the range." },
  { name: "onChange", type: "(range: { startDate: string, endDate: string }) => void", default: "undefined", description: "Callback when range changes." },
  { name: "showDropdowns", type: "boolean", default: "true", description: "Show Month/Year dropdowns." },
  { name: "showQuickSelect", type: "boolean", default: "true", description: "Show the quick select sidebar." },
  { name: "disabled", type: "boolean", default: "false", description: "If true, the picker is disabled." },
];

export default function DateRangePickerDocs() {
  const [rangeVal, setRangeVal] = useState({ startDate: "", endDate: "" });

  return (
    <Box>
      <ComponentHeader
        title="DateRangePicker"
        description={<>A component for selecting a start and end date.</>}
      />

      <Box sx={{ pt: 3 }}>
        <ComponentPreview>
          <Stack spacing={2} sx={{ width: "100%", maxWidth: "300px" }}>
            <DateRangePicker
              label="Select Date Range"
              startDate={rangeVal.startDate}
              endDate={rangeVal.endDate}
              onChange={setRangeVal}
            />
          </Stack>
        </ComponentPreview>
        <ComponentStates
          states={[
            {
              name: "Default (Full Featured)",
              element: <DateRangePicker label="Default" sx={{ width: "250px" }} />,
            },
            {
              name: "No Quick Select",
              element: <DateRangePicker label="No Sidebar" showQuickSelect={false} sx={{ width: "250px" }} />,
            },
            {
              name: "Disabled",
              element: <DateRangePicker label="Disabled" disabled startDate="2024-01-01" endDate="2024-01-10" sx={{ width: "250px" }} />,
            },
          ]}
        />
        <ComponentCode
          title="Usage"
          code={`import { DateRangePicker } from "vortex-ui";

function Example() {
  const [range, setRange] = useState({ startDate: "", endDate: "" });
  return (
    <DateRangePicker
      label="Leave Duration"
      startDate={range.startDate}
      endDate={range.endDate}
      onChange={setRange}
    />
  );
}`}
        />
        <ComponentProps propsList={dateRangePickerPropsList} />
      </Box>

      <Divider sx={{ my: 4 }} />
      <ComponentInstallation />
    </Box>
  );
}
