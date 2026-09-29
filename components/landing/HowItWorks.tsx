import * as React from "react"
import { Search, Hammer, KeyRound, ArrowRight } from "lucide-react"

const STAGES = [
  {
    step: "01",
    label: "DISCOVER",
    icon: Search,
    title: "Understand how the business currently works",
    description:
      "We begin with a focused conversation to map your team's exact daily tasks, existing software, and manual bottlenecks. We identify where automation provides the highest operational relief.",
  },
  {
    step: "02",
    label: "BUILD",
    icon: Hammer,
    title: "Turn the repetitive process into an automated workflow",
    description:
      "We design, build, and thoroughly test the automation using your actual tools and business scenarios. Everything is calibrated to handle edge cases, missing data, and error alerts smoothly.",
  },
  {
    step: "03",
    label: "HANDOVER",
    icon: KeyRound,
    title: "Provide the workflow, documentation and guidance",
    description:
      "We hand over full ownership and credentials to your team. You receive plain-English documentation and training so your staff understands how to monitor and manage the new workflow.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b border-border/80 bg-background py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
            Implementation Process
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            From manual process to automated workflow.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            No endless consulting presentations or theoretical slide decks. A direct, 3-stage journey
            that transforms repetitive business routines into working automation.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {STAGES.map((st, idx) => {
            const Icon = st.icon
            return (
              <div
                key={idx}
                className="relative flex flex-col justify-between rounded-2xl border border-border/90 bg-card p-6 sm:p-8 shadow-2xs transition-all hover:border-slate-300 hover:shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-border/70">
                    <span className="font-mono text-3xl font-extrabold text-primary">
                      {st.step}
                    </span>
                    <div className="inline-flex size-9 items-center justify-center rounded-lg bg-indigo-50 text-primary">
                      <Icon className="size-4.5" />
                    </div>
                  </div>

                  <span className="mt-4 inline-block font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {st.label}
                  </span>

                  <h3 className="mt-2 text-lg font-bold text-foreground">
                    {st.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {st.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-border/60">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500">
                    <span>Phase {st.step} of 03</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
