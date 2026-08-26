import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ChipInput } from './ChipInput';

const meta: Meta<typeof ChipInput> = {
  title: 'Components/ChipInput',
  component: ChipInput,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    error: { control: 'text' },
    helperText: { control: 'text' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof ChipInput>;

const ChipInputWithState = (args: any) => {
  const [chips, setChips] = useState<string[]>(args.chips || []);
  return <ChipInput {...args} chips={chips} onChipsChange={setChips} />;
};

export const Default: Story = {
  render: (args) => <ChipInputWithState {...args} />,
  args: {
    label: 'Skills',
    chips: ['React', 'TypeScript'],
    helperText: 'Type and press enter',
  },
};

export const Empty: Story = {
  render: (args) => <ChipInputWithState {...args} />,
  args: {
    label: 'Categories',
    chips: [],
  },
};

export const Error: Story = {
  render: (args) => <ChipInputWithState {...args} />,
  args: {
    label: 'Tags',
    chips: ['ErrorTag'],
    error: 'Invalid tag format',
  },
};

export const Disabled: Story = {
  render: (args) => <ChipInputWithState {...args} />,
  args: {
    label: 'Disabled Input',
    chips: ['Locked', 'Tags'],
    disabled: true,
  },
};
