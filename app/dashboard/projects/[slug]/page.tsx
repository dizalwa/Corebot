import { PlaceholderShell } from "@/components/dashboard/placeholder-shell"
import { FolderIcon } from "lucide-react"

const PROJECT_TITLES: Record<string, string> = {
  checkout: "Checkout API",
  "design-system": "Design system",
  marketing: "Marketing site",
  "edge-cache": "Edge cache",
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const projectName = PROJECT_TITLES[slug] || slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())

  return (
    <PlaceholderShell
      title={projectName}
      subtitle={`Autonomous pipelines and agent services for the ${projectName} project.`}
      badgeText="Project Repo"
      icon={<FolderIcon className="size-6 text-violet-500" />}
      description={`Workflows, environment variables, and agent mesh configuration scoped to ${projectName}.`}
    />
  )
}
