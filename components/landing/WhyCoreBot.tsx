import * as React from "react"
import { Target, Wrench, ShieldCheck, UserCheck } from "lucide-react"

const PRINCIPLES = [
  {
    icon: Target,
    title: "Business First",
    description:
      "We start with the work your team actually does and the problem you want to solve — not with technology for its own sake.",
  },
  {
    icon: Wrench,
    title: "Practical, Not Complicated",
    description:
      "We focus on useful processes that save your team repetitive work without forcing you to learn complicated technology.",
  },
  {
    icon: ShieldCheck,
    title: "You Own What We Build",
    description:
      "You receive the working solution and the information needed to use it. There is no unnecessary lock-in.",
  },
  {
    icon: UserCheck,
    title: "People Stay in Control",
    description:
      "Automation handles routine work. Your team remains involved wherever judgement, approval or personal interaction is needed.",
  },
]

export default function WhyCoreBot() {
  return (
    <section className="border-b border-border/80 bg-background py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
            Our Principles
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Businesses Choose CoreBot
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Practical automation should make your business simpler — not make technology another thing your team has to manage.
          </p>
        </div>

        {/* 4 Principle Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {PRINCIPLES.map((item, idx) => {
            const Icon = item.icon
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
                    <h3 className="text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
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
