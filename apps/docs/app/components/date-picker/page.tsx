"use client";

import React, { useState } from "react";
import { Box, Divider, Stack } from "@mui/material";
import { DatePicker } from "vortex-ui";
import { ComponentPreview } from "@comp/docs/ComponentPreview";
import { ComponentCode } from "@comp/docs/ComponentCode";
import { ComponentStates } from "@comp/docs/ComponentStates";
import { ComponentProps } from "@comp/docs/ComponentProps";
import { ComponentHeader } from "@comp/docs/ComponentHeader";
import { ComponentInstallation } from "@comp/docs/ComponentInstallation";

const datePickerPropsList = [
  { name: "label", type: "string", default: '"Date"', description: "The label for the field." },
  { name: "value", type: "string", default: "undefined", description: "The selected date." },
  { name: "onChange", type: "(value: string) => void", default: "undefined", description: "Callback when date changes." },
  { name: "minDate", type: "string", default: "undefined", description: "Minimum selectable date." },
  { name: "maxDate", type: "string", default: "undefined", description: "Maximum selectable date." },
  { name: "disabled", type: "boolean", default: "false", description: "If true, the picker is disabled." },
  { name: "format", type: "string", default: '"DD/MM/YYYY"', description: "Date format string." },
];

export default function DatePickerDocs() {
  const [dateVal, setDateVal] = useState("");

  return (
    <Box>
      <ComponentHeader
        title="DatePicker"
        description={<>A component for selecting dates.</>}
      />

      <Box sx={{ pt: 3 }}>
        <ComponentPreview>
          <Stack spacing={2} sx={{ width: "100%", maxWidth: "300px" }}>
            <DatePicker
              label="Select Date"
              value={dateVal}
              onChange={setDateVal}
            />
          </Stack>
        </ComponentPreview>
        <ComponentStates
          states={[
            {
              name: "Default",
              element: <DatePicker label="Default" sx={{ width: "200px" }} />,
            },
            {
              name: "Disabled",
              element: <DatePicker label="Disabled" disabled value="2024-01-01" sx={{ width: "200px" }} />,
            },
            {
              name: "Error",
              element: <DatePicker label="Error" error="Invalid date" sx={{ width: "200px" }} />,
            },
          ]}
        />
        <ComponentCode
          title="Usage"
          code={`import { DatePicker } from "vortex-ui";

function Example() {
  const [date, setDate] = useState("");
  return (
    <DatePicker
      label="Date of Birth"
      value={date}
      onChange={setDate}
      format="DD/MM/YYYY"
    />
  );
}`}
        />
        <ComponentProps propsList={datePickerPropsList} />
      </Box>

      <Divider sx={{ my: 4 }} />
      <ComponentInstallation />
    </Box>
  );
}
