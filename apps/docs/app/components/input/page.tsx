"use client";

import React from "react";
import { Typography, Box, Divider, Stack } from "@mui/material";
import { TextField } from "vortex-ui";
import { ComponentPreview } from "@comp/docs/ComponentPreview";
import { ComponentCode } from "@comp/docs/ComponentCode";
import { ComponentStates } from "@comp/docs/ComponentStates";
import { ComponentProps } from "@comp/docs/ComponentProps";
import { ComponentHeader } from "@comp/docs/ComponentHeader";
import { ComponentInstallation } from "@comp/docs/ComponentInstallation";

const inputPropsList = [
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

export default function TextFieldDocs() {
  return (
    <Box>
      <ComponentHeader
        title="TextField"
        description={
          <>
            A custom TextField component for forms with built-in error styling.
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
          <TextField
            label="Name"
            placeholder="Enter your full name"
            value={""}
            onChange={(e) => console.info(e.target.value)}
            disabled={false}
          />
        </Stack>
      </ComponentPreview>

      <ComponentStates
        states={[
          {
            name: "Hover",
            element: (
              <TextField
                label="Hover"
                placeholder="Hover over me"
                sx={{ width: "150px" }}
              />
            ),
          },
          {
            name: "Typed",
            element: (
              <TextField
                label="Typed"
                value="User typed text"
                sx={{ width: "150px" }}
              />
            ),
          },
          {
            name: "Disabled",
            element: (
              <TextField
                label="Disabled"
                disabled
                placeholder="Locked field"
                sx={{ width: "150px" }}
              />
            ),
          },
          {
            name: "Active",
            element: (
              <TextField
                label="Active"
                autoFocus
                placeholder="Focused field"
                sx={{ width: "150px" }}
              />
            ),
          },
          {
            name: "Error",
            element: (
              <TextField
                label="Error"
                error="Invalid input."
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
        code={`import { TextField } from "vortex-ui";

function FormExample() {
  return (
    <Stack spacing={3}>
      <TextField
        label="Email Address"
        placeholder="you@company.com"
        type="email"
      />
      <TextField
        label="Password"
        type="password"
        error="Password must be at least 8 characters long."
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
