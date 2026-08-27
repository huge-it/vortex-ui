import React from "react";
import { Box, Typography } from "@mui/material";
import { ComponentHeader } from "../../../components/docs/ComponentHeader";
import { ComponentVariants } from "../../../components/docs/ComponentVariants";
import { ComponentCode } from "../../../components/docs/ComponentCode";
import { ComponentProps } from "../../../components/docs/ComponentProps";
import { Grid } from "vortex-ui";

const gridPropsList = [
  {
    name: "spacing",
    type: `"none" | "xs" | "sm" | "md" | "lg" | "xl" | number`,
    default: "-",
    description:
      "Sets the gap between items. You can use our custom sizes: none (0px), xs (8px), sm (16px), md (24px), lg (32px), xl (48px).",
  },
];

const Item = ({ children, bgcolor = "#e0e0e0" }: { children: React.ReactNode; bgcolor?: string }) => (
  <Box
    sx={{
      bgcolor,
      p: 2,
      textAlign: "center",
      color: "text.primary",
      fontWeight: 500,
      borderRadius: 1,
      border: "1px solid",
      borderColor: "divider",
    }}
  >
    {children}
  </Box>
);

export default function GridDocs() {
  return (
    <Box>
      <ComponentHeader
        title="Grid"
        description={
          <>
            The Grid component is a layout system that wraps MUI`&apos;`s Grid2
            and provides a custom scale specifically tuned for Vortex UI.
          </>
        }
      />

      <ComponentVariants
        title="Grid Usage"
        description="The component uses the modern Grid2 API, accepting a size prop for column widths."
        direction="column"
        variants={[
          {
            name: "Basic Grid",
            element: (
              <Box
                sx={{
                  width: "100%",
                  p: 2,
                  bgcolor: "background.paper",
                  borderRadius: 1,
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Grid container spacing="sm">
                  <Grid size={8}>
                    <Item bgcolor="primary.light">size=8</Item>
                  </Grid>
                  <Grid size={4}>
                    <Item bgcolor="secondary.light">size=4</Item>
                  </Grid>
                  <Grid size={4}>
                    <Item bgcolor="secondary.light">size=4</Item>
                  </Grid>
                  <Grid size={8}>
                    <Item bgcolor="primary.light">size=8</Item>
                  </Grid>
                </Grid>
              </Box>
            ),
          },
          {
            name: "Responsive Breakpoints",
            element: (
              <Box
                sx={{
                  width: "100%",
                  p: 2,
                  bgcolor: "background.paper",
                  borderRadius: 1,
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Grid container spacing="sm">
                  <Grid size={{ xs: 6, md: 8 }}>
                    <Item bgcolor="primary.light">xs=6 md=8</Item>
                  </Grid>
                  <Grid size={{ xs: 6, md: 4 }}>
                    <Item bgcolor="secondary.light">xs=6 md=4</Item>
                  </Grid>
                  <Grid size={{ xs: 6, md: 4 }}>
                    <Item bgcolor="secondary.light">xs=6 md=4</Item>
                  </Grid>
                  <Grid size={{ xs: 6, md: 8 }}>
                    <Item bgcolor="primary.light">xs=6 md=8</Item>
                  </Grid>
                </Grid>
              </Box>
            ),
          },
          {
            name: "Auto & Grow",
            element: (
              <Box
                sx={{
                  width: "100%",
                  p: 2,
                  bgcolor: "background.paper",
                  borderRadius: 1,
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Grid container spacing="md">
                  <Grid size="auto">
                    <Item bgcolor="warning.light">size=auto</Item>
                  </Grid>
                  <Grid size={6}>
                    <Item bgcolor="success.light">size=6</Item>
                  </Grid>
                  <Grid size="grow">
                    <Item bgcolor="info.light">size=grow</Item>
                  </Grid>
                </Grid>
              </Box>
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
        code={`import { Grid } from "vortex-ui";
import { Box } from "@mui/material";

const Item = ({ children }: { children: React.ReactNode }) => (
  <Box sx={{ p: 2, textAlign: "center", border: "1px solid #ccc" }}>
    {children}
  </Box>
);

function Example() {
  return (
    <Grid container spacing="md">
      <Grid size={{ xs: 6, md: 8 }}>
        <Item>xs=6 md=8</Item>
      </Grid>
      <Grid size={{ xs: 6, md: 4 }}>
        <Item>xs=6 md=4</Item>
      </Grid>
      <Grid size={{ xs: 6, md: 4 }}>
        <Item>xs=6 md=4</Item>
      </Grid>
      <Grid size={{ xs: 6, md: 8 }}>
        <Item>xs=6 md=8</Item>
      </Grid>
    </Grid>
  );
}`}
      />

      <ComponentProps propsList={gridPropsList} />
    </Box>
  );
}
