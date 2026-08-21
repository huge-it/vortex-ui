import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Box } from '@mui/material';
import { VortexUIProvider } from 'vortex-ui';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { cookies } from 'next/headers';
import { PaletteMode } from '@mui/material';
import { Header } from '../components/layout/Header';
import { Sidebar } from '../components/layout/Sidebar';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VortexUI - Material UI Component System',
  description: 'Enterprise React component library built on top of Material UI.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const themeMode = (cookieStore.get('vortex-ui-theme-mode')?.value as PaletteMode) || 'light';

  return (
    <html lang="en" className={inter.className}>
      <body>
        <AppRouterCacheProvider options={{ key: 'vortexui', prepend: true }}>
          <VortexUIProvider disableCustomCache initialMode={themeMode}>
          <Box display="flex" flexDirection="column" minHeight="100vh">
            <Header />
            <Box display="flex" flexGrow={1}>
              <Sidebar />
              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  p: { xs: 3, md: 5 },
                  maxWidth: '1000px',
                  width: '100%',
                  margin: '0 auto',
                  minHeight: 'calc(100vh - 64px)',
                  boxSizing: 'border-box',
                }}
              >
                {children}
              </Box>
            </Box>
          </Box>
        </VortexUIProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
