"use client"

import * as React from "react"
import { Play, RotateCcw, CheckCircle2, Clock, Bot, Send, Calendar, MessageSquare, Sparkles } from "lucide-react"

type DemoKey = "lead" | "assistant" | "appointment"

export default function InteractiveDemos() {
  const [activeTab, setActiveTab] = React.useState<DemoKey>("lead")
  const [isRunning, setIsRunning] = React.useState(false)
  const [demoState, setDemoState] = React.useState<number>(0)

  // Reset demo state whenever switching tabs
  const handleTabChange = (tab: DemoKey) => {
    setActiveTab(tab)
    setIsRunning(false)
    setDemoState(0)
  }

  // Trigger simulated progression
  const runSimulation = () => {
    setIsRunning(true)
    setDemoState(1)

    setTimeout(() => setDemoState(2), 700)
    setTimeout(() => setDemoState(3), 1500)
    setTimeout(() => {
      setDemoState(4)
      setIsRunning(false)
    }, 2300)
  }

  return (
    <section className="border-b border-border/80 bg-secondary/20 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
            Live Simulations
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            See Automation in Action
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Test how automated triggers, AI routing, and instant notifications operate in real-time.
            Click &ldquo;Run Demo&rdquo; to simulate each process step.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="mt-10 flex flex-wrap gap-2 border-b border-border/80 pb-4">
          <button
            type="button"
            onClick={() => handleTabChange("lead")}
            className={`rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "lead"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "bg-card text-muted-foreground hover:bg-secondary hover:text-foreground border border-border"
            }`}
          >
            Demo 1: Lead Follow-Up
          </button>
          <button
            type="button"
            onClick={() => handleTabChange("assistant")}
            className={`rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "assistant"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "bg-card text-muted-foreground hover:bg-secondary hover:text-foreground border border-border"
            }`}
          >
            Demo 2: AI Customer Assistant
          </button>
          <button
            type="button"
            onClick={() => handleTabChange("appointment")}
            className={`rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "appointment"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "bg-card text-muted-foreground hover:bg-secondary hover:text-foreground border border-border"
            }`}
          >
            Demo 3: Appointment Reminders
          </button>
        </div>

        {/* Demo Content Container */}
        <div className="mt-6 rounded-2xl border border-border/90 bg-card p-6 sm:p-8 shadow-xs">
          {/* Header Info */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-border/70">
            <div>
              <span className="font-mono text-xs font-semibold text-primary">
                {activeTab === "lead" && "SCENARIO: INBOUND INQUIRY FROM WEB/AD"}
                {activeTab === "assistant" && "SCENARIO: 11:30 PM WHATSAPP SERVICE QUESTION"}
                {activeTab === "appointment" && "SCENARIO: CLIENT BOOKING & AUTOMATED REMINDERS"}
              </span>
              <h3 className="text-lg font-bold text-foreground mt-1">
                {activeTab === "lead" && "Automated Lead Intake & Instant Multi-Channel Response"}
                {activeTab === "assistant" && "24/7 AI Service Guidance & Appointment Qualification"}
                {activeTab === "appointment" && "Automated Booking Confirmation, 24h Reminder & Post-Visit Review"}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-[10px] text-slate-600">
                Interactive simulation
              </span>
              <button
                type="button"
                onClick={runSimulation}
                disabled={isRunning}
                className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary/90 disabled:opacity-50"
              >
                {demoState === 0 ? (
                  <>
                    <Play className="size-3.5" />
                    <span>Run Demo</span>
                  </>
                ) : demoState === 4 ? (
                  <>
                    <RotateCcw className="size-3.5" />
                    <span>Re-Run</span>
                  </>
                ) : (
                  <>
                    <Clock className="size-3.5 animate-spin" />
                    <span>Processing...</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Interactive Simulation Area */}
          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Visual Screen / Mock Conversation */}
            <div className="lg:col-span-7 rounded-xl border border-border bg-secondary/30 p-4 sm:p-5 font-sans">
              {activeTab === "lead" && (
                <div className="space-y-3">
                  <div className="rounded-lg bg-card p-3 border border-border shadow-2xs">
                    <div className="flex items-center justify-between text-xs text-muted-foreground pb-1.5 border-b border-border/50">
                      <span className="font-semibold text-foreground">Incoming Web Form</span>
                      <span className="font-mono text-[11px]">Just now</span>
                    </div>
                    <div className="mt-2 text-xs space-y-1 text-slate-700">
                      <p><span className="font-medium text-slate-500">Name:</span> Rahul Mehta</p>
                      <p><span className="font-medium text-slate-500">Inquiry:</span> Need automated order sync between WhatsApp & Sheets</p>
                      <p><span className="font-medium text-slate-500">Phone:</span> +91 98765 43210</p>
                    </div>
                  </div>

                  {demoState >= 2 && (
                    <div className="rounded-lg bg-indigo-50/70 p-3 border border-indigo-200 text-xs text-slate-800 animate-in fade-in slide-in-from-top-2">
                      <div className="flex items-center gap-1.5 text-primary font-semibold text-[11px] mb-1">
                        <Sparkles className="size-3" />
                        <span>AI Extraction Complete</span>
                      </div>
                      <p className="text-[11px] text-slate-600">Category: E-Commerce Ops · Urgency: High · Assigned Rep: Priya (Sales)</p>
                    </div>
                  )}

                  {demoState >= 3 && (
                    <div className="rounded-lg bg-emerald-50/80 p-3 border border-emerald-200 text-xs text-slate-800 animate-in fade-in slide-in-from-top-2">
                      <div className="flex items-center gap-1.5 text-emerald-700 font-semibold text-[11px] mb-1">
                        <MessageSquare className="size-3" />
                        <span>Instant WhatsApp Reply Delivered</span>
                      </div>
                      <p className="text-[11px] italic text-slate-700">
                        &ldquo;Hi Rahul, thanks for reaching out to CoreBot! We saw your note about order sync. Would tomorrow at 3 PM work for a brief 15-minute walkthrough?&rdquo;
                      </p>
                    </div>
                  )}

                  {demoState >= 4 && (
                    <div className="rounded-lg bg-card p-2.5 border border-border text-[11px] font-mono text-muted-foreground flex items-center justify-between animate-in fade-in">
                      <span>✓ CRM Row #1049 Created</span>
                      <span>✓ Slack Alert Sent to #sales</span>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "assistant" && (
                <div className="space-y-3">
                  <div className="rounded-lg bg-card p-3 border border-border shadow-2xs">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 pb-1.5 border-b border-border/50">
                      <span className="size-2 rounded-full bg-emerald-500" />
                      <span>Customer on WhatsApp (11:32 PM)</span>
                    </div>
                    <p className="mt-2 text-xs text-slate-800">
                      &ldquo;Hello, do you provide blood test collection at home in Ranchi? What are the charges for a Full Body Profile?&rdquo;
                    </p>
                  </div>

                  {demoState >= 2 && (
                    <div className="rounded-lg bg-indigo-50/70 p-3 border border-indigo-200 text-xs text-slate-800 animate-in fade-in">
                      <span className="font-mono text-[11px] text-primary font-semibold">
                        Knowledge Base Retrieval: &ldquo;Home Collection &amp; Full Body Health Package&rdquo;
                      </span>
                    </div>
                  )}

                  {demoState >= 3 && (
                    <div className="rounded-lg bg-emerald-50/80 p-3 border border-emerald-200 text-xs text-slate-800 animate-in fade-in">
                      <div className="flex items-center gap-1.5 text-emerald-700 font-semibold text-[11px] mb-1">
                        <Bot className="size-3" />
                        <span>AI Assistant Response (11:32 PM - Automated response)</span>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        &ldquo;Yes! We provide home sample collection across Ranchi with free doorstep service for packages over ₹999. Our Comprehensive Full Body Checkup covers 72 parameters at ₹1,499. Would you like to schedule morning collection for tomorrow?&rdquo;
                      </p>
                    </div>
                  )}

                  {demoState >= 4 && (
                    <div className="rounded-lg bg-card p-2.5 border border-border text-[11px] font-mono text-muted-foreground flex items-center justify-between animate-in fade-in">
                      <span>Status: Qualified Lead</span>
                      <span>Handoff: Phlebotomy Team Queued</span>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "appointment" && (
                <div className="space-y-3">
                  <div className="rounded-lg bg-card p-3 border border-border shadow-2xs">
                    <div className="flex items-center justify-between text-xs text-muted-foreground pb-1.5 border-b border-border/50">
                      <span className="font-semibold text-foreground">Appointment Booked Online</span>
                      <span className="font-mono text-[11px]">Thursday 10:00 AM</span>
                    </div>
                    <p className="mt-2 text-xs text-slate-700">
                      Patient: Sunita Sen · Consultation: Dental Checkup &amp; Cleaning
                    </p>
                  </div>

                  {demoState >= 2 && (
                    <div className="rounded-lg bg-indigo-50/70 p-3 border border-indigo-200 text-xs text-slate-800 animate-in fade-in">
                      <div className="flex items-center gap-1.5 text-primary font-semibold text-[11px] mb-1">
                        <Calendar className="size-3" />
                        <span>Calendar Synced &amp; Schedule Confirmed</span>
                      </div>
                      <p className="text-[11px] text-slate-600">
                        Doctor calendar blocked. Preparation guidelines triggered.
                      </p>
                    </div>
                  )}

                  {demoState >= 3 && (
                    <div className="rounded-lg bg-emerald-50/80 p-3 border border-emerald-200 text-xs text-slate-800 animate-in fade-in">
                      <div className="flex items-center gap-1.5 text-emerald-700 font-semibold text-[11px] mb-1">
                        <Send className="size-3" />
                        <span>Automated Reminder Timeline Scheduled</span>
                      </div>
                      <p className="text-[11px] text-slate-700">
                        • T-24h WhatsApp reminder: Fasting reminder &amp; clinic address pin<br />
                        • T-2h confirmation prompt: Allows 1-click &ldquo;Confirm&rdquo; or &ldquo;Reschedule&rdquo;
                      </p>
                    </div>
                  )}

                  {demoState >= 4 && (
                    <div className="rounded-lg bg-card p-2.5 border border-border text-[11px] font-mono text-muted-foreground flex items-center justify-between animate-in fade-in">
                      <span>Result: Automated Confirmations Logged</span>
                      <span>Status: Reminders Queued</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Stepper Progression Right Column */}
            <div className="lg:col-span-5 space-y-4">
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground">
                Automated System Sequence
              </p>

              <div className="space-y-3 font-mono text-xs">
                <div
                  className={`flex items-center gap-3 rounded-lg border p-3 transition-colors ${
                    demoState >= 1
                      ? "border-emerald-300 bg-emerald-50/50 text-emerald-800"
                      : "border-border/70 bg-card text-muted-foreground"
                  }`}
                >
                  <span className="size-5 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold">
                    {demoState >= 1 ? "✓" : "1"}
                  </span>
                  <span>Trigger: Event detected</span>
                </div>

                <div
                  className={`flex items-center gap-3 rounded-lg border p-3 transition-colors ${
                    demoState >= 2
                      ? "border-emerald-300 bg-emerald-50/50 text-emerald-800"
                      : "border-border/70 bg-card text-muted-foreground"
                  }`}
                >
                  <span className="size-5 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold">
                    {demoState >= 2 ? "✓" : "2"}
                  </span>
                  <span>Logic: AI parsing &amp; rules matching</span>
                </div>

                <div
                  className={`flex items-center gap-3 rounded-lg border p-3 transition-colors ${
                    demoState >= 3
                      ? "border-emerald-300 bg-emerald-50/50 text-emerald-800"
                      : "border-border/70 bg-card text-muted-foreground"
                  }`}
                >
                  <span className="size-5 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold">
                    {demoState >= 3 ? "✓" : "3"}
                  </span>
                  <span>Action: Multi-tool execution</span>
                </div>

                <div
                  className={`flex items-center gap-3 rounded-lg border p-3 transition-colors ${
                    demoState >= 4
                      ? "border-emerald-300 bg-emerald-50/50 text-emerald-800"
                      : "border-border/70 bg-card text-muted-foreground"
                  }`}
                >
                  <span className="size-5 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold">
                    {demoState >= 4 ? "✓" : "4"}
                  </span>
                  <span>State: Complete &amp; logged</span>
                </div>
              </div>

              {demoState === 0 && (
                <p className="text-xs text-muted-foreground italic">
                  Click &ldquo;Run Demo&rdquo; above to watch this sequence execute.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
