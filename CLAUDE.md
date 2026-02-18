# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Political Nakshatra is a 3D political compass web application specifically designed for Indian political realities. Unlike the traditional Western political compass, it uses a three-dimensional framework based on academic research on multi-ethnic, post-colonial democracies.

The application is a React-based SPA that allows users to take a 36-question quiz and visualize their political position in 3D space relative to Indian political parties and leaders.

## Development Commands

```bash
# Development
npm run dev              # Start Vite dev server (typically on http://localhost:5173)

# Building
npm run build            # Production build (outputs to dist/)
npm run preview          # Preview production build locally

# Code Quality
npm run lint             # Run ESLint

# Testing
npm test                 # Run tests in watch mode
npm run test:ui          # Run tests with Vitest UI
npm run test:coverage    # Generate coverage report (outputs to coverage/)
npm run test:run         # Run tests once (non-watch mode)
```

## Test Structure

- Test setup is in `src/test/setup.js` which configures:
  - jsdom environment for React Testing Library
  - i18next with both English and Marathi translations
  - jest-dom matchers for Vitest
- Place component tests in `__tests__` folders adjacent to the components
- Test utilities and scoring functions have dedicated test files

## Architecture

### Core Framework: The Three Axes

The application implements a three-dimensional political framework that addresses limitations of Western political compasses when applied to Indian politics:

1. **Statism Axis** - State intervention in economy and society (vertical/y-axis in 3D space)
2. **Recognition Axis** - Support for group-based rights and protections (horizontal-left/x-axis)
3. **SID Axis** (Structural Incentive Distribution) - Resource distribution philosophy: Universalist (rule-based) vs Particularist (identity-based) (horizontal-right/z-axis)

The theoretical foundation is based on Chhibber & Verma (2018) and Kanchan Chandra's work on patronage democracy. The SID axis is a novel contribution that captures how political actors distribute state resources - either through impersonal rules (universalism) or through identity networks and patronage (particularism).

### State Management

**QuizContext** (`src/contexts/QuizContext.jsx`) is the single source of truth for application state:
- Uses React's `useReducer` for state management
- Persists state to localStorage automatically
- Manages: quiz responses, current question index, results, visualization toggles
- Provides actions: `answerQuestion`, `calculateAndSetResults`, `resetQuiz`, navigation methods
- Provides helpers: `getCurrentQuestion`, `getProgress`, `canProceed`, etc.

All components should use the `useQuiz()` hook to access quiz state and actions.

### Scoring System

**Core scoring logic** (`src/utils/scoring.js`):
- Converts Likert scale responses (1-5) to normalized coordinates (-1 to +1) for each axis
- Handles weighted questions and reverse-scored questions
- Key functions:
  - `calculateResults(responses)` - Main scoring function that returns 3D coordinates
  - `calculateAxisScore(responses, axis)` - Calculates normalized score for a single axis
  - `findClosestParty(userPosition, parties)` - Finds closest political entity
  - `getAxisLabel/getAxisDescription` - Provides human-readable interpretations
  - `calculateDistance` - Euclidean distance in 3D space
  - `getAxisAlignment` - Detailed comparison between user and entity positions

The scoring algorithm normalizes raw scores based on the min/max possible range for each axis to ensure fair comparison across axes with different numbers of questions or weights.

### Data Structure

**Questions** (`src/data/questions.js`):
- 36 questions total: 12 per axis
- Each question has: `id`, `axis`, `weight` (default 1.0), `reverse` flag
- Questions are divided into sub-categories per axis (e.g., economic statism vs social statism)
- Translation keys reference `i18n/locales/{lang}/questions.json`

**Political Entities** (`src/data/parties.js` and `src/data/leaders.js`):
- Party/leader objects contain: `id`, `name`, `color`, `position` (3D coordinates)
- Positions are manually calibrated based on policy analysis and academic research
- These are **estimates** based on governance records and electoral strategies, not official positions

**Model Comparisons** (`src/data/modelComparison.js`):
- Contains data showing how the same parties would be positioned on traditional Western political compass
- Used for educational comparison to demonstrate model differences

### Component Organization

```
src/components/
├── common/           # Reusable UI components (buttons, cards, etc.)
├── comparison/       # Party/leader comparison components
├── layout/           # Header, Footer, Layout wrappers
├── quiz/            # Quiz interface components
│   └── questions/   # Question display and response collection
├── results/         # Results page components
└── visualization/   # 3D Compass (Three.js/React Three Fiber)
    └── Compass3D.jsx  # Main 3D visualization component
```

**Component Guidelines**:
- Components use translations via `useTranslation()` hook from react-i18next
- Tailwind CSS v4 for styling (note: v4 syntax differs from v3)
- Lucide React for icons
- All quiz-related state comes from QuizContext, not local state

### 3D Visualization

The `Compass3D.jsx` component uses React Three Fiber (R3F) and Three.js:
- Renders a 3D coordinate system with axes labeled for Statism, Recognition, and SID
- Plots user position and political entities as points in 3D space
- Interactive camera controls (OrbitControls from @react-three/drei)
- Performance considerations: Use `useMemo` for geometry, limit re-renders
- Color scheme uses party colors for consistency across 2D/3D views

### Internationalization (i18n)

The app supports English and Marathi:
- Configuration in `src/i18n/i18n.js`
- Uses i18next with browser language detection
- Namespaces: `common`, `questions`, `parties`, `leaders`, `scoring`, `about`
- Translation files: `src/i18n/locales/{en,mr}/{namespace}.json`
- Always use translation keys, never hardcode user-facing strings

### URL Sharing

`src/utils/urlSharing.js` provides functions to encode/decode quiz results in URLs:
- `encodeResultsToUrl(results)` - Base64 encodes coordinates
- `decodeResultsFromUrl(urlParams)` - Decodes and validates coordinates
- Used for sharing results without server-side storage
- Validation ensures coordinates are within valid range (-1 to +1)

## Deployment

The app is configured for GitHub Pages deployment:
1. Update `base` in `vite.config.js` to match your repository name (currently `/political-nakshatra/`)
2. Push to `main` branch triggers GitHub Actions workflow (`.github/workflows/deploy.yml`)
3. Build artifacts from `dist/` are deployed to GitHub Pages automatically
4. Ensure repository Settings > Pages is set to "GitHub Actions" as source

## Data Privacy

This is a client-side only application:
- All quiz responses stored in browser localStorage only
- No server, no analytics, no tracking
- Results can be shared via URL parameters (opt-in)
- Users can clear data via "Reset Quiz" functionality

## Academic Foundations

The framework is grounded in:
- **Chhibber & Verma (2018)**: "Ideology and Identity: The Changing Party Systems of India" - source of Statism/Recognition framework
- **Kanchan Chandra**: "Why Ethnic Parties Succeed: Patronage and Ethnic Headcounts in India" - theoretical basis for patronage democracy
- **SID Axis**: Novel contribution based on research on caste networks, reservations, and resource distribution in multi-ethnic democracies

The methodology document (linked in repo) provides detailed justification for why Western political compass models fail in Indian context and how this three-axis model better captures:
- State-centric competition over resources (not ideology)
- Identity-based mobilization and caste networks
- Particularist vs universalist distribution mechanisms

## Codebase Conventions

- Use functional components with hooks (no class components)
- Prefer named exports for components and utilities
- ESLint configuration in `eslint.config.js` (uses flat config format)
- Import order: React, third-party, local components, utilities, data, styles
- File naming: PascalCase for components, camelCase for utilities
