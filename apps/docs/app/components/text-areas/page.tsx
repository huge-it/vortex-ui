"use client";
import React from "react";
import { Typography, Box, Divider, Stack } from "@mui/material";
import { Textarea } from "vortex-ui";
import { ComponentPreview } from "../../../components/docs/ComponentPreview";
import { ComponentCode } from "../../../components/docs/ComponentCode";
import { ComponentStates } from "../../../components/docs/ComponentStates";
import { ComponentProps } from "../../../components/docs/ComponentProps";
import { ComponentHeader } from "../../../components/docs/ComponentHeader";
import { ComponentInstallation } from "../../../components/docs/ComponentInstallation";

const textareaPropsList = [
  {
    name: "variant",
    type: '"default" | "expandable" | "minLength"',
    default: '"default"',
    description: "The variant of the textarea to use.",
  },
  {
    name: "label",
    type: "string",
    default: "undefined",
    description: "The label content shown above the field.",
  },
  {
    name: "placeholder",
    type: "string",
    default: "undefined",
    description:
      "Short hint displayed in the textarea before user enters value.",
  },
  {
    name: "error",
    type: "boolean | string",
    default: "false",
    description:
      "Toggles the error state display styling. If a string is provided, it is shown as an error message.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables editing inside the textarea.",
  },
  {
    name: "maxLength",
    type: "number",
    default: "undefined",
    description:
      "Maximum number of characters allowed. For the minLength variant, this acts as the minimum character threshold.",
  },
  {
    name: "rows",
    type: "number",
    default: "3",
    description: "Number of rows to display for the default variant.",
  },
  {
    name: "minRows",
    type: "number",
    default: "undefined",
    description:
      "Minimum number of rows to display for the expandable variant.",
  },
];

export default function TextareaDocs() {
  return (
    <Box>
      <ComponentHeader
        title="Textarea"
        description={
          <>
            A versatile textarea component supporting fixed, expandable, and
            validation variants.
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
        <Stack spacing={2} sx={{ width: "100%", maxWidth: "500px" }}>
          <Textarea
            variant="default"
            label="Description"
            placeholder="Enter a detailed description..."
            rows={4}
          />
        </Stack>
      </ComponentPreview>

      <ComponentStates
        states={[
          {
            name: "Expandable",
            element: (
              <Textarea
                variant="expandable"
                label="Notes"
                placeholder="This area grows as you type..."
                minRows={3}
              />
            ),
          },
          {
            name: "Min Length",
            element: (
              <Textarea
                variant="minLength"
                label="Feedback"
                placeholder="We value your thoughts..."
                maxLength={50}
              />
            ),
          },
          {
            name: "Error",
            element: (
              <Textarea
                label="Error State"
                error="This field is required."
                placeholder="Wrong value"
              />
            ),
          },
          {
            name: "Disabled",
            element: (
              <Textarea
                label="Disabled"
                disabled
                placeholder="You cannot edit this."
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
        code={`import { Textarea } from "vortex-ui";

function FormExample() {
  return (
    <Stack spacing={3}>
      <Textarea
        variant="default"
        label="Description"
        rows={4}
      />
      <Textarea
        variant="expandable"
        label="Notes"
        minRows={3}
      />
      <Textarea
        variant="minLength"
        label="Feedback"
        maxLength={50}
      />
    </Stack>
  );
}`}
      />

      <ComponentProps propsList={textareaPropsList} />

      <Divider sx={{ my: 4 }} />

      <ComponentInstallation />
    </Box>
  );
}
