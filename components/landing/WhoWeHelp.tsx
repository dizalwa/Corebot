import * as React from "react"
import {
  Stethoscope,
  Building2,
  GraduationCap,
  Briefcase,
  Car,
  Layers,
  ArrowRight,
} from "lucide-react"

const INDUSTRIES = [
  {
    icon: Stethoscope,
    title: "Diagnostic Centres & Labs",
    examples: [
      "Test booking & home sample dispatch",
      "Automated test preparation instructions",
      "WhatsApp test report delivery notifications",
      "Doctor referral logging & reconciliation",
    ],
  },
  {
    icon: Stethoscope,
    title: "Clinics & Healthcare Practices",
    examples: [
      "Patient appointment booking & calendar sync",
      "24h & 2h automated appointment reminders",
      "Post-consultation medication instructions",
      "Follow-up visit scheduling alerts",
    ],
  },
  {
    icon: Building2,
    title: "Real Estate & Agencies",
    examples: [
      "Immediate qualification of ad inquiries",
      "Site visit scheduling with sales rep routing",
      "Brochure and floor plan dispatch via WhatsApp",
      "Long-term automated buyer check-ins",
    ],
  },
  {
    icon: GraduationCap,
    title: "Coaching & Education Institutes",
    examples: [
      "Course enquiry handling & brochure dispatch",
      "Demo class registration & Zoom link delivery",
      "Fee installment reminders & receipt generation",
      "Automated counseling appointment scheduling",
    ],
  },
  {
    icon: Briefcase,
    title: "Professional Services & CAs",
    examples: [
      "Client onboarding & document collection",
      "GST/tax filing deadline reminder sequences",
      "Automated recurring invoice generation",
      "Consultation booking & intake questionnaire",
    ],
  },
  {
    icon: Car,
    title: "Automotive & Dealerships",
    examples: [
      "Test drive booking & verification",
      "Service & maintenance interval reminders",
      "Vehicle delivery status notifications",
      "Post-service customer satisfaction surveys",
    ],
  },
  {
    icon: Layers,
    title: "Other Growing Businesses",
    examples: [
      "E-commerce order notifications & tracking",
      "Multi-sheet reconciliation & reporting",
      "Vendor invoice processing & approvals",
      "Internal team task dispatch via WhatsApp/Slack",
    ],
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
            If your business runs on repetitive processes, CoreBot can help.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            We work across diverse service, retail, and operational businesses.
            If your daily work involves repeating the same steps across messaging, files, and tools, automation fits your workflow.
          </p>
        </div>

        {/* 7 Industry Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, idx) => {
            const Icon = ind.icon
            return (
              <div
                key={idx}
                className={`flex flex-col justify-between rounded-xl border border-border/80 bg-card p-6 shadow-2xs transition-all hover:border-slate-300 hover:shadow-xs ${
                  idx === 6 ? "lg:col-span-3" : ""
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

                  <ul className="mt-4 space-y-2 text-xs sm:text-sm text-muted-foreground">
                    {ind.examples.map((ex, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
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
          Don&apos;t see your industry above? If your team uses WhatsApp, email, spreadsheets, or web forms, we can build custom workflows for your operations.
        </p>
      </div>
    </section>
  )
}
