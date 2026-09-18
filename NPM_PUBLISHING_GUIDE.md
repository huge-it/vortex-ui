# Vortex UI: NPM vs. Git Submodules & Publishing Guide

This document outlines the architectural decision to migrate `vortex-ui` distribution from a Git Submodule model to standard NPM Registry publication. It also serves as a complete guide for maintainers on how to publish new versions to NPM.

---

## 1. Why We Moved from Git Submodules to NPM

Initially, `vortex-ui` was consumed by adding the entire `vortex-fe` repository as a Git submodule inside consuming applications. While this allowed for rapid prototyping, it presented significant scalability and performance issues.

Moving to NPM standardizes the installation process, reduces the footprint in consuming applications, and adheres to modern JavaScript ecosystem best practices.

### The Problem with Git Submodules
When using a Git submodule, consuming projects are forced to clone the *entire* `vortex-fe` monorepo. This means consumers download the documentation site, storybooks, raw TypeScript files, and all development dependencies. This bloats the consuming repository and requires complex Workspace configurations (`pnpm-workspace.yaml`) just to link the UI package.

### The NPM Solution
By compiling the package with `tsup` and publishing it to NPM, consumers only download the **compiled distribution files** (`dist/index.js`, `dist/index.d.ts`). They do not clone the repo, they do not need workspaces, and they can install it via a single command: `npm install @hugeit/vortex-ui`.

---

## 2. Pros and Cons Comparison

### NPM Registry Publication (Current Strategy)
| **Pros** | **Cons** |
| :--- | :--- |
| **Plug-and-Play:** Consumers just run `npm install @hugeit/vortex-ui`. No complex workspace configurations required. | **Publishing Overhead:** Maintainers must remember to bump the version and run the build/publish commands. |
| **Tiny Footprint:** Only the minified, compiled code (`dist/`) is downloaded, drastically reducing `node_modules` size. | **Slower Local Dev:** Testing changes across multiple repositories requires `npm link` or publishing beta versions. |
| **Automatic Dependencies:** Packages like `@mui/material` and `@emotion` are automatically installed for the consumer. | |
| **Versioning:** Consumers can lock to specific versions (e.g., `^0.1.15`) and update safely without unexpected breaking changes. | |
| **TypeScript Support:** Pre-compiled `.d.ts` files provide instant IDE autocompletion without forcing the consumer's bundler to transpile raw `.ts` files. | |

### Git Submodule Installation (Deprecated)
| **Pros** | **Cons** |
| :--- | :--- |
| **Instant Updates:** You can edit the UI library directly inside the consuming app and see instant hot-reloads. | **Massive Footprint:** Clones the entire UI monorepo (including docs, tests, and devDependencies). |
| **No Publishing Needed:** Committing to git is all it takes to distribute the code. | **Complex Setup:** Requires editing `pnpm-workspace.yaml` and configuring the framework to transpile local packages. |
| | **Git Nightmares:** Submodules easily get out of sync, leading to detached HEAD states and messy merge conflicts for junior developers. |

---

## 3. How to Publish to NPM

When you have added new components or fixed bugs in `vortex-ui`, you must publish a new version to the NPM registry so consumers can install the updates.

### Prerequisites
- You must have an NPM account at [npmjs.com](https://www.npmjs.com/).
- You must have access to the `@hugeit` (or `@murali-dev`) organization on NPM.
- You must be authenticated in your terminal (`npm login`).

### Step-by-Step Publishing Guide

**1. Navigate to the UI Package**
Open your terminal and ensure you are in the correct package directory (not the monorepo root):
```bash
cd packages/ui
```

**2. Bump the Version**
Open `packages/ui/package.json` and increment the `"version"` field. 
*Note: NPM will reject your publication with a `403 Forbidden` error if you try to publish a version number that already exists.*

**3. Build the Distribution Files**
You must compile the raw React/TypeScript files into standard JavaScript before publishing.
```bash
npm run build
```
*(This uses `tsup` to generate the `dist/` folder and externalizes Next.js so it doesn't bloat the bundle).*

**4. Publish the Package**
Finally, publish the package to the public registry:
```bash
npm publish --access public
```
> **Important:** If you have Two-Factor Authentication (2FA) enabled on your NPM account for publishing, you must append your authenticator code: `npm publish --access public --otp=123456`

### 4. Updating Consuming Applications
Once the publish command succeeds, notify your team! They can pull your new updates by running:
```bash
npm install @hugeit/vortex-ui@latest
```
