'use client';

import React from 'react';
import { Typography, Box, Divider } from '@mui/material';
import { Button } from 'vortex-ui';
import { ComponentPreview } from '../../../components/docs/ComponentPreview';
import { ComponentCode } from '../../../components/docs/ComponentCode';
import { ComponentVariants } from '../../../components/docs/ComponentVariants';
import { ComponentStates } from '../../../components/docs/ComponentStates';
import { ComponentProps } from '../../../components/docs/ComponentProps';
import { ComponentInstallation } from '../../../components/docs/ComponentInstallation';

const buttonPropsList = [
  {
    name: 'variant',
    type: "'primary' | 'secondary' | 'outlined' | 'text' | 'danger'",
    default: "'primary'",
    description: 'The design variant of the button.',
  },
  {
    name: 'size',
    type: "'small' | 'medium' | 'large'",
    default: "'medium'",
    description: 'The size of the button.',
  },
  {
    name: 'loading',
    type: 'boolean',
    default: 'false',
    description: 'Displays a loading spinner and disables the button.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables user interaction with the button.',
  },
  {
    name: 'startIcon',
    type: 'ReactNode',
    default: 'undefined',
    description: 'Icon displayed before the button text.',
  },
  {
    name: 'endIcon',
    type: 'ReactNode',
    default: 'undefined',
    description: 'Icon displayed after the button text.',
  },
];

export default function ButtonDocs() {
  return (
    <Box>
      <Typography variant="h1" color='text.primary' sx={{ fontWeight: 800, mb: 1, fontSize: '2.5rem', letterSpacing: '-0.03em' }}>
        Button
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4, fontSize: '1.1rem' }}>
        A wrapper component around Material UI's Button, styled with the VortexUI design language.
      </Typography>

      <Typography variant="h5" color="text.secondary" sx={{ fontWeight: 600, mb: 2, fontSize: '1.25rem' }}>
        Preview
      </Typography>
      <ComponentPreview>
        <Button variant="primary">Primary Action</Button>
        <Button variant="secondary">Secondary Action</Button>
        <Button variant="outlined">Outlined Action</Button>
      </ComponentPreview>

      <ComponentVariants
        variants={[
          { name: 'Primary', element: <Button variant="primary">Primary</Button> },
          { name: 'Secondary', element: <Button variant="secondary">Secondary</Button> },
          { name: 'Outlined', element: <Button variant="outlined">Outlined</Button> },
          { name: 'Text', element: <Button variant="text">Text</Button> },
          { name: 'Danger', element: <Button variant="danger">Danger</Button> },
        ]}
      />

      <ComponentStates
        states={[
          { name: 'Default', element: <Button variant="primary">Default</Button> },
          { name: 'Disabled', element: <Button variant="primary" disabled>Disabled</Button> },
          { name: 'Loading', element: <Button variant="primary" loading>Loading</Button> },
        ]}
      />

      <Typography variant="h5" color="text.secondary" sx={{ fontWeight: 600, mb: 2, fontSize: '1.25rem' }}>
        Usage
      </Typography>
      <ComponentCode
        code={`import { Button } from "vortex-ui";

function Example() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="primary">Save</Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="danger" loading>Deleting...</Button>
    </Stack>
  );
}`}
      />

      <ComponentProps propsList={buttonPropsList} />

      <Divider sx={{ my: 4 }} />

      <ComponentInstallation />
    </Box>
  );
}
