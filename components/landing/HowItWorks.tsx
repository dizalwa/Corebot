import * as React from "react"
import { Search, Hammer, KeyRound } from "lucide-react"

const STAGES = [
  {
    step: "01",
    label: "UNDERSTAND",
    icon: Search,
    title: "Understand Your Work",
    description:
      "We start by understanding what your team does today, where time is being lost, and which repetitive tasks are worth simplifying.",
  },
  {
    step: "02",
    label: "BUILD & TEST",
    icon: Hammer,
    title: "Build & Test",
    description:
      "We build the agreed solution and test it with your real business process before it is handed over.",
  },
  {
    step: "03",
    label: "HAND IT OVER",
    icon: KeyRound,
    title: "Hand It Over",
    description:
      "You get a working solution, clear instructions and support so your team can use it confidently.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b border-border/80 bg-secondary py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
            Implementation Process
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            We keep the process simple — understand the work, build the solution, and hand it over to you.
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
