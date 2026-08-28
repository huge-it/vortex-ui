"use client";

import { ComponentCode } from "@docs/ComponentCode";
import { ComponentHeader } from "@docs/ComponentHeader";
import { ComponentInstallation } from "@docs/ComponentInstallation";
import { ComponentPreview } from "@docs/ComponentPreview";
import { ComponentProps } from "@docs/ComponentProps";
import { Box, Divider, Typography } from "@mui/material";
import { useState } from "react";
import { PipelineStepper, Stage } from "vortex-ui";

const STAGES: Stage[] = [
  { label: "Draft", value: 1 },
  { label: "New", value: 2 },
  { label: "Open", value: 3 },
  { label: "Proposal", value: 4 },
  { label: "Won", value: 5 },
];

const pipelineStepperPropsList = [
  {
    name: "stages",
    type: "Stage[]",
    default: "[]",
    description: "The array of stages to render in the pipeline.",
  },
  {
    name: "value",
    type: "string | number",
    default: "undefined",
    description: "The value of the currently active stage.",
  },
  {
    name: "onChange",
    type: "(value: string | number) => void",
    default: "undefined",
    description: "Callback fired when a stage is clicked.",
  },
  {
    name: "width",
    type: "string | number",
    default: "'100%'",
    description: "Width of the stepper component.",
  },
  {
    name: "height",
    type: "string | number",
    default: "38",
    description: "Height of each stepper item.",
  },
];

export default function PipelineStepperDocs() {
  const [pipelineStep, setPipelineStep] = useState(5);

  return (
    <Box>
      <ComponentHeader
        title="PipelineStepper"
        description={
          <>
            A progress tracker that displays a sequence of stages with a
            chevron-style connecting design.
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
        <PipelineStepper
          stages={STAGES}
          value={pipelineStep}
          onChange={(val) => setPipelineStep(val as number)}
          width="80%"
        />
      </ComponentPreview>

      <ComponentCode
        title="Usage"
        code={`import React, { useState } from 'react';
import { PipelineStepper, Stage } from "vortex-ui";

const STAGES: Stage[] = [
  { label: "Draft", value: 1 },
  { label: "New", value: 2 },
  { label: "Open", value: 3 },
  { label: "Proposal", value: 4 },
  { label: "Won", value: 5 },
];

function PipelineStepperExample() {
  const [pipelineStep, setPipelineStep] = useState(3);

  return (
    <PipelineStepper 
      stages={STAGES} 
      value={pipelineStep} 
      onChange={(val) => setPipelineStep(val as number)}
      width="100%" 
    />
  );
}`}
      />

      <ComponentProps propsList={pipelineStepperPropsList} />

      <Divider sx={{ my: 4 }} />

      <ComponentInstallation />
    </Box>
  );
}
