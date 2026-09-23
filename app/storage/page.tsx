import { PlaceholderShell } from "@/components/dashboard/placeholder-shell"
import { LayersIcon } from "lucide-react"

export default function StoragePage() {
  return (
    <PlaceholderShell
      title="Storage"
      subtitle="Vector index namespaces, persistent memory stores, and artifact cache."
      badgeText="4.2 TB Stored"
      icon={<LayersIcon className="size-6 text-indigo-500" />}
      description="Manage long-term agent memory databases, embeddings stores, and temporary session artifacts."
    />
  )
}
