"use client"

import * as React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BotIcon,
  ZapIcon,
  CircleCheckIcon,
  CpuIcon,
  TrendingUpIcon,
  ArrowUpRightIcon,
  ClockIcon,
} from "lucide-react"

export interface StatItem {
  id: string
  title: string
  value: string
  change: string
  trend: "up" | "down" | "neutral"
  timeframe: string
  icon: React.ComponentType<{ className?: string }>
  iconColor: string
  iconBg: string
  footerInfo: string
  progress?: number
}

const STATS_DATA: StatItem[] = [
  {
    id: "active-agents",
    title: "Active AI Agents",
    value: "24 / 28",
    change: "+4 this week",
    trend: "up",
    timeframe: "vs last week",
    icon: BotIcon,
    iconColor: "text-violet-600 dark:text-violet-400",
    iconBg: "bg-violet-500/10 border-violet-500/20",
    footerInfo: "4 idle in standby pool",
    progress: 86,
  },
  {
    id: "total-executions",
    title: "Workflow Runs (24h)",
    value: "142,850",
    change: "+18.4%",
    trend: "up",
    timeframe: "vs yesterday",
    icon: ZapIcon,
    iconColor: "text-cyan-600 dark:text-cyan-400",
    iconBg: "bg-cyan-500/10 border-cyan-500/20",
    footerInfo: "Peak: 98.2 runs / sec",
    progress: 74,
  },
  {
    id: "success-rate",
    title: "Success & Reliability",
    value: "99.42%",
    change: "+0.18%",
    trend: "up",
    timeframe: "zero downtime",
    icon: CircleCheckIcon,
    iconColor: "text-emerald-600 dark:text-emerald-400",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    footerInfo: "12 auto-recovered errors",
    progress: 99,
  },
  {
    id: "compute-tokens",
    title: "Token Usage & Cost",
    value: "4.82M",
    change: "340ms avg",
    trend: "neutral",
    timeframe: "p95: 520ms",
    icon: CpuIcon,
    iconColor: "text-indigo-600 dark:text-indigo-400",
    iconBg: "bg-indigo-500/10 border-indigo-500/20",
    footerInfo: "$142.30 est. spend today",
    progress: 62,
  },
]

export function AIStatsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {STATS_DATA.map((stat) => {
        const IconComponent = stat.icon
        return (
          <Card
            key={stat.id}
            size="sm"
            className="relative overflow-hidden border border-border/80 bg-card/60 shadow-xs hover:shadow-md hover:border-border transition-all duration-200 group"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground">
                  {stat.title}
                </span>
                <div
                  className={`flex size-8 items-center justify-center rounded-lg border ${stat.iconBg} ${stat.iconColor} transition-transform duration-200 group-hover:scale-105`}
                >
                  <IconComponent className="size-4" />
                </div>
              </div>

              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold tracking-tight text-foreground font-sans">
                    {stat.value}
                  </span>
                  <Badge
                    variant={stat.trend === "up" ? "success" : "info"}
                    size="xs"
                    radius="full"
                    className="font-mono text-[10px] gap-0.5"
                  >
                    {stat.trend === "up" && (
                      <TrendingUpIcon className="size-2.5" />
                    )}
                    {stat.change}
                  </Badge>
                </div>
              </div>

              {/* Progress track */}
              {stat.progress ? (
                <div className="space-y-1.5 pt-1">
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        stat.id === "active-agents"
                          ? "bg-violet-600 dark:bg-violet-500"
                          : stat.id === "total-executions"
                          ? "bg-cyan-600 dark:bg-cyan-500"
                          : stat.id === "success-rate"
                          ? "bg-emerald-600 dark:bg-emerald-500"
                          : "bg-indigo-600 dark:bg-indigo-500"
                      }`}
                      style={{ width: `${stat.progress}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                    <span className="truncate">{stat.footerInfo}</span>
                    <span className="font-mono shrink-0 text-[10px]">
                      {stat.progress}%
                    </span>
                  </div>
                </div>
              ) : null}
            </div>
          </Card>
        )
      })}
    </div>
  )
}
