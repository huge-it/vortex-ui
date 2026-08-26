# Changelog

All notable changes to the `vortex-ui` package will be documented in this file.

## [0.1.3] - 2026-08-26

### Added
- Added new components to the library: `AutoPopulate`, `ButtonGroup`, `ChipInput`, `IconButton`, `NumberField`, and `TextAreas`.

### Changed
- Improved the `ButtonGroup` component UI by making button widths dynamic (`auto` instead of fixed `80px`), increasing horizontal padding, and increasing gap spacing between icons and text to prevent label congestion.

---

## [0.1.2] - 2026-08-22

### Fixed
- Added `"use client"` directive to the compiled output bundle so that Next.js App Router treats the library as Client Components.

---

## [0.1.1] - 2026-08-22

### Added
- Implemented `tsup` bundler to pre-compile the React components into standard, minified JavaScript (CommonJS and ESModules).
- Added automatic generation of TypeScript declaration files (`.d.ts`).
- Added a `build` script to `package.json`.

### Changed
- Pointed the `main` and `types` fields in `package.json` to the compiled `/dist/` folder instead of raw source files.
- Updated the `.github/workflows/publish.yml` GitHub Action to automatically run the `pnpm build` step before publishing.
- Upgraded the GitHub Action runner to use Node.js `22.x` (LTS) to resolve deprecation warnings and ensure build stability.

### Fixed
- Fixed an issue where consuming applications (like Next.js) had to manually add `transpilePackages` to compile the library. The package is now plug-and-play.

---

## [0.1.0] - 2026-08-22

### Added
- Initial release of the `vortex-ui` component library.
- Created `publish.yml` GitHub Action to automatically publish the package to the private GitHub Packages registry (`npm.pkg.github.com`).
- Exported core components (`Button`, `Modal`, `Input`, `Select`, `DataTable`) and the `VortexUIProvider`.
- Added a `README.md` detailing installation and usage instructions for the library.
