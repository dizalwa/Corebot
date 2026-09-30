import * as React from "react"
import { Stethoscope, Building2, GraduationCap, ArrowRight, ChevronDown } from "lucide-react"

const EXAMPLES = [
  {
    icon: Stethoscope,
    title: "Diagnostic Centre: From Booking to Report",
    intro:
      "Reduce the routine calls, messages and follow-ups your staff handle every day.",
    steps: [
      "Patient books a test",
      "Patient receives instructions",
      "Appointment reminder is sent",
      "Report is ready",
      "Patient receives a notification",
    ],
    outcome: "Less manual calling and fewer routine messages for your staff.",
  },
  {
    icon: Building2,
    title: "Real Estate: From Enquiry to Site Visit",
    intro:
      "Respond to new property enquiries quickly and make sure interested buyers don't get forgotten.",
    steps: [
      "New enquiry arrives",
      "Customer receives a quick reply",
      "Property requirement is captured",
      "Follow-up is scheduled",
      "Salesperson is notified",
    ],
    outcome: "Faster response and fewer missed follow-ups.",
  },
  {
    icon: GraduationCap,
    title: "Coaching Institute: From Enquiry to Admission",
    intro:
      "Keep prospective students engaged without your team manually following up with every enquiry.",
    steps: [
      "Student enquires",
      "Information is sent",
      "Follow-up reminder is created",
      "Counselling call is scheduled",
      "Team is notified",
    ],
    outcome: "Less manual follow-up and a more consistent enquiry process.",
  },
]

export default function RealAutomationExamples() {
  return (
    <section id="use-cases" className="border-b border-border/80 bg-secondary py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            Real Examples
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            How businesses like yours use CoreBot
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Three common business situations where routine work is handled automatically,
            so your team can focus on what matters.
          </p>
        </div>

        {/* 3 Example Cards */}
        <div className="mt-12 space-y-8">
          {EXAMPLES.map((example, idx) => {
            const Icon = example.icon
            return (
              <div
                key={idx}
                className="rounded-2xl border border-border/90 bg-card p-6 sm:p-8 shadow-2xs transition-all hover:border-slate-300 hover:shadow-xs"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 pb-6 border-b border-border/70">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex size-10 items-center justify-center rounded-lg bg-indigo-50 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        {example.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {example.intro}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Simple Business Flow */}
                <div className="mt-6">
                  <div className="flex flex-col items-start sm:items-center">
                    {example.steps.map((step, i) => (
                      <React.Fragment key={i}>
                        <div className="flex items-center gap-3 rounded-xl border border-border/70 bg-secondary/30 px-4 py-3 w-full sm:w-auto sm:min-w-[320px]">
                          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">
                            {i + 1}
                          </span>
                          <span className="text-sm font-medium text-foreground">
                            {step}
                          </span>
                        </div>
                        {i < example.steps.length - 1 && (
                          <div className="flex justify-center w-full sm:w-auto sm:min-w-[320px] py-1">
                            <ChevronDown className="size-4 text-slate-300" />
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Outcome + CTA */}
                <div className="mt-6 pt-4 border-t border-border/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Result: </span>
                    {example.outcome}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline self-start sm:self-auto"
                  >
                    <span>Discuss a similar workflow</span>
                    <ArrowRight className="size-3" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
