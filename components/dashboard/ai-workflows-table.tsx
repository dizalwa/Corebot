"use client"

import * as React from "react"
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import {
  SearchIcon,
  RotateCwIcon,
  PlayIcon,
  MoreHorizontalIcon,
  CheckCircle2Icon,
  AlertTriangleIcon,
  SparklesIcon,
  DownloadIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
} from "lucide-react"

import { useOptionalWorkflows, INITIAL_WORKFLOWS, type WorkflowItem } from "@/lib/workflow-context"

export type { WorkflowItem }

export function AIWorkflowsTable() {
  const context = useOptionalWorkflows()

  // Fallback local state if rendered without WorkflowProvider
  const [localWorkflows, setLocalWorkflows] = React.useState<WorkflowItem[]>(INITIAL_WORKFLOWS)
  const [localSearchQuery, setLocalSearchQuery] = React.useState("")
  const [localStatusFilter, setLocalStatusFilter] = React.useState<"all" | "running" | "completed" | "failed">("all")
  const [localIsRefreshing, setLocalIsRefreshing] = React.useState(false)

  const workflows = context ? context.workflows : localWorkflows
  const searchQuery = context ? context.searchQuery : localSearchQuery
  const setSearchQuery = context ? context.setSearchQuery : setLocalSearchQuery
  const statusFilter = context ? context.statusFilter : localStatusFilter
  const setStatusFilter = context ? context.setStatusFilter : setLocalStatusFilter
  const isRefreshing = context ? context.isRefreshing : localIsRefreshing
  const counts = context
    ? context.counts
    : {
        all: localWorkflows.length,
        running: localWorkflows.filter((w) => w.status === "running").length,
        completed: localWorkflows.filter((w) => w.status === "completed").length,
        failed: localWorkflows.filter((w) => w.status === "failed").length,
      }

  const handleRefresh = () => {
    if (context) {
      context.refreshWorkflows()
    } else {
      setLocalIsRefreshing(true)
      setTimeout(() => setLocalIsRefreshing(false), 600)
    }
  }

  const handleExport = () => {
    if (context) {
      context.exportCsv()
    } else {
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
      link.setAttribute("href", url)
      link.setAttribute("download", `corebot-workflows-${new Date().toISOString().slice(0, 10)}.csv`)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    }
  }

  const filteredWorkflows = React.useMemo(() => {
    if (context) {
      return context.filteredWorkflows
    }
    const q = searchQuery.toLowerCase().trim()
    return workflows.filter((item) => {
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.agent.toLowerCase().includes(q) ||
        item.model.toLowerCase().includes(q) ||
        item.id.toLowerCase().includes(q)

      const matchesStatus = statusFilter === "all" || item.status === statusFilter

      return matchesSearch && matchesStatus
    })
  }, [context, workflows, searchQuery, statusFilter])

  const getModelBadgeVariant = (category: WorkflowItem["modelCategory"]) => {
    switch (category) {
      case "claude":
        return "purple"
      case "openai":
        return "info"
      case "deepseek":
        return "secondary"
      case "gemini":
        return "info"
      case "llama":
        return "warning"
      default:
        return "outline"
    }
  }

  return (
    <Card className="border border-border/80 bg-card/70 shadow-xs backdrop-blur-xs transition-all duration-200">
      <CardHeader className="gap-3 border-b border-border/70 pb-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <CardTitle className="text-base sm:text-lg font-semibold tracking-tight text-foreground">
                Active AI Workflows & Executions
              </CardTitle>
              <Badge
                variant="purple"
                size="xs"
                radius="full"
                className="hidden sm:inline-flex gap-1 font-mono text-[10px]"
              >
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-violet-500" />
                </span>
                Live Orchestrator
              </Badge>
            </div>
            <CardDescription className="text-xs sm:text-sm text-muted-foreground mt-0.5">
              Real-time multi-agent execution pipeline, token metrics, and autonomous tasks.
            </CardDescription>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={handleRefresh}
              className="cursor-pointer text-xs h-8 px-2.5 gap-1.5 text-muted-foreground hover:text-foreground"
              aria-label="Refresh workflow data"
            >
              <RotateCwIcon
                className={`size-3.5 ${isRefreshing ? "animate-spin text-primary" : ""}`}
              />
              <span className="hidden sm:inline">Refresh</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleExport}
              className="cursor-pointer text-xs h-8 px-2.5 gap-1.5 text-muted-foreground hover:text-foreground"
              aria-label="Export workflows to CSV"
              title="Download table as CSV"
            >
              <DownloadIcon className="size-3.5" />
              <span className="hidden sm:inline">Export</span>
            </Button>
          </div>
        </div>

        {/* Filter bar: Tabs + Search input */}
        <div className="flex flex-col gap-2.5 pt-1 sm:flex-row sm:items-center sm:justify-between">
          {/* Status Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 text-xs">
            <button
              onClick={() => setStatusFilter("all")}
              className={`cursor-pointer rounded-md px-2.5 py-1 font-medium transition-colors ${
                statusFilter === "all"
                  ? "bg-primary text-primary-foreground shadow-2xs"
                  : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
              }`}
            >
              All ({counts.all})
            </button>
            <button
              onClick={() => setStatusFilter("running")}
              className={`cursor-pointer rounded-md px-2.5 py-1 font-medium transition-colors flex items-center gap-1.5 ${
                statusFilter === "running"
                  ? "bg-violet-600 text-white shadow-2xs dark:bg-violet-500"
                  : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
              }`}
            >
              <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Running ({counts.running})
            </button>
            <button
              onClick={() => setStatusFilter("completed")}
              className={`cursor-pointer rounded-md px-2.5 py-1 font-medium transition-colors ${
                statusFilter === "completed"
                  ? "bg-emerald-600 text-white shadow-2xs dark:bg-emerald-500"
                  : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
              }`}
            >
              Completed ({counts.completed})
            </button>
            <button
              onClick={() => setStatusFilter("failed")}
              className={`cursor-pointer rounded-md px-2.5 py-1 font-medium transition-colors ${
                statusFilter === "failed"
                  ? "bg-destructive text-white shadow-2xs"
                  : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
              }`}
            >
              Failed ({counts.failed})
            </button>
          </div>

          {/* Search box */}
          <div className="relative w-full sm:w-64">
            <SearchIcon className="pointer-events-none absolute left-2.5 top-2.5 size-3.5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Filter workflows or models..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-8 w-full rounded-md border border-input bg-muted/20 pl-8 pr-3 text-xs placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none transition-all"
            />
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <div className="relative w-full overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-border/70 hover:bg-transparent">
                <TableHead className="w-[280px] pl-4 sm:pl-6 text-xs font-semibold text-muted-foreground">
                  Workflow & Pipeline
                </TableHead>
                <TableHead className="text-xs font-semibold text-muted-foreground">
                  AI Model
                </TableHead>
                <TableHead className="text-xs font-semibold text-muted-foreground">
                  Status
                </TableHead>
                <TableHead className="hidden md:table-cell text-xs font-semibold text-muted-foreground">
                  Trigger Event
                </TableHead>
                <TableHead className="text-xs font-semibold text-muted-foreground">
                  Tokens & Latency
                </TableHead>
                <TableHead className="hidden lg:table-cell text-xs font-semibold text-muted-foreground">
                  Confidence
                </TableHead>
                <TableHead className="hidden sm:table-cell text-xs font-semibold text-muted-foreground">
                  Last Run
                </TableHead>
                <TableHead className="pr-4 sm:pr-6 text-right text-xs font-semibold text-muted-foreground">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredWorkflows.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="h-32 text-center">
                    <div className="flex flex-col items-center justify-center gap-1.5 text-muted-foreground">
                      <SparklesIcon className="size-5 opacity-40" />
                      <p className="text-sm font-medium">No workflows found</p>
                      <p className="text-xs text-muted-foreground/80">
                        Try adjusting your search query or status filter.
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setSearchQuery("")
                          setStatusFilter("all")
                        }}
                        className="mt-2 h-7 text-xs text-primary cursor-pointer hover:underline"
                      >
                        Reset filters
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                filteredWorkflows.map((item) => (
                  <TableRow
                    key={item.id}
                    className="group transition-colors duration-150 hover:bg-muted/40 cursor-pointer"
                  >
                    {/* Workflow Name and ID */}
                    <TableCell className="pl-4 sm:pl-6 py-3">
                      <div className="flex flex-col gap-0.5">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-foreground text-xs sm:text-sm group-hover:text-primary transition-colors">
                            {item.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                          <span className="font-mono text-muted-foreground/80">
                            {item.id}
                          </span>
                          <span>•</span>
                          <span className="truncate max-w-[180px] sm:max-w-[240px]">
                            {item.agent}
                          </span>
                        </div>
                      </div>
                    </TableCell>

                    {/* AI Model */}
                    <TableCell className="py-3">
                      <Badge
                        variant={getModelBadgeVariant(item.modelCategory)}
                        size="xs"
                        radius="full"
                        className="font-mono text-[10px] font-medium"
                      >
                        {item.model}
                      </Badge>
                    </TableCell>

                    {/* Status */}
                    <TableCell className="py-3">
                      {item.status === "running" && (
                        <Badge
                          variant="success"
                          size="xs"
                          radius="full"
                          className="gap-1 px-2 py-0.5 font-medium"
                        >
                          <span className="size-1.5 rounded-full bg-emerald-500 animate-ping" />
                          Running
                        </Badge>
                      )}
                      {item.status === "completed" && (
                        <Badge
                          variant="outline"
                          size="xs"
                          radius="full"
                          className="gap-1 px-2 py-0.5 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 bg-emerald-500/5 font-medium"
                        >
                          <CheckCircle2Icon className="size-2.5 text-emerald-500" />
                          Success
                        </Badge>
                      )}
                      {item.status === "failed" && (
                        <Badge
                          variant="destructive"
                          size="xs"
                          radius="full"
                          className="gap-1 px-2 py-0.5 font-medium"
                        >
                          <AlertTriangleIcon className="size-2.5" />
                          Failed
                        </Badge>
                      )}
                      {item.status === "paused" && (
                        <Badge
                          variant="secondary"
                          size="xs"
                          radius="full"
                          className="gap-1 px-2 py-0.5 font-medium"
                        >
                          <ClockIcon className="size-2.5" />
                          Paused
                        </Badge>
                      )}
                    </TableCell>

                    {/* Trigger Event */}
                    <TableCell className="hidden md:table-cell py-3 text-xs text-muted-foreground">
                      <span className="truncate block max-w-[160px] font-mono text-[11px]">
                        {item.trigger}
                      </span>
                    </TableCell>

                    {/* Tokens & Latency */}
                    <TableCell className="py-3">
                      <div className="flex flex-col text-xs font-mono">
                        <span className="text-foreground text-[11px] font-medium">
                          {item.tokens} tokens
                        </span>
                        <span className="text-muted-foreground text-[10px]">
                          {item.latency}
                        </span>
                      </div>
                    </TableCell>

                    {/* Confidence */}
                    <TableCell className="hidden lg:table-cell py-3">
                      {item.confidence > 0 ? (
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-12 overflow-hidden rounded-full bg-muted">
                            <div
                              className="h-full bg-violet-600 dark:bg-violet-400 rounded-full"
                              style={{ width: `${item.confidence}%` }}
                            />
                          </div>
                          <span className="font-mono text-[11px] text-muted-foreground">
                            {item.confidence}%
                          </span>
                        </div>
                      ) : (
                        <span className="font-mono text-[11px] text-muted-foreground/60">
                          —
                        </span>
                      )}
                    </TableCell>

                    {/* Last Run */}
                    <TableCell className="hidden sm:table-cell py-3 text-xs text-muted-foreground whitespace-nowrap">
                      {item.lastRun}
                    </TableCell>

                    {/* Actions */}
                    <TableCell className="pr-4 sm:pr-6 py-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="size-7 p-0 cursor-pointer text-muted-foreground hover:text-foreground"
                          aria-label={`Trigger ${item.name}`}
                        >
                          <PlayIcon className="size-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="size-7 p-0 cursor-pointer text-muted-foreground hover:text-foreground"
                          aria-label={`Options for ${item.name}`}
                        >
                          <MoreHorizontalIcon className="size-3.5" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-2 border-t border-border/70 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-xs text-muted-foreground">
          Showing <span className="font-medium text-foreground">{filteredWorkflows.length}</span> of{" "}
          <span className="font-medium text-foreground">{workflows.length}</span> active pipelines
        </p>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            disabled
            className="h-7 cursor-not-allowed px-2 text-xs text-muted-foreground"
          >
            <ChevronLeftIcon className="size-3.5" />
            <span className="hidden sm:inline">Previous</span>
          </Button>
          <div className="flex items-center gap-1 text-xs font-mono">
            <span className="flex size-6 items-center justify-center rounded bg-primary text-primary-foreground font-medium text-[11px]">
              1
            </span>
            <span className="flex size-6 items-center justify-center rounded text-muted-foreground hover:bg-muted text-[11px] cursor-pointer">
              2
            </span>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="h-7 cursor-pointer px-2 text-xs text-muted-foreground hover:text-foreground"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRightIcon className="size-3.5" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
