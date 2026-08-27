import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./Slider";
import { RangeSlider } from "./RangeSlider";
import { Box } from "@mui/material";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
    trackColor: { control: "color" },
    railColor: { control: "color" },
    disabled: { control: "boolean" },
    showMinMaxLabels: { control: "boolean" },
    valueSuffix: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const DefaultSlider: Story = {
  render: (args) => {
    const [value, setValue] = useState(50);
    return (
      <Box sx={{ width: 300, mt: 4 }}>
        <Slider {...args} value={value} onChange={setValue} />
      </Box>
    );
  },
  args: {
    label: "Default Slider",
    min: 0,
    max: 100,
    valueSuffix: "%",
  },
};

export const CustomColors: Story = {
  render: (args) => {
    const [value, setValue] = useState(30);
    return (
      <Box sx={{ width: 300, mt: 4 }}>
        <Slider {...args} value={value} onChange={setValue} />
      </Box>
    );
  },
  args: {
    label: "Custom Colors",
    min: 0,
    max: 100,
    trackColor: "#FF4750",
    railColor: "#FFE1E3",
  },
};

export const Disabled: Story = {
  render: (args) => {
    return (
      <Box sx={{ width: 300, mt: 4 }}>
        <Slider {...args} value={50} onChange={() => {}} />
      </Box>
    );
  },
  args: {
    label: "Disabled Slider",
    disabled: true,
  },
};

export const DefaultRangeSlider = {
  render: (args: any) => {
    const [value, setValue] = useState<number[]>([20, 80]);
    return (
      <Box sx={{ width: 300, mt: 4 }}>
        <RangeSlider {...args} value={value} onChange={setValue} />
      </Box>
    );
  },
  args: {
    label: "Range Slider",
    min: 0,
    max: 100,
    minDistance: 10,
  },
};
