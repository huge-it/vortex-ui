"use client";

import React from "react";
import { Box, Typography, Stack, Divider } from "@mui/material";
import { ComponentHeader } from "../../../components/docs/ComponentHeader";
import { ComponentCode } from "../../../components/docs/ComponentCode";
import { ComponentProps } from "../../../components/docs/ComponentProps";
import { Skeleton } from "vortex-ui";

const skeletonPropsList = [
  {
    name: "variant",
    type: `"text" | "circular" | "rectangular" | "rounded" | "card" | "list-item" | "table-row" | "profile" | "cascading"`,
    default: `"text"`,
    description: "The type of content that will be rendered.",
  },
  {
    name: "orientation",
    type: `"horizontal" | "vertical"`,
    default: "-",
    description:
      "For complex variants like card and profile, determines the layout orientation.",
  },
  {
    name: "lines",
    type: "number",
    default: "1",
    description: "Number of lines to render for the text variant.",
  },
  {
    name: "rows",
    type: "number",
    default: "1",
    description: "Number of rows to render for the table-row variant.",
  },
  {
    name: "cols",
    type: "number",
    default: "5",
    description:
      "Number of columns to render for each row in the table-row variant.",
  },
  {
    name: "width",
    type: "number | string",
    default: "-",
    description:
      "Width of the skeleton. Useful when the skeleton is inside an inline element.",
  },
  {
    name: "height",
    type: "number | string",
    default: "-",
    description:
      "Height of the skeleton. Useful when you don't want to adapt the skeleton to a text element.",
  },
  {
    name: "animation",
    type: `"pulse" | "wave" | false`,
    default: `"wave"`,
    description: "The animation effect. false disables the animation.",
  },
  {
    name: "rounded",
    type: `boolean | "sm" | "md" | "lg" | number | string`,
    default: "false",
    description: "Applies border radius to the skeleton.",
  },
];

export default function SkeletonDocs() {
  return (
    <Box>
      <ComponentHeader
        title="Skeleton"
        description={
          <>A component to display placeholder content while data is loading.</>
        }
      />

      <Stack spacing={6} sx={{ mt: 4 }}>
        <Box>
          <Typography variant="h5" gutterBottom>
            Text (Line) Variant
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Used to represent lines of text.
          </Typography>
          <Stack spacing={1}>
            <Skeleton variant="text" width={210} />
            <Skeleton variant="text" width={40} />
            <Skeleton variant="text" width={100} />
            <Skeleton variant="text" lines={3} />
          </Stack>
        </Box>

        <Divider />

        <Box>
          <Typography variant="h5" gutterBottom>
            Rectangular (Box) Variant
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Used to represent images, containers, or other rectangular elements. Use the <code>rounded</code> prop to easily apply rounded corners.
          </Typography>
          <Stack spacing={2}>
            <Skeleton variant="rectangular" width={210} height={118} />
            <Skeleton
              variant="rectangular"
              width={210}
              height={118}
              rounded
            />
          </Stack>
        </Box>

        <Divider />

        <Box>
          <Typography variant="h5" gutterBottom>
            Circular Variant
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Used to represent avatars or circular icons.
          </Typography>
          <Skeleton variant="circular" width={40} height={40} />
        </Box>

        <Divider />

        <Box>
          <Typography variant="h5" gutterBottom>
            Card Variant
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            A predefined skeleton for a card layout.
          </Typography>
          <Stack spacing={2}>
            <Skeleton variant="card" width={300} />
            <Skeleton variant="card" orientation="horizontal" width={400} />
          </Stack>
        </Box>

        <Divider />

        <Box>
          <Typography variant="h5" gutterBottom>
            Profile Variant
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            A predefined skeleton for user profiles.
          </Typography>
          <Stack spacing={4}>
            <Skeleton variant="profile" />
            <Skeleton variant="profile" orientation="vertical" />
          </Stack>
        </Box>

        <Divider />

        <Box>
          <Typography variant="h5" gutterBottom>
            List Item
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Predefined structures for lists.
          </Typography>
          <Skeleton variant="list-item" />
        </Box>

        <Divider />

        <Box>
          <Typography variant="h5" gutterBottom>
            Table Row
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Creates a tabular structure. You can customize the number of rows
            and columns using the <code>rows</code> and <code>cols</code> props.
          </Typography>
          <Box
            sx={{
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 1,
              p: 2,
            }}
          >
            <Skeleton variant="table-row" rows={4} cols={5} />
          </Box>
        </Box>

        <Divider />

        <Box>
          <Typography variant="h5" gutterBottom>
            Cascading Skeleton
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            A unique skeleton that cascades the loading animation.
          </Typography>
          <Skeleton variant="cascading" />
        </Box>
      </Stack>

      <Typography
        variant="h5"
        color="text.secondary"
        sx={{ fontWeight: 600, mb: 2, mt: 4, fontSize: "1.25rem" }}
      >
        Usage
      </Typography>
      <ComponentCode
        code={`import { Skeleton } from "vortex-ui";
import { Stack, Box } from "@mui/material";

function Example() {
  return (
    <Stack spacing={2}>
      {/* Simple variants */}
      <Skeleton variant="text" width={210} />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
      <Skeleton variant="rectangular" width={210} height={118} rounded />

      {/* Complex variants */}
      <Skeleton variant="card" width={300} />
      <Skeleton variant="profile" orientation="vertical" />
      <Skeleton variant="cascading" />

      {/* Table Row variant */}
      <Box sx={{ border: '1px solid #ccc', borderRadius: 1, p: 2 }}>
        <Skeleton variant="table-row" rows={3} cols={4} />
      </Box>
    </Stack>
  );
}`}
      />

      <ComponentProps propsList={skeletonPropsList} />
    </Box>
  );
}
