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
      light: "#6A91FF",
      dark: "#3C5FFF",
      contrastText: "#FFFFFF",
      hover: "#2643AC",
      disabled: "#93B2FF",
      disabledBackground: "#F1F5FF",
    },
    dark: {
      main: "#4772FF",
      lightHover: alpha("#4772FF", 0.08),
      light: "#6A91FF",
      dark: "#3C5FFF",
      contrastText: "#FFFFFF",
      hover: "#6A91FF",
      disabled: "#2643AC",
      disabledBackground: "#12268F",
    },
  },

  secondary: {
    light: {
      main: "#0088AB",
      lightHover: alpha("#0088AB", 0.08),
      light: "#39B8D4",
      dark: "#00647D",
      contrastText: "#FFFFFF",
      hover: "#00556B",
      disabled: "#8DD5E3",
      disabledBackground: "#E8F8FB",
    },
    dark: {
      main: "#0088AB",
      lightHover: alpha("#0088AB", 0.08),
      light: "#39B8D4",
      dark: "#00647D",
      contrastText: "#FFFFFF",
      hover: "#1A9AB8",
      disabled: "#00556B",
      disabledBackground: "#10313A",
    },
  },

  error: {
    light: {
      main: "#D92D3F",
      lightHover: alpha("#D92D3F", 0.08),
      light: "#F06A78",
      dark: "#B42336",
      contrastText: "#FFFFFF",
      hover: "#8F1D2B",
      disabled: "#F5AEB7",
      disabledBackground: "#FDEBED",
    },
    dark: {
      main: "#D92D3F",
      lightHover: alpha("#D92D3F", 0.08),
      light: "#F06A78",
      dark: "#B42336",
      contrastText: "#FFFFFF",
      hover: "#E34757",
      disabled: "#8F1D2B",
      disabledBackground: "#35151B",
    },
  },

  warning: {
    light: {
      main: "#C76A00",
      lightHover: alpha("#C76A00", 0.08),
      light: "#E89A3D",
      dark: "#9E5400",
      contrastText: "#FFFFFF",
      hover: "#7D4300",
      disabled: "#EBC48F",
      disabledBackground: "#FFF4E5",
    },
    dark: {
      main: "#FFA43D",
      lightHover: alpha("#FFA43D", 0.08),
      light: "#FFB96B",
      dark: "#CC7A18",
      contrastText: "#1A1A1A",
      hover: "#FFAD55",
      disabled: "#8A5A20",
      disabledBackground: "#332510",
    },
  },

  success: {
    light: {
      main: "#178A5B",
      lightHover: alpha("#178A5B", 0.08),
      light: "#55B98A",
      dark: "#106B45",
      contrastText: "#FFFFFF",
      hover: "#0B5235",
      disabled: "#A7DCC5",
      disabledBackground: "#E8F7F0",
    },
    dark: {
      main: "#47D99A",
      lightHover: alpha("#47D99A", 0.08),
      light: "#70E5B2",
      dark: "#2DB579",
      contrastText: "#06351D",
      hover: "#5BE0A5",
      disabled: "#2D664E",
      disabledBackground: "#102F23",
    },
  },

  info: {
    light: {
      main: "#087EAF",
      lightHover: alpha("#087EAF", 0.08),
      light: "#48B5D9",
      dark: "#066386",
      contrastText: "#FFFFFF",
      hover: "#04516D",
      disabled: "#A4D7E8",
      disabledBackground: "#E8F7FC",
    },
    dark: {
      main: "#47BCE8",
      lightHover: alpha("#47BCE8", 0.08),
      light: "#70CCED",
      dark: "#2999C5",
      contrastText: "#06283A",
      hover: "#5AC5EB",
      disabled: "#2E6175",
      disabledBackground: "#102A33",
    },
  },

  background: {
    light: {
      default: "#F8FAFC",
      paper: "#FFFFFF",
    },
    dark: {
      default: "#111827",
      paper: "#1E293B",
    },
  },

  text: {
    light: {
      primary: "#111827",
      secondary: "#475569",
      disabled: "#94A3B8",
    },
    dark: {
      primary: "#F8FAFC",
      secondary: "#CBD5E1",
      disabled: "#64748B",
    },
  },

  divider: {
    light: "#E2E8F0",
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
