import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "./DatePicker";
import React, { useState } from "react";

const meta: Meta<typeof DatePicker> = {
  title: "Components/DateTimePickers/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

const DatePickerWithState = (args: any) => {
  const [val, setVal] = useState(args.value || "");
  return <DatePicker {...args} value={val} onChange={setVal} />;
};

export const Default: Story = {
  render: (args) => <DatePickerWithState {...args} />,
  args: {
    label: "Date",
  },
};

export const Disabled: Story = {
  render: (args) => <DatePickerWithState {...args} />,
  args: {
    label: "Date",
    disabled: true,
    value: "2024-01-01",
  },
};

export const WithError: Story = {
  render: (args) => <DatePickerWithState {...args} />,
  args: {
    label: "Date",
    error: "This field is required",
  },
};
