import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ToggleSwitch } from "./ToggleSwitch";

const meta: Meta<typeof ToggleSwitch> = {
  title: "Components/ToggleSwitch",
  component: ToggleSwitch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: "boolean",
    },
    checked: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleSwitch>;

export const Primary: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked || false);
    return (
      <ToggleSwitch
        {...args}
        checked={checked}
        onChange={setChecked}
      />
    );
  },
  args: {
    label: "Enable Notifications",
    variant: "md",
  },
};

export const Uncontrolled: Story = {
  render: (args) => {
    return (
      <ToggleSwitch
        {...args}
      />
    );
  },
  args: {
    label: "Uncontrolled Toggle",
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Switch",
    disabled: true,
    checked: true,
  },
};

export const CustomColors: Story = {
  render: (args) => {
    return (
      <div style={{ display: 'flex', gap: '24px' }}>
        <ToggleSwitch {...args} label="Red" color="#EF4444" defaultChecked />
        <ToggleSwitch {...args} label="Green" color="#10B981" defaultChecked />
        <ToggleSwitch {...args} label="Dark" color="#1F2A40" unselectedColor="#9CA3AF" defaultChecked />
      </div>
    );
  },
  args: {
    variant: "md",
  },
};
