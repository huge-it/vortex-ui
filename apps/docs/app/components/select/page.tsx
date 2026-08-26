"use client";

import React, { useState } from "react";
import { Typography, Box, Divider, Stack, MenuItem } from "@mui/material";
import { Videocam, CalendarMonth, Phone, Email } from "@mui/icons-material";
import { Select } from "vortex-ui";
import { ComponentPreview } from "@comp/docs/ComponentPreview";
import { ComponentCode } from "@comp/docs/ComponentCode";
import { ComponentVariants } from "@comp/docs/ComponentVariants";
import { ComponentStates } from "@comp/docs/ComponentStates";
import { ComponentProps } from "@comp/docs/ComponentProps";
import { ComponentHeader } from "@comp/docs/ComponentHeader";
import { ComponentInstallation } from "@comp/docs/ComponentInstallation";

const selectPropsList = [
  {
    name: "variant",
    type: '"default" | "searchable" | "icon"',
    default: '"default"',
    description:
      "The visual style and behavior variant of the Select component.",
  },
  {
    name: "value",
    type: "string | number | null",
    default: "undefined",
    description: "The currently selected key or value.",
  },
  {
    name: "onChange / onUpdate",
    type: "function",
    default: "undefined",
    description: "Callback fired when a selection is made or updated.",
  },
  {
    name: "options",
    type: "IconSelectOption[] | Record<string, OptionItem>",
    default: "undefined",
    description:
      "Options array (for icon variant: { value, label, icon }[]) or record map (for default variant).",
  },
  {
    name: "label",
    type: "string",
    default: "undefined",
    description:
      "Floating label text shown on the field (searchable/icon variants).",
  },
  {
    name: "placeholder",
    type: "string",
    default: "undefined",
    description: "Placeholder text displayed when no option is selected.",
  },
  {
    name: "size",
    type: '"small" | "medium"',
    default: '"small"',
    description: "Height size of the select component.",
  },
  {
    name: "bgColor",
    type: "string",
    default: '"#FFFFFF"',
    description: "Background color of the input trigger.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables interaction with the select component.",
  },
];

const OPTIONS = {
  1: { label: "Low", value: 1, color: "#4772FF" },
  2: { label: "Medium", value: 2, color: "#FF8447" },
  3: { label: "High", value: 3, color: "#FF4750" },
};

const ICON_OPTIONS = [
  {
    value: "video",
    label: "Video Call",
    icon: <Videocam fontSize="small" sx={{ color: "#4772FF" }} />,
  },
  {
    value: "calendar",
    label: "Schedule",
    icon: <CalendarMonth fontSize="small" sx={{ color: "#10B981" }} />,
  },
  {
    value: "phone",
    label: "Phone Call",
    icon: <Phone fontSize="small" sx={{ color: "#F59E0B" }} />,
  },
  {
    value: "user",
    label: "John Doe",
    img: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
];

export default function SelectDocs() {
  const [value, setValue] = useState<number>(2);
  const [iconVal, setIconVal] = useState<string | number>("video");

  const [varIconVal, setVarIconVal] = useState<string | number>("video");
  const [varDefaultVal, setVarDefaultVal] = useState<number>(1);
  const [varSearchVal, setVarSearchVal] = useState<number>(1);

  return (
    <Box>
      <ComponentHeader
        title="Select"
        description={
          <>
            A versatile select component supporting default indicators,
            searchable auto-filtering, and icon-labeled options.
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
        <Stack
          spacing={3}
          sx={{ width: "100%", maxWidth: "340px", alignItems: "center" }}
        >
          <Box sx={{ width: "100%" }}>
            <Typography
              variant="caption"
              sx={{ color: "text.secondary", mb: 0.5, display: "block" }}
            >
              Icon Variant with Label
            </Typography>
            <Select
              variant="icon"
              label="Contact Method"
              value={iconVal}
              onChange={(val) => setIconVal(val)}
              options={ICON_OPTIONS}
              fullWidth
            />
          </Box>

          <Box sx={{ width: "100%" }}>
            <Typography
              variant="caption"
              sx={{ color: "text.secondary", mb: 0.5, display: "block" }}
            >
              Default Variant
            </Typography>
            <Select
              value={value}
              recordId="demo-1"
              options={OPTIONS}
              onUpdate={async (_id, val) => {
                setValue(Number(val));
              }}
            />
          </Box>
        </Stack>
      </ComponentPreview>

      <ComponentVariants
        variants={[
          {
            name: "Icon Variant",
            element: (
              <Box sx={{ width: 220 }}>
                <Select
                  variant="icon"
                  value={varIconVal}
                  onChange={(val) => setVarIconVal(val)}
                  options={ICON_OPTIONS}
                  fullWidth
                />
              </Box>
            ),
          },
          {
            name: "Default",
            element: (
              <Box sx={{ width: 220 }}>
                <Select
                  value={varDefaultVal}
                  options={OPTIONS}
                  onUpdate={async (_id, val) => {
                    setVarDefaultVal(Number(val));
                  }}
                  fullWidth
                />
              </Box>
            ),
          },
          {
            name: "Searchable",
            element: (
              <Box sx={{ width: 220 }}>
                <Select
                  variant="searchable"
                  label="Search Options"
                  value={varSearchVal}
                  onChange={(e: { target: { value: string | number } }) => setVarSearchVal(Number(e.target.value))}
                  fullWidth
                >
                  <MenuItem value={1}>Low</MenuItem>
                  <MenuItem value={2}>Medium</MenuItem>
                  <MenuItem value={3}>High</MenuItem>
                </Select>
              </Box>
            ),
          },
        ]}
      />

      <ComponentStates
        states={[
          {
            name: "Default",
            element: (
              <Box sx={{ width: 220 }}>
                <Select
                  variant="icon"
                  value="video"
                  onChange={() => {}}
                  options={ICON_OPTIONS}
                  fullWidth
                />
              </Box>
            ),
          },
          {
            name: "Disabled",
            element: (
              <Box sx={{ width: 220 }}>
                <Select
                  variant="icon"
                  value="video"
                  disabled
                  options={ICON_OPTIONS}
                  fullWidth
                />
              </Box>
            ),
          },
          {
            name: "Error",
            element: (
              <Box sx={{ width: 220 }}>
                <Select
                  variant="icon"
                  value="video"
                  error
                  helperText="Required field"
                  options={ICON_OPTIONS}
                  fullWidth
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
import { Select } from "vortex-ui";
import { Videocam, CalendarMonth } from "@mui/icons-material";

const OPTIONS = [
  {
    value: "video",
    label: "Video Call",
    icon: <Videocam fontSize="small" />,
  },
  {
    value: "calendar",
    label: "Schedule",
    icon: <CalendarMonth fontSize="small" />,
  },
  {
    value: "user",
    label: "John Doe",
    img: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
];

function Example() {
  const [value, setValue] = useState("video");

  return (
    <Select
      variant="icon"
      label="Platform"
      value={value}
      onChange={(val) => setValue(String(val))}
      options={OPTIONS}
      fullWidth
    />
  );
}`}
      />

      <ComponentProps propsList={selectPropsList} />

      <Divider sx={{ my: 4 }} />

      <ComponentInstallation />
    </Box>
  );
}
