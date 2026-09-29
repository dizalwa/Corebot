import * as React from "react"
import { AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react"

export default function BeforeAfter() {
  return (
    <section className="border-b border-border/80 bg-background py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
            Process Comparison
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            Manual Friction vs. Automated Flow
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Compare how a single customer inquiry or routine task travels through a typical manual setup
            versus a structured CoreBot automation.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Column 1: Manual Process */}
          <div className="rounded-2xl border border-red-200/70 bg-red-50/20 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 pb-4 border-b border-red-200/50">
                <AlertTriangle className="size-5 text-red-600" />
                <h3 className="text-lg font-bold text-foreground">
                  Manual Approach
                </h3>
              </div>

              <div className="mt-6 space-y-3 font-mono text-xs">
                <div className="flex items-start gap-3 rounded-lg bg-card p-3 border border-red-100 shadow-2xs">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700 font-bold text-[10px]">
                    1
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Lead or enquiry arrives</p>
                    <p className="text-[11px] text-muted-foreground font-sans">
                      Arrives into email or WhatsApp while staff is busy with another customer.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-card p-3 border border-red-100 shadow-2xs">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700 font-bold text-[10px]">
                    2
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Employee notices (delayed)</p>
                    <p className="text-[11px] text-muted-foreground font-sans">
                      Enquiry sits for minutes or hours before an employee opens the app.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-card p-3 border border-red-100 shadow-2xs">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700 font-bold text-[10px]">
                    3
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Manually copies details</p>
                    <p className="text-[11px] text-muted-foreground font-sans">
                      Copy-pastes phone number, name, and notes into an Excel or Google Sheet.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-card p-3 border border-red-100 shadow-2xs">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700 font-bold text-[10px]">
                    4
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Drafts manual reply</p>
                    <p className="text-[11px] text-muted-foreground font-sans">
                      Types out standard price or service info by hand; tone can vary.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-card p-3 border border-red-100 shadow-2xs">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700 font-bold text-[10px]">
                    5
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Manual reminder set</p>
                    <p className="text-[11px] text-muted-foreground font-sans">
                      Tries to remember to follow up tomorrow; often forgotten during rush hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-red-200/50 text-xs text-red-800 font-medium">
              Result: Inconsistent response times, administrative fatigue, and dropped leads.
            </div>
          </div>

          {/* Column 2: CoreBot Automated Flow */}
          <div className="rounded-2xl border border-emerald-300 bg-emerald-50/20 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-2 pb-4 border-b border-emerald-200">
                <CheckCircle2 className="size-5 text-emerald-600" />
                <h3 className="text-lg font-bold text-foreground">
                  CoreBot Automation
                </h3>
              </div>

              <div className="mt-6 space-y-3 font-mono text-xs">
                <div className="flex items-start gap-3 rounded-lg bg-card p-3 border border-emerald-100 shadow-2xs">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                    1
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Lead or enquiry arrives</p>
                    <p className="text-[11px] text-muted-foreground font-sans">
                      Web form, WhatsApp, or ad webhook triggers the pipeline instantly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-card p-3 border border-emerald-100 shadow-2xs">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                    2
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">AI processes &amp; classifies</p>
                    <p className="text-[11px] text-muted-foreground font-sans">
                      Extracts intent, checks inventory or service rules, and prepares answer.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-card p-3 border border-emerald-100 shadow-2xs">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                    3
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Instant response sent</p>
                    <p className="text-[11px] text-muted-foreground font-sans">
                      Accurate, tailored answer delivered within seconds via WhatsApp or email.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-card p-3 border border-emerald-100 shadow-2xs">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                    4
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Lead recorded automatically</p>
                    <p className="text-[11px] text-muted-foreground font-sans">
                      CRM row, contact card, and team Slack notification created without human touch.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-card p-3 border border-emerald-100 shadow-2xs">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                    5
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Systematic follow-up scheduled</p>
                    <p className="text-[11px] text-muted-foreground font-sans">
                      Automated reminder queued; stops automatically once customer responds.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-200 text-xs text-emerald-800 font-medium">
              Result: Predictable response times, structured follow-up cadence, and reduced manual errors.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
