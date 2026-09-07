# Using Vortex-UI in Another Application

This guide explains how to install and use the `vortex-ui` package in another project using Git.

## Option 1: Git Submodule with Monorepo (Recommended for now)

Since `vortex-ui` is part of a monorepo (located in `packages/ui`), the easiest way to use it in another project via Git is by adding it as a Git submodule and using a package manager's workspace feature (like npm workspaces, yarn workspaces, or pnpm workspaces) to link it.

### 1. Add the repository as a Git Submodule

Navigate to your other project's root directory and run:

```bash
# Add the vortex-fe repository as a submodule (e.g., inside a 'packages' or 'external' folder)
git submodule add https://github.com/huge-it/vortex-ui.git external/vortex-fe
```

### 2. Configure Workspaces

Update your project's `package.json` to include the submodule as a workspace. 

For **npm** or **yarn**:
```json
{
  "name": "your-other-project",
  "workspaces": [
    "external/vortex-fe/packages/ui"
  ]
}
```

For **pnpm** (create or update `pnpm-workspace.yaml`):
```yaml
packages:
  - 'external/vortex-fe/packages/ui'
```

### 3. Install and Link Dependencies

Run the install command for your package manager:
```bash
npm install
# or
yarn install
# or
pnpm install
```

Now you can import components from `vortex-ui` in your project:

```tsx
import { FilterButton } from 'vortex-ui';
```

---

## Option 2: Local File Path (For Local Development)

If you are developing locally and want to test `vortex-ui` in another project without submodules:

### 1. Link the package

Assuming your other project is located in the same parent directory as `vortex-fe` (e.g., both are inside `Standalone_Vortex`), add the relative path to the `vortex-ui` directory in your `package.json`:

```json
{
  "dependencies": {
    "vortex-ui": "file:../vortex-fe/packages/ui"
  }
}
```

### 2. Install dependencies

```bash
npm install
```

---

## Prerequisites & Peer Dependencies

Ensure the target project has the required peer dependencies installed, as `vortex-ui` relies on them:

```bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled react react-dom
```

*(Note: Direct Git URL installation like `npm install git+https://...` is not natively supported for subdirectories in a monorepo without third-party tools like `gitpkg`.)*
