"use client";
import { Box } from "@mui/material";
import { ComponentCode } from "@comp/docs/ComponentCode";
import { ComponentHeader } from "@comp/docs/ComponentHeader";

export default function ThemesPage() {
  return (
    <Box>
      <ComponentHeader
        title="Themes"
        description="Vortex UI provides built-in light and dark themes that can be customized to match your brand. You can switch between them using the useColorMode hook. Make sure your app is wrapped in the VortexUIProvider. This provides the MUI theme based on the current mode."
      />
      
      <ComponentCode 
        title="Usage"
        code={`import { useColorMode } from "vortex-ui";\n\nfunction ThemeSwitcher() {\n  const { mode, toggleColorMode } = useColorMode();\n  \n  return (\n    <button onClick={toggleColorMode}>\n      Switch to {mode === 'light' ? 'dark' : 'light'} mode\n    </button>\n  );\n}`} 
      />
    </Box>
  );
}
