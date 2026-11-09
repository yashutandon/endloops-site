# Endloops — Automation for Financial & Audit Professionals

> **"The software prepares the work. The professional reviews and decides."**

A modern, institutional-grade web application built for **Endloops**, a financial automation technology company born inside the technology department of **Alkazim**, an accounting and audit firm in Dubai, UAE.

---

##  Executive Summary

Financial professionals—statutory auditors, corporate financial controllers, and property asset managers across the UAE and GCC—spend thousands of hours on repetitive, error-prone manual tasks: extracting line items from scanned purchase orders, 3-way matching invoices against delivery notes and general ledgers, auditing escrow trust accounts for RERA compliance, and recalculating tax footings.

Unlike generic generative AI tools that hallucinate or guess numbers, **Endloops** applies strict, deterministic, 100% auditable mathematical rules and automated working paper compilation—ensuring that **every final sign-off, risk assessment, and professional judgement remains strictly in human hands**.

---

##  Key UI/UX Innovations & Signature Features

### 1. 120 FPS ProMotion Dynamic Floating Island Navbar
* **Liquid Morphing Geometry**: Starts at `max-w-8xl` (1440px) at the top of the hero and smoothly contracts into an elevated, centered floating island pill at `max-w-7xl` (1280px) on scroll.
* **Apple Spring Curve**: Unified `1050ms` deceleration easing (`cubic-bezier(0.25, 1, 0.35, 1)`) across `max-width`, `transform`, `border-radius`, `box-shadow`, and `background-color` for true 120Hz ProMotion smoothness without visual stutter.
* **Zero Layout Reflow**: All navigation flex items locked with `shrink-0`; rendering layer isolated via `contain: layout paint` and promoted to DirectX/GPU compositing with `translate3d(0, 0, 0)`.
* **Institutional Elements**: Live Dubai (GST: UTC+4) digital clock, UAE sovereign compliance badge, and numbered index labels (`01 Solutions`, `02 Tools`, `03 Live Demo`, `04 About Us`, `05 Contact`).

### 2. Interactive 3D Reflective Flip Card
* **3D Spatial Depth**: Realistic perspective container (`perspective-1200`) with ground mirror floor reflections (`.reflection-floor`) and periodic dynamic sheen sweeps.
* **Human-Friendly Tactile Guidance**: Includes an animated cursor invitation bob (`"Move cursor over card · reveals core doctrine"`), corner peel dog-ear, and tactile flip button—no developer jargon like "hover".
* **Front Face**: Live audit vouching batch simulation with sample exceptions (price mismatches, duplicate invoices, clean 3-way ties).
* **Reverse Face**: The founding Endloops mission doctrine and partner authority quote rendered on a frosted luxury dark glass card.

### 3. High-Precision Recessed Gauge Progress Bar
* **Engineered Recessed Bezel**: Realistic hardware-style inset track (`bg-slate-100/90 p-[2px] border border-slate-200/70 shadow-inner`) delivering physical depth.
* **100% Pure Emerald Gradient**: Rich emerald palette (`from-emerald-400 via-emerald-500 to-emerald-600`) with soft ambient halo glow (`shadow-[0_0_10px_rgba(16,185,129,0.4)]`).
* **Real-time Glass Shimmer Sweep**: Continuous animated light beam sweep (`animate-progress-shimmer`) simulating an active live scanning engine.
* **Precise 99.2% Calibration**: Exactly calibrated to the `99.2% Clean Match` metric with a leading-edge luminous pip (`#ffffff`) and a pulsing live beacon dot.

### 4. Master-Detail Vertical 5-Step Architecture
* **The 5-Step Loop**: Organizes the core workflow (**Read → Match → Check → Draft → Decide**) into a cohesive vertical timeline.
* **Vertical Progress Animation**: Active step cards feature an animated emerald progress bar filling down the card's edge during the 4.5s auto-playback loop.
* **Side-by-Side Deep-Dive Panel**: Displays real-time step details, role distinctions (Software vs. Professional), and a dark simulated interactive terminal (`Endloops Output Stream` with live deterministic rule trace logs).
* **Integrated Loop Controls**: One-click Play/Pause toggle, Step X of 5 navigation arrows, and automatic pause on mouse hover or manual step selection.

### 5. Snug Auto-Fit Badges & Centered Flagship Banners
* **Line-by-Line Auto-Fit**: Badge backgrounds use `[box-decoration-break:clone]` so multi-line text never leaves awkward empty rectangular voids.
* **Flagship CTA & Vision Banners**: Global Call-to-Action and About Page "Where We Are Heading" sections feature centered typography, ambient aurora lighting meshes (`bg-brand/20` and `bg-royal/20`), trust checkpoints, and centered direct action buttons.

---

##  Multi-Page Application Overview

| Route | Page | Description |
| :--- | :--- | :--- |
| `#/` | **Home** | Hero section with 3D flip card, 120 FPS floating navbar, 5-step vertical workflow loop, dual offerings overview, interactive ROI calculator, testimonials, and global CTA banner. |
| `#/solutions` | **Solutions** | Detailed breakdown of all **5 End-to-End Enterprise Suites** (Budget Review, Escrow Audit & RERA, Financial Audit Suite, Interim Audit, Property Management Budgeting) + Traditional vs. AI vs. Endloops comparison matrix. |
| `#/tools` | **Tools** | Interactive catalog of **6 Modular Standalone Tools** with category filters (Ingestion, Verification, Reconciliation, Review), real-time search, rule breakdowns, and I/O specifications. |
| `#/demo` | **Live Demo / Sandbox** | Interactive 3-way reconciliation simulator with 4 scenario cases (Clean Match, Price Mismatch, Potential Duplicate, VAT Error), OCR laser scanline, and manual auditor verdict sign-off. |
| `#/about` | **About Us** | The founding journey from inside Alkazim Accounting & Audit, core philosophy, GCC sovereign data compliance, and the centered "Where We Are Heading" vision banner. |
| `#/contact` | **Contact & Demo Center** | Interactive consultation scheduler, Dubai HQ office card (DIFC/Business Bay), one-click WhatsApp routing, and searchable FAQ accordion. |

---

##  Design System & Visual Hierarchy

* **Primary Palette**:
  * **Brand Emerald**: `#059669` (Dark: `#047857`, Light: `#10b981`)
  * **Leaf Accent**: `#34d399`
  * **Authoritative Navy**: `#090e24` (Deep: `#050816`, Light: `#162044`)
  * **Royal Interactive**: `#3b82f6` (Dark: `#2563eb`)
  * **Mist Background**: `#fafbfc` / `#f8fafc`
* **Typography**:
  * **Headlines & Display**: *Plus Jakarta Sans*
  * **Body & Financial Content**: *Inter*
  * **Code & Tabular Numbers**: *JetBrains Mono*
* **Motion & Polish**:
  * Custom Apple ProMotion spring curves (`cubic-bezier(0.25, 1, 0.35, 1)`)
  * GPU layer acceleration (`translate3d(0, 0, 0)`, `contain: layout paint`)
  * Frosted glass backdrop filters (`backdrop-blur-xl`)
  * Full accessibility support (`prefers-reduced-motion`)

---

##  Tech Stack

* **Core Framework**: React 18.3 + TypeScript 5.6
* **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
* **Bundler & Dev Server**: Vite 6.0
* **Iconography**: Custom zero-dependency SVG icon system (`src/components/Icons.tsx`)
* **State & Navigation**: URL hash routing with programmatic navigation and responsive modal controllers

---

##  Local Development & Build Commands

### Prerequisites
* Node.js 18.x or later
* npm 9.x or later

### Setup & Run

```bash
# Navigate to the project directory
cd endloops-site

# Install dependencies
npm install

# Start development server
npm run dev
```

### Verification & Production Build

```bash
# Strict TypeScript validation (0 errors expected)
npm run typecheck

# Build optimized production bundle to dist/
npm run build

# Preview production build locally
npm run preview
```

---

##  Sovereign Compliance & Security Doctrine

* **UAE Sovereign Data Residency**: All client data remains strictly within GCC cloud infrastructure with comprehensive audit trails.
* **Zero Public Model Training**: Client financials, vouchers, and working papers are never sent to third-party public LLMs or used for model training.
* **Deterministic Rules Engine**: Calculations are based on strict mathematical logic and tax laws (e.g. UAE FTA 5% VAT, RERA Escrow Law No. 8 of 2007) with 0% algorithmic hallucination.
* **Strict Human-in-the-Loop**: The software prepares, cross-references, and drafts; final review, sign-off, and liability always remain with licensed professionals.
