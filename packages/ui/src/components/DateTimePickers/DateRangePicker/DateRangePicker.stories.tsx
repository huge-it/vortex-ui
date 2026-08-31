import type { Meta, StoryObj } from "@storybook/react";
import { DateRangePicker } from "./DateRangePicker";
import React, { useState } from "react";
import { DateRange } from "./DateRangePicker.types";

const meta: Meta<typeof DateRangePicker> = {
  title: "Components/DateTimePickers/DateRangePicker",
  component: DateRangePicker,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DateRangePicker>;

const DateRangePickerWithState = (args: any) => {
  const [range, setRange] = useState<DateRange>({ startDate: args.startDate || "", endDate: args.endDate || "" });
  return <DateRangePicker {...args} startDate={range.startDate} endDate={range.endDate} onChange={setRange} />;
};

export const Default: Story = {
  render: (args) => <DateRangePickerWithState {...args} />,
  args: {
    label: "Date Range",
  },
};

export const NoQuickSelect: Story = {
  render: (args) => <DateRangePickerWithState {...args} />,
  args: {
    label: "Custom Range",
    showQuickSelect: false,
  },
};

export const NoDropdowns: Story = {
  render: (args) => <DateRangePickerWithState {...args} />,
  args: {
    label: "Simple Range",
    showDropdowns: false,
  },
};

export const Disabled: Story = {
  render: (args) => <DateRangePickerWithState {...args} />,
  args: {
    label: "Disabled",
    disabled: true,
    startDate: "2024-01-01",
    endDate: "2024-01-10",
  },
};
