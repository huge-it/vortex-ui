import type { Meta, StoryObj } from '@storybook/react';
import { NumberField } from './NumberField';

const meta: Meta<typeof NumberField> = {
  title: 'Components/NumberField',
  component: NumberField,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    showButton: { control: 'boolean' },
    allowDecimal: { control: 'boolean' },
    allowNegative: { control: 'boolean' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    decimalPlaces: { control: 'number' },
    prefix: { control: 'text' },
    unit: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof NumberField>;

export const Default: Story = {
  args: {
    label: 'Age',
    min: 0,
    max: 120,
    step: 1,
  },
};

export const WithDecimals: Story = {
  args: {
    label: 'Price',
    allowDecimal: true,
    decimalPlaces: 2,
    step: 0.5,
    prefix: '$',
  },
};

export const WithNegative: Story = {
  args: {
    label: 'Temperature',
    allowNegative: true,
    min: -50,
    max: 50,
    unit: '°C',
  },
};

export const WithoutButtons: Story = {
  args: {
    label: 'Zip Code',
    showButton: false,
  },
};
