"use client";

import React, { useState } from "react";
import { Box, Divider, Stack } from "@mui/material";
import { TimePicker } from "vortex-ui";
import { ComponentPreview } from "@comp/docs/ComponentPreview";
import { ComponentCode } from "@comp/docs/ComponentCode";
import { ComponentStates } from "@comp/docs/ComponentStates";
import { ComponentProps } from "@comp/docs/ComponentProps";
import { ComponentHeader } from "@comp/docs/ComponentHeader";
import { ComponentInstallation } from "@comp/docs/ComponentInstallation";

const timePickerPropsList = [
  { name: "label", type: "string", default: '"Time"', description: "The label for the field." },
  { name: "value", type: "string", default: "undefined", description: "The selected time." },
  { name: "onChange", type: "(value: string) => void", default: "undefined", description: "Callback when time changes." },
  { name: "format", type: '"12h" | "24h"', default: '"12h"', description: "Time format (12h or 24h)." },
  { name: "disabled", type: "boolean", default: "false", description: "If true, the picker is disabled." },
];

export default function TimePickerDocs() {
  const [timeVal, setTimeVal] = useState("");

  return (
    <Box>
      <ComponentHeader
        title="TimePicker"
        description={<>A component for selecting times.</>}
      />

      <Box sx={{ pt: 3 }}>
        <ComponentPreview>
          <Stack spacing={2} sx={{ width: "100%", maxWidth: "300px" }}>
            <TimePicker
              label="Select Time"
              value={timeVal}
              onChange={setTimeVal}
            />
          </Stack>
        </ComponentPreview>
        <ComponentStates
          states={[
            {
              name: "12 Hour Format",
              element: <TimePicker label="12h Time" format="12h" sx={{ width: "200px" }} />,
            },
            {
              name: "24 Hour Format",
              element: <TimePicker label="24h Time" format="24h" sx={{ width: "200px" }} />,
            },
            {
              name: "Disabled",
              element: <TimePicker label="Disabled" disabled value="10:30 AM" sx={{ width: "200px" }} />,
            },
          ]}
        />
        <ComponentCode
          title="Usage"
          code={`import { TimePicker } from "vortex-ui";

function Example() {
  const [time, setTime] = useState("");
  return (
    <TimePicker
      label="Meeting Time"
      value={time}
      onChange={setTime}
      format="12h"
    />
  );
}`}
        />
        <ComponentProps propsList={timePickerPropsList} />
      </Box>

      <Divider sx={{ my: 4 }} />
      <ComponentInstallation />
    </Box>
  );
}
