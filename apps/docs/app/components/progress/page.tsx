"use client";
import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { ComponentHeader } from "@docs/ComponentHeader";
import { ComponentVariants } from "@docs/ComponentVariants";
import { ComponentCode } from "@docs/ComponentCode";
import { ComponentProps } from "@docs/ComponentProps";
import { Progress } from "vortex-ui";

const progressPropsList = [
  {
    name: "value",
    type: "number",
    default: "0",
    description: "The target percentage (0 to 100).",
  },
  {
    name: "showValue",
    type: "boolean",
    default: "false",
    description: "Whether to display the percentage value.",
  },
  {
    name: "valuePosition",
    type: '"right" | "top" | "inside"',
    default: '"right"',
    description: "The position of the percentage value.",
  },
  {
    name: "height",
    type: "number",
    default: "8",
    description: "Height of the progress bar in px.",
  },
  {
    name: "borderRadius",
    type: "number | string",
    default: "10",
    description: "Border radius of the bar.",
  },
  {
    name: "bgColor",
    type: "string",
    default: '"#EEF2FF"',
    description: "Background color of the track.",
  },
  {
    name: "getColor",
    type: "(val: number) => string",
    default: "-",
    description: "Optional function to determine color based on value.",
  },
  {
    name: "animationDuration",
    type: "number",
    default: "1.2",
    description: "Animation duration in seconds.",
  },
  {
    name: "variant",
    type: '"default" | "stepper"',
    default: '"default"',
    description: "The variant of the progress bar.",
  },
  {
    name: "steps",
    type: "number",
    default: "5",
    description: 'Number of steps when variant is "stepper".',
  },
  {
    name: "stepJump",
    type: "number",
    default: "0",
    description:
      "If > 0, animates the progress bar visually in discrete jumps.",
  },
];

export default function ProgressDocs() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box>
      <ComponentHeader
        title="Progress"
        description={
          <>
            Progress bars inform users about the status of ongoing processes,
            such as loading an app, submitting a form, or saving updates.
          </>
        }
      />

      <ComponentVariants
        title="Variants"
        description="The component comes in continuous and stepper variations."
        direction="column"
        variants={[
          {
            name: "Default Linear",
            element: (
              <Box sx={{ width: "100%", maxWidth: 500 }}>
                <Progress value={progress} showValue valuePosition="right" />
              </Box>
            ),
          },
          {
            name: "Inside Label",
            element: (
              <Box sx={{ width: "100%", maxWidth: 500 }}>
                <Progress
                  value={progress}
                  showValue
                  valuePosition="inside"
                  height={16}
                />
              </Box>
            ),
          },
          {
            name: "Stepper",
            element: (
              <Box sx={{ width: "100%", maxWidth: 500 }}>
                <Progress
                  value={progress}
                  variant="stepper"
                  steps={5}
                  showValue
                  valuePosition="top"
                />
              </Box>
            ),
          },
          {
            name: "Discrete Jump",
            element: (
              <Box sx={{ width: "100%", maxWidth: 500 }}>
                <Progress
                  value={progress}
                  stepJump={20}
                  showValue
                  valuePosition="right"
                />
              </Box>
            ),
          },
        ]}
      />

      <ComponentCode
        code={`import { Progress } from "vortex-ui";

function Example() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Default Linear Progress */}
      <Progress value={50} showValue valuePosition="right" />
      
      {/* Stepper Progress */}
      <Progress value={60} variant="stepper" steps={5} showValue />
      
      {/* Inside Label Progress */}
      <Progress value={75} showValue valuePosition="inside" height={16} />
    </div>
  );
}`}
      />

      <Box mt={6}>
        <ComponentProps propsList={progressPropsList} title="Progress Props" />
      </Box>
    </Box>
  );
}
