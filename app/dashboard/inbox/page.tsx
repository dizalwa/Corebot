import { PlaceholderShell } from "@/components/dashboard/placeholder-shell"
import { InboxIcon } from "lucide-react"

export default function InboxPage() {
  return (
    <PlaceholderShell
      title="Inbox"
      subtitle="Autonomous communication queue, agent alerts, and triage notifications."
      badgeText="12 Unread"
      icon={<InboxIcon className="size-6 text-violet-500" />}
      description="Agent communications, webhook events, and ticket dispatches appear here in real-time."
    />
  )
}
