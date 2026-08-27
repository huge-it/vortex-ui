import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CheckboxGroup, Checkbox } from "./CheckboxGroup";

const meta: Meta<typeof CheckboxGroup> = {
  title: "Components/CheckboxGroup",
  component: CheckboxGroup,
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
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

export const Primary: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>(["opt1"]);
    return (
      <CheckboxGroup {...args} value={value} onChange={setValue}>
        <Checkbox value="opt1" label="Option 1" />
        <Checkbox value="opt2" label="Option 2" />
        <Checkbox value="opt3" label="Option 3" />
      </CheckboxGroup>
    );
  },
  args: {
    label: "Select Options",
    variant: "md",
  },
};

export const Vertical: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>(["opt1"]);
    return (
      <CheckboxGroup {...args} value={value} onChange={setValue}>
        <Checkbox value="opt1" label="Option 1" />
        <Checkbox value="opt2" label="Option 2" />
        <Checkbox value="opt3" label="Option 3" />
      </CheckboxGroup>
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
      <CheckboxGroup {...args} value={["opt1"]} onChange={() => {}}>
        <Checkbox value="opt1" label="Option 1" />
        <Checkbox value="opt2" label="Option 2" />
        <Checkbox value="opt3" label="Option 3" />
      </CheckboxGroup>
    );
  },
  args: {
    label: "Disabled Group",
    disabled: true,
  },
};

export const CustomColors: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>(["opt1", "opt2"]);
    return (
      <CheckboxGroup {...args} value={value} onChange={setValue}>
        <Checkbox value="opt1" label="Red Option" color="#EF4444" />
        <Checkbox value="opt2" label="Green Option" color="#10B981" />
        <Checkbox value="opt3" label="Default Color" />
      </CheckboxGroup>
    );
  },
  args: {
    label: "Custom Colors",
  },
};
