"use client";
import { Box, Typography, Divider } from "@mui/material";
import { ComponentCode } from "@comp/docs/ComponentCode";

export default function ThemesPage() {
  return (
    <Box>
      <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
        Themes
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          mb: 4
        }}>
        Vortex UI provides built-in light and dark themes that can be customized to match your brand. 
        You can switch between them using the useColorMode hook.
      </Typography>
      <Divider sx={{ mb: 4 }} />
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
        Usage
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          mb: 2
        }}>
        Make sure your app is wrapped in the VortexUIProvider. This provides the MUI theme based on the current mode.
      </Typography>
      <ComponentCode code={`import { useColorMode } from "vortex-ui";\n\nfunction ThemeSwitcher() {\n  const { mode, toggleColorMode } = useColorMode();\n  \n  return (\n    <button onClick={toggleColorMode}>\n      Switch to {mode === 'light' ? 'dark' : 'light'} mode\n    </button>\n  );\n}`} />
    </Box>
  );
}
