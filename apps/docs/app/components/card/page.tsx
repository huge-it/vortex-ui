"use client";

import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { ComponentCode } from "@comp/docs/ComponentCode";
import { ComponentInstallation } from "@comp/docs/ComponentInstallation";
import { ComponentPreview } from "@comp/docs/ComponentPreview";
import { ComponentHeader } from "@comp/docs/ComponentHeader";
import { ComponentProps } from "@comp/docs/ComponentProps";
import { ComponentVariants } from "@comp/docs/ComponentVariants";
import { Card } from "vortex-ui";

const cardPropsList = [
  {
    name: "variant",
    type: "'none' | 'sm' | 'md' | 'lg' | 'xl'",
    default: "'none'",
    description: "The shadow elevation variant applied to the card.",
  },
  {
    name: "fullWidth",
    type: "boolean",
    default: "true",
    description: "If true, the card will take up 100% of the parent width.",
  },
  {
    name: "children",
    type: "ReactNode",
    default: "undefined",
    description: "The content of the component.",
  },
  {
    name: "sx",
    type: "SxProps<Theme>",
    default: "undefined",
    description:
      "The system prop that allows defining system overrides as well as additional CSS styles.",
  },
];

export default function CardDocs() {
  return (
    <Box>
      <ComponentHeader
        title="Card"
        description={
          <>
            A versatile, styled container for grouping related content and
            actions with unified styling.
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
        <Card variant="md" sx={{ maxWidth: 400 }}>
          <Typography
            variant="h6"
            sx={{ mb: 1, color: "#1F2A40", fontWeight: 600 }}
          >
            Account Overview
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#6B7280", lineHeight: 1.6 }}
          >
            Manage your personal settings, billing preferences, and security
            options from this dashboard.
          </Typography>
        </Card>
      </ComponentPreview>

      <ComponentVariants
        title="Variants"
        description="The component supports various shadow variants from none to xl."
        variants={[
          {
            name: "None",
            element: (
              <Card variant="none" sx={{ width: 300 }}>
                <Typography
                  variant="body2"
                  sx={{ color: "#1F2A40", fontWeight: 500 }}
                >
                  No Shadow (variant=&quot;none&quot;)
                </Typography>
              </Card>
            ),
          },
          {
            name: "Small (sm)",
            element: (
              <Card variant="sm" sx={{ width: 300 }}>
                <Typography
                  variant="body2"
                  sx={{ color: "#1F2A40", fontWeight: 500 }}
                >
                  Small Shadow (variant=&quot;sm&quot;)
                </Typography>
              </Card>
            ),
          },
          {
            name: "Medium (md)",
            element: (
              <Card variant="md" sx={{ width: 300 }}>
                <Typography
                  variant="body2"
                  sx={{ color: "#1F2A40", fontWeight: 500 }}
                >
                  Medium Shadow (variant=&quot;md&quot;)
                </Typography>
              </Card>
            ),
          },
          {
            name: "Large (lg)",
            element: (
              <Card variant="lg" sx={{ width: 300 }}>
                <Typography
                  variant="body2"
                  sx={{ color: "#1F2A40", fontWeight: 500 }}
                >
                  Large Shadow (variant=&quot;lg&quot;)
                </Typography>
              </Card>
            ),
          },
          {
            name: "Extra Large (xl)",
            element: (
              <Card variant="xl" sx={{ width: 300 }}>
                <Typography
                  variant="body2"
                  sx={{ color: "#1F2A40", fontWeight: 500 }}
                >
                  Extra Large Shadow (variant=&quot;xl&quot;)
                </Typography>
              </Card>
            ),
          },
        ]}
      />

      <ComponentCode
        title="Usage"
        code={`import { Typography } from "@mui/material";
import { Card } from "vortex-ui";

function Example() {
  return (
    <Card variant="md" fullWidth={false} sx={{ maxWidth: 400 }}>
      <Typography variant="h6">Module Settings</Typography>
      <Typography variant="body2" color="text.secondary">
        Adjust your module preferences and configurations here.
      </Typography>
    </Card>
  );
}`}
      />

      <ComponentProps propsList={cardPropsList} />

      <Divider sx={{ my: 4 }} />

      <ComponentInstallation />
    </Box>
  );
}
