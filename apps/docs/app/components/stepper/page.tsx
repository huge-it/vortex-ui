"use client";

import { ComponentCode } from "@docs/ComponentCode";
import { ComponentHeader } from "@docs/ComponentHeader";
import { ComponentInstallation } from "@docs/ComponentInstallation";
import { ComponentPreview } from "@docs/ComponentPreview";
import { ComponentProps } from "@docs/ComponentProps";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Stepper, ToggleSwitch } from "vortex-ui";

const STEPS = [
  { label: "Select Campaign", description: "Choose objective", value: 1 },
  { label: "Create an Ad", description: "Design visuals", value: 2 },
  { label: "Verification", description: "Review & submit", value: 3 },
];

const stepperPropsList = [
  {
    name: "steps",
    type: "(string | StepItem)[]",
    default: "[]",
    description:
      "Array of steps. Can be simple string labels or objects with `label` and `description`.",
  },
  {
    name: "value",
    type: "number | string",
    default: "0",
    description: "The value (or index) of the currently active step.",
  },
  {
    name: "onStepClick",
    type: "(index: number) => void",
    default: "undefined",
    description: "Callback fired when a step is clicked.",
  },
  {
    name: "variant",
    type: "'horizontal' | 'vertical'",
    default: "'horizontal'",
    description:
      "The visual variant of the stepper. On mobile, it will always fallback to horizontal.",
  },
  {
    name: "size",
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    description: "The size of the stepper bubbles and text.",
  },
  {
    name: "color",
    type: "string",
    default: "theme.palette.primary.main",
    description: "Theme color override for active and completed steps.",
  },
  {
    name: "showLabels",
    type: "boolean",
    default: "true",
    description: "Whether to show the labels under/next to the step bubbles.",
  },
  {
    name: "connectorStyle",
    type: "'solid' | 'dashed'",
    default: "'solid'",
    description: "Style of the connecting line between steps.",
  },
  {
    name: "allowJump",
    type: "boolean",
    default: "false",
    description:
      "If true, allows the user to click and jump to any step including pending steps.",
  },
];

export default function StepperDocs() {
  const [activeStep, setActiveStep] = useState<number | string>(2);
  const [isVertical, setIsVertical] = useState(false);
  const [isDashed, setIsDashed] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  const [allowJump, setAllowJump] = useState(true);

  return (
    <Box>
      <ComponentHeader
        title="Stepper"
        description={
          <>
            A highly customizable stepper component for forms and multi-step
            processes.
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
        <Stack>
          <Box display={"flex"} gap={2} alignItems={"center"} mb={2}>
            <ToggleSwitch
              checked={isVertical}
              onChange={(checked) => setIsVertical(checked)}
              label="Vertical Layout"
            />
            <ToggleSwitch
              checked={isDashed}
              onChange={(checked) => setIsDashed(checked)}
              label="Dashed Connector"
            />
            <ToggleSwitch
              checked={isSmall}
              onChange={(checked) => setIsSmall(checked)}
              label="Small Size"
            />
            <ToggleSwitch
              checked={allowJump}
              onChange={(checked) => setAllowJump(checked)}
              label="Allow Jump"
            />
          </Box>

          <Stepper
            steps={STEPS}
            value={activeStep}
            onStepClick={setActiveStep}
            variant={isVertical ? "vertical" : "horizontal"}
            connectorStyle={isDashed ? "dashed" : "solid"}
            size={isSmall ? "sm" : "md"}
            allowJump={allowJump}
          />
        </Stack>
      </ComponentPreview>

      <ComponentCode
        title="Usage"
        code={`import React, { useState } from 'react';
import { Stepper } from "vortex-ui";

const STEPS = [
  { label: "Select Campaign", description: "Choose objective", value: 1 },
  { label: "Create an Ad", description: "Design visuals", value: 2 },
  { label: "Verification", description: "Review & submit", value: 3 },
];

function StepperExample() {
  const [activeStep, setActiveStep] = useState<number | string>(2);

  return (
    <Stepper
      steps={STEPS}
      value={activeStep}
      onStepClick={setActiveStep}
      variant="horizontal"
      size="md"
      connectorStyle="solid"
      allowJump={true}
    />
  );
}`}
      />

      <ComponentProps propsList={stepperPropsList} />

      <Divider sx={{ my: 4 }} />

      <ComponentInstallation />
    </Box>
  );
}
