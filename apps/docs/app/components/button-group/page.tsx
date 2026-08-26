"use client";

import { Box, Typography, Divider } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import { ButtonGroup, ButtonGroupMethod, ButtonGroupValue } from "vortex-ui";
import { ComponentCode } from "@comp/docs/ComponentCode";
import { ComponentHeader } from "@comp/docs/ComponentHeader";
import { ComponentPreview } from "@comp/docs/ComponentPreview";
import { ComponentVariants } from "@comp/docs/ComponentVariants";
import { ComponentStates } from "@comp/docs/ComponentStates";
import { ComponentProps } from "@comp/docs/ComponentProps";
import { ComponentInstallation } from "@comp/docs/ComponentInstallation";

const PlatformIcons: Record<string, React.ReactNode> = {
  "Google Meet": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  ),
  Zoom: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#2D8CFF">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.25 15.188a.938.938 0 01-.938.937H7.5a2.813 2.813 0 01-2.813-2.813V8.813a.937.937 0 01.938-.937h8.813A2.813 2.813 0 0117.25 10.688v4.5zm2.438-1.048l-2.063-1.39V11.25l2.063-1.39c.352-.237.812.012.812.437v3.406c0 .425-.46.674-.812.437z" />
    </svg>
  ),
  "Microsoft Teams": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#5558AF">
      <path d="M20.625 5.25h-5.25v2.625h5.25a.375.375 0 00.375-.375V5.625a.375.375 0 00-.375-.375zm-2.25 3.375h-3v8.25c0 .621-.504 1.125-1.125 1.125H9.375v.375A1.125 1.125 0 0010.5 19.5h7.875A1.125 1.125 0 0019.5 18.375V9.75a1.125 1.125 0 00-1.125-1.125zM14.25 4.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-5.625 4.5H3.375A1.125 1.125 0 002.25 10.125v7.125a2.625 2.625 0 005.25 0v-6.375h1.5V9.75a1.125 1.125 0 00-1.375-1.094V9zm-2.25-1.5a1.875 1.875 0 110-3.75 1.875 1.875 0 010 3.75z" />
    </svg>
  ),
  Webex: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#00BEF2">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 13.5h-7c-.83 0-1.5-.67-1.5-1.5V10c0-.83.67-1.5 1.5-1.5h7c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5zm2.5-1.5l-2-1.33V11.33L18 10v4z" />
    </svg>
  ),
};

const DEFAULT_METHODS: ButtonGroupMethod[] = [
  {
    key: "video",
    label: "Video",
    fields: [
      {
        name: "platform",
        label: "Meeting Platform",
        type: "select",
        options: [
          {
            value: "Google Meet",
            label: "Google Meet",
            icon: PlatformIcons["Google Meet"],
          },
          { value: "Zoom", label: "Zoom", icon: PlatformIcons["Zoom"] },
          {
            value: "Microsoft Teams",
            label: "Microsoft Teams",
            icon: PlatformIcons["Microsoft Teams"],
          },
          { value: "Webex", label: "Webex", icon: PlatformIcons["Webex"] },
          {
            value: "other",
            label: "Other Person",
            icon: <Image src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="Other" width={18} height={18} style={{ borderRadius: "50%" }} unoptimized />,
          },
        ],
      },
      { name: "link", label: "Meeting Link", type: "text" },
    ],
  },
  {
    key: "location",
    label: "Location",
    fields: [
      { name: "address", label: "Address", type: "text" },
      { name: "city", label: "City", type: "text" },
    ],
  },
  {
    key: "phone",
    label: "Phone",
    fields: [
      { name: "phone", label: "Phone Number", type: "phone", maxLength: 10 },
    ],
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    fields: [
      {
        name: "whatsapp",
        label: "WhatsApp Number",
        type: "phone",
        maxLength: 10,
      },
    ],
  },
  {
    key: "email",
    label: "Email",
    fields: [{ name: "email", label: "Email Address", type: "text" }],
  },
];

const buttonGroupPropsList = [
  {
    name: "methods",
    type: "ButtonGroupMethod[]",
    default: "[]",
    description:
      "List of methods and dynamic field configurations defined in the parent.",
  },
  {
    name: "value",
    type: "ButtonGroupValue",
    default: "undefined",
    description: "The currently selected method key and field values.",
  },
  {
    name: "onChange",
    type: "(value: ButtonGroupValue) => void",
    default: "undefined",
    description: "Callback fired when a method or field value changes.",
  },
  {
    name: "variant",
    type: '"icon" | "text" | "both"',
    default: '"icon"',
    description: "Determines what is displayed on the method buttons.",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    default: '"lg"',
    description: "Preset sizes for the method buttons.",
  },
  {
    name: "bgColor",
    type: "string",
    default: '"#FFFFFF"',
    description: "Background color for the dynamic fields.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the button group and all dynamic fields.",
  },
  {
    name: "fullWidth",
    type: "boolean",
    default: "false",
    description:
      "If true, the button group will take up the full width of its container.",
  },
];

export default function ButtonGroupDocs() {
  const [value, setValue] = useState<ButtonGroupValue>({
    type: "video",
    fields: {
      platform: "Google Meet",
      link: "https://meet.google.com/abc-defg-hij",
    },
  });

  return (
    <Box>
      <ComponentHeader
        title="Button Group"
        description={
          <>
            A specialized component for selecting methods with dynamic fields,
            supporting select fields with icons beside options.
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
        <Box sx={{ width: "100%", maxWidth: 500, p: 2 }}>
          <ButtonGroup
            value={value}
            onChange={setValue}
            methods={DEFAULT_METHODS}
            variant="both"
          />
        </Box>
      </ComponentPreview>

      <ComponentVariants
        variants={[
          {
            name: "Icons Only",
            element: (
              <ButtonGroup
                methods={DEFAULT_METHODS}
                variant="icon"
                value={{ type: "video", fields: {} }}
              />
            ),
          },
          {
            name: "Text Only",
            element: (
              <ButtonGroup
                methods={DEFAULT_METHODS}
                variant="text"
                value={{ type: "phone", fields: {} }}
              />
            ),
          },
          {
            name: "Both (Icon + Text)",
            element: (
              <ButtonGroup
                methods={DEFAULT_METHODS}
                variant="both"
                value={{ type: "email", fields: {} }}
              />
            ),
          },
          {
            name: "Full Width",
            element: (
              <Box sx={{ width: "100%", maxWidth: 600 }}>
                <ButtonGroup
                  methods={DEFAULT_METHODS}
                  variant="both"
                  fullWidth
                  value={{ type: "video", fields: {} }}
                />
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
              <ButtonGroup
                methods={DEFAULT_METHODS}
                variant="icon"
                value={{ type: "video", fields: {} }}
              />
            ),
          },
          {
            name: "Disabled",
            element: (
              <ButtonGroup
                methods={DEFAULT_METHODS}
                variant="icon"
                disabled
                value={{ type: "video", fields: {} }}
              />
            ),
          },
        ]}
      />

      <Typography
        variant="h5"
        color="text.secondary"
        sx={{ fontWeight: 600, mb: 2, mt: 4, fontSize: "1.25rem" }}
      >
        Usage
      </Typography>
      <ComponentCode
        code={`import { useState } from "react";
import { ButtonGroup, ButtonGroupMethod } from "vortex-ui";

const METHODS: ButtonGroupMethod[] = [
  {
    key: "video",
    label: "Video",
    fields: [
      {
        name: "platform",
        label: "Meeting Platform",
        type: "select",
        options: [
          { value: "Google Meet", label: "Google Meet", icon: <GoogleMeetIcon /> },
          { value: "Zoom", label: "Zoom", icon: <ZoomIcon /> },
        ],
      },
      { name: "link", label: "Meeting Link", type: "text" },
    ],
  },
  {
    key: "phone",
    label: "Phone",
    fields: [
      { name: "phone", label: "Phone Number", type: "phone", maxLength: 10 },
    ],
  },
];

function Example() {
  const [value, setValue] = useState({
    type: "video",
    fields: { platform: "Google Meet" },
  });

  return (
    <ButtonGroup
      value={value}
      onChange={setValue}
      methods={METHODS}
      variant="both"
      size="lg"
    />
  );
}`}
      />

      <ComponentProps propsList={buttonGroupPropsList} />

      <Divider sx={{ my: 4 }} />

      <ComponentInstallation />
    </Box>
  );
}
