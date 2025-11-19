# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a digital garden website built with Quartz v4 - a static site generator that transforms Markdown files into a web-based knowledge base. The site publishes personal notes and content in French, with the title "jndjs.dev — Je note donc je suis".

## Common Commands

### Development & Build
- `npm run quartz build` - Build the static site
- `npm run quartz build --serve` - Build and serve locally
- `npm run docs` - Build docs and serve at localhost
- `npm run check` - Run TypeScript check and Prettier formatting check
- `npm run format` - Format code with Prettier
- `npm run test` - Run tests with tsx

### Quartz CLI
- `./quartz/bootstrap-cli.mjs` - Main Quartz CLI entry point
- `npx quartz sync` - Sync content
- `npx quartz create` - Create new content

## Architecture

### Core Structure
- **`quartz/`** - Core Quartz framework code
  - **`build.ts`** - Main build orchestrator using three-phase pipeline (parse → filter → emit)
  - **`cfg.ts`** - Configuration types and utilities
  - **`components/`** - React-like components for UI rendering
  - **`plugins/`** - Extensible plugin system with transformers, filters, and emitters
  - **`processors/`** - Content processing pipeline (parse, filter, emit)
  - **`util/`** - Shared utilities (path handling, performance, logging)

### Plugin Architecture
Quartz uses a three-phase plugin system:
1. **Transformers** (`plugins/transformers/`) - Process and transform Markdown content
2. **Filters** (`plugins/filters/`) - Filter which files get processed
3. **Emitters** (`plugins/emitters/`) - Generate output files (HTML, assets, etc.)

### Content Structure
- **`content/`** - Markdown files organized into:
  - `Zones/` - Main content areas
  - `Ressources/` - Resource collections
  - `Projets/` - Project documentation
  - `Photo/` - Photography-related content
  - `Archives/` - Archived content

### Configuration
- **`quartz.config.ts`** - Main site configuration including:
  - Site metadata (title, baseUrl, locale: fr-FR)
  - Theme customization (fonts: Inter, Libre Baskerville, Source Code Pro)
  - Plugin configuration
  - Custom sidebar links and analytics (GoatCounter)

### Custom Features
- **Tags Cloud Plugin** (`quartz/plugins/emitters/tagsCloud.ts`) - Custom plugin generating a visual tag cloud with scaled font sizes based on tag frequency
- French localization (fr-FR)
- Custom color themes for light/dark modes
- GoatCounter analytics integration

### Build Pipeline
1. **Parse** - Transform Markdown to AST with frontmatter processing
2. **Filter** - Apply content filters (draft removal, etc.)
3. **Emit** - Generate static HTML, CSS, JS and other assets

## Development Notes

- Site uses TypeScript with strict type checking
- French content with Obsidian-flavored Markdown support
- Custom plugin development follows the three-phase pattern
- Theme uses CSS custom properties for consistent styling
- Content supports mathematical notation (KaTeX), syntax highlighting, and internal linking

## Configuration Files
- Node.js 22+ and npm 10.9.2+ required
- Uses ESM modules throughout
- TypeScript configuration includes path mapping and strict mode
- Prettier for code formatting with specific rules