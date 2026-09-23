"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SparklesIcon, BotIcon } from "lucide-react"
import { useWorkflows, type WorkflowItem } from "@/lib/workflow-context"

const MODEL_OPTIONS: Array<{
  name: string
  category: WorkflowItem["modelCategory"]
}> = [
  { name: "Claude 3.7 Sonnet", category: "claude" },
  { name: "GPT-4o", category: "openai" },
  { name: "DeepSeek R1", category: "deepseek" },
  { name: "Gemini 2.5 Flash", category: "gemini" },
  { name: "Llama 3.3 70B", category: "llama" },
]

const TRIGGER_PRESETS = [
  "Webhook • Zendesk",
  "Schedule • Every 15m",
  "GitHub Event",
  "Salesforce Webhook",
  "Prometheus Alert",
  "S3 Audio Upload",
]

export function NewAutomationDialog() {
  const { isNewAutomationOpen, setIsNewAutomationOpen, addWorkflow } = useWorkflows()

  const [name, setName] = React.useState("")
  const [agent, setAgent] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [selectedModelIndex, setSelectedModelIndex] = React.useState(0)
  const [trigger, setTrigger] = React.useState(TRIGGER_PRESETS[0])
  const [status, setStatus] = React.useState<WorkflowItem["status"]>("running")
  const [error, setError] = React.useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) {
      setError("Workflow name is required")
      return
    }
    if (!agent.trim()) {
      setError("Agent role / copilot name is required")
      return
    }

    const chosenModel = MODEL_OPTIONS[selectedModelIndex]

    addWorkflow({
      name: name.trim(),
      description: description.trim() || "Autonomous workflow pipeline with multi-agent orchestration",
      agent: agent.trim(),
      model: chosenModel.name,
      modelCategory: chosenModel.category,
      status,
      trigger: trigger.trim() || "Webhook",
      tokens: `${Math.floor(1000 + Math.random() * 9000).toLocaleString()}`,
      latency: `${Math.floor(200 + Math.random() * 800)}ms`,
      confidence: Number((95 + Math.random() * 4.9).toFixed(1)),
    })

    // Reset and close
    setName("")
    setAgent("")
    setDescription("")
    setError("")
    setIsNewAutomationOpen(false)
  }

  return (
    <Dialog open={isNewAutomationOpen} onOpenChange={setIsNewAutomationOpen}>
      <DialogContent className="sm:max-w-[520px]">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-violet-500/10 text-violet-500">
              <BotIcon className="size-4" />
            </div>
            <div>
              <DialogTitle>Create AI Automation</DialogTitle>
              <DialogDescription className="mt-1">
                Configure a new autonomous pipeline, assign an agent copilot, and select a foundation model.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-2">
          {error && (
            <div className="rounded-md bg-destructive/10 px-3 py-2 text-xs font-medium text-destructive">
              {error}
            </div>
          )}

          <div className="space-y-1.5">
            <label htmlFor="wf-name" className="text-xs font-medium text-foreground">
              Workflow Name <span className="text-destructive">*</span>
            </label>
            <Input
              id="wf-name"
              placeholder="e.g. Autonomous Customer Ticket Triage"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                if (error) setError("")
              }}
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label htmlFor="wf-agent" className="text-xs font-medium text-foreground">
                Agent Copilot <span className="text-destructive">*</span>
              </label>
              <Input
                id="wf-agent"
                placeholder="e.g. SupportCopilot v4"
                value={agent}
                onChange={(e) => {
                  setAgent(e.target.value)
                  if (error) setError("")
                }}
                required
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="wf-status" className="text-xs font-medium text-foreground">
                Initial Status
              </label>
              <select
                id="wf-status"
                value={status}
                onChange={(e) => setStatus(e.target.value as WorkflowItem["status"])}
                className="h-9 w-full rounded-md border border-input bg-background px-2.5 py-1 text-xs text-foreground shadow-xs outline-none focus:border-ring focus:ring-1 focus:ring-ring"
              >
                <option value="running">Running (Active)</option>
                <option value="completed">Completed</option>
                <option value="paused">Paused</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="wf-model" className="text-xs font-medium text-foreground">
              Foundation Model
            </label>
            <select
              id="wf-model"
              value={selectedModelIndex}
              onChange={(e) => setSelectedModelIndex(Number(e.target.value))}
              className="h-9 w-full rounded-md border border-input bg-background px-2.5 py-1 text-xs text-foreground shadow-xs outline-none focus:border-ring focus:ring-1 focus:ring-ring"
            >
              {MODEL_OPTIONS.map((opt, i) => (
                <option key={opt.name} value={i}>
                  {opt.name} ({opt.category.toUpperCase()})
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="wf-trigger" className="text-xs font-medium text-foreground">
              Trigger Event
            </label>
            <select
              id="wf-trigger"
              value={trigger}
              onChange={(e) => setTrigger(e.target.value)}
              className="h-9 w-full rounded-md border border-input bg-background px-2.5 py-1 text-xs text-foreground shadow-xs outline-none focus:border-ring focus:ring-1 focus:ring-ring"
            >
              {TRIGGER_PRESETS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="wf-desc" className="text-xs font-medium text-foreground">
              Description <span className="text-muted-foreground font-normal">(optional)</span>
            </label>
            <Input
              id="wf-desc"
              placeholder="Brief summary of pipeline tasks..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <DialogFooter className="pt-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setIsNewAutomationOpen(false)}
              className="cursor-pointer text-xs"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              size="sm"
              className="cursor-pointer gap-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white shadow-xs font-medium text-xs px-4"
            >
              <SparklesIcon className="size-3.5" />
              <span>Create Automation</span>
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
