import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Typography } from "@mui/material";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["none", "sm", "md", "lg", "xl"],
    },
    fullWidth: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  render: (args) => (
    <Card {...args}>
      <Typography variant="h6">Card Title</Typography>
      <Typography variant="body2" color="text.secondary">
        This is a standard card component with predefined shadow variants.
      </Typography>
    </Card>
  ),
  args: {
    variant: "md",
    fullWidth: false,
    sx: { minWidth: 300 },
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", flexDirection: "column" }}>
      {(["none", "sm", "md", "lg", "xl"] as const).map((v) => (
        <Card key={v} variant={v} fullWidth={false} sx={{ minWidth: 300 }}>
          <Typography variant="subtitle2" sx={{ textTransform: "capitalize" }}>
            {v} Shadow
          </Typography>
        </Card>
      ))}
    </div>
  ),
};
