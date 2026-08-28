"use client";

import React, { useState } from "react";
import { Typography, Box, Divider, Stack } from "@mui/material";
import { ChipInput } from "vortex-ui";
import { ComponentPreview } from "@comp/docs/ComponentPreview";
import { ComponentCode } from "@comp/docs/ComponentCode";
import { ComponentStates } from "@comp/docs/ComponentStates";
import { ComponentProps } from "@comp/docs/ComponentProps";
import { ComponentHeader } from "@comp/docs/ComponentHeader";
import { ComponentInstallation } from "@comp/docs/ComponentInstallation";

const chipInputPropsList = [
  {
    name: "label",
    type: "string",
    default: "undefined",
    description: "The label content shown inside the field.",
  },
  {
    name: "chips",
    type: "string[]",
    default: "[]",
    description: "Array of strings representing the chips.",
  },
  {
    name: "onChipsChange",
    type: "(chips: string[]) => void",
    default: "undefined",
    description: "Callback fired when chips are added or deleted.",
  },
  {
    name: "bgColor",
    type: "string",
    default: "undefined",
    description: "Background color of the input field.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the component (both input and chip deletion).",
  },
  {
    name: "error",
    type: "boolean | string",
    default: "false",
    description:
      "Toggles the error state display styling. If a string is provided, it renders below the input.",
  },
  {
    name: "helperText",
    type: "string",
    default: "undefined",
    description: "The helper text content.",
  },
  {
    name: "fullWidth",
    type: "boolean",
    default: "false",
    description:
      "If true, the input will take up the full width of its container.",
  },
];

export default function ChipInputDocs() {
  const [previewChips, setPreviewChips] = useState<string[]>([
    "React",
    "TypeScript",
  ]);

  return (
    <Box>
      <ComponentHeader
        title="ChipInput"
        description={
          <>
            A text field component that converts user input into styled chips,
            with support for duplicate prevention and deletion.
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
          <ChipInput
            label="Skills"
            chips={previewChips}
            onChipsChange={setPreviewChips}
            helperText="Type and press enter to add a skill"
            fullWidth
          />
        </Stack>
      </ComponentPreview>

      <ComponentStates
        states={[
          {
            name: "Default",
            element: (
              <ChipInput
                label="Tags"
                chips={["UI", "Design"]}
                sx={{ width: "200px" }}
              />
            ),
          },
          {
            name: "Empty",
            element: (
              <ChipInput
                label="Categories"
                chips={[]}
                sx={{ width: "200px" }}
              />
            ),
          },
          {
            name: "Disabled",
            element: (
              <ChipInput
                label="Disabled"
                disabled
                chips={["Locked", "Tags"]}
                sx={{ width: "200px" }}
              />
            ),
          },
          {
            name: "Error",
            element: (
              <ChipInput
                label="Error State"
                error="Invalid tag format"
                chips={["Error"]}
                sx={{ width: "200px" }}
              />
            ),
          },
        ]}
      />

      <ComponentCode
        title="Usage"
        code={`import { ChipInput } from "vortex-ui";
import { useState } from "react";

function FormExample() {
  const [emails, setEmails] = useState(["test@example.com"]);

  return (
    <ChipInput
      label="Emails"
      chips={emails}
      onChipsChange={setEmails}
      helperText="Enter emails separated by enter"
      fullWidth
    />
  );
}`}
      />

      <ComponentProps propsList={chipInputPropsList} />

      <Divider sx={{ my: 4 }} />

      <ComponentInstallation />
    </Box>
  );
}
