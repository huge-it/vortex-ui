import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "./Grid";
import { Box, Typography } from "@mui/material";

const meta: Meta<typeof Grid> = {
  title: "Components/Grid",
  component: Grid,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    spacing: {
      control: "select",
      options: ["none", "xs", "sm", "md", "lg", "xl", 1, 2, 3, 4],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

const Item = ({ children }: { children: React.ReactNode }) => (
  <Box
    sx={{
      bgcolor: "#EEF2FF",
      p: 2,
      borderRadius: 1,
      textAlign: "center",
      border: "1px solid #4772FF",
    }}
  >
    <Typography>{children}</Typography>
  </Box>
);

export const Default: Story = {
  args: {
    container: true,
    spacing: "sm",
    children: (
      <>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Item>Item 1</Item>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Item>Item 2</Item>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Item>Item 3</Item>
        </Grid>
      </>
    ),
  },
};

export const CustomSpacing: Story = {
  args: {
    container: true,
    spacing: "lg",
    children: (
      <>
        <Grid size={{ xs: 6 }}>
          <Item>Large Spacing 1</Item>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Item>Large Spacing 2</Item>
        </Grid>
      </>
    ),
  },
};
