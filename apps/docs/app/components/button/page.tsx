"use client";

import { Box, Divider, Typography } from "@mui/material";
import { ComponentCode } from "../../../components/docs/ComponentCode";
import { ComponentInstallation } from "../../../components/docs/ComponentInstallation";
import { ComponentPreview } from "../../../components/docs/ComponentPreview";
import { ComponentProps } from "../../../components/docs/ComponentProps";
import { ComponentStates } from "../../../components/docs/ComponentStates";
import { ComponentVariants } from "../../../components/docs/ComponentVariants";
import { Star } from "@mui/icons-material";
import { Button } from "vortex-ui";

const buttonPropsList = [
  {
    name: "variant",
    type: "'filled' | 'outlined' | 'ghost' | 'text'",
    default: "'filled'",
    description: "The design variant of the button.",
  },
  {
    name: "severity",
    type: "'primary' | 'error' | 'success' | 'info' | 'warning'",
    default: "'primary'",
    description: "The color severity of the button.",
  },
  {
    name: "size",
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    description: "The size of the button.",
  },
  {
    name: "icon",
    type: "ReactNode",
    default: "undefined",
    description: "Optional icon to display.",
  },
  {
    name: "iconPosition",
    type: "'left' | 'right'",
    default: "'left'",
    description: "Position of the icon relative to the text.",
  },
  {
    name: "iconOnly",
    type: "boolean",
    default: "false",
    description: "If true, styles the button as an icon-only square button.",
  },
  {
    name: "loading",
    type: "boolean",
    default: "false",
    description: "Displays a loading spinner and disables the button.",
  },
  {
    name: "loadingText",
    type: "string",
    default: "undefined",
    description: "Optional text to display while loading.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables user interaction with the button.",
  },
];

export default function ButtonDocs() {
  return (
    <Box>
      <Typography
        variant="h1"
        color="text.primary"
        sx={{
          fontWeight: 800,
          mb: 1,
          fontSize: "2.5rem",
          letterSpacing: "-0.03em",
        }}
      >
        Button
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 4, fontSize: "1.1rem" }}
      >
        A wrapper component around Material UI's Button, styled with the
        VortexUI design language.
      </Typography>

      <Typography
        variant="h5"
        color="text.secondary"
        sx={{ fontWeight: 600, mb: 2, fontSize: "1.25rem" }}
      >
        Preview
      </Typography>
      <ComponentPreview>
        <Button variant="filled" severity="primary">
          Primary
        </Button>
        <Button variant="filled" severity="success">
          Success
        </Button>
        <Button variant="filled" severity="warning">
          Warning
        </Button>
        <Button variant="filled" severity="error">
          Error
        </Button>
        <Button variant="filled" severity="info">
          Info
        </Button>
      </ComponentPreview>

      <ComponentVariants
        variants={[
          {
            name: "Filled",
            element: <Button variant="filled">Filled</Button>,
          },
          {
            name: "Outlined",
            element: <Button variant="outlined">Outlined</Button>,
          },
          {
            name: "Ghost",
            element: <Button variant="ghost">Ghost</Button>,
          },
          { name: "Text", element: <Button variant="text">Text</Button> },
        ]}
      />

      <ComponentVariants
        title="Severities"
        description="Different severities for the button."
        variants={[
          {
            name: "Primary",
            element: <Button severity="primary">Primary</Button>,
          },
          {
            name: "Success",
            element: <Button severity="success">Success</Button>,
          },
          {
            name: "Error",
            element: <Button severity="error">Error</Button>,
          },
          {
            name: "Warning",
            element: <Button severity="warning">Warning</Button>,
          },
          {
            name: "Info",
            element: <Button severity="info">Info</Button>,
          },
        ]}
      />

      <ComponentStates
        states={[
          {
            name: "Sizes",
            element: (
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </Box>
            ),
          },
          {
            name: "Icons",
            element: (
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button icon={<Star />}>Start Icon</Button>
                <Button icon={<Star />} iconPosition="end">
                  End Icon
                </Button>
                <Button icon={<Star />} iconOnly aria-label="Star" />
              </Box>
            ),
          },
          {
            name: "Loading",
            element: (
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button loading>Loading</Button>
                <Button loading loadingText="Submitting..." iconPosition="end">
                  Loading
                </Button>
              </Box>
            ),
          },
          {
            name: "Disabled",
            element: <Button disabled>Disabled</Button>,
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
        code={`import { Button } from "vortex-ui";

function Example() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="filled" severity="primary" size="lg">Save Changes</Button>
      <Button variant="ghost" severity="error">Discard</Button>
      <Button variant="filled" loading loadingText="Deleting...">Delete</Button>
    </Stack>
  );
}`}
      />

      <ComponentProps propsList={buttonPropsList} />

      <Divider sx={{ my: 4 }} />

      <ComponentInstallation />
    </Box>
  );
}
