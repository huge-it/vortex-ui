import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material/className';

// Configure class prefix for VortexUI components globally
ClassNameGenerator.configure((componentName) =>
  componentName.replace('Mui', 'VortexUI')
);
