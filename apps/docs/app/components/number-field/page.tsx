"use client";

import React, { useState } from "react";
import { Typography, Box, Divider, Stack } from "@mui/material";
import { NumberField } from "vortex-ui";
import { ComponentPreview } from "@comp/docs/ComponentPreview";
import { ComponentCode } from "@comp/docs/ComponentCode";
import { ComponentStates } from "@comp/docs/ComponentStates";
import { ComponentProps } from "@comp/docs/ComponentProps";
import { ComponentHeader } from "@comp/docs/ComponentHeader";
import { ComponentInstallation } from "@comp/docs/ComponentInstallation";

const numberFieldPropsList = [
  {
    name: "label",
    type: "string",
    default: "undefined",
    description: "The label content shown inside the field.",
  },
  {
    name: "value",
    type: "number | string",
    default: "undefined",
    description: "The controlled value of the number field.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables editing and the increment/decrement buttons.",
  },
  {
    name: "showButton",
    type: "boolean",
    default: "true",
    description:
      "Toggles the visibility of the increment and decrement arrows.",
  },
  {
    name: "allowDecimal",
    type: "boolean",
    default: "false",
    description: "Allows decimal numbers to be entered.",
  },
  {
    name: "allowNegative",
    type: "boolean",
    default: "false",
    description: "Allows negative numbers to be entered.",
  },
  {
    name: "min",
    type: "number",
    default: "allowNegative ? -Infinity : 0",
    description: "The minimum allowed value.",
  },
  {
    name: "max",
    type: "number",
    default: "Infinity",
    description: "The maximum allowed value.",
  },
  {
    name: "step",
    type: "number",
    default: "1",
    description: "The amount to increment/decrement by when using the buttons.",
  },
  {
    name: "decimalPlaces",
    type: "number",
    default: "2",
    description:
      "The number of decimal places to round to when using the buttons.",
  },
  {
    name: "prefix",
    type: "ReactNode",
    default: "undefined",
    description: "Element or text to render at the start of the input.",
  },
  {
    name: "unit",
    type: "ReactNode",
    default: "undefined",
    description: "Element or text to render at the end of the input.",
  },
  {
    name: "error",
    type: "string | boolean",
    default: "false",
    description:
      "Toggles the error state display styling. If a string is provided, it renders below the input.",
  },
];

export default function NumberFieldDocs() {
  const [previewValue, setPreviewValue] = useState("0");

  return (
    <Box>
      <ComponentHeader
        title="NumberField"
        description={
          <>
            A highly customizable number input component supporting decimals,
            negatives, prefixes, units, and long-press stepper arrows.
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
          <NumberField
            label="Quantity"
            value={previewValue}
            onChange={(e) => setPreviewValue(e.target.value)}
            min={0}
            max={100}
          />
        </Stack>
      </ComponentPreview>

      <ComponentStates
        states={[
          {
            name: "Default",
            element: (
              <NumberField
                label="Age"
                min={0}
                max={120}
                sx={{ width: "150px" }}
              />
            ),
          },
          {
            name: "Decimals & Prefix",
            element: (
              <NumberField
                label="Price"
                allowDecimal
                decimalPlaces={2}
                step={0.5}
                prefix="$"
                sx={{ width: "150px" }}
              />
            ),
          },
          {
            name: "Negative & Unit",
            element: (
              <NumberField
                label="Temp"
                allowNegative
                min={-50}
                max={50}
                unit="°C"
                sx={{ width: "150px" }}
              />
            ),
          },
          {
            name: "No Buttons",
            element: (
              <NumberField
                label="Zip Code"
                showButton={false}
                sx={{ width: "150px" }}
              />
            ),
          },
          {
            name: "Disabled",
            element: (
              <NumberField
                label="Disabled"
                disabled
                value={10}
                sx={{ width: "150px" }}
              />
            ),
          },
          {
            name: "Error",
            element: (
              <NumberField
                label="Error"
                error="Invalid quantity."
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
        code={`import { NumberField } from "vortex-ui";

function FormExample() {
  return (
    <Stack spacing={3}>
      <NumberField
        label="Age"
        min={0}
        max={120}
        step={1}
      />
      <NumberField
        label="Temperature"
        allowNegative
        allowDecimal
        unit="°C"
      />
      <NumberField
        label="Price"
        prefix="$"
        allowDecimal
        decimalPlaces={2}
        step={0.5}
      />
    </Stack>
  );
}`}
      />

      <ComponentProps propsList={numberFieldPropsList} />

      <Divider sx={{ my: 4 }} />

      <ComponentInstallation />
    </Box>
  );
}
