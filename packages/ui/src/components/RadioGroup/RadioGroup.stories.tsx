import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, Radio } from "./RadioGroup";
import { Box } from "@mui/material";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
    },
    disabled: {
      control: "boolean",
    },
    color: {
      control: "color",
    },
    unselectedColor: {
      control: "color",
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Primary: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>("opt1");
    return (
      <RadioGroup {...args} value={value} onChange={setValue}>
        <Radio value="opt1" label="Option 1" />
        <Radio value="opt2" label="Option 2" />
        <Radio value="opt3" label="Option 3" />
      </RadioGroup>
    );
  },
  args: {
    label: "Select Option",
    variant: "md",
  },
};

export const Priority: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>("Medium");
    return (
      <RadioGroup {...args} value={value} onChange={setValue}>
        <Radio value="Low" label="Low" color="#4772FF" />
        <Radio value="Medium" label="Medium" color="#F8BB13" />
        <Radio value="High" label="High" color="#FF4750" />
      </RadioGroup>
    );
  },
  args: {
    label: "Select Priority",
    variant: "md",
  },
};

export const Vertical: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>("opt1");
    return (
      <RadioGroup {...args} value={value} onChange={setValue}>
        <Radio value="opt1" label="Option 1" />
        <Radio value="opt2" label="Option 2" />
        <Radio value="opt3" label="Option 3" />
      </RadioGroup>
    );
  },
  args: {
    label: "Vertical Layout",
    orientation: "vertical",
    variant: "md",
  },
};

export const Disabled: Story = {
  render: (args) => {
    return (
      <RadioGroup {...args} value="opt1" onChange={() => {}}>
        <Radio value="opt1" label="Option 1" />
        <Radio value="opt2" label="Option 2" />
      </RadioGroup>
    );
  },
  args: {
    label: "Disabled Group",
    disabled: true,
  },
};
