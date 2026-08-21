import React from 'react';
import type { Preview } from '@storybook/react';
import { VortexUIProvider } from '../src/providers/VortexUIProvider';

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z]' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <VortexUIProvider>
        <Story />
      </VortexUIProvider>
    ),
  ],
};

export default preview;
