import { Box } from "@mui/material";
import { ComponentCode } from "./ComponentCode";

export function ComponentInstallation() {
  return (
    <Box display="flex" flexDirection="column" gap={1} mb={4}>
      <ComponentCode title="Installation" code="npm install vortex-ui" />
    </Box>
  );
}
