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
import { RadioGroup, Radio } from "vortex-ui";

const radioGroupPropsList = [
  {
    name: "value",
    type: "string",
    default: "undefined",
    description: "The currently selected value in the radio group.",
  },
  {
    name: "onChange",
    type: "(value: string) => void",
    default: "undefined",
    description: "Callback fired when a radio is selected.",
  },
  {
    name: "orientation",
    type: "'horizontal' | 'vertical'",
    default: "'horizontal'",
    description: "The layout orientation of the radios.",
  },
  {
    name: "variant",
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    description: "The default size variant for all radios in the group.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "If true, the entire radio group is disabled.",
  },
  {
    name: "color",
    type: "string",
    default: "undefined",
    description: "Default checked color for all radios in the group.",
  },
  {
    name: "unselectedColor",
    type: "string",
    default: "'#4772FF'",
    description: "The border color for the unchecked state.",
  },
  {
    name: "label",
    type: "string",
    default: "undefined",
    description: "Optional label for the radio group.",
  },
  {
    name: "children",
    type: "ReactNode",
    default: "undefined",
    description: "The Radio components to render within the group.",
  },
];

const supportTiers = [
  { label: "Enterprise Plus", value: "enterprise_plus" },
  { label: "Enterprise Premium", value: "enterprise_premium" },
  { label: "Basic Starter", value: "basic_starter" },
];

export default function RadioGroupDocs() {
  const [previewValue, setPreviewValue] = useState<string>("enterprise_plus");

  return (
    <Box>
      <ComponentHeader
        title="Radio Group"
        description={
          <>
            A highly customizable radio group component for allowing users to
            select a single option from a set.
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
        <RadioGroup
          label="Select Support Tier"
          value={previewValue}
          onChange={setPreviewValue}
          options={supportTiers}
        />
      </ComponentPreview>

      <ComponentVariants
        title="Variants (Sizes)"
        description="The component supports three distinct size variants."
        variants={[
          {
            name: "Small",
            element: (
              <RadioGroup variant="sm" defaultValue="sm1">
                <Radio value="sm1" label="Small Radio" />
              </RadioGroup>
            ),
          },
          {
            name: "Medium",
            element: (
              <RadioGroup variant="md" defaultValue="md1">
                <Radio value="md1" label="Medium Radio" />
              </RadioGroup>
            ),
          },
          {
            name: "Large",
            element: (
              <RadioGroup variant="lg" defaultValue="lg1">
                <Radio value="lg1" label="Large Radio" />
              </RadioGroup>
            ),
          },
        ]}
      />

      <ComponentStates
        states={[
          {
            name: "Custom Colors",
            element: (
              <RadioGroup label="Select Priority" defaultValue="Medium">
                <Radio value="Low" label="Low" color="#4772FF" />
                <Radio value="Medium" label="Medium" color="#F8BB13" />
                <Radio value="High" label="High" color="#FF4750" />
              </RadioGroup>
            ),
          },
          {
            name: "Orientation",
            element: (
              <Box sx={{ display: "flex", gap: 6 }}>
                <RadioGroup
                  label="Horizontal"
                  orientation="horizontal"
                  defaultValue="1"
                >
                  <Radio value="1" label="Opt 1" />
                  <Radio value="2" label="Opt 2" />
                </RadioGroup>
                <RadioGroup label="Vertical" orientation="vertical" defaultValue="2">
                  <Radio value="1" label="Opt 1" />
                  <Radio value="2" label="Opt 2" />
                </RadioGroup>
              </Box>
            ),
          },
          {
            name: "",
            element: (
              <RadioGroup
                disabled
                label="Disabled Group"
                defaultValue="enterprise_plus"
              >
                <Radio value="enterprise_plus" label="Enterprise Plus" />
                <Radio value="enterprise_premium" label="Enterprise Premium" />
                <Radio value="basic_starter" label="Basic Starter" />
              </RadioGroup>
            ),
          },
        ]}
      />

      <ComponentCode
        title="Usage"
        code={`import { useState } from "react";
import { Box } from "@mui/material";
import { RadioGroup, Radio } from "vortex-ui";

const FRUITS = [
  { label: "Mango", value: "mango" },
  { label: "Grapes", value: "grapes" },
];

function Example() {
  const [compositionVal, setCompositionVal] = useState<string>("apple");
  const [propVal, setPropVal] = useState<string>("mango");

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      {/* Method 1: Using Composition */}
      <RadioGroup
        label="Using Children"
        orientation="horizontal"
        value={compositionVal}
        onChange={setCompositionVal}
      >
        <Radio value="apple" label="Apple" />
        <Radio value="banana" label="Banana" />
        <Radio value="orange" label="Orange" />
      </RadioGroup>

      {/* Method 2: Using Options Prop */}
      <RadioGroup
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

      <ComponentProps propsList={radioGroupPropsList} />

      <Divider sx={{ my: 4 }} />

      <ComponentInstallation />
    </Box>
  );
}
