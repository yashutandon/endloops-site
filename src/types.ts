export type PageId = 'home' | 'solutions' | 'tools' | 'demo' | 'about' | 'contact'

export interface SolutionItem {
  id: string
  name: string
  tagline: string
  description: string
  audience: string
  status: 'In Production' | 'GCC Pilot'
  timeSaved: string
  keyFeatures: string[]
  inputs: string[]
  outputs: string[]
  compliance: string
}

export interface ToolItem {
  id: string
  name: string
  category: 'Ingestion' | 'Verification' | 'Reconciliation' | 'Review'
  tagline: string
  description: string
  status: 'Live & In Use' | 'Pilot Release'
  typicalVolume: string
  rulesEnforced: string[]
  inputFormats: string[]
  outputFormats: string[]
  highlightStat: string
}

export interface WorkflowStep {
  step: number
  title: string
  action: string
  description: string
  auditorRole: string
  sampleOutput: string
  tag: string
  icon: string
}

export interface PersonaItem {
  title: string
  subtitle: string
  challenges: string[]
  endloopsSolution: string
  metrics: string
  accentColor: string
}

export interface FaqItem {
  question: string
  answer: string
  category: 'General' | 'Compliance & Security' | 'Integration'
}

export interface TestimonialItem {
  quote: string
  author: string
  title: string
  firm: string
  location: string
  focus: string
}

export interface SimulationCase {
  id: string
  title: string
  supplier: string
  poNumber: string
  invoiceNumber: string
  invoiceDate: string
  poTotalAED: number
  invoiceTotalAED: number
  ledgerTotalAED: number
  vatAmountAED: number
  status: 'Matched' | 'Exception Flagged' | 'Duplicate Alert'
  reason: string
  ruleBroken?: string
  confidenceScore: number
  humanActionRequired: string
}

