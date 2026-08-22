# 🌪️ VORTEX
**Visual & Operational Rules for Technical EXecution**

## What is VORTEX?
VORTEX is Huge IT Solutions' official framework for standardizing code architecture, UI/UX design, development practices, and review protocols across all teams and projects.

It is more than just a set of rules — VORTEX is the central force that ensures:
- Every product we build looks, feels, and behaves consistently.
- Every line of code follows scalable, reviewable, and maintainable patterns.
- Every team aligns with the same language, structure, and execution principles.

VORTEX is how we bring unity to velocity. Precision to creativity. Discipline to scale.

## Why VORTEX?
- **Consistency** across all frontend and backend codebases.
- **Scalable Architecture** that's easy to maintain and audit.
- **Unified UI/UX Language** with theme, spacing, and interaction patterns.
- **Simplified Code Reviews** through shared rules and linting policies.
- **Shared Engineering Culture** across all teams and departments.

## What Does VORTEX Include?
- **VORTEX.UI** – Shared design tokens, components, and theming.
- **VORTEX.ARCH** – Architectural patterns and directory structures.
- **VORTEX.LINT** – Code formatting and static analysis rules.
- **VORTEX.API** – Standards for APIs, responses, versioning, and error handling.
- **VORTEX.REVIEW** – PR checklist and review guidelines.
- **VORTEX.DEVOPS** – CI/CD, environments, and deployment practices.

> **The VORTEX Principle:**
> "When everyone builds differently, everything breaks eventually. When everyone builds through VORTEX, we scale with confidence."

---

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
