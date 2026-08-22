import React from 'react';
import { Box, Typography } from '@mui/material';
import { ComponentHeader } from '../../../components/docs/ComponentHeader';

export default function AvatarDocs() {
  return (
    <Box>
      <ComponentHeader
        title="Avatar"
        description={<>Documentation for Avatar is coming soon.</>}
      />
      <Typography variant="body1" sx={{ mt: 4 }}>
        This component is currently being migrated to Vortex UI.
      </Typography>
    </Box>
  );
}
