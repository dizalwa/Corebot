"use client"

import * as React from "react"
import Link from "next/link"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { CSidebar1 } from "@/components/examples/c-sidebar-1"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { WorkflowProvider } from "@/lib/workflow-context"
import { NewAutomationDialog } from "@/components/dashboard/new-automation-dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeftIcon, SparklesIcon } from "lucide-react"

interface PlaceholderShellProps {
  title: string
  subtitle: string
  badgeText?: string
  icon: React.ReactNode
  description: string
  children?: React.ReactNode
}

export function PlaceholderShell({
  title,
  subtitle,
  badgeText = "Module Active",
  icon,
  description,
  children,
}: PlaceholderShellProps) {
  return (
    <WorkflowProvider>
      <SidebarProvider className="relative h-dvh min-h-0 w-full overflow-hidden bg-background">
        <CSidebar1 />

        <SidebarInset className="min-w-0 flex flex-col h-full overflow-hidden bg-background">
          <DashboardHeader workspaceName="Corebot AI" currentPage={title} />

          <div className="flex-1 overflow-y-auto">
            <div className="mx-auto w-full max-w-[1400px] p-4 sm:p-6 lg:p-8 space-y-6">
              {/* Overview Section Banner */}
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
                        Corebot Orchestrator
                      </Badge>
                      <Badge
                        variant="outline"
                        size="xs"
                        radius="full"
                        className="font-mono text-[10px] text-muted-foreground"
                      >
                        {badgeText}
                      </Badge>
                    </div>
                    <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground font-heading">
                      {title}
                    </h1>
                    <p className="text-xs sm:text-sm text-muted-foreground max-w-xl">
                      {subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Button
                      variant="outline"
                      size="sm"
                      render={<Link href="/" />}
                      className="cursor-pointer gap-1.5 text-xs h-8 text-muted-foreground hover:text-foreground"
                    >
                      <ArrowLeftIcon className="size-3.5" />
                      <span>Back to Overview</span>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Placeholder Card / Content */}
              {children || (
                <div className="flex min-h-[380px] flex-col items-center justify-center rounded-xl border border-dashed border-border/80 bg-card/40 p-8 text-center backdrop-blur-xs">
                  <div className="flex size-14 items-center justify-center rounded-2xl border border-border bg-muted/50 text-foreground shadow-xs">
                    {icon}
                  </div>
                  <h2 className="mt-4 text-base font-semibold text-foreground font-heading">
                    {title} Workspace
                  </h2>
                  <p className="mt-1.5 max-w-md text-xs sm:text-sm text-muted-foreground">
                    {description}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                    <Badge variant="outline" size="sm" className="font-mono text-xs">
                      Endpoint: Status 200 OK
                    </Badge>
                    <Badge variant="success" size="sm" className="font-mono text-xs">
                      Mesh Connected
                    </Badge>
                  </div>
                </div>
              )}
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
      <NewAutomationDialog />
    </WorkflowProvider>
  )
}
