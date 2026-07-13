# Architecture

## Overview

This project is engineered as a long-term, production-quality personal website rather than a traditional portfolio.

The goal is to demonstrate software engineering practices, technical SEO expertise, scalable architecture, and modern frontend development.

The architecture prioritizes:

- Maintainability
- Scalability
- Performance
- Accessibility
- SEO
- Developer Experience

---

# Technology Stack

## Frontend

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS v4

## Deployment

- Cloudflare Pages

## Package Manager

- pnpm

---

# Architectural Principles

Every decision in this project follows these principles.

## Performance First

Every component should have minimal runtime cost.

---

## SEO First

SEO is considered from the beginning of development rather than added later.

---

## Accessibility First

The website must be accessible for all users.

---

## Component Driven Development

The UI is built from reusable components.

---

## Mobile First

Every page is designed for mobile devices first and then enhanced for larger screens.

---

## Progressive Enhancement

Animations and interactions should improve the experience without blocking usability.

---

# Project Structure

src/

app/
Application routes

components/
Reusable UI components

components/ui/
Generic reusable UI

components/layout/
Navigation, Footer, Layout

components/sections/
Homepage sections

lib/
Libraries and helper integrations

hooks/
Reusable React hooks

utils/
Utility functions

constants/
Application constants

types/
TypeScript types

config/
Application configuration

styles/
Global styling resources

assets/
Static assets imported into the application

data/
Static content and configuration

---

# Routing Strategy

The project uses the Next.js App Router.

All routes should remain server components by default.

Client Components are introduced only when interaction requires them.

---

# Styling Strategy

Tailwind CSS v4 is the primary styling solution.

Design Tokens are defined centrally.

Avoid inline styles whenever possible.

---

# Component Strategy

Components should be:

- Small
- Reusable
- Independent
- Well documented

Business logic should remain outside presentational components.

---

# State Management

Local state:

- React Hooks

Global state:

Only introduced when truly necessary.

Avoid unnecessary state management libraries.

---

# File Naming Convention

Components

PascalCase

Example

HeroSection.tsx

Hooks

camelCase

Example

useScroll.ts

Utilities

camelCase

Example

formatDate.ts

Types

PascalCase

Example

Project.ts

---

# Import Strategy

Use path aliases.

Example

@/components

instead of

../../../components

---

# Performance Strategy

- Server Components by default
- Lazy loading where appropriate
- Optimized images
- Minimal JavaScript
- Minimal dependencies

---

# SEO Strategy

Every page includes:

- Metadata
- Open Graph
- Twitter Cards
- Canonical URLs
- Structured Data
- Semantic HTML

---

# Code Quality

Strict TypeScript

ESLint

Consistent formatting

Reusable components

Meaningful naming

---

# Documentation

Documentation evolves together with the codebase.

No undocumented architectural decision should remain in the project.

---

# Long-Term Vision

The project will evolve through multiple versions.

Future additions include:

- Case Studies
- Blog (MDX)
- Interactive Timeline
- Contact Center
- Portfolio Showcase
- CMS Integration
- Multi-language Support

without requiring architectural changes.