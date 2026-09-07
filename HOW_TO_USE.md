# Using Vortex-UI in Another Application

This guide explains how to install and use the `vortex-ui` component library in a new project. 

Because `vortex-ui` is housed inside a monorepo (`packages/ui`), the most reliable way to use it is by adding it as a Git submodule and configuring your package manager's "workspaces" feature.

---

## Step-by-Step Installation Guide

Follow these steps sequentially in the root folder of your consuming project (e.g., your new Next.js app).

### Step 1: Add the Repository as a Git Submodule

First, bring the `vortex-ui` code into your project by adding it as a Git submodule. We recommend placing it inside an `external` folder:

```bash
git submodule add https://github.com/huge-it/vortex-ui.git external/vortex-fe
```

### Step 2: Configure Workspaces

Tell your project's package manager to treat the submodule as a local package. Update your project's `package.json` to include the `workspaces` array:

```json
{
  "name": "your-project-name",
  "workspaces": [
    "external/vortex-fe/packages/ui"
  ]
}
```

*(If you use **pnpm**, create or update a `pnpm-workspace.yaml` file instead and add `- 'external/vortex-fe/packages/ui'` under `packages:`).*

### Step 3: Link the Workspace

Run your package manager's install command. This will detect the workspace configuration you just added and link `vortex-ui` locally.

```bash
npm install
```

### Step 4: Install Required Peer Dependencies

`vortex-ui` relies on React and Material UI to function, but it does not install them automatically. You **must** install these "peer dependencies" directly in your main project:

```bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled @emotion/cache react react-dom
```

### Step 5: Start Using the Components!

You are now fully set up. You can import components directly from `vortex-ui` in your code:

```tsx
import { Button } from 'vortex-ui';

export default function Home() {
  return <Button>Click Me</Button>;
}
```

---

## Maintenance & Local Development

### How to pull the latest updates from Vortex-UI
If someone makes updates to `vortex-ui` (bug fixes, new components, etc.) and pushes them to the repository, you can easily pull those updates into your project:

```bash
# 1. Fetch and update the submodule to the latest commit
git submodule update --remote external/vortex-fe
```
*Note: After updating, always restart your development server (e.g., `npm run dev`). If changes don't appear, try deleting your framework's cache (like the `.next` folder).*


### Alternative Setup: Local File Path 
If you already have the `vortex-fe` repository cloned on your computer and just want to test it locally without submodules, you can link it via a relative file path. 
Assuming both your new project and `vortex-fe` are side-by-side in the same parent folder:

1. Add the relative path directly to your dependencies in your project's `package.json`:
   ```json
   {
     "dependencies": {
       "vortex-ui": "file:../vortex-fe/packages/ui"
     }
   }
   ```
2. Run `npm install`.
3. Install peer dependencies as shown in Step 4.
