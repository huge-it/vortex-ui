import type { Meta, StoryObj } from "@storybook/react";
import { DateTimePicker } from "./DateTimePicker";
import React, { useState } from "react";

const meta: Meta<typeof DateTimePicker> = {
  title: "Components/DateTimePickers/DateTimePicker",
  component: DateTimePicker,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DateTimePicker>;

const DateTimePickerWithState = (args: any) => {
  const [val, setVal] = useState(args.value || "");
  return <DateTimePicker {...args} value={val} onChange={setVal} />;
};

export const Default: Story = {
  render: (args) => <DateTimePickerWithState {...args} />,
  args: {
    label: "Date & Time",
  },
};

export const Disabled: Story = {
  render: (args) => <DateTimePickerWithState {...args} />,
  args: {
    label: "Date & Time",
    disabled: true,
    value: "2024-01-01T10:30:00",
  },
};
