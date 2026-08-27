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
import { ToggleSwitch } from "vortex-ui";

const toggleSwitchPropsList = [
  {
    name: "checked",
    type: "boolean",
    default: "undefined",
    description: "If true, the component is checked (controlled state).",
  },
  {
    name: "defaultChecked",
    type: "boolean",
    default: "false",
    description: "The default checked state for uncontrolled usage.",
  },
  {
    name: "onChange",
    type: "(checked: boolean) => void",
    default: "undefined",
    description: "Callback fired when the state is toggled.",
  },
  {
    name: "variant",
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    description: "The predefined size of the component track and thumb.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "If true, the switch will be disabled and visually faded.",
  },
  {
    name: "color",
    type: "string",
    default: "'#4772FF'",
    description: "The background color of the track when checked.",
  },
  {
    name: "unselectedColor",
    type: "string",
    default: "'#C5C9D6'",
    description: "The background color of the track when unchecked.",
  },
  {
    name: "label",
    type: "ReactNode",
    default: "undefined",
    description: "The text to be placed next to the toggle switch.",
  },
];

export default function ToggleSwitchDocs() {
  const [previewValue, setPreviewValue] = useState<boolean>(true);

  return (
    <Box>
      <ComponentHeader
        title="ToggleSwitch"
        description={
          <>A customized switch component used for toggling states on or off.</>
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
        <ToggleSwitch
          label="Enable Notifications"
          checked={previewValue}
          onChange={setPreviewValue}
        />
      </ComponentPreview>

      <ComponentVariants
        title="Variants (Sizes)"
        description="The component supports three distinct size variants."
        variants={[
          {
            name: "Small",
            element: <ToggleSwitch variant="sm" label="Small" defaultChecked />,
          },
          {
            name: "Medium",
            element: (
              <ToggleSwitch variant="md" label="Medium" defaultChecked />
            ),
          },
          {
            name: "Large",
            element: <ToggleSwitch variant="lg" label="Large" defaultChecked />,
          },
        ]}
      />

      <ComponentStates
        states={[
          {
            name: "Off State",
            element: (
              <ToggleSwitch label="Off" checked={false} onChange={() => {}} />
            ),
          },
          {
            name: "On State",
            element: (
              <ToggleSwitch label="On" checked={true} onChange={() => {}} />
            ),
          },
          {
            name: "Disabled (Off)",
            element: (
              <ToggleSwitch
                label="Disabled"
                disabled
                checked={false}
                onChange={() => {}}
              />
            ),
          },
          {
            name: "Disabled (On)",
            element: (
              <ToggleSwitch
                label="Disabled"
                disabled
                checked={true}
                onChange={() => {}}
              />
            ),
          },
          {
            name: "Custom Colors",
            element: (
              <Box sx={{ display: "flex", gap: 3 }}>
                <ToggleSwitch label="Red" color="#EF4444" defaultChecked />
                <ToggleSwitch label="Green" color="#10B981" defaultChecked />
                <ToggleSwitch
                  label="Dark"
                  color="#1F2A40"
                  unselectedColor="#9CA3AF"
                  defaultChecked
                />
              </Box>
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
        code={`import { useState } from "react";
import { Box } from "@mui/material";
import { ToggleSwitch } from "vortex-ui";

function Example() {
  const [enabled, setEnabled] = useState(false);
  const [dangerEnabled, setDangerEnabled] = useState(true);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <ToggleSwitch
        label="Standard Switch"
        checked={enabled}
        onChange={setEnabled}
      />
      
      <ToggleSwitch
        label="Danger Switch (Custom Color)"
        checked={dangerEnabled}
        onChange={setDangerEnabled}
        color="#EF4444"
      />
    </Box>
  );
}`}
      />

      <ComponentProps propsList={toggleSwitchPropsList} />

      <Divider sx={{ my: 4 }} />

      <ComponentInstallation />
    </Box>
  );
}
