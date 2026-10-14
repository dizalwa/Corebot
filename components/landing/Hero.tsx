"use client"

import * as React from "react"
import { ArrowRight, MessageSquare, CheckCircle2, ChevronDown, Phone } from "lucide-react"

const BUSINESS_STEPS = [
  {
    id: 1,
    label: "New Enquiry",
    description: "A customer reaches out to your business",
    icon: "📩",
  },
  {
    id: 2,
    label: "Instant Reply",
    description: "Customer gets an immediate response",
    icon: "💬",
  },
  {
    id: 3,
    label: "Customer Details Saved",
    description: "Name, number and requirement are recorded",
    icon: "📋",
  },
  {
    id: 4,
    label: "Follow-Up Reminder",
    description: "A reminder is created so nothing is missed",
    icon: "🔔",
  },
  {
    id: 5,
    label: "Team Notified",
    description: "The right person on your team is informed",
    icon: "👤",
  },
]

export default function Hero() {
  const [activeStep, setActiveStep] = React.useState(0)

  // Simple step progression animation
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev >= BUSINESS_STEPS.length - 1 ? 0 : prev + 1))
    }, 2600)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden border-b border-[#dfd8cd] bg-[#f8f5ef] pt-16 pb-20 md:pt-24 md:pb-28">
      {/* Ambient top blue radial glow */}
      <div
        className="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2 h-[580px] w-[980px] rounded-full bg-[#f7c570]/[0.30] blur-[120px] -z-10"
        aria-hidden="true"
      />

      {/* Subtle secondary cyan glow behind right interactive workflow monitor */}
      <div
        className="pointer-events-none absolute top-1/4 -right-20 h-[550px] w-[550px] rounded-full bg-[#ed5b47]/[0.11] blur-[100px] -z-10"
        aria-hidden="true"
      />

      {/* Subtle deep indigo fill on bottom-left */}
      <div
        className="pointer-events-none absolute -bottom-20 left-0 h-[400px] w-[500px] rounded-full bg-[#d9d98d]/[0.18] blur-[110px] -z-10"
        aria-hidden="true"
      />

      {/* Subtle paper texture with soft radial falloff */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(rgba(33,31,27,0.12) 0.6px, transparent 0.6px)",
          backgroundSize: "7px 7px",
          maskImage: "radial-gradient(ellipse 95% 80% at 50% 45%, black 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 95% 80% at 50% 45%, black 60%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Thin connected circuit-like lines and technical connection nodes */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full -z-10 select-none"
        viewBox="0 0 1440 760"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="circuit-cyan-h" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.12" />
            <stop offset="35%" stopColor="#38BDF8" stopOpacity="0.75" />
            <stop offset="75%" stopColor="#818CF8" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#818CF8" stopOpacity="0.12" />
          </linearGradient>

          <linearGradient id="circuit-blue-diag" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.12" />
            <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.16" />
          </linearGradient>

          <radialGradient id="cyan-glow-node" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Circuit Path 1: Upper-left network line */}
        <path
          d="M -40 120 H 260 L 310 170 H 530 L 565 205 H 660"
          stroke="url(#circuit-cyan-h)"
          strokeWidth="1.6"
        />

        {/* Circuit Path 2: Left lower pipeline under headline */}
        <path
          d="M -20 370 H 150 L 200 320 H 370 L 410 360 H 480"
          stroke="url(#circuit-cyan-h)"
          strokeWidth="1.6"
        />

        {/* Circuit Path 3: Subtle dashed bus bridge */}
        <path
          d="M 430 90 H 590 L 640 140 H 790"
          stroke="#818CF8"
          strokeOpacity="0.45"
          strokeWidth="1.3"
          strokeDasharray="4 6"
        />

        {/* Circuit Path 4: Right workflow card top connector */}
        <path
          d="M 760 110 H 880 L 920 150 H 1120 L 1160 110 H 1480"
          stroke="url(#circuit-blue-diag)"
          strokeWidth="1.6"
        />

        {/* Circuit Path 5: Right workflow card lower bridge */}
        <path
          d="M 810 530 H 960 L 1010 480 H 1200 L 1240 520 H 1480"
          stroke="url(#circuit-cyan-h)"
          strokeWidth="1.6"
        />

        {/* Circuit Path 6: Bottom subtle grounding track */}
        <path
          d="M 140 600 H 390 L 440 550 H 680 L 720 590 H 1140"
          stroke="url(#circuit-blue-diag)"
          strokeWidth="1.3"
          strokeDasharray="6 8"
        />

        {/* Vertical connection drop */}
        <path
          d="M 530 170 V 250 L 560 280 H 630"
          stroke="#38BDF8"
          strokeOpacity="0.50"
          strokeWidth="1.6"
        />

        {/* Small Cyan / Blue Connection Nodes (restrained points of light) */}
        {/* Node at (310, 170) */}
        <circle cx="310" cy="170" r="2.75" fill="#38BDF8" opacity="0.95" />
        <circle cx="310" cy="170" r="5.5" fill="none" stroke="#38BDF8" strokeWidth="1" opacity="0.45" />

        {/* Node at (530, 170) - junction */}
        <circle cx="530" cy="170" r="3" fill="#60A5FA" opacity="0.95" />
        <circle cx="530" cy="170" r="7" fill="none" stroke="#60A5FA" strokeWidth="1" opacity="0.48" />

        {/* Node at (660, 205) - endpoint */}
        <circle cx="660" cy="205" r="2.75" fill="#38BDF8" opacity="0.9" />

        {/* Node at (200, 320) */}
        <circle cx="200" cy="320" r="2.75" fill="#38BDF8" opacity="0.9" />
        <circle cx="200" cy="320" r="5" fill="none" stroke="#38BDF8" strokeWidth="1" opacity="0.4" />

        {/* Node at (480, 360) */}
        <circle cx="480" cy="360" r="2.75" fill="#60A5FA" opacity="0.95" />

        {/* Node at (920, 150) - near right monitor card with restrained glow */}
        <circle cx="920" cy="150" r="8" fill="url(#cyan-glow-node)" opacity="0.7" />
        <circle cx="920" cy="150" r="3" fill="#38BDF8" />
        <circle cx="920" cy="150" r="6" fill="none" stroke="#38BDF8" strokeWidth="1" opacity="0.5" />

        {/* Node at (1120, 150) */}
        <circle cx="1120" cy="150" r="2.75" fill="#38BDF8" opacity="0.95" />
        <circle cx="1120" cy="150" r="5.5" fill="none" stroke="#38BDF8" strokeWidth="1" opacity="0.45" />

        {/* Node at (1010, 480) */}
        <circle cx="1010" cy="480" r="2.75" fill="#60A5FA" opacity="0.9" />

        {/* Node at (1200, 480) */}
        <circle cx="1200" cy="480" r="2.75" fill="#38BDF8" opacity="0.95" />
        <circle cx="1200" cy="480" r="5.5" fill="none" stroke="#38BDF8" strokeWidth="1" opacity="0.45" />

        {/* Node at (630, 280) */}
        <circle cx="630" cy="280" r="2.75" fill="#818CF8" opacity="0.9" />
      </svg>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#211f1b]/15 bg-[#fffdfa]/75 px-3.5 py-1.5 text-[11px] font-bold text-[#4f473d] tracking-[0.12em] backdrop-blur-xs">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              <span>PRACTICAL AI AUTOMATION FOR BUSINESSES</span>
            </div>

            <h1 className="max-w-3xl text-4xl font-bold tracking-[-0.07em] text-foreground sm:text-6xl lg:text-[4.25rem] lg:leading-[0.98]">
              Stop Doing Work Your Business Can Automate.
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              CoreBot helps businesses reduce repetitive follow-ups, customer communication,
              data entry and routine work — so your team can spend more time on the work that
              actually grows the business.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-[#d94d3b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8f5ef]"
              >
                <span>Find What You Can Automate</span>
                <ArrowRight className="size-4" />
              </a>

              <a
                href="https://wa.me/917970927377"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#211f1b]/15 bg-[#fffdfa]/80 px-5 py-3.5 text-sm font-semibold text-foreground shadow-sm transition-all hover:bg-white hover:border-[#211f1b]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8f5ef]"
              >
                <MessageSquare className="size-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Direct Phone Call Prompt */}
            <p className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium pt-1">
              <Phone className="size-3 text-primary shrink-0" />
              <span>
                Prefer a phone call?{" "}
                <a
                  href="tel:+917970927377"
                  className="font-semibold text-foreground underline decoration-[#b5aca0] underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
                  aria-label="Call +91 7970927377"
                >
                  +91 7970927377
                </a>
              </span>
            </p>

            {/* Trust Line */}
            <p className="text-xs text-muted-foreground font-medium">
              Based in Ranchi · Built for Indian SMEs · Start with one process
            </p>
          </div>

          {/* Right Column: Simple Business Scenario Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[2rem] border border-[#211f1b]/10 bg-[#211f1b] p-5 text-[#fffaf3] shadow-2xl shadow-[#6a4a28]/20 sm:p-6">
              {/* Header */}
              <div className="pb-4 border-b border-white/15">
                <p className="text-sm font-semibold text-white">
                  What happens when a new customer enquires
                </p>
                <p className="text-xs text-white/55 mt-0.5">
                  Handled automatically — with less manual work for your team
                </p>
              </div>

              {/* Business Process Steps */}
              <div className="mt-5 space-y-0" role="region" aria-label="Business automation process">
                {BUSINESS_STEPS.map((step, idx) => {
                  const isActive = idx === activeStep
                  const isCompleted = idx < activeStep

                  return (
                    <React.Fragment key={step.id}>
                      {/* Step Card */}
                      <div
                        className={`relative flex items-center gap-3.5 rounded-xl border p-3 transition-all duration-300 ${
                          isActive
                            ? "border-[#f7c570]/80 bg-[#fffaf3]/10 shadow-md shadow-black/20 ring-1 ring-[#f7c570]/30"
                            : isCompleted
                              ? "border-white/15 bg-white/8"
                              : "border-white/10 bg-white/[0.03] opacity-55"
                        }`}
                      >
                        {/* Step Icon */}
                        <div
                          className={`flex size-9 shrink-0 items-center justify-center rounded-lg text-base transition-colors ${
                            isActive
                              ? "bg-[#f7c570] text-[#211f1b]"
                              : isCompleted
                                ? "bg-emerald-500/15 text-emerald-300 border border-emerald-400/20"
                                : "bg-white/10 text-white/50"
                          }`}
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="size-4.5 text-emerald-400" />
                          ) : (
                            <span>{step.icon}</span>
                          )}
                        </div>

                        {/* Step Content */}
                        <div className="min-w-0">
                          <p
                            className={`text-[13px] sm:text-sm font-semibold leading-tight transition-colors ${
                              isActive
                                ? "text-white"
                                : isCompleted
                                  ? "text-white/80"
                                  : "text-white/45"
                            }`}
                          >
                            {step.label}
                          </p>
                          <p
                            className={`text-[11px] sm:text-xs mt-0.5 leading-snug transition-colors ${
                              isActive
                                ? "text-white/65"
                                : isCompleted
                                  ? "text-white/50"
                                  : "text-white/35"
                            }`}
                          >
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* Connector Arrow between steps */}
                      {idx < BUSINESS_STEPS.length - 1 && (
                        <div className="flex justify-center py-1">
                          <ChevronDown
                            className={`size-4 transition-colors duration-300 ${
                              idx < activeStep
                                ? "text-emerald-400/80"
                                : idx === activeStep
                                  ? "text-[#f7c570]"
                                  : "text-white/15"
                            }`}
                          />
                        </div>
                      )}
                    </React.Fragment>
                  )
                })}
              </div>

              {/* Footer note */}
              <div className="mt-4 pt-3 border-t border-white/15">
                <p className="text-[11px] text-white/50 text-center">
                  The routine work is handled automatically, so your team can focus on customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
