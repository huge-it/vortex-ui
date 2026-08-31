"use client";

import React, { useState } from "react";
import { Box, Divider, Typography } from "@mui/material";
import { ComponentCode } from "@comp/docs/ComponentCode";
import { ComponentInstallation } from "@comp/docs/ComponentInstallation";
import { ComponentPreview } from "@comp/docs/ComponentPreview";
import { ComponentHeader } from "@comp/docs/ComponentHeader";
import { ComponentProps } from "@comp/docs/ComponentProps";
import { ComponentStates } from "@comp/docs/ComponentStates";
import { ComponentVariants } from "@comp/docs/ComponentVariants";
import { CheckboxGroup, Checkbox } from "vortex-ui";

const modules = [
  { label: "CRM Dashboard", value: "crm" },
  { label: "Analytics", value: "analytics" },
  { label: "Billing & Invoicing", value: "billing" },
];

const checkboxGroupPropsList = [
  {
    name: "value",
    type: "string[]",
    default: "[]",
    description: "The currently selected values in the checkbox group.",
  },
  {
    name: "onChange",
    type: "(value: string[]) => void",
    default: "undefined",
    description: "Callback fired when a checkbox is toggled.",
  },
  {
    name: "orientation",
    type: "'horizontal' | 'vertical'",
    default: "'horizontal'",
    description: "The layout orientation of the checkboxes.",
  },
  {
    name: "variant",
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    description: "The default size variant for all checkboxes in the group.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "If true, the entire checkbox group is disabled.",
  },
  {
    name: "color",
    type: "string",
    default: "undefined",
    description: "Default checked color for all checkboxes in the group.",
  },
  {
    name: "borderColor",
    type: "string",
    default: "'#D3D6E2'",
    description: "The border color for the unchecked state.",
  },
  {
    name: "label",
    type: "string",
    default: "undefined",
    description: "Optional label for the checkbox group.",
  },
  {
    name: "children",
    type: "ReactNode",
    default: "undefined",
    description: "The Checkbox components to render within the group.",
  },
];

export default function CheckboxGroupDocs() {
  const [previewValue, setPreviewValue] = useState<string[]>(["crm"]);
  const [singleChecked, setSingleChecked] = useState<boolean>(true);

  return (
    <Box>
      <ComponentHeader
        title="Checkbox Group"
        description={
          <>
            A highly customizable checkbox group component for allowing users to
            select multiple options from a set.
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
        <CheckboxGroup
          label="Select Modules"
          value={previewValue}
          onChange={setPreviewValue}
          options={modules}
        />
      </ComponentPreview>

      <Typography
        variant="h5"
        color="text.secondary"
        sx={{ fontWeight: 600, mb: 2, mt: 4, fontSize: "1.25rem" }}
      >
        Single Checkbox
      </Typography>
      <ComponentPreview>
        <CheckboxGroup
          value={singleChecked ? ["single"] : []}
          onChange={(val) => setSingleChecked(val.includes("single"))}
        >
          <Checkbox
            value="single"
            label="I agree to the terms and conditions"
          />
        </CheckboxGroup>
      </ComponentPreview>

      <ComponentVariants
        title="Variants (Sizes)"
        description="The component supports three distinct size variants."
        variants={[
          {
            name: "Small",
            element: (
              <CheckboxGroup variant="sm" defaultValue={["sm1"]}>
                <Checkbox value="sm1" label="Small" />
              </CheckboxGroup>
            ),
          },
          {
            name: "Medium",
            element: (
              <CheckboxGroup variant="md" defaultValue={["md1"]}>
                <Checkbox value="md1" label="Medium" />
              </CheckboxGroup>
            ),
          },
          {
            name: "Large",
            element: (
              <CheckboxGroup variant="lg" defaultValue={["lg1"]}>
                <Checkbox value="lg1" label="Large" />
              </CheckboxGroup>
            ),
          },
        ]}
      />

      <ComponentStates
        states={[
          {
            name: "",
            element: (
              <Box sx={{ display: "flex", gap: 6 }}>
                <CheckboxGroup
                  label="Horizontal"
                  orientation="horizontal"
                  defaultValue={["1"]}
                >
                  <Checkbox value="1" label="Opt 1" />
                  <Checkbox value="2" label="Opt 2" />
                </CheckboxGroup>
                <CheckboxGroup
                  label="Vertical"
                  orientation="vertical"
                  defaultValue={["2"]}
                >
                  <Checkbox value="1" label="Opt 1" />
                  <Checkbox value="2" label="Opt 2" />
                </CheckboxGroup>
              </Box>
            ),
          },
          {
            name: "Custom Colors",
            element: (
              <CheckboxGroup defaultValue={["red", "green", "blue"]}>
                <Checkbox value="red" label="Red" color="#EF4444" />
                <Checkbox value="green" label="Green" color="#10B981" />
                <Checkbox value="blue" label="Blue" color="#3B82F6" />
              </CheckboxGroup>
            ),
          },
          {
            name: "",
            element: (
              <CheckboxGroup
                disabled
                label="Disabled Group"
                defaultValue={["crm"]}
              >
                <Checkbox value="crm" label="CRM Dashboard" />
                <Checkbox value="analytics" label="Analytics" />
                <Checkbox value="billing" label="Billing & Invoicing" />
              </CheckboxGroup>
            ),
          },
        ]}
      />

      <ComponentCode
        title="Usage"
        code={`import { useState } from "react";
import { Box } from "@mui/material";
import { CheckboxGroup, Checkbox } from "vortex-ui";

const FRUITS = [
  { label: "Mango", value: "mango" },
  { label: "Grapes", value: "grapes" },
];

function Example() {
  const [compositionVal, setCompositionVal] = useState<string[]>(["apple"]);
  const [propVal, setPropVal] = useState<string[]>(["mango"]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      {/* Method 1: Using Composition */}
      <CheckboxGroup
        label="Using Children"
        orientation="horizontal"
        value={compositionVal}
        onChange={setCompositionVal}
      >
        <Checkbox value="apple" label="Apple" />
        <Checkbox value="banana" label="Banana" />
        <Checkbox value="orange" label="Orange" />
      </CheckboxGroup>

      {/* Method 2: Using Options Prop */}
      <CheckboxGroup
        label="Using Options Prop"
        orientation="horizontal"
        value={propVal}
        onChange={setPropVal}
        options={FRUITS}
      />
    </Box>
  );
}`}
      />

      <ComponentProps propsList={checkboxGroupPropsList} />

      <Divider sx={{ my: 4 }} />

      <ComponentInstallation />
    </Box>
  );
}
