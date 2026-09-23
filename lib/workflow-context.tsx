"use client"

import * as React from "react"

export interface WorkflowItem {
  id: string
  name: string
  description: string
  agent: string
  model: string
  modelCategory: "claude" | "openai" | "deepseek" | "gemini" | "llama"
  status: "running" | "completed" | "failed" | "paused"
  trigger: string
  tokens: string
  latency: string
  confidence: number
  lastRun: string
  runs24h: number
}

export const INITIAL_WORKFLOWS: WorkflowItem[] = [
  {
    id: "wf-8821",
    name: "Autonomous Triage & Auto-Reply",
    description: "Multi-turn customer support ticket classification and auto-draft",
    agent: "SupportCopilot v3",
    model: "Claude 3.7 Sonnet",
    modelCategory: "claude",
    status: "running",
    trigger: "Webhook • Zendesk",
    tokens: "2,450",
    latency: "640ms",
    confidence: 99.4,
    lastRun: "Just now",
    runs24h: 1420,
  },
  {
    id: "wf-7402",
    name: "Financial OCR & Ledger Reconciliation",
    description: "Extract line items from AP invoices and reconcile in ERP",
    agent: "DocExtractionBot",
    model: "GPT-4o",
    modelCategory: "openai",
    status: "completed",
    trigger: "Schedule • Every 15m",
    tokens: "8,920",
    latency: "1.8s",
    confidence: 98.7,
    lastRun: "3m ago",
    runs24h: 384,
  },
  {
    id: "wf-6319",
    name: "Multi-Repo Security & PR Audit",
    description: "Deep reasoning static analysis and dependency vulnerability check",
    agent: "AuditAgent-Deep",
    model: "DeepSeek R1",
    modelCategory: "deepseek",
    status: "running",
    trigger: "GitHub Event",
    tokens: "16.4k",
    latency: "3.2s",
    confidence: 96.2,
    lastRun: "7m ago",
    runs24h: 92,
  },
  {
    id: "wf-5120",
    name: "Semantic Lead Scoring & Enrichment",
    description: "Analyze buyer intent signals and enrich firmographics in CRM",
    agent: "RevOps Engine",
    model: "Gemini 2.5 Flash",
    modelCategory: "gemini",
    status: "completed",
    trigger: "Salesforce Webhook",
    tokens: "1,120",
    latency: "290ms",
    confidence: 99.8,
    lastRun: "14m ago",
    runs24h: 4820,
  },
  {
    id: "wf-4091",
    name: "Multilingual Audio Call Summary",
    description: "Transcribe customer calls and flag sentiment escalations",
    agent: "VoiceSummaryBot",
    model: "Whisper + Llama 3.3",
    modelCategory: "llama",
    status: "failed",
    trigger: "S3 Audio Upload",
    tokens: "4,180",
    latency: "Timeout (45s)",
    confidence: 0,
    lastRun: "31m ago",
    runs24h: 215,
  },
  {
    id: "wf-3810",
    name: "Kubernetes Log Anomaly Detective",
    description: "Vector embedding clustering for real-time error trace spikes",
    agent: "K8s-Sentry",
    model: "Claude 3.5 Haiku",
    modelCategory: "claude",
    status: "completed",
    trigger: "Prometheus Alert",
    tokens: "3,890",
    latency: "480ms",
    confidence: 97.9,
    lastRun: "45m ago",
    runs24h: 12410,
  },
]

interface WorkflowContextType {
  workflows: WorkflowItem[]
  filteredWorkflows: WorkflowItem[]
  searchQuery: string
  setSearchQuery: (query: string) => void
  statusFilter: "all" | "running" | "completed" | "failed"
  setStatusFilter: (filter: "all" | "running" | "completed" | "failed") => void
  isRefreshing: boolean
  refreshWorkflows: () => void
  isNewAutomationOpen: boolean
  setIsNewAutomationOpen: (open: boolean) => void
  addWorkflow: (workflow: Omit<WorkflowItem, "id" | "lastRun" | "runs24h">) => void
  exportCsv: () => void
  counts: {
    all: number
    running: number
    completed: number
    failed: number
  }
}

const WorkflowContext = React.createContext<WorkflowContextType | null>(null)

export function WorkflowProvider({ children }: { children: React.ReactNode }) {
  const [workflows, setWorkflows] = React.useState<WorkflowItem[]>(INITIAL_WORKFLOWS)
  const [searchQuery, setSearchQuery] = React.useState("")
  const [statusFilter, setStatusFilter] = React.useState<"all" | "running" | "completed" | "failed">("all")
  const [isRefreshing, setIsRefreshing] = React.useState(false)
  const [isNewAutomationOpen, setIsNewAutomationOpen] = React.useState(false)

  const counts = React.useMemo(() => {
    return {
      all: workflows.length,
      running: workflows.filter((w) => w.status === "running").length,
      completed: workflows.filter((w) => w.status === "completed").length,
      failed: workflows.filter((w) => w.status === "failed").length,
    }
  }, [workflows])

  const filteredWorkflows = React.useMemo(() => {
    const q = searchQuery.toLowerCase().trim()
    return workflows.filter((item) => {
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.agent.toLowerCase().includes(q) ||
        item.model.toLowerCase().includes(q) ||
        item.id.toLowerCase().includes(q) ||
        item.trigger.toLowerCase().includes(q)

      const matchesStatus = statusFilter === "all" || item.status === statusFilter

      return matchesSearch && matchesStatus
    })
  }, [workflows, searchQuery, statusFilter])

  const refreshWorkflows = React.useCallback(() => {
    setIsRefreshing(true)
    setTimeout(() => {
      setWorkflows((prev) =>
        prev.map((item, index) => {
          if (index === 0) {
            return {
              ...item,
              lastRun: "Just now",
              runs24h: item.runs24h + 1,
            }
          }
          return item
        })
      )
      setIsRefreshing(false)
    }, 600)
  }, [])

  const addWorkflow = React.useCallback(
    (workflowData: Omit<WorkflowItem, "id" | "lastRun" | "runs24h">) => {
      const randomId = `wf-${Math.floor(1000 + Math.random() * 9000)}`
      const newWorkflow: WorkflowItem = {
        ...workflowData,
        id: randomId,
        lastRun: "Just now",
        runs24h: 1,
      }
      setWorkflows((prev) => [newWorkflow, ...prev])
    },
    []
  )

  const exportCsv = React.useCallback(() => {
    const rows = filteredWorkflows.map((item) => [
      item.id,
      `"${item.name.replace(/"/g, '""')}"`,
      `"${item.agent.replace(/"/g, '""')}"`,
      `"${item.model.replace(/"/g, '""')}"`,
      item.status,
      `"${item.trigger.replace(/"/g, '""')}"`,
      `"${item.tokens}"`,
      `"${item.latency}"`,
      `${item.confidence}%`,
      `"${item.lastRun}"`,
      item.runs24h,
    ])

    const headers = [
      "Workflow ID",
      "Name",
      "Agent",
      "Model",
      "Status",
      "Trigger",
      "Tokens",
      "Latency",
      "Confidence",
      "Last Run",
      "24h Runs",
    ]

    const csvContent = [headers.join(","), ...rows.map((row) => row.join(","))].join("\r\n")

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    const dateStr = new Date().toISOString().slice(0, 10)
    link.setAttribute("href", url)
    link.setAttribute("download", `corebot-workflows-${dateStr}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }, [filteredWorkflows])

  return (
    <WorkflowContext.Provider
      value={{
        workflows,
        filteredWorkflows,
        searchQuery,
        setSearchQuery,
        statusFilter,
        setStatusFilter,
        isRefreshing,
        refreshWorkflows,
        isNewAutomationOpen,
        setIsNewAutomationOpen,
        addWorkflow,
        exportCsv,
        counts,
      }}
    >
      {children}
    </WorkflowContext.Provider>
  )
}

export function useWorkflows() {
  const context = React.useContext(WorkflowContext)
  if (!context) {
    throw new Error("useWorkflows must be used within a WorkflowProvider")
  }
  return context
}

export function useOptionalWorkflows() {
  return React.useContext(WorkflowContext)
}
