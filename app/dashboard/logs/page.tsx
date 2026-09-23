import { PlaceholderShell } from "@/components/dashboard/placeholder-shell"
import { FileTextIcon } from "lucide-react"

export default function LogsPage() {
  return (
    <PlaceholderShell
      title="Logs"
      subtitle="Structured execution audit trails, agent thought processes, and error stack traces."
      badgeText="3 Warnings"
      icon={<FileTextIcon className="size-6 text-amber-500" />}
      description="Inspect real-time agent execution traces, vector embedding lookups, and webhook payload dumps."
    />
  )
}
