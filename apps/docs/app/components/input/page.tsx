"use client";

import React from "react";
import { Typography, Box, Divider, Stack } from "@mui/material";
import { Input } from "vortex-ui";
import { ComponentPreview } from "../../../components/docs/ComponentPreview";
import { ComponentCode } from "../../../components/docs/ComponentCode";
import { ComponentVariants } from "../../../components/docs/ComponentVariants";
import { ComponentStates } from "../../../components/docs/ComponentStates";
import { ComponentProps } from "../../../components/docs/ComponentProps";
import { ComponentHeader } from "../../../components/docs/ComponentHeader";
import { ComponentInstallation } from "../../../components/docs/ComponentInstallation";

const inputPropsList = [
  {
    name: "variant",
    type: "'outlined' | 'filled' | 'standard'",
    default: "'outlined'",
    description: "The visual style of the text field.",
  },
  {
    name: "label",
    type: "string",
    default: "undefined",
    description: "The label content shown above or inside the field.",
  },
  {
    name: "placeholder",
    type: "string",
    default: "undefined",
    description: "Short hint displayed in the input before user enters value.",
  },
  {
    name: "error",
    type: "boolean",
    default: "false",
    description: "Toggles the error state display styling.",
  },
  {
    name: "helperText",
    type: "string",
    default: "undefined",
    description: "Supporting text content displayed below the text field.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables editing inside the input field.",
  },
  {
    name: "fullWidth",
    type: "boolean",
    default: "true",
    description: "Allows input to occupy the full width of its container.",
  },
];

export default function InputDocs() {
  return (
    <Box>
      <ComponentHeader
        title="Input"
        description={<>A text field component for form inputs, wrapping MUI&apos;s TextField.</>}
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
          <Input label="Name" placeholder="Enter your full name" />
        </Stack>
      </ComponentPreview>

      <ComponentVariants
        variants={[
          {
            name: "Outlined",
            element: (
              <Input
                label="Outlined"
                placeholder="Outlined field"
                sx={{ width: "150px" }}
              />
            ),
          },
          {
            name: "Filled",
            element: (
              <Input
                variant="filled"
                label="Filled"
                placeholder="Filled field"
                sx={{ width: "150px" }}
              />
            ),
          },
          {
            name: "Standard",
            element: (
              <Input
                variant="standard"
                label="Standard"
                placeholder="Standard field"
                sx={{ width: "150px" }}
              />
            ),
          },
        ]}
      />

      <ComponentStates
        states={[
          {
            name: "Default",
            element: (
              <Input
                label="Default"
                placeholder="Type here"
                sx={{ width: "150px" }}
              />
            ),
          },
          {
            name: "Disabled",
            element: (
              <Input
                label="Disabled"
                disabled
                placeholder="Locked field"
                sx={{ width: "150px" }}
              />
            ),
          },
          {
            name: "Error",
            element: (
              <Input
                label="Error"
                error
                helperText="Invalid input."
                placeholder="Wrong value"
                sx={{ width: "150px" }}
              />
            ),
          },
        ]}
      />

      <Typography
        variant="h5"
        color="text.secondary"
        sx={{ fontWeight: 600, mb: 2, fontSize: "1.25rem" }}
      >
        Usage
      </Typography>
      <ComponentCode
        code={`import { Input } from "vortex-ui";

function FormExample() {
  return (
    <Stack spacing={3}>
      <Input
        label="Email Address"
        placeholder="you@company.com"
        type="email"
      />
      <Input
        label="Password"
        type="password"
        error={true}
        helperText="Password must be at least 8 characters long."
      />
    </Stack>
  );
}`}
      />

      <ComponentProps propsList={inputPropsList} />

      <Divider sx={{ my: 4 }} />

      <ComponentInstallation />
    </Box>
  );
}
