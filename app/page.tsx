"use client"

import * as React from "react"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { CSidebar1 } from "@/components/examples/c-sidebar-1"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { AIStatsCards } from "@/components/dashboard/ai-stats-cards"
import { AIWorkflowsTable } from "@/components/dashboard/ai-workflows-table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { WorkflowProvider } from "@/lib/workflow-context"
import { NewAutomationDialog } from "@/components/dashboard/new-automation-dialog"
import {
  SparklesIcon,
  ZapIcon,
  ActivityIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PlusIcon,
} from "lucide-react"

export default function DashboardPage() {
  return (
    <WorkflowProvider>
      <SidebarProvider className="relative h-dvh min-h-0 w-full overflow-hidden bg-background">
        {/* Installed Left Sidebar Navigation */}
        <CSidebar1 />

        {/* Main Content Area */}
        <SidebarInset className="min-w-0 flex flex-col h-full overflow-hidden bg-background">
          {/* Sticky Top Header */}
          <DashboardHeader workspaceName="Corebot AI" currentPage="AI Platform" />

        {/* Scrollable Dashboard Body */}
        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto w-full max-w-[1400px] p-4 sm:p-6 lg:p-8 space-y-6">
            {/* Overview Banner */}
            <div className="relative overflow-hidden rounded-xl border border-border/80 bg-gradient-to-r from-violet-500/10 via-background to-cyan-500/10 p-5 sm:p-6 backdrop-blur-xs">
              <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="purple"
                      size="xs"
                      radius="full"
                      className="gap-1 font-mono text-[10px]"
                    >
                      <SparklesIcon className="size-3 text-violet-500" />
                      Corebot Orchestrator v2.4
                    </Badge>
                    <Badge
                      variant="outline"
                      size="xs"
                      radius="full"
                      className="hidden sm:inline-flex font-mono text-[10px] text-muted-foreground"
                    >
                      Multi-Agent Mesh
                    </Badge>
                  </div>
                  <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground font-heading">
                    AI Automation Platform
                  </h1>
                  <p className="text-xs sm:text-sm text-muted-foreground max-w-xl">
                    Deploy, monitor, and scale autonomous multi-agent pipelines with automated reasoning, error recovery, and low-latency token streaming.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  <div className="flex items-center gap-2 rounded-lg border border-border/80 bg-card/80 px-3 py-1.5 shadow-2xs">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">Gateway:</span>
                    <span className="text-xs font-semibold text-foreground font-mono">14.2 ms</span>
                  </div>

                  <Button
                    size="sm"
                    className="cursor-pointer gap-1.5 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white shadow-xs font-medium text-xs px-3"
                  >
                    <ZapIcon className="size-3.5" />
                    <span>Run Diagnostics</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Row of 4 Stat Cards */}
            <section aria-label="Platform Statistics">
              <AIStatsCards />
            </section>

            {/* AI Workflows & Executions Data Table */}
            <section aria-label="Active Automation Pipelines">
              <AIWorkflowsTable />
            </section>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
    <NewAutomationDialog />
  </WorkflowProvider>
  )
}
