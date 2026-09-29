import * as React from "react"
import { Check, ArrowRight } from "lucide-react"

const TIERS = [
  {
    name: "Starter",
    tagline: "For a single high-friction operational bottleneck.",
    price: "₹14,999",
    period: "one-time",
    isPopular: false,
    deliverables: [
      "1 automation",
      "Up to 3 tools connected",
      "7-day delivery",
      "30-day support",
    ],
    ctaText: "Discuss Your Workflow",
  },
  {
    name: "Growth",
    tagline: "Comprehensive automation across customer & internal ops.",
    price: "₹34,999",
    period: "one-time",
    isPopular: true,
    deliverables: [
      "Up to 3 automations",
      "Unlimited tool connections",
      "AI assistant included",
      "14-day delivery",
      "60-day support",
    ],
    ctaText: "Discuss Your Workflow",
  },
  {
    name: "Custom",
    tagline: "For multi-department operations and proprietary systems.",
    price: "Let's Discuss",
    period: "tailored quote",
    isPopular: false,
    deliverables: [
      "Complex workflows",
      "Multi-team automation",
      "Ongoing retainer available",
    ],
    ctaText: "Discuss Your Workflow",
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-b border-border/80 bg-background py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
            Transparent Investment
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            Simple, One-Time Pricing
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            No subscriptions. No surprise fees. Pay once, own it forever.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:items-stretch">
          {TIERS.map((tier, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-8 transition-all ${
                tier.isPopular
                  ? "border-2 border-primary bg-card shadow-md ring-1 ring-primary/20"
                  : "border border-border/90 bg-card shadow-2xs hover:border-slate-300"
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground shadow-xs">
                  Most Popular
                </div>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-foreground">
                    {tier.name}
                  </h3>
                </div>

                <p className="mt-2 text-xs text-muted-foreground min-h-[32px]">
                  {tier.tagline}
                </p>

                <div className="mt-5 pb-6 border-b border-border/70">
                  <p
                    className={
                      tier.price === "Let's Discuss"
                        ? "font-sans text-2xl font-bold text-foreground"
                        : "font-mono text-3xl sm:text-4xl font-extrabold text-foreground"
                    }
                  >
                    {tier.price}
                  </p>
                  <p className="font-mono text-xs text-muted-foreground mt-1">
                    {tier.period}
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    What&apos;s Included:
                  </p>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                    {tier.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 size-4 text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border/70">
                <a
                  href="#contact"
                  className={`flex items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold transition-colors ${
                    tier.isPopular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-xs"
                      : "border border-border bg-card text-foreground hover:bg-secondary"
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance points */}
        <div className="mt-12 rounded-xl border border-border/80 bg-secondary/30 p-5 text-center text-xs text-muted-foreground">
          <p className="font-semibold text-foreground">
            No retainers. No lock-in. You own everything we build.
          </p>
          <p className="mt-1">
            Every automation is deployed directly on your accounts. Pay once, own it forever.
          </p>
        </div>
      </div>
    </section>
  )
}
