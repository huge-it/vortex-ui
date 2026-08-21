'use client';

import React from 'react';
import { Typography, Box, Divider, Stack } from '@mui/material';
import { Select } from 'vortex-ui';
import { ComponentPreview } from '../../../components/docs/ComponentPreview';
import { ComponentCode } from '../../../components/docs/ComponentCode';
import { ComponentVariants } from '../../../components/docs/ComponentVariants';
import { ComponentStates } from '../../../components/docs/ComponentStates';
import { ComponentProps } from '../../../components/docs/ComponentProps';
import { ComponentInstallation } from '../../../components/docs/ComponentInstallation';

const selectPropsList = [
  {
    name: 'label',
    type: 'string',
    default: 'undefined',
    description: 'The heading label text shown above the select box.',
  },
  {
    name: 'helperText',
    type: 'string',
    default: 'undefined',
    description: 'Supporting description text shown below the select.',
  },
  {
    name: 'options',
    type: 'SelectOption[]',
    default: '[]',
    description: 'Array of option objects containing value and label fields.',
  },
  {
    name: 'error',
    type: 'boolean',
    default: 'false',
    description: 'Toggles error state styling.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables select dropdown interaction.',
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    default: 'true',
    description: 'Expands the form control to occupy full container width.',
  },
];

const mockOptions = [
  { label: 'Development', value: 'dev' },
  { label: 'Staging', value: 'staging' },
  { label: 'Production', value: 'prod' },
];

export default function SelectDocs() {
  return (
    <Box>
      <Typography variant="h1" color='text.primary' sx={{ fontWeight: 800, mb: 1, fontSize: '2.5rem', letterSpacing: '-0.03em' }}>
        Select
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4, fontSize: '1.1rem' }}>
        A dropdown selection component, wrapping MUI's Select.
      </Typography>

     <Typography variant="h5" color="text.secondary" sx={{ fontWeight: 600, mb: 2, fontSize: '1.25rem' }}>
        Preview
      </Typography>
      <ComponentPreview>
        <Stack spacing={2} sx={{ width: '100%', maxWidth: '300px' }}>
          <Select label="Environment" options={mockOptions} defaultValue="dev" />
        </Stack>
      </ComponentPreview>

      <ComponentVariants
        variants={[
          { name: 'Standard Options', element: <Select label="Env" options={mockOptions} defaultValue="dev" sx={{ width: '150px' }} /> },
        ]}
      />

      <ComponentStates
        states={[
          { name: 'Default', element: <Select label="Default" options={mockOptions} sx={{ width: '150px' }} /> },
          { name: 'Disabled', element: <Select label="Disabled" disabled options={mockOptions} sx={{ width: '150px' }} /> },
          { name: 'Error', element: <Select label="Error" error helperText="Selection required." options={mockOptions} sx={{ width: '150px' }} /> },
        ]}
      />

     <Typography variant="h5" color="text.secondary" sx={{ fontWeight: 600, mb: 2, fontSize: '1.25rem' }}>
        Usage
      </Typography>
      <ComponentCode
        code={`import { Select } from "vortex-ui";

const options = [
  { label: 'Development', value: 'dev' },
  { label: 'Staging', value: 'staging' },
  { label: 'Production', value: 'prod' },
];

function FormExample() {
  return (
    <Select
      label="Choose Environment"
      options={options}
      defaultValue="dev"
      onChange={(e) => console.log(e.target.value)}
    />
  );
}`}
      />

      <ComponentProps propsList={selectPropsList} />

      <Divider sx={{ my: 4 }} />

      <ComponentInstallation />
    </Box>
  );
}
