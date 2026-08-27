import type { Meta, StoryObj } from "@storybook/react";
import { Backdrop } from "./Backdrop";
import React, { useState } from "react";
import { Button, Box } from "@mui/material";

const meta = {
  title: "Components/Backdrop",
  component: Backdrop,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    open: { control: "boolean" },
    color: { control: "color" },
    zIndex: { control: "number" },
    absolute: { control: "boolean" },
    size: { control: "number" },
  },
  args: {
    open: true,
  },
} satisfies Meta<typeof Backdrop>;

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper to show the Backdrop in a container
const BackdropContainer = (args: any) => {
  return (
    <Box
      sx={{
        width: args.containerWidth || 300,
        height: args.containerHeight || 200,
        position: "relative", // Required for absolute backdrop
        border: "1px solid #e0e0e0",
        borderRadius: 2,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f5f5f5",
      }}
    >
      <Box sx={{ p: 2, textAlign: "center", color: "text.secondary" }}>
        Content behind the backdrop
      </Box>
      <Backdrop {...args} absolute={true} />
    </Box>
  );
};

export const Default: Story = {
  render: (args) => <BackdropContainer {...args} />,
  args: {
    color: "#4772FF",
    zIndex: 10, // lower z-index since it's inline
  },
};

export const CustomColor: Story = {
  render: (args) => <BackdropContainer {...args} />,
  args: {
    color: "#ff9800",
    zIndex: 10,
  },
};

export const LargeSpinner: Story = {
  render: (args) => <BackdropContainer {...args} />,
  args: {
    color: "#4caf50",
    zIndex: 10,
    size: 80,
  },
};

export const SmallSpinner: Story = {
  render: (args) => <BackdropContainer {...args} />,
  args: {
    color: "#e91e63",
    zIndex: 10,
    size: 24,
  },
};
