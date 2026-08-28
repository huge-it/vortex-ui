import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";
import { Button } from "@mui/material";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placement: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
    },
    bgColor: { control: "color" },
    textColor: { control: "color" },
    title: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    title: "This is a tooltip",
    children: <Button variant="contained">Hover me</Button>,
    placement: "top",
  },
};

export const CustomColors: Story = {
  args: {
    title: "Custom colored tooltip",
    children: <Button variant="outlined">Hover me</Button>,
    bgColor: "#4772FF",
    textColor: "#FFFFFF",
    placement: "bottom",
  },
};
