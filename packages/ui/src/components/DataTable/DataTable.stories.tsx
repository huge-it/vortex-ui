import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from './DataTable';
import { Chip } from '@mui/material';

const meta: Meta<typeof DataTable> = {
  title: 'Components/DataTable',
  component: DataTable,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DataTable>;

const sampleColumns = [
  { key: 'id', header: 'ID', align: 'left' as const },
  { key: 'name', header: 'Name', align: 'left' as const },
  { key: 'role', header: 'Role', align: 'left' as const },
  {
    key: 'status',
    header: 'Status',
    align: 'center' as const,
    render: (row: any) => (
      <Chip
        label={row.status}
        color={row.status === 'Active' ? 'success' : 'default'}
        size="small"
      />
    ),
  },
];

const sampleData = [
  { id: 'USR001', name: 'John Doe', role: 'Software Engineer', status: 'Active' },
  { id: 'USR002', name: 'Jane Smith', role: 'Product Manager', status: 'Active' },
  { id: 'USR003', name: 'Bob Johnson', role: 'Designer', status: 'Inactive' },
];

export const Default: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData,
  },
};

export const Loading: Story = {
  args: {
    columns: sampleColumns,
    data: [],
    isLoading: true,
  },
};

export const Empty: Story = {
  args: {
    columns: sampleColumns,
    data: [],
    emptyMessage: 'No user accounts found.',
  },
};
