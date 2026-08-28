"use client";

import React, { useState } from "react";
import { Typography, Box, Divider, Stack } from "@mui/material";
import { AutoPopulate, AutoPopulateItem } from "vortex-ui";
import { ComponentPreview } from "@docs/ComponentPreview";
import { ComponentCode } from "@docs/ComponentCode";
import { ComponentStates } from "@docs/ComponentStates";
import { ComponentProps } from "@docs/ComponentProps";
import { ComponentHeader } from "@docs/ComponentHeader";
import { ComponentInstallation } from "@docs/ComponentInstallation";

const autoPopulatePropsList = [
  {
    name: "label",
    type: "string",
    default: "undefined",
    description: "The label content shown above or inside the field.",
  },
  {
    name: "value",
    type: "string",
    default: "undefined",
    description: "The selected value of the component.",
  },
  {
    name: "onChange",
    type: "(event: { target: { value: string } }) => void",
    default: "undefined",
    description: "Callback fired when the value changes.",
  },
  {
    name: "bgColor",
    type: "string",
    default: "undefined",
    description: "Background color of the input field.",
  },
  {
    name: "error",
    type: "boolean | string",
    default: "false",
    description:
      "Toggles the error state display styling or shows an error message.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables editing inside the input field.",
  },
  {
    name: "children",
    type: "React.ReactNode",
    default: "undefined",
    description: "Options to render inside the dropdown, typically MenuItems.",
  },
];

function AutoPopulatePreview() {
  const [value, setValue] = useState("");
  return (
    <AutoPopulate
      label="Opportunity Name / Title *"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      bgColor="#ffffff"
    >
      <AutoPopulateItem value="samanta" subtitle="ABC Pvt Ltd">
        Samanta
      </AutoPopulateItem>
      <AutoPopulateItem value="samuel" subtitle="TK Solutions">
        Samuel
      </AutoPopulateItem>
      <AutoPopulateItem value="john" subtitle="Doe Enterprises">
        John
      </AutoPopulateItem>
    </AutoPopulate>
  );
}

export default function AutoPopulateDocs() {
  return (
    <Box>
      <ComponentHeader
        title="AutoPopulate"
        description={
          <>
            A specialized select component with autocomplete and filtering
            capabilities for choosing items from a list with rich metadata.
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
        <Stack spacing={2} sx={{ width: "100%", maxWidth: "400px" }}>
          <AutoPopulatePreview />
        </Stack>
      </ComponentPreview>

      <ComponentStates
        states={[
          {
            name: "Hover",
            element: <AutoPopulate label="Hover" value="" />,
          },
          {
            name: "Selected",
            element: (
              <AutoPopulate label="Selected" value="samanta">
                <AutoPopulateItem value="samanta" subtitle="ABC Pvt Ltd">
                  Samanta
                </AutoPopulateItem>
                <AutoPopulateItem value="george" subtitle="DAV Pvt Ltd">
                  George
                </AutoPopulateItem>
              </AutoPopulate>
            ),
          },
          {
            name: "Disabled",
            element: <AutoPopulate label="Disabled" disabled value="" />,
          },
          {
            name: "Error",
            element: (
              <AutoPopulate
                label="Error"
                error="Selection required."
                value=""
              />
            ),
          },
        ]}
      />

      <ComponentCode
        title="Usage"
        code={`import { useState } from "react";
import { AutoPopulate, AutoPopulateItem } from "vortex-ui";

function FormExample() {
  const [value, setValue] = useState("");
  return (
    <AutoPopulate
      label="Opportunity Name / Title *"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      bgColor="#ffffff"
    >
      <AutoPopulateItem value="samanta" subtitle="ABC Pvt Ltd">
        Samanta
      </AutoPopulateItem>
      <AutoPopulateItem value="samuel" subtitle="TK Solutions">
        Samuel
      </AutoPopulateItem>
      <AutoPopulateItem value="john" subtitle="Doe Enterprises">
        John
      </AutoPopulateItem>
    </AutoPopulate>
  );
}`}
      />

      <ComponentProps propsList={autoPopulatePropsList} />

      <Divider sx={{ my: 4 }} />

      <ComponentInstallation />
    </Box>
  );
}
