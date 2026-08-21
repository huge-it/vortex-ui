'use client';

import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { PaletteMode } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import '../theme/classNameSetup'; // Initialize MUI ClassName Prefixing
import { getTheme } from '../theme/theme';

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: 'light' as PaletteMode,
});

export const useColorMode = () => useContext(ColorModeContext);

// Create a custom Emotion cache with the 'vortexui' key
// This tags Emotion's generated styles with data-emotion="vortexui" in the DOM
const cache = createCache({
  key: 'vortexui',
  prepend: true,
});

interface VortexUIProviderProps {
  children: React.ReactNode;
  disableCustomCache?: boolean;
  initialMode?: PaletteMode;
}

export function VortexUIProvider({ children, disableCustomCache = false, initialMode = 'light' }: VortexUIProviderProps) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<PaletteMode>(initialMode);

  // Sync with system preference on initial load if no cookie was set
  useEffect(() => {
    const hasCookie = document.cookie.includes('vortex-ui-theme-mode=');
    if (!hasCookie && prefersDarkMode) {
      setMode('dark');
      document.cookie = `vortex-ui-theme-mode=dark; path=/; max-age=31536000`;
    }
  }, [prefersDarkMode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === 'light' ? 'dark' : 'light';
          document.cookie = `vortex-ui-theme-mode=${newMode}; path=/; max-age=31536000`;
          localStorage.setItem('vortex-ui-theme-mode', newMode); // optional fallback
          return newMode;
        });
      },
      mode,
    }),
    [mode],
  );

  const theme = useMemo(() => getTheme(mode), [mode]);

  const content = (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );

  if (disableCustomCache) {
    return <>{content}</>;
  }

  return (
    <CacheProvider value={cache}>
      {content}
    </CacheProvider>
  );
}
