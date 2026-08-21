import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';
import { Typography } from '@mui/material';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    title: { control: 'text' },
    maxWidth: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    open: true,
    title: 'Confirm Action',
    children: (
      <Typography variant="body2">
        Are you sure you want to proceed with this action? This operation cannot be undone.
      </Typography>
    ),
    actions: (
      <>
        <Button variant="text">Cancel</Button>
        <Button variant="danger">Confirm</Button>
      </>
    ),
  },
};
