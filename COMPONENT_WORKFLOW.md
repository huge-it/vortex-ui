# VortexUI Component Workflow

This guide explains how to create and use components in the VortexUI monorepo.

## The Golden Rule

**Build it once in `packages/ui`, then use and document it in `apps/docs`.** Do not build components directly inside the documentation app.

---

## The 3-Step Workflow

### Step 1: Create the Component (`packages/ui`)

All reusable UI components live in the `packages/ui` directory.

1. Create a new folder for your component: `packages/ui/src/components/MyComponent/`
2. Write your implementation (e.g., `MyComponent.tsx`).

```tsx
// packages/ui/src/components/MyComponent/MyComponent.tsx
import { Button } from "@mui/material";

export function MyComponent() {
  return <Button>Hello Vortex</Button>;
}
```

### Step 2: Export the Component (`packages/ui`)

To make your component available to other apps, you must export it from the UI package's main entry point.

1. Open `packages/ui/src/index.ts`.
2. Export your new component.

```typescript
// packages/ui/src/index.ts
export { MyComponent } from "./components/MyComponent/MyComponent";
```

### Step 3: Document & Use It (`apps/docs`)

The `apps/docs` application is used purely to showcase and test the components you built in Step 1.

1. Create a new page in the docs app.
2. Import your component from the local `vortex-ui` package and render it.

```tsx
// apps/docs/app/my-component/page.tsx
import { MyComponent } from "vortex-ui";

export default function DocsPage() {
  return (
    <div>
      <h1>My Component Demo</h1>
      <MyComponent />
    </div>
  );
}
```

---

## Managing Dependencies

Because this is a monorepo, you must install dependencies in the correct folder based on where they are actually used.

- **Workspace Tooling** (Turbo, Typescript, ESLint):
  Run `pnpm add -D <package> -w` in the root directory.
- **Component Dependencies** (e.g., MUI, Day.js used inside a component):
  Run `pnpm --filter vortex-ui add <package>`.
- **Documentation Dependencies** (e.g., a syntax highlighter used only in docs):
  Run `pnpm --filter vortex-docs add <package>`.

---

## Quick Reference Commands

| Action                           | Command                                   |
| :------------------------------- | :---------------------------------------- |
| **Start development servers**    | `pnpm dev` (Run from Root)                |
| **Build the workspace**          | `pnpm build` (Run from Root)              |
| **Install all dependencies**     | `pnpm install` (Run from Root)            |
| **Add dependency to UI library** | `pnpm --filter vortex-ui add <package>`   |
| **Add dependency to Docs app**   | `pnpm --filter vortex-docs add <package>` |
