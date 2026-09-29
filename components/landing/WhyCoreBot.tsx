import * as React from "react"
import { Target, Wrench, ShieldCheck, UserCheck } from "lucide-react"

const DIFFERENTIATORS = [
  {
    icon: Target,
    title: "Business-first",
    subtitle: "Start with the business problem.",
    description:
      "We don't force complicated AI where simple automation rules work. Our priority is solving the operational bottleneck effectively, using the cleanest solution possible.",
  },
  {
    icon: Wrench,
    title: "Practical",
    subtitle: "Automate processes where automation makes sense.",
    description:
      "Not every task should be automated. We help you isolate high-volume, error-prone friction points where automated execution delivers genuine day-to-day relief.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent",
    subtitle: "Clear pricing and deliverables.",
    description:
      "No open-ended consulting hourly fees or surprise retainers. Scope, costs, and deliverables are agreed upon upfront so you always know what you are paying for.",
  },
  {
    icon: UserCheck,
    title: "Human control",
    subtitle: "People remain in control of important business decisions.",
    description:
      "Automation should support your team, not replace critical human discernment. Important exceptions, edge cases, and high-stakes choices are routed directly to your staff.",
  },
]

export default function WhyCoreBot() {
  return (
    <section className="border-b border-border/80 bg-secondary/20 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
            Our Principles
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built around your business, not around a technology stack.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Technology is only valuable when it solves a tangible problem without adding unnecessary complexity.
            Here is how CoreBot approaches automation for growing businesses.
          </p>
        </div>

        {/* 4 Differentiators */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {DIFFERENTIATORS.map((diff, idx) => {
            const Icon = diff.icon
            return (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-xl border border-border/80 bg-card p-6 sm:p-7 shadow-2xs transition-all hover:border-slate-300 hover:shadow-xs"
              >
                <div>
                  <div className="flex items-center gap-3 pb-3 border-b border-border/60">
                    <div className="inline-flex size-10 items-center justify-center rounded-lg bg-indigo-50 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        {diff.title}
                      </h3>
                      <p className="text-xs font-medium text-primary mt-0.5">
                        {diff.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {diff.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
