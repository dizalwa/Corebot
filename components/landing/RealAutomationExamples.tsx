import * as React from "react"
import { Stethoscope, Building2, GraduationCap, ArrowRight, Check } from "lucide-react"

const WORKFLOW_EXAMPLES = [
  {
    industry: "Diagnostic Centre & Healthcare",
    icon: Stethoscope,
    badge: "Example workflow",
    objective: "Automated booking confirmation and test report delivery",
    steps: [
      { step: "1", title: "Patient books test", detail: "Website form or WhatsApp inquiry" },
      { step: "2", title: "Booking recorded", detail: "Logged into appointment sheet/database" },
      { step: "3", title: "Confirmation sent", detail: "Fasting & test prep guidelines delivered" },
      { step: "4", title: "Automated reminder", detail: "WhatsApp reminder sent 24h & 2h prior" },
      { step: "5", title: "Report becomes ready", detail: "LIMS status flag triggers automation" },
      { step: "6", title: "Patient notification", detail: "Encrypted PDF link sent via WhatsApp" },
      { step: "7", title: "Feedback request", detail: "Automated review request sent next day" },
    ],
  },
  {
    industry: "Real Estate & Property Advisory",
    icon: Building2,
    badge: "Example workflow",
    objective: "Rapid automated intake and routing for high-value buyer enquiries",
    steps: [
      { step: "1", title: "New enquiry arrives", detail: "Meta Lead Ad, Portal or Website Form" },
      { step: "2", title: "Lead captured", detail: "Deduplicated and recorded instantly" },
      { step: "3", title: "Requirement understood", detail: "AI asks budget, location, and timeline" },
      { step: "4", title: "Lead assigned", detail: "Routed to designated regional sales manager" },
      { step: "5", title: "Site visit scheduled", detail: "Calendar slot invite sent to buyer" },
      { step: "6", title: "CRM & Sheets updated", detail: "Full conversation history synced" },
    ],
  },
  {
    industry: "Coaching, EdTech & Institutes",
    icon: GraduationCap,
    badge: "Example workflow",
    objective: "Automated student guidance and counseling scheduling",
    steps: [
      { step: "1", title: "Student enquiry arrives", detail: "Website form or WhatsApp chat" },
      { step: "2", title: "Details captured", detail: "Grade, target exam, and contact saved" },
      { step: "3", title: "Course brochure sent", detail: "Instant PDF syllabus & fee details sent" },
      { step: "4", title: "Follow-up scheduled", detail: "Gentle reminder sequence over 3 days" },
      { step: "5", title: "Counseling booked", detail: "Student picks slot for free demo session" },
      { step: "6", title: "Instructor alerted", detail: "Calendar invite & student brief sent" },
    ],
  },
]

export default function RealAutomationExamples() {
  return (
    <section id="use-cases" className="border-b border-border/80 bg-background py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
            End-To-End Scenarios
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            See What CoreBot Can Automate
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Every business workflow connects different tools and steps. Below are three realistic
            example workflows illustrating how tasks flow from trigger to completion.
          </p>
        </div>

        {/* 3 Workflow Examples */}
        <div className="mt-12 space-y-8">
          {WORKFLOW_EXAMPLES.map((example, idx) => {
            const Icon = example.icon
            return (
              <div
                key={idx}
                className="rounded-2xl border border-border/90 bg-card p-6 sm:p-8 shadow-2xs transition-all hover:border-slate-300 hover:shadow-xs"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-6 border-b border-border/70">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex size-10 items-center justify-center rounded-lg bg-indigo-50 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        {example.industry}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {example.objective}
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex self-start sm:self-auto items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-[11px] font-medium text-slate-600">
                    {example.badge}
                  </span>
                </div>

                {/* Stepper Horizontal Scroll or Wrapped Steps */}
                <div className="mt-6">
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {example.steps.map((st, i) => (
                      <div
                        key={i}
                        className="relative flex flex-col justify-between rounded-xl border border-border/70 bg-secondary/30 p-3.5"
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="flex size-5 items-center justify-center rounded-full bg-primary/10 font-mono text-[10px] font-bold text-primary">
                              {st.step}
                            </span>
                            {i < example.steps.length - 1 && (
                              <span className="text-[10px] font-mono text-muted-foreground hidden lg:inline">
                                Next →
                              </span>
                            )}
                          </div>
                          <p className="mt-2 text-xs font-semibold text-foreground">
                            {st.title}
                          </p>
                          <p className="mt-1 text-[11px] text-muted-foreground">
                            {st.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-muted-foreground">
                  <span className="italic">
                    Note: CoreBot designs and configures workflows specifically around your existing software.
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 font-semibold text-primary hover:underline self-start sm:self-auto"
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
