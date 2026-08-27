"use client";

import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { ComponentCode } from "@comp/docs/ComponentCode";
import { ComponentInstallation } from "@comp/docs/ComponentInstallation";
import { ComponentPreview } from "@comp/docs/ComponentPreview";
import { ComponentHeader } from "@comp/docs/ComponentHeader";
import { ComponentProps } from "@comp/docs/ComponentProps";
import { ComponentStates } from "@comp/docs/ComponentStates";
import { ComponentVariants } from "@comp/docs/ComponentVariants";
import { Add, ArrowForward } from "@mui/icons-material";
import { Link } from "vortex-ui";

const linkPropsList = [
  {
    name: "href",
    type: "string",
    default: "'#'",
    description: "The URL that the link points to.",
  },
  {
    name: "variant",
    type: "'primary' | 'secondary' | 'neutral' | 'success' | 'danger'",
    default: "'primary'",
    description: "The design variant of the link.",
  },
  {
    name: "size",
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    description: "The size of the link text.",
  },
  {
    name: "underline",
    type: "'none' | 'hover' | 'always'",
    default: "'hover'",
    description: "Controls when the link should have an underline.",
  },
  {
    name: "startIcon",
    type: "ReactNode",
    default: "undefined",
    description: "Optional icon to display before the text.",
  },
  {
    name: "endIcon",
    type: "ReactNode",
    default: "undefined",
    description: "Optional icon to display after the text.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables user interaction with the link.",
  },
];

export default function LinkDocs() {
  return (
    <Box>
      <ComponentHeader
        title="Link"
        description={
          <>
            A customizable link component built on top of Next.js Link and Material UI.
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
        <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
          <Link href="#" variant="primary">Primary Link</Link>
          <Link href="#" variant="secondary">Secondary Link</Link>
          <Link href="#" variant="neutral">Neutral Link</Link>
          <Link href="#" variant="success">Success Link</Link>
          <Link href="#" variant="danger">Danger Link</Link>
        </Box>
      </ComponentPreview>

      <ComponentVariants
        title="Underline Behavior"
        description="Configure when the underline appears."
        variants={[
          {
            name: "Hover (Default)",
            element: <Link href="#" underline="hover">Hover Underline</Link>,
          },
          {
            name: "Always",
            element: <Link href="#" underline="always">Always Underline</Link>,
          },
          {
            name: "None",
            element: <Link href="#" underline="none">No Underline</Link>,
          },
        ]}
      />

      <ComponentStates
        states={[
          {
            name: "Sizes",
            element: (
              <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
                <Link href="#" size="sm">Small Link</Link>
                <Link href="#" size="md">Medium Link</Link>
                <Link href="#" size="lg">Large Link</Link>
              </Box>
            ),
          },
          {
            name: "With Icons",
            element: (
              <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
                <Link href="#" startIcon={<Add />}>Add New</Link>
                <Link href="#" endIcon={<ArrowForward />}>Learn More</Link>
              </Box>
            ),
          },
          {
            name: "Disabled",
            element: (
              <Link href="#" disabled>Disabled Link</Link>
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
        code={`import { Link } from "vortex-ui";
import { ArrowForward } from "@mui/icons-material";

function Example() {
  return (
    <Link href="/docs" variant="primary" endIcon={<ArrowForward />}>
      Read Documentation
    </Link>
  );
}`}
      />

      <ComponentProps propsList={linkPropsList} />

      <Divider sx={{ my: 4 }} />

      <ComponentInstallation />
    </Box>
  );
}
