# Endloops - Automation for Financial Professionals

> **"The software prepares the work. The professional reviews and decides."**

A premium, institutional-grade web application and multi-page platform built for **Endloops**, an automation technology company born inside the technology department of **Alkazim**, an accounting and audit firm in Dubai, UAE.

---

## Executive Overview

Financial professionals-accountants, statutory auditors, enterprise financial controllers, and property asset managers-spend countless hours on repetitive, high-stakes tasks: extracting line items from scanned purchase orders, 3-way matching invoices against delivery notes and general ledgers, tracing escrow trust accounts, and recalculating tax footings.

Endloops eliminates the manual grunt work through deterministic, audit-grade automation. Unlike generic AI tools that guess or hallucinate numbers, Endloops applies strict mathematical rules, exact cross-record ties, and structured working paper generation-while ensuring that **every final sign-off always remains in human hands**.

---

## Key Features & Pages Built

### 1. Multi-Page Architecture
Seamless client-side routing with URL synchronization (`#/`, `#/solutions`, `#/tools`, `#/demo`, `#/about`, `#/contact`):
* **Home (`#/`)**: High-impact hero with live vouching preview card, Dubai local time indicator (GST), the 5-step Human-in-the-Loop interactive stepper (Read → Match → Check → Draft → Decide), dual product spectrum overview, client persona selector, interactive ROI calculator, industry testimonials, and global institutional CTA.
* **Solutions (`#/solutions`)**: Comprehensive deep dive into all **5 End-to-End Solutions**:
  1. *Budget Review Suite*
  2. *Escrow Audit & Dubai RERA Compliance (Law No. 8 of 2007)*
  3. *Complete Financial Audit Suite (ISA Compatible)*
  4. *Interim Audit & Continuous Review (IAS 34)*
  5. *Property Management Budget Preparation (Mollak & Strata Ready)*
  Includes an interactive comparison matrix comparing Traditional Manual Audit vs. Generic AI vs. Endloops.
* **Standalone Tools (`#/tools`)**: Interactive catalog of all **6 Modular Tools**:
  1. *Purchase-Order Extraction (Multi-lingual OCR)*
  2. *Vouching & 3-Way Matching Engine*
  3. *Expense Working Automation (UAE VAT 5%)*
  4. *Financial Report Review & Footing*
  5. *Tender Verification & Bid Analysis (BOQ)*
  6. *Multi-Way Reconciliation Engine*
  Includes category filters (Ingestion, Verification, Reconciliation, Review), real-time search, rule breakdowns, and input/output formats.
* **Interactive Tool Visualizer / Sandbox (`#/demo`)**:
  *A live visual that explains how one of our tools works*:
  * Switch between 4 realistic simulation cases:
    - *Case 1: Clean 3-Way Match (Gulf Contracting Supplies LLC)*
    - *Case 2: Price Mismatch Exception (Emirates Steel & Fabricators Ltd - AED 72 variance)*
    - *Case 3: Potential Duplicate Invoice Risk (Al Barsha Logistics FZ-LLC)*
    - *Case 4: VAT Calculation Error (Marina Facility Services PJSC - FTA 5% variance)*
  * Simulated raw source document viewer with animated OCR laser scanline and bounding box field extractions.
  * 3-way reconciliation grid (Purchase Order vs. Supplier Invoice vs. General Ledger).
  * 12-point deterministic rule evaluator.
  * **Interactive Auditor Decision & Sign-off**: Test clicking *"Sign off & Add to Lead Schedule"* or *"Flag for Auditor Query"* to experience how the software prepares the paper and the human issues the signed verdict.
* **About Us (`#/about`)**: The founding story emerging from Alkazim Accounting & Audit in Dubai, the human-in-the-loop philosophy, in-country UAE data processing & sovereignty, zero public model training, institutional security (AES-256 / TLS 1.3), and career invitation for engineering and design.
* **Contact & Demo Center (`#/contact`)**:
  * Comprehensive booking form with client-side field validation.
  * Dubai Headquarters card (DIFC / Business Bay, Dubai, UAE) with direct telephone, email, and one-click WhatsApp inquiry.
  * Categorized FAQ Accordion (General, Compliance & Security, Integration).
* **Global "Request a Demo" Modal**: Accessible from any page via the navigation header or action triggers.
* **Interactive ROI & Time Savings Calculator**: Dynamic sliders for monthly invoice volume, manual processing duration, and auditor hourly rate in AED, projecting annual dirham savings and turnaround acceleration.

---

## Brand & Design System

* **Brand Colors**:
  - Anchored by the official green (`#098261`), teal (`#0a7f8c`), and leaf (`#2fc79a`) of the Endloops logo.
  - Deep midnight navy (`#0f1b3d`) for high-contrast, authoritative typography and cards.
  - Royal blue (`#3563e9`) and luminous violet (`#6b46f0`) for interactive focus and human decision states.
  - Micro-textured light backgrounds (`#f3f8f8`, `#f8fafc`).
* **Logo**: The provided logo (`/logo.png`) is preserved in its original proportions, colors, and aspect ratio without stretching or recoloring.
* **Typography**:
  - Headline Display: *Bricolage Grotesque*
  - Body & Tabular Financial Figures: *Public Sans*
* **Accessibility & Craft**:
  - WCAG 2.1 AA compliant contrast.
  - Skip-to-content keyboard link for screen readers.
  - Visible focus rings (`focus-visible:ring-2 focus-visible:ring-brand`).
  - Strict support for `prefers-reduced-motion`.

---

## Tech Stack & Local Execution

* **Framework**: React 18.3 + TypeScript 5.6
* **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
* **Build Tool**: Vite 6.0
* **Icons**: Custom zero-dependency SVG icon system (`src/components/Icons.tsx`)

### Run Locally

```bash
cd endloops-site
npm install
npm run dev
```

### Production Build & Typecheck

```bash
cd endloops-site
npm run typecheck    # Strict TypeScript verification
npm run build        # Production bundle output to dist/
npm run preview      # Local preview of production build
```
