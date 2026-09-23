"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import {
  BellIcon,
  SearchIcon,
  PlusIcon,
  SparklesIcon,
  MoonIcon,
  SunIcon,
  ActivityIcon,
} from "lucide-react"

import { useOptionalWorkflows } from "@/lib/workflow-context"

export interface DashboardHeaderProps {
  workspaceName?: string
  currentPage?: string
  onNewAutomation?: () => void
}

export function DashboardHeader({
  workspaceName = "Corebot AI",
  currentPage = "AI Platform",
  onNewAutomation,
}: DashboardHeaderProps) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const workflowsContext = useOptionalWorkflows()
  const searchInputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // ⌘K hotkey listener to focus search box
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        searchInputRef.current?.focus()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const handleToggleTheme = () => {
    const current = resolvedTheme || theme
    setTheme(current === "dark" ? "light" : "dark")
  }

  const handleNewAutomation = () => {
    if (onNewAutomation) {
      onNewAutomation()
    } else if (workflowsContext) {
      workflowsContext.setIsNewAutomationOpen(true)
    }
  }

  return (
    <header className="sticky top-0 z-20 flex h-14 shrink-0 items-center justify-between border-b border-border bg-background/95 px-4 backdrop-blur-md transition-colors sm:px-6">
      <div className="flex items-center gap-3 min-w-0">
        <SidebarTrigger className="-ml-1 cursor-pointer text-muted-foreground hover:text-foreground" />
        
        <div className="h-4 w-px bg-border/80 hidden sm:block" aria-hidden="true" />

        <Breadcrumb className="min-w-0">
          <BreadcrumbList className="flex-nowrap text-xs sm:text-sm">
            <BreadcrumbItem className="min-w-0">
              <BreadcrumbLink href="/" className="truncate font-medium text-muted-foreground hover:text-foreground">
                {workspaceName}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="opacity-60" />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-semibold text-foreground flex items-center gap-1.5 truncate">
                {currentPage}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="hidden lg:flex items-center ml-2">
          <Badge
            variant="success"
            size="xs"
            radius="full"
            className="gap-1.5 px-2 py-0.5 shadow-2xs font-mono font-medium"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            All 6 Models Operational
          </Badge>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        {/* Quick Search trigger */}
        <div className="relative hidden md:flex items-center">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2.5 text-muted-foreground">
            <SearchIcon className="size-3.5" aria-hidden="true" />
          </div>
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search agents, workflows, models..."
            value={workflowsContext?.searchQuery ?? ""}
            onChange={(e) => workflowsContext?.setSearchQuery(e.target.value)}
            className="h-8 w-60 rounded-md border border-input bg-muted/30 pl-8 pr-12 text-xs placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none transition-all focus:w-72"
          />
          <kbd className="pointer-events-none absolute right-2 top-1.5 hidden h-5 select-none items-center gap-0.5 rounded border border-border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground sm:inline-flex">
            ⌘K
          </kbd>
        </div>

        {/* Theme toggle */}
        <Button
          variant="ghost"
          size="sm"
          className="size-8 p-0 cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
          onClick={handleToggleTheme}
          aria-label="Toggle theme"
          title={mounted && resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {mounted && resolvedTheme === "dark" ? (
            <SunIcon className="size-4 transition-transform duration-200 rotate-0 scale-100" />
          ) : (
            <MoonIcon className="size-4 transition-transform duration-200 rotate-0 scale-100" />
          )}
        </Button>

        {/* Notifications */}
        <Button
          variant="ghost"
          size="sm"
          className="relative size-8 p-0 cursor-pointer text-muted-foreground hover:text-foreground"
          aria-label="Notifications"
        >
          <BellIcon className="size-4" />
          <span className="absolute top-1 right-1 flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-cyan-500" />
          </span>
        </Button>

        {/* Primary CTA */}
        <Button
          size="sm"
          onClick={handleNewAutomation}
          className="cursor-pointer gap-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white shadow-xs font-medium text-xs px-3"
        >
          <SparklesIcon className="size-3.5" aria-hidden="true" />
          <span className="hidden sm:inline">New Automation</span>
          <span className="sm:hidden">New</span>
        </Button>
      </div>
    </header>
  )
}
