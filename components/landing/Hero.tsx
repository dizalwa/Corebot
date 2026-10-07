"use client"

import * as React from "react"
import { ArrowRight, MessageSquare, CheckCircle2, ChevronDown } from "lucide-react"

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
    <section className="relative overflow-hidden border-b border-slate-800/80 bg-[#070D1E] pt-16 pb-20 md:pt-24 md:pb-28">
      {/* Ambient top blue radial glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[550px] rounded-full bg-blue-600/[0.14] blur-[120px] -z-10"
        aria-hidden="true"
      />

      {/* Subtle secondary cyan glow behind right interactive workflow monitor */}
      <div
        className="pointer-events-none absolute top-1/4 -right-20 w-[550px] h-[550px] rounded-full bg-cyan-500/[0.08] blur-[100px] -z-10"
        aria-hidden="true"
      />

      {/* Subtle deep indigo fill on bottom-left */}
      <div
        className="pointer-events-none absolute -bottom-20 left-0 w-[500px] h-[400px] rounded-full bg-indigo-600/[0.08] blur-[110px] -z-10"
        aria-hidden="true"
      />

      {/* Subtle technical grid pattern with soft radial falloff */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(96, 165, 250, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(96, 165, 250, 0.12) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
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

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-950/60 px-3.5 py-1 text-xs font-semibold text-blue-300 tracking-wide backdrop-blur-xs">
              <span className="size-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span>PRACTICAL AI AUTOMATION FOR BUSINESSES</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
              Stop Doing Work Your Business Can Automate.
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              CoreBot helps businesses reduce repetitive follow-ups, customer communication,
              data entry and routine work — so your team can spend more time on the work that
              actually grows the business.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-950/60 transition-all hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                <span>Find What You Can Automate</span>
                <ArrowRight className="size-4" />
              </a>

              <a
                href="https://wa.me/918102417697"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-slate-800 hover:border-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                <MessageSquare className="size-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Trust Line */}
            <p className="text-xs text-slate-400 font-medium pt-1">
              Based in Ranchi · Built for Indian SMEs · Start with one process
            </p>
          </div>

          {/* Right Column: Simple Business Scenario Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-slate-700/80 bg-[#0C1427]/90 backdrop-blur-md p-5 sm:p-6 shadow-2xl shadow-black/40">
              {/* Header */}
              <div className="pb-4 border-b border-slate-800">
                <p className="text-sm font-semibold text-white">
                  What happens when a new customer enquires
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
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
                            ? "border-blue-500/80 bg-blue-950/60 shadow-md shadow-blue-950/50 ring-1 ring-blue-500/30"
                            : isCompleted
                              ? "border-slate-800 bg-slate-900/70"
                              : "border-slate-800/40 bg-slate-950/40 opacity-55"
                        }`}
                      >
                        {/* Step Icon */}
                        <div
                          className={`flex size-9 shrink-0 items-center justify-center rounded-lg text-base transition-colors ${
                            isActive
                              ? "bg-blue-600/20 text-blue-400"
                              : isCompleted
                                ? "bg-emerald-950/50 text-emerald-400 border border-emerald-500/20"
                                : "bg-slate-800/50 text-slate-400"
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
                                  ? "text-slate-200"
                                  : "text-slate-400"
                            }`}
                          >
                            {step.label}
                          </p>
                          <p
                            className={`text-[11px] sm:text-xs mt-0.5 leading-snug transition-colors ${
                              isActive
                                ? "text-slate-300"
                                : isCompleted
                                  ? "text-slate-400"
                                  : "text-slate-500"
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
                                  ? "text-blue-400"
                                  : "text-slate-700"
                            }`}
                          />
                        </div>
                      )}
                    </React.Fragment>
                  )
                })}
              </div>

              {/* Footer note */}
              <div className="mt-4 pt-3 border-t border-slate-800">
                <p className="text-[11px] text-slate-400 text-center">
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
