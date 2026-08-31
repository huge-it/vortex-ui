"use client";

import React, { useState } from "react";
import { Box, Divider, Stack } from "@mui/material";
import { DateTimePicker } from "vortex-ui";
import { ComponentPreview } from "@comp/docs/ComponentPreview";
import { ComponentCode } from "@comp/docs/ComponentCode";
import { ComponentStates } from "@comp/docs/ComponentStates";
import { ComponentProps } from "@comp/docs/ComponentProps";
import { ComponentHeader } from "@comp/docs/ComponentHeader";
import { ComponentInstallation } from "@comp/docs/ComponentInstallation";

const dateTimePickerPropsList = [
  { name: "label", type: "string", default: '"Date & Time"', description: "The label for the field." },
  { name: "value", type: "string", default: "undefined", description: "The selected date & time." },
  { name: "onChange", type: "(value: string) => void", default: "undefined", description: "Callback when date/time changes." },
  { name: "minDate", type: "string", default: "undefined", description: "Minimum selectable date." },
  { name: "maxDate", type: "string", default: "undefined", description: "Maximum selectable date." },
  { name: "disabled", type: "boolean", default: "false", description: "If true, the picker is disabled." },
];

export default function DateTimePickerDocs() {
  const [dateTimeVal, setDateTimeVal] = useState("");

  return (
    <Box>
      <ComponentHeader
        title="DateTimePicker"
        description={<>A component for selecting dates and times together.</>}
      />

      <Box sx={{ pt: 3 }}>
        <ComponentPreview>
          <Stack spacing={2} sx={{ width: "100%", maxWidth: "300px" }}>
            <DateTimePicker
              label="Select Date & Time"
              value={dateTimeVal}
              onChange={setDateTimeVal}
            />
          </Stack>
        </ComponentPreview>
        <ComponentStates
          states={[
            {
              name: "Default",
              element: <DateTimePicker label="Default" sx={{ width: "250px" }} />,
            },
            {
              name: "Disabled",
              element: <DateTimePicker label="Disabled" disabled value="2024-01-01T10:30:00" sx={{ width: "250px" }} />,
            },
          ]}
        />
        <ComponentCode
          title="Usage"
          code={`import { DateTimePicker } from "vortex-ui";

function Example() {
  const [dateTime, setDateTime] = useState("");
  return (
    <DateTimePicker
      label="Event Start"
      value={dateTime}
      onChange={setDateTime}
    />
  );
}`}
        />
        <ComponentProps propsList={dateTimePickerPropsList} />
      </Box>

      <Divider sx={{ my: 4 }} />
      <ComponentInstallation />
    </Box>
  );
}
