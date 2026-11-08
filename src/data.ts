import { SolutionItem, ToolItem, WorkflowStep, PersonaItem, FaqItem, SimulationCase, TestimonialItem } from './types'

export const solutionsData: SolutionItem[] = [
  {
    id: 'budget-review',
    name: 'Budget Review Automation',
    tagline: 'Precision variance analysis and threshold audits across multi-department operating plans.',
    description: 'Compares approved financial budgets against actual general ledger expenditures and contract commitments. Automatically calculates multi-level variances, maps line items to cost centres, and flags overruns against pre-agreed management thresholds-producing a structured review paper ready for partner evaluation.',
    audience: 'Finance Directors, Controllers, Internal Audit Teams',
    status: 'In Production',
    timeSaved: '78% reduction in variance reporting cycle',
    keyFeatures: [
      'Multi-currency and multi-department ledger integration',
      'Automated threshold classification (material vs minor variance)',
      'Automated management commentary request schedules',
      'Historical trend comparison across prior fiscal periods'
    ],
    inputs: ['Approved annual budgets (Excel/ERP)', 'General Ledger monthly trial balances', 'Purchase commitments'],
    outputs: ['Consolidated Variance Lead Sheet', 'Exception Schedule with drilldown links', 'Executive Summary Deck'],
    compliance: 'Aligned with IFRS guidelines and corporate governance limits'
  },
  {
    id: 'escrow-audit',
    name: 'Escrow Audit & RERA Compliance',
    tagline: 'End-to-end verification of trust accounts, developer disbursements, and project progress certificates.',
    description: 'Specifically engineered for the regulatory requirements of Dubai and GCC real estate trust accounts. Traces every dirham from off-plan purchaser receipts through bank escrow statements, checks engineer completion certificates, enforces retention account ratios, and verifies contractor payment authorizations.',
    audience: 'Statutory Auditors, Real Estate Developers, Escrow Trustees',
    status: 'In Production',
    timeSaved: '85% faster escrow audit sign-off',
    keyFeatures: [
      'Direct tie-out between RERA project certificates and contractor payouts',
      'Automated 5% retention account balance verification',
      'Duplicate unit payment detection across escrow bank accounts',
      'Audit-ready electronic working paper compilation for RERA submission'
    ],
    inputs: ['Escrow bank statements (MT940/CSV/PDF)', 'Land Department payment receipts', 'Project Consultant inspection certificates'],
    outputs: ['Official Escrow Audit Schedule', 'Retention Fund Reconciliation Sheet', 'Disbursement Exception Log'],
    compliance: 'Engineered strictly for Dubai Law No. (8) of 2007 and RERA Escrow Regulations'
  },
  {
    id: 'financial-audit',
    name: 'Complete Financial Audit Suite',
    tagline: 'From trial balance and electronic document intake to fully referenced audit working papers.',
    description: 'Runs substantive procedures and analytical reviews across entire client ledgers. Automatically samples transactions based on audit materiality parameters, pulls supporting vouchers, verifies arithmetic footings, and compiles standardized lead sheets with cross-referenced audit trails.',
    audience: 'Audit & Assurance Firms, Statutory Audit Partners',
    status: 'In Production',
    timeSaved: '65% cut in junior auditor grunt work',
    keyFeatures: [
      'Automated audit sampling (monetary unit sampling & stratified)',
      'Cross-ledger footing and prior-year comparative tie-outs',
      'Lead schedule generator linked directly to transaction evidence',
      'Standardized audit assertion tagging (Completeness, Existence, Accuracy)'
    ],
    inputs: ['Client Trial Balance', 'General Ledger transaction register', 'Bank and supplier confirmation statements'],
    outputs: ['Standard Lead Schedules', 'Substantive Testing Working Papers', 'Partner Review Notes'],
    compliance: 'International Standards on Auditing (ISA) compatible'
  },
  {
    id: 'interim-audit',
    name: 'Interim Audit & Continuous Review',
    tagline: 'Continuous substantive testing and risk discovery across quarterly reporting cycles.',
    description: 'Eliminates the chaotic year-end audit crunch by executing continuous periodic tests on interim accounts. Automatically tests rolling transaction batches, monitors revenue recognition cutoff, and isolates anomalies as they arise during Q1, Q2, and Q3.',
    audience: 'External Audit Teams, Enterprise Financial Controllers',
    status: 'GCC Pilot',
    timeSaved: 'Prevents 120+ hours of year-end rush per client',
    keyFeatures: [
      'Automated cutoff testing for sales invoices around period ends',
      'Rolling bank reconciliation and unrecorded liability probes',
      'Automated alert dispatch when high-value unusual journal entries occur',
      'Seamless rollover of verified interim working papers into year-end files'
    ],
    inputs: ['Quarterly trial balances', 'Monthly bank statements', 'Subledger transaction dumps'],
    outputs: ['Interim Audit Observation Memo', 'Rolling Analytical Review Sheets', 'Quarterly Variance Matrix'],
    compliance: 'IAS 34 (Interim Financial Reporting) aligned'
  },
  {
    id: 'budget-preparation',
    name: 'Property Management Budget Preparation',
    tagline: 'Automated service charge calculations, reserve fund allocations, and Mollak-ready budgets.',
    description: 'Designed for property management and Owners Association (OA) companies. Calculates shared utility costs, facility management contract allocations, capital reserve provisions, and tenant unit apportionment schedules-generating approved budgets ready for regulatory upload.',
    audience: 'Property Management Companies, Strata Managers, Owners Association Boards',
    status: 'In Production',
    timeSaved: '90% reduction in annual service charge modeling time',
    keyFeatures: [
      'Multi-asset and multi-tower service charge modeling',
      'RERA Mollak system compatible budget format generation',
      'Historical inflation and utility tariff adjustment modeling',
      'Automated reserve fund statutory percentage calculation'
    ],
    inputs: ['Prior year actual operating expenses', 'Master community FM contracts', 'Building unit entitlement schedules'],
    outputs: ['Service Charge Budget Model', 'Tenant Unit Allocation Statements', 'Board Review Presentation'],
    compliance: 'Compliant with Dubai Law No. (6) of 2019 regulating Jointly Owned Property'
  }
]

export const toolsData: ToolItem[] = [
  {
    id: 'po-extraction',
    name: 'Purchase-Order Extraction',
    category: 'Ingestion',
    tagline: 'High-fidelity document intelligence for scanned, emailed, and complex PDF orders.',
    description: 'Extracts header details, vendor information, multi-line item codes, quantities, unit prices, tax amounts, and delivery terms from scanned or digital purchase orders. Cleans messy text and validates arithmetic totals against line-item sums.',
    status: 'Live & In Use',
    typicalVolume: '2,500+ documents/month per customer',
    rulesEnforced: ['Quantity × Rate = Line Subtotal', 'Line Sums = Header Total', 'Valid Vendor TRN / Tax registration check'],
    inputFormats: ['Scanned PDF', 'Digital PDF', 'TIFF / High-res JPEG', 'Email attachments'],
    outputFormats: ['Standard JSON API', 'Clean Excel / CSV', 'Direct ERP Bridge (SAP, NetSuite, Tally)'],
    highlightStat: '99.4% extraction accuracy across multi-lingual English/Arabic headers'
  },
  {
    id: 'vouching-automation',
    name: 'Vouching & 3-Way Matching Engine',
    category: 'Verification',
    tagline: 'Deterministic matching between purchase orders, delivery notes, and supplier invoices.',
    description: 'Matches transactions in your ledger to their corresponding supporting documents in seconds. Verifies line-by-line price variances, quantities received versus billed, and tax classifications, instantly highlighting discrepancies for human decision.',
    status: 'Live & In Use',
    typicalVolume: '10,000+ line items processed per batch',
    rulesEnforced: ['3-way quantity match', 'Unit price tolerance within 0.00%', 'No duplicate invoice numbering per vendor', 'Valid proof of delivery'],
    inputFormats: ['Supplier Invoices', 'Purchase Orders', 'Goods Received Notes (GRN)', 'ERP Ledger Entries'],
    outputFormats: ['Audit-grade Vouching Schedule', 'Exception Log with Visual Snippets', 'Approved Payment Batch'],
    highlightStat: 'Reduces voucher verification from 6 hours to 4 minutes'
  },
  {
    id: 'expense-working',
    name: 'Expense Working Automation',
    category: 'Ingestion',
    tagline: 'Automates preparation of prepayment schedules, expense splits, and accrual workings.',
    description: 'Takes unstructured expense receipts, employee claims, and recurring vendor bills, categorizes them against your chart of accounts, segregates 5% UAE VAT, and prepares clean, referenced schedules without a single retyped line.',
    status: 'Live & In Use',
    typicalVolume: '800+ expense entries per review',
    rulesEnforced: ['UAE 5% VAT mathematical test', 'Prepayment schedule monthly amortization check', 'Duplicate expense submission filter'],
    inputFormats: ['Receipt photos', 'Credit card statements', 'Vendor bill scans', 'Excel expense sheets'],
    outputFormats: ['Prepayments & Accruals Working Paper', 'VAT Input Recovery Summary', 'Journal Entry CSV'],
    highlightStat: 'Zero rekeying errors across thousands of monthly line items'
  },
  {
    id: 'financial-report-review',
    name: 'Financial Report Review & Footing',
    category: 'Review',
    tagline: 'Mathematical integrity verification, note referencing, and cross-statement consistency checks.',
    description: 'Reviews draft financial statements before they reach clients, audit committees, or banks. Checks that balance sheet figures tie back to trial balances, cash flow statements balance mathematically, notes cross-reference correctly, and prior-year comparatives are unchanged.',
    status: 'Live & In Use',
    typicalVolume: 'Dozens of multi-page IFRS statements daily',
    rulesEnforced: ['Cross-statement footings', 'Note references point to active disclosure tables', 'Prior period comparatives match signed prior financials', 'Rounding parity across tables'],
    inputFormats: ['Draft Financial Statements (Word/PDF)', 'Signed Prior Year Financials', 'Approved Trial Balance'],
    outputFormats: ['Markup Exception Report', 'Footing Verification Certificate', 'Missing Disclosure Checklist'],
    highlightStat: '100% detection of arithmetic and referencing discrepancies'
  },
  {
    id: 'tender-verification',
    name: 'Tender Verification & Bid Analysis',
    category: 'Verification',
    tagline: 'Side-by-side vendor quotation comparisons and bill of quantities price parity.',
    description: 'Normalizes multiple contractor tenders against a standard Bill of Quantities (BOQ). Flags outlying unit rates, unquoted items, arithmetic slips in subcontractor math, and unauthorized departures from the tender scope.',
    status: 'Pilot Release',
    typicalVolume: 'Complex BOQs with 5,000+ line items',
    rulesEnforced: ['Mandatory item inclusion check', 'Statistical rate variance (>15% variance from median)', 'Subcontractor arithmetic verification'],
    inputFormats: ['Contractor BOQ bids (Excel/PDF)', 'Tender baseline specification', 'Commercial requirements schedule'],
    outputFormats: ['Comparative Tender Matrix', 'Rate Anomaly Heatmap', 'Evaluation Committee Brief'],
    highlightStat: 'Saves 3-5 working days per multi-contractor tender evaluation'
  },
  {
    id: 'reconciliation',
    name: 'Multi-Way Reconciliation Engine',
    category: 'Reconciliation',
    tagline: 'High-speed matching of bank accounts, payment gateways, and intercompany ledgers.',
    description: 'Handles high-volume transaction matching across complex multi-currency bank accounts, payment gateway feeds, POS registers, and intercompany accounts. Automatically matches 95%+ of items with high confidence and isolates aged un-reconciled items for manual review.',
    status: 'Live & In Use',
    typicalVolume: '50,000+ transactions per reconciliation cycle',
    rulesEnforced: ['Exact date/amount match', 'Fuzzy reference/memo pattern matching', '1-to-many and many-to-1 transaction bundling', 'Aged unreconciled item classification'],
    inputFormats: ['Bank MT940 / CAMT / CSV statements', 'Payment gateway logs (Stripe, Network International, etc.)', 'Subledger customer/vendor balances'],
    outputFormats: ['Standard Bank Reconciliation Statement', 'Intercompany Netting Schedule', 'Unreconciled Outstanding Items Register'],
    highlightStat: 'Resolves 95% of transactions on first pass, leaving only true anomalies'
  }
]

export const workflowSteps: WorkflowStep[] = [
  {
    step: 1,
    title: 'Read',
    action: 'Intelligent Ingestion',
    description: 'Pulls figures and structured details out of invoices, purchase orders, contracts, bank statements, and engineer certificates-regardless of layout or format.',
    auditorRole: 'Software reads; no manual transcription or keying required.',
    sampleOutput: 'INV-2041 extracted: Supplier Gulf Supplies LLC, TRN 100293847200003, Subtotal AED 11,885.71, VAT 5% AED 594.29, Total AED 12,480.00.',
    tag: 'Document Ingestion',
    icon: 'IconFileText'
  },
  {
    step: 2,
    title: 'Match',
    action: 'Multi-Way Cross Referencing',
    description: 'Compares extracted document parameters directly against general ledgers, purchase orders, goods receipts, or competitor tender bids.',
    auditorRole: 'Software connects the records; ties every document to ledger line.',
    sampleOutput: '3-way match executed: PO #PO-8829 matched to INV-2041 and Goods Receipt Note #GRN-4412. Ledger balance tied.',
    tag: 'Data Verification',
    icon: 'IconLayers'
  },
  {
    step: 3,
    title: 'Check',
    action: 'Deterministic Rule Engine',
    description: 'Applies rigid financial and audit rules: flags missing attachments, arithmetic variances, VAT discrepancies, duplicates, and limit violations.',
    auditorRole: 'Software evaluates 40+ checks per item; zeros in on exceptions.',
    sampleOutput: 'Rule "Ledger vs Invoice Total" flagged: Ledger recorded AED 12,408.00 while Invoice is AED 12,480.00 (AED 72.00 variance).',
    tag: 'Rule Evaluation',
    icon: 'IconAlertTriangle'
  },
  {
    step: 4,
    title: 'Draft',
    action: 'Audit Paper Compilation',
    description: 'Compiles clean schedules, lead sheets, working papers, and discrepancy logs ready for professional review. Handles hundreds of documents simultaneously.',
    auditorRole: 'Software drafts the entire working paper package with links to evidence.',
    sampleOutput: 'Working paper generated: 248 documents processed. 246 clean passes, 2 items isolated for professional sign-off.',
    tag: 'Working Paper Ready',
    icon: 'IconCheckCircle'
  },
  {
    step: 5,
    title: 'Decide',
    action: 'Human Review & Sign-Off',
    description: 'The finance professional examines the flagged exceptions, reads the system findings, applies professional skepticism, and makes the final determination.',
    auditorRole: 'The human signs off. Final judgement, advice, and partner sign-off always stay with people.',
    sampleOutput: 'Reviewer approves valid debit note, requests corrected invoice for AED 72 variance, and signs audit lead sheet.',
    tag: 'Human in the Loop',
    icon: 'IconShield'
  }
]

export const simulationCases: SimulationCase[] = [
  {
    id: 'case-1',
    title: 'Clean 3-Way Match',
    supplier: 'Gulf Contracting Supplies LLC',
    poNumber: 'PO-2024-8841',
    invoiceNumber: 'INV-2041',
    invoiceDate: '14 Oct 2024',
    poTotalAED: 12480.00,
    invoiceTotalAED: 12480.00,
    ledgerTotalAED: 12480.00,
    vatAmountAED: 594.29,
    status: 'Matched',
    reason: 'All amounts, quantities, and TRN tax details match PO #8841 and Delivery Note #4401 exactly.',
    confidenceScore: 99.8,
    humanActionRequired: 'Instant one-click sign-off into standard audit schedule.'
  },
  {
    id: 'case-2',
    title: 'Price Mismatch Exception',
    supplier: 'Emirates Steel & Fabricators Ltd',
    poNumber: 'PO-2024-9104',
    invoiceNumber: 'ES-77492',
    invoiceDate: '18 Oct 2024',
    poTotalAED: 45200.00,
    invoiceTotalAED: 45272.00,
    ledgerTotalAED: 45200.00,
    vatAmountAED: 2155.81,
    status: 'Exception Flagged',
    reason: 'Total does not tie: Invoice AED 45,272.00 exceeds Purchase Order and Ledger by AED 72.00. Extra unapproved freight charge identified on Line 4.',
    ruleBroken: 'Rule #R-104: Invoice total must not exceed authorized PO without approved variation order.',
    confidenceScore: 99.4,
    humanActionRequired: 'Auditor must decide whether to seek client debit note or request vendor reissue.'
  },
  {
    id: 'case-3',
    title: 'Potential Duplicate Invoice',
    supplier: 'Al Barsha Logistics FZ-LLC',
    poNumber: 'PO-2024-7832',
    invoiceNumber: 'ABL-1092-B',
    invoiceDate: '21 Oct 2024',
    poTotalAED: 8950.00,
    invoiceTotalAED: 8950.00,
    ledgerTotalAED: 8950.00,
    vatAmountAED: 426.19,
    status: 'Duplicate Alert',
    reason: 'Duplicate payment risk: An invoice with identical vendor, amount, and reference was processed 14 days ago under voucher #V-4019.',
    ruleBroken: 'Rule #R-202: Duplicate invoice check across 90-day rolling transaction window.',
    confidenceScore: 98.7,
    humanActionRequired: 'Immediate stop-payment advisory until voucher #V-4019 proof is cleared.'
  },
  {
    id: 'case-4',
    title: 'VAT Calculation Rounding Error',
    supplier: 'Marina Facility Services PJSC',
    poNumber: 'PO-2024-9350',
    invoiceNumber: 'MFS-88120',
    invoiceDate: '24 Oct 2024',
    poTotalAED: 33450.00,
    invoiceTotalAED: 33464.50,
    ledgerTotalAED: 33450.00,
    vatAmountAED: 1607.50,
    status: 'Exception Flagged',
    reason: 'UAE Federal Tax Authority (FTA) 5% VAT rate check failed. Computed VAT is AED 1,593.00, but invoice billed AED 1,607.50 (+AED 14.50 variance).',
    ruleBroken: 'Rule #R-305: Standard rate UAE VAT must be exactly 5.000% of taxable supply.',
    confidenceScore: 99.6,
    humanActionRequired: 'Adjust VAT input reclaim schedule prior to monthly FTA filing.'
  }
]

export const personasData: PersonaItem[] = [
  {
    title: 'Audit & Assurance Firms',
    subtitle: 'From Big 4 alumni firms to leading regional audit practices across the GCC.',
    challenges: [
      'Hundreds of hours burned on manual vouching and casting checks',
      'Junior staff turnover caused by tedious data extraction',
      'Year-end time crunch and audit fee margin compression'
    ],
    endloopsSolution: 'Endloops acts as the ultimate digital audit senior: it consumes boxes of client records, cross-matches ledgers, isolates all exceptions, and prepares audit-ready working papers.',
    metrics: '65% faster substantive testing cycle',
    accentColor: 'border-brand text-brand'
  },
  {
    title: 'Corporate Finance & Accounting Teams',
    subtitle: 'Mid-to-large enterprises managing multi-entity accounts across Dubai and the region.',
    challenges: [
      'Invoices buried across emails, WhatsApp, and paper folders',
      'Manual 3-way matching delaying monthly ledger close',
      'Risk of duplicate vendor payments and unrecovered input VAT'
    ],
    endloopsSolution: 'Automates end-to-end invoice ingestion, PO reconciliation, and prepayment schedules directly into your ERP-with human controllers retaining sign-off approval.',
    metrics: 'Closing cycle reduced from 8 days to 2 days',
    accentColor: 'border-teal text-teal'
  },
  {
    title: 'Property Management Companies',
    subtitle: 'Asset managers, strata specialists, and Owners Association management firms.',
    challenges: [
      'Strict regulatory scrutiny from RERA and Mollak requirements',
      'Manual escrow retention account tracking and contractor sign-offs',
      'Complex multi-asset service charge budget preparation'
    ],
    endloopsSolution: 'Purpose-built RERA escrow audit tracing and automated service charge budget modeling that matches Mollak specifications out of the box.',
    metrics: '100% RERA escrow compliance trace rate',
    accentColor: 'border-royal text-royal'
  }
]

export const faqsData: FaqItem[] = [
  {
    category: 'General',
    question: 'What is the core difference between Endloops and generic AI assistants?',
    answer: 'Generic AI tools guess the next word; Endloops is deterministic financial software built specifically by practicing auditors and accountants in Dubai. Financial numbers cannot tolerate hallucinations or vague summaries. Endloops applies exact mathematical rules, strict 3-way ledger matching, and verified document extraction. Crucially, our software prepares the work, while the professional always reviews and decides.'
  },
  {
    category: 'General',
    question: 'How do End-to-End Solutions differ from Standalone Tools?',
    answer: 'End-to-End Solutions manage an entire operational process or engagement from intake to final sign-off (such as our RERA Escrow Audit or Financial Audit Suite). Standalone Tools are modular, focused utilities (like Purchase-Order Extraction or Vouching Automation) that solve one specific bottleneck and can be adopted independently without altering your overall workflow.'
  },
  {
    category: 'Compliance & Security',
    question: 'Where is financial client data processed and stored?',
    answer: 'We treat financial data with the highest standard of institutional security. Endloops supports UAE and GCC in-country data residency, encrypts all data in transit (TLS 1.3) and at rest (AES-256), enforces strict role-based access controls, and guarantees that client financial figures are never used to train public language models.'
  },
  {
    category: 'Compliance & Security',
    question: 'Does Endloops comply with UAE VAT, Corporate Tax, and RERA standards?',
    answer: 'Yes. Having emerged from an accounting and audit practice in Dubai, our rule engines are calibrated specifically for UAE regulations, including Federal Tax Authority (FTA) 5% VAT rules, UAE Corporate Tax record-keeping parameters, and Dubai Land Department / RERA escrow account audit guidelines.'
  },
  {
    category: 'Integration',
    question: 'What accounting and ERP systems can Endloops work with?',
    answer: 'Endloops is designed to be system-agnostic. We work with leading enterprise systems including SAP, Oracle NetSuite, Microsoft Dynamics, Tally Prime, Zoho Books, QuickBooks, and Xero. You can upload standard PDF/Excel/CSV exports, or connect via our secure REST APIs and database connectors.'
  },
  {
    category: 'Integration',
    question: 'How long does it take to implement Endloops for our firm?',
    answer: 'Standalone tools (such as PO Extraction or Vouching) can be deployed and operational in under 48 hours with standard onboarding. Full End-to-End solutions (like the complete Audit Suite or Escrow Engine) typically take 1 to 2 weeks for custom rule tailoring and team onboarding.'
  }
]

export const testimonialsData: TestimonialItem[] = [
  {
    quote: 'For an audit firm, trust is non-negotiable. What sets Endloops apart is that it doesn’t attempt to replace our audit judgment. It does the heavy lifting of pulling 300+ vouchers, matching them against the ledger, and highlighting the two items that actually matter.',
    author: 'Tariq Al-Hashemi',
    title: 'Managing Audit Partner',
    firm: 'Al-Hashemi & Associates Audit',
    location: 'DIFC, Dubai',
    focus: 'Financial & Interim Audit'
  },
  {
    quote: 'Our annual RERA escrow audits used to take four weeks of manual bank statement tracing and retention account checking. With Endloops Escrow Audit, we completed the working papers in three days with zero reconciliation gaps.',
    author: 'Lina Mansoor',
    title: 'Head of Portfolio Finance',
    firm: 'Crescent Real Estate Management',
    location: 'Business Bay, Dubai',
    focus: 'Escrow Audit & Budget Prep'
  },
  {
    quote: 'We process over 4,000 subcontractor invoices and purchase orders a month. Endloops catches duplicate claims and rounding differences that even seasoned accountants overlook when tired. It pays for itself every month.',
    author: 'Kareem Sengupta',
    title: 'Group Financial Controller',
    firm: 'Apex Infrastructure Group',
    location: 'Abu Dhabi, UAE',
    focus: 'Vouching & PO Extraction'
  }
]

// Backwards-compatibility exports for legacy components
export type Item = { name: string; blurb: string }
export const endToEnd: Item[] = solutionsData.map((s) => ({ name: s.name, blurb: s.description }))
export const tools: Item[] = toolsData.map((t) => ({ name: t.name, blurb: t.description }))
export const steps = workflowSteps.map((w) => ({
  title: w.title,
  text: w.description,
  demo: w.sampleOutput,
}))
