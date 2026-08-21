import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'standard'],
    },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    helperText: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    label: 'Email',
    placeholder: 'Enter your email',
  },
};

export const Error: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    error: true,
    helperText: 'Password must be at least 8 characters.',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'You cannot type here',
    disabled: true,
  },
};
