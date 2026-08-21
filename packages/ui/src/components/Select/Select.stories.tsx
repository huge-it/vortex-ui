import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    helperText: { control: 'text' },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const defaultOptions = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];

export const Default: Story = {
  args: {
    label: 'Choose Option',
    options: defaultOptions,
    defaultValue: '1',
  },
};

export const Error: Story = {
  args: {
    label: 'Selection Error',
    options: defaultOptions,
    error: true,
    helperText: 'Please select a valid option.',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Select',
    options: defaultOptions,
    disabled: true,
  },
};
