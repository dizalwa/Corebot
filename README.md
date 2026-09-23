# Corebot AI — Autonomous Multi-Agent Orchestration Platform

A high-performance AI automation and workflow orchestration dashboard built with Next.js App Router, React 19, Tailwind CSS v4, and Base UI.

Corebot AI provides an operational interface for monitoring, orchestrating, and scaling autonomous multi-agent pipelines, tracking model latency, token throughput, and real-time execution telemetry across diverse foundation models (Claude 3.7 Sonnet, GPT-4o, DeepSeek R1, Gemini 2.5 Flash, and Llama 3.3).

---

## Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with CSS variables and OKLCH color spaces
- **Primitives**: [@base-ui/react](https://base-ui.com/) (Accessible Dialog, Input, Sheet, Button components)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes) (Dark/Light mode support with system detection)
- **Component Utilities**: `class-variance-authority`, `cn`, `tw-animate-css`
- **Language**: TypeScript 5 with strict mode enabled

---

## Features Built

### 1. AI Automation Platform Dashboard (`/`)
- **Live Orchestrator Banner**: Real-time status indicators, model mesh badge, and live gateway latency monitor.
- **Platform Telemetry Cards**:
  - Active autonomous agent pipelines
  - 24-hour token consumption throughput
  - Average reasoning latency (p99 tracking)
  - Execution success & error rates

### 2. Interactive Workflows Table
- **Status Filter Pills**: Filter pipelines in real-time by `All`, `Running`, `Completed`, or `Failed` with live count badges.
- **Live Search**: Instant live-filtering across workflow names, foundation models, agent copilot names, triggers, and workflow IDs.
- **Table Refresh**: Simulated live orchestrator sync with animated loading spinner, updated execution timestamps (`Just now`), and incremented run metrics.
- **CSV Data Export**: One-click download of the current filtered table view as a standard `.csv` file (`corebot-workflows-YYYY-MM-DD.csv`).
- **Telemetry Visualizations**: Model category color tags (Claude, OpenAI, DeepSeek, Gemini, Llama), animated status indicators, and confidence score progress bars.

### 3. "New Automation" Creation Modal
- **Dialog Modal**: Accessible dialog built with `@base-ui/react/dialog`.
- **Pipeline Setup Form**:
  - Workflow Name & Description
  - Agent Copilot / Role selection
  - Foundation Model selection (Claude 3.7 Sonnet, GPT-4o, DeepSeek R1, Gemini 2.5 Flash, Llama 3.3)
  - Trigger Event configuration (Webhook, Schedule, GitHub Event, Prometheus Alert, S3 Audio Upload)
  - Initial pipeline status (Running, Completed, Paused)
- **Live Integration**: Submitting the form prepends the new workflow to the active table and immediately updates all filter counts.

### 4. Theme Toggle (Light & Dark Mode)
- One-click toggle in the dashboard header switching between dark and light modes.
- Dynamic sun/moon icon transitions with tooltips.
- Hotkey shortcut: Press <kbd>D</kbd> anywhere on the page (outside input fields) to toggle themes.

### 5. Quick Search & Hotkeys
- Header search bar synced with table search state.
- Global keyboard shortcut: Press <kbd>⌘K</kbd> (or <kbd>Ctrl+K</kbd>) from anywhere to instantly focus the search input.

### 6. Sidebar Navigation & Multi-Page Routing
Full Next.js App Router integration with dynamic active route highlights via `usePathname()`:
- **Overview**: [`/`](http://localhost:3000/) — Main AI Automation Platform dashboard
- **Inbox**: [`/inbox`](http://localhost:3000/inbox) — Agent communication queue and webhook alerts
- **Deployments**: [`/deployments`](http://localhost:3000/deployments) — Multi-agent mesh deployment pipelines
- **Analytics**: [`/analytics`](http://localhost:3000/analytics) — Token expenditure, cost analysis, and model benchmarks
- **Logs**: [`/logs`](http://localhost:3000/logs) — Structured execution audit trails and reasoning logs
- **Storage**: [`/storage`](http://localhost:3000/storage) — Vector memory namespaces and persistent embedding caches
- **Project Workspaces**: Dynamic routing under `/projects/[slug]`
  - [`/projects/checkout`](http://localhost:3000/projects/checkout)
  - [`/projects/design-system`](http://localhost:3000/projects/design-system)
  - [`/projects/marketing`](http://localhost:3000/projects/marketing)
  - [`/projects/edge-cache`](http://localhost:3000/projects/edge-cache)

---

## Getting Started

### Prerequisites

- **Node.js**: `v18.17` or higher (Node 20+ recommended)
- **npm**, **yarn**, or **pnpm**

### Installation

Clone the repository and install project dependencies:

```bash
git clone <repository-url>
cd Corebot
npm install
```

### Running the Development Server

Start the local development server with Turbo:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server on port 3000 |
| `npm run build` | Builds the optimized production application |
| `npm run start` | Runs the compiled production build |
| `npm run typecheck` | Validates TypeScript types across the project (`tsc --noEmit`) |
| `npm run format` | Formats all `.ts` and `.tsx` source files with Prettier |
| `npm run lint` | Runs ESLint to check for code quality issues |

---

## Project Structure

```text
Corebot/
├── app/                              # Next.js App Router routes
│   ├── analytics/page.tsx            # Analytics placeholder page
│   ├── deployments/page.tsx          # Deployments placeholder page
│   ├── inbox/page.tsx                # Inbox placeholder page
│   ├── logs/page.tsx                 # Logs placeholder page
│   ├── projects/[slug]/page.tsx      # Dynamic project workspaces
│   ├── storage/page.tsx              # Storage placeholder page
│   ├── globals.css                   # Tailwind CSS v4 & theme variables
│   ├── layout.tsx                    # Root layout with ThemeProvider
│   └── page.tsx                      # Dashboard root page
├── components/
│   ├── dashboard/                    # Platform dashboard components
│   │   ├── ai-stats-cards.tsx        # Telemetry metrics row
│   │   ├── ai-workflows-table.tsx    # Interactive pipeline table
│   │   ├── dashboard-header.tsx      # Header with search & theme toggle
│   │   ├── new-automation-dialog.tsx # Workflow creation modal form
│   │   └── placeholder-shell.tsx     # Reusable shell for routed pages
│   ├── examples/                     # Shell navigation components
│   │   └── c-sidebar-1.tsx           # Collapsible sidebar with App Router links
│   ├── ui/                           # Base UI component primitives
│   │   ├── button.tsx
│   │   ├── dialog.tsx
│   │   ├── input.tsx
│   │   ├── table.tsx
│   │   └── ...
│   └── theme-provider.tsx            # next-themes provider & hotkey listener
├── lib/
│   ├── utils.ts                      # Class name merger helper
│   └── workflow-context.tsx          # React context for table & modal state
├── public/                           # Static public assets
├── package.json                      # Dependencies and scripts
└── tsconfig.json                     # TypeScript configuration
```

---

## License

Private and proprietary.
