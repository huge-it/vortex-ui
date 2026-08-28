import type { Meta, StoryObj } from "@storybook/react";
import { Sheet } from "./Sheet";
import { Typography } from "@mui/material";

const meta: Meta<typeof Sheet> = {
  title: "Components/Sheet",
  component: Sheet,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["none", "sm", "md", "lg", "xl"],
    },
    fullHeight: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  args: {
    variant: "none",
    children: <Typography>This is a default sheet with no shadow.</Typography>,
  },
};

export const WithShadows: Story = {
  args: {
    variant: "md",
    children: <Typography>This is a sheet with medium shadow.</Typography>,
  },
};
