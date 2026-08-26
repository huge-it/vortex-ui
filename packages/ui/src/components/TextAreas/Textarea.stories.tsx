import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'expandable', 'minLength'],
    },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    maxLength: { control: 'number' },
    minRows: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    variant: 'default',
    label: 'Description',
    placeholder: 'Enter a detailed description',
    rows: 4,
  },
};

export const Expandable: Story = {
  args: {
    variant: 'expandable',
    label: 'Notes',
    placeholder: 'This textarea grows with your content...',
    minRows: 3,
  },
};

export const MinLength: Story = {
  args: {
    variant: 'minLength',
    label: 'Feedback',
    placeholder: 'Provide your feedback',
    maxLength: 50,
  },
};

export const Error: Story = {
  args: {
    variant: 'default',
    label: 'Error State',
    error: 'This field is required.',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'default',
    label: 'Disabled Textarea',
    disabled: true,
    value: 'This content cannot be edited.',
  },
};
