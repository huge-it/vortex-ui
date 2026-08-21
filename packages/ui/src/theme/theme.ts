import { createTheme, PaletteMode } from '@mui/material';
import { getPalette } from './palette';
import { typography } from './typography';
import { components } from './components';

export const getTheme = (mode: PaletteMode) => createTheme({
  palette: getPalette(mode),
  typography,
  components,
  shape: {
    borderRadius: 8,
  },
});
