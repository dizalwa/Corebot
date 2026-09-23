import { PlaceholderShell } from "@/components/dashboard/placeholder-shell"
import { BarChart3Icon } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <PlaceholderShell
      title="Analytics"
      subtitle="Token expenditure, reasoning cost per run, throughput, and error distribution."
      badgeText="Telemetry Live"
      icon={<BarChart3Icon className="size-6 text-emerald-500" />}
      description="Deep analytics on tokens consumed, p99 latency by model category, and success rates across pipelines."
    />
  )
}
