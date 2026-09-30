import * as React from "react"
import {
  Stethoscope,
  Building2,
  GraduationCap,
  Layers,
  ArrowRight,
} from "lucide-react"

const INDUSTRIES = [
  {
    icon: Stethoscope,
    title: "Diagnostic Centres & Labs",
    description:
      "Automate routine patient communication, reminders and report notifications.",
  },
  {
    icon: Stethoscope,
    title: "Clinics & Healthcare Practices",
    description:
      "Reduce repetitive appointment messages, reminders and routine follow-ups.",
  },
  {
    icon: Building2,
    title: "Real Estate & Property Businesses",
    description:
      "Respond to enquiries, capture requirements and keep follow-ups organised.",
  },
  {
    icon: GraduationCap,
    title: "Coaching & Education Institutes",
    description:
      "Handle routine student enquiries, information sharing and follow-ups.",
  },
  {
    icon: Layers,
    title: "Other Growing Businesses",
    description:
      "If your team repeatedly does the same task, we can explore whether it can be simplified or automated.",
  },
]

export default function WhoWeHelp() {
  return (
    <section className="border-b border-border/80 bg-background py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
            Target Businesses
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            Who Can CoreBot Help?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            CoreBot is useful wherever your team spends time repeating the same follow-ups, messages, data entry or routine tasks.
          </p>
        </div>

        {/* 5 Industry Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {INDUSTRIES.map((ind, idx) => {
            const Icon = ind.icon
            return (
              <div
                key={idx}
                className={`flex flex-col justify-between rounded-xl border border-border/80 bg-card p-6 shadow-2xs transition-all hover:border-slate-300 hover:shadow-xs ${
                  idx === 3
                    ? "lg:col-span-2 lg:col-start-2"
                    : idx === 4
                    ? "sm:col-span-2 sm:max-w-md sm:mx-auto w-full lg:max-w-none lg:mx-0 lg:col-span-2"
                    : "lg:col-span-2"
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 pb-3 border-b border-border/60">
                    <div className="inline-flex size-9 items-center justify-center rounded-lg bg-indigo-50 text-primary">
                      <Icon className="size-4.5" />
                    </div>
                    <h3 className="text-base font-bold text-foreground">
                      {ind.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {ind.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-border/60">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                  >
                    <span>Discuss this use case</span>
                    <ArrowRight className="size-3" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Reassurance note */}
        <p className="mt-8 text-center text-xs text-muted-foreground">
          Don&apos;t see your industry above? CoreBot can help businesses where staff spend significant time on repetitive customer communication, follow-ups and routine office work.
        </p>
      </div>
    </section>
  )
}
