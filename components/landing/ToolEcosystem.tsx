import * as React from "react"

const TOOLS = [
  { name: "WhatsApp Business", category: "Messaging" },
  { name: "Google Sheets", category: "Spreadsheets" },
  { name: "Gmail & Workspace", category: "Email" },
  { name: "Airtable", category: "Database" },
  { name: "Notion", category: "Docs & Ops" },
  { name: "Slack", category: "Team Alerts" },
  { name: "Customer Records", category: "Customer Records" },
  { name: "AI Assistants", category: "Smart Assistance" },
  { name: "Business Tools", category: "Automated Processes" },
  { name: "Meta Lead Ads", category: "Inbound Leads" },
]

export default function ToolEcosystem() {
  return (
    <section className="border-b border-border/80 bg-background py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          Built For The Business Tools You Already Use
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {TOOLS.map((tool, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 rounded-lg border border-border/80 bg-card px-3.5 py-1.5 shadow-2xs transition-colors hover:border-slate-300"
            >
              <span className="size-1.5 rounded-full bg-primary" />
              <span className="text-xs font-semibold text-foreground">{tool.name}</span>
              <span className="text-[10px] font-mono text-muted-foreground hidden sm:inline">
                ({tool.category})
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
