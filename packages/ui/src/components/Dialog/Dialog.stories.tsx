import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Dialog } from "./Dialog";
import { Button } from "../Button/Button";
import { Typography } from "@mui/material";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  argTypes: {
    open: { control: "boolean" },
    title: { control: "text" },
    maxWidth: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {
    open: true,
    title: "Confirm Action",
    children: (
      <Typography variant="body2">
        Are you sure you want to proceed with this action? This operation cannot
        be undone.
      </Typography>
    ),
    actions: (
      <>
        <Button variant="text">Cancel</Button>
        <Button variant="filled">Confirm</Button>
      </>
    ),
  },
};
