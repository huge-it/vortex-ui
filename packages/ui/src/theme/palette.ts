import { PaletteMode, PaletteOptions } from "@mui/material";
import { alpha } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteColor {
    hover?: string;
    lightHover?: string;
    disabled?: string;
    disabledBackground?: string;
  }
  interface SimplePaletteColorOptions {
    hover?: string;
    lightHover?: string;
    disabled?: string;
    disabledBackground?: string;
  }
}

const colors = {
  primary: {
    light: {
      main: "#4772FF",
      lightHover: alpha("#4772FF", 0.08),
      light: "#7496FF",
      dark: "#2F50C2",
      contrastText: "#FFFFFF",
      hover: "#3D63E6",
      disabled: "#A8B9F5",
      disabledBackground: "#E8EDFF",
    },
    dark: {
      main: "#4772FF",
      lightHover: alpha("#4772FF", 0.08),
      light: "#688CFF",
      dark: "#3352CC",
      contrastText: "#FFFFFF",
      hover: "#5782FF",
      disabled: "#2A3C73",
      disabledBackground: "#1A2642",
    },
  },
  secondary: {
    light: {
      main: "#0088ab",
      lightHover: alpha("#0088ab", 0.08),
      light: "#22d3ee",
      dark: "#00647D",
      contrastText: "#ffffff",
      hover: "#0596a7",
      disabled: "#40e0d0",
      disabledBackground: "#ccfbf1",
    },
    dark: {
      main: "#0088ab",
      lightHover: alpha("#0088ab", 0.08),
      light: "#33A1C2",
      dark: "#00556B",
      contrastText: "#ffffff",
      hover: "#1A9AB8",
      disabled: "#205C6B",
      disabledBackground: "#0D2B33",
    },
  },
  error: {
    light: {
      main: "#FF4747",
      lightHover: alpha("#FF4747", 0.08),
      light: "#FF7373",
      dark: "#E63A3A",
      contrastText: "#FFFFFF",
      hover: "#F23D3D",
      disabled: "#FFBABA",
      disabledBackground: "#FFF0F0",
    },
    dark: {
      main: "#FF4747",
      lightHover: alpha("#FF4747", 0.08),
      light: "#FF6666",
      dark: "#CC3939",
      contrastText: "#FFFFFF",
      hover: "#FF5C5C",
      disabled: "#5C2929",
      disabledBackground: "#2E1515",
    },
  },
  warning: {
    light: {
      main: "#FFA347",
      lightHover: alpha("#FFA347", 0.08),
      light: "#FFBC70",
      dark: "#E68F3F",
      contrastText: "#1A1A1A",
      hover: "#F2943D",
      disabled: "#FFDDBA",
      disabledBackground: "#FFF6ED",
    },
    dark: {
      main: "#FFA347",
      lightHover: alpha("#FFA347", 0.08),
      light: "#FFB366",
      dark: "#CC8239",
      contrastText: "#1A1A1A",
      hover: "#FFAD5C",
      disabled: "#5C3A1A",
      disabledBackground: "#2E1D0D",
    },
  },
  success: {
    light: {
      main: "#47FFA3",
      lightHover: alpha("#47FFA3", 0.08),
      light: "#70FFB8",
      dark: "#3FE691",
      contrastText: "#06351D",
      hover: "#3DF294",
      disabled: "#BAFFDA",
      disabledBackground: "#EDFFF5",
    },
    dark: {
      main: "#47FFA3",
      lightHover: alpha("#47FFA3", 0.08),
      light: "#66FFB3",
      dark: "#39CC82",
      contrastText: "#06351D",
      hover: "#5CFFAD",
      disabled: "#1A5C3A",
      disabledBackground: "#0D2E1D",
    },
  },
  info: {
    light: {
      main: "#47C2FF",
      lightHover: alpha("#47C2FF", 0.08),
      light: "#70CEFF",
      dark: "#3FADE6",
      contrastText: "#06283A",
      hover: "#3DB3F2",
      disabled: "#BAE8FF",
      disabledBackground: "#EDF8FF",
    },
    dark: {
      main: "#47C2FF",
      lightHover: alpha("#47C2FF", 0.08),
      light: "#66CBFF",
      dark: "#399BCC",
      contrastText: "#06283A",
      hover: "#5CCBFF",
      disabled: "#1A465C",
      disabledBackground: "#0D232E",
    },
  },
  background: {
    light: {
      default: "#f8fafc",
      paper: "#ffffff",
    },
    dark: {
      default: "#1c263c",
      paper: "#1e293b",
    },
  },
  text: {
    light: {
      primary: "#1c263c",
      secondary: "#475569",
      disabled: "#94a3b8",
    },
    dark: {
      primary: "#f8fafc",
      secondary: "#cbd5e1",
      disabled: "#64748b",
    },
  },
  divider: {
    light: "#e2e8f0",
    dark: "#334155",
  },
};

export const getPalette = (mode: PaletteMode): PaletteOptions => ({
  mode,
  primary: colors.primary[mode],
  secondary: colors.secondary[mode],
  error: colors.error[mode],
  warning: colors.warning[mode],
  success: colors.success[mode],
  info: colors.info[mode],
  background: colors.background[mode],
  text: colors.text[mode],
  divider: colors.divider[mode],
});
