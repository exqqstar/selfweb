# selfweb - Personal Website

## Project Overview
A comprehensive personal website (portfolio + blog + lab) built with Next.js and Tailwind CSS.
Owner is a React Native developer learning web development.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX (local files in `content/`)
- **Deployment**: Docker on self-hosted VPS

## Project Structure
```
app/           → Next.js App Router pages
components/    → Shared React components
content/       → MDX blog posts and project data
lib/           → Utility functions, MDX processing
public/        → Static assets (images, fonts)
docs/          → Project documentation and learning notes
```

## Conventions
- Use functional components with TypeScript
- File naming: kebab-case for files, PascalCase for components
- Tailwind for styling; avoid inline styles
- Blog content in MDX format under `content/blog/`
- Components should be small and focused (single responsibility)

## Key Commands
```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # Run ESLint
```

## Current Phase
MVP V0.1 - Core pages (Home, About, Blog)
