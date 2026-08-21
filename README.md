# Vortex Frontend (Monorepo)

This is the frontend monorepo for Vortex, powered by [pnpm workspaces](https://pnpm.io/workspaces) and [Next.js](https://nextjs.org).

## Project Structure

- [`apps/docs`](file:///d:/Murali/Work/Standalone_Vortex/vortex-fe/apps/docs) - The primary Next.js documentation and demonstration application.
- [`packages/ui`](file:///d:/Murali/Work/Standalone_Vortex/vortex-fe/packages/ui) - Shared React UI components (`vortex-ui`) used by the applications.

---

## Getting Started

Because this project is configured as a `pnpm` workspace, you should use `pnpm` to install and run tasks.

> [!NOTE]
> If you do not have `pnpm` installed globally or are running into PowerShell script execution restrictions on Windows, you can use Node's built-in **Corepack** to execute `pnpm` commands automatically.

### 1. Install Dependencies

Run the installation command from the repository root:

```bash
corepack pnpm install
```

### 2. Run the Development Server

You can launch the development server for the `docs` app in two ways:

- **Direct App Run (Recommended if Turborepo crashes):**
  ```bash
  corepack pnpm --filter docs dev
  ```
- **Via Turborepo (Runs all apps):**
  ```bash
  corepack pnpm dev
  ```

Once started, open [http://localhost:3000](http://localhost:3000) (or the port specified in terminal) in your browser.

### 3. Build for Production

To generate a production-ready build:

- **Build the `docs` application:**
  ```bash
  corepack pnpm --filter docs build
  ```
- **Build the entire monorepo:**
  ```bash
  corepack pnpm build
  ```

---

## Helper Scripts

- **Linting:** `corepack pnpm lint` (or `corepack pnpm --filter docs lint`)
- **Formatting:** `corepack pnpm format`
