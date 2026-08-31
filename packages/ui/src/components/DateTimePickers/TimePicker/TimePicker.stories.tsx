import type { Meta, StoryObj } from "@storybook/react";
import { TimePicker } from "./TimePicker";
import React, { useState } from "react";

const meta: Meta<typeof TimePicker> = {
  title: "Components/DateTimePickers/TimePicker",
  component: TimePicker,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TimePicker>;

const TimePickerWithState = (args: any) => {
  const [val, setVal] = useState(args.value || "");
  return <TimePicker {...args} value={val} onChange={setVal} />;
};

export const Default12h: Story = {
  render: (args) => <TimePickerWithState {...args} />,
  args: {
    label: "Time (12h)",
    format: "12h",
  },
};

export const Default24h: Story = {
  render: (args) => <TimePickerWithState {...args} />,
  args: {
    label: "Time (24h)",
    format: "24h",
  },
};

export const Disabled: Story = {
  render: (args) => <TimePickerWithState {...args} />,
  args: {
    label: "Time",
    disabled: true,
    value: "10:30 AM",
  },
};
