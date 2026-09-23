import { PlaceholderShell } from "@/components/dashboard/placeholder-shell"
import { RocketIcon } from "lucide-react"

export default function DeploymentsPage() {
  return (
    <PlaceholderShell
      title="Deployments"
      subtitle="Multi-agent mesh deployment pipelines, canary rollouts, and gateway routing."
      badgeText="Active Mesh"
      icon={<RocketIcon className="size-6 text-cyan-500" />}
      description="View production pipeline rollouts, traffic splitting, and automated model orchestration releases."
    />
  )
}
