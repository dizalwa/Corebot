import * as React from "react"
import { AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react"

export default function BeforeAfter() {
  return (
    <section className="border-b border-border/80 bg-background py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            Process Comparison
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            Manual Work vs. CoreBot
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            See what happens to a typical customer enquiry when your team handles every step
            manually — and what changes when CoreBot takes care of the routine work.
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

              <div className="mt-6 space-y-3 text-xs">
                <div className="flex items-start gap-3 rounded-lg bg-card p-3 border border-red-100 shadow-2xs">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700 font-bold text-[10px]">
                    1
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">New enquiry arrives</p>
                    <p className="text-[11px] text-muted-foreground">
                      A message or call comes in while your team is busy with other work.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-card p-3 border border-red-100 shadow-2xs">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700 font-bold text-[10px]">
                    2
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Someone notices it</p>
                    <p className="text-[11px] text-muted-foreground">
                      The enquiry may sit unanswered until a team member gets time to respond.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-card p-3 border border-red-100 shadow-2xs">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700 font-bold text-[10px]">
                    3
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Details are copied manually</p>
                    <p className="text-[11px] text-muted-foreground">
                      Staff enters names, phone numbers and other details into a spreadsheet or system.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-card p-3 border border-red-100 shadow-2xs">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700 font-bold text-[10px]">
                    4
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Reply is written manually</p>
                    <p className="text-[11px] text-muted-foreground">
                      Staff sends the usual information, one enquiry at a time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-card p-3 border border-red-100 shadow-2xs">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700 font-bold text-[10px]">
                    5
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Follow-up depends on memory</p>
                    <p className="text-[11px] text-muted-foreground">
                      Someone has to remember to call or message the customer later.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-red-200/50 text-xs text-red-800 font-medium">
              Result: More routine work for staff, slower follow-up and a greater chance of things being missed.
            </div>
          </div>

          {/* Column 2: With CoreBot */}
          <div className="rounded-2xl border border-emerald-300 bg-emerald-50/20 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-2 pb-4 border-b border-emerald-200">
                <CheckCircle2 className="size-5 text-emerald-600" />
                <h3 className="text-lg font-bold text-foreground">
                  With CoreBot
                </h3>
              </div>

              <div className="mt-6 space-y-3 text-xs">
                <div className="flex items-start gap-3 rounded-lg bg-card p-3 border border-emerald-100 shadow-2xs">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                    1
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">New enquiry arrives</p>
                    <p className="text-[11px] text-muted-foreground">
                      The enquiry is captured and the process starts automatically.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-card p-3 border border-emerald-100 shadow-2xs">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                    2
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Customer gets a quick reply</p>
                    <p className="text-[11px] text-muted-foreground">
                      A suitable response can be sent without waiting for a staff member to type it.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-card p-3 border border-emerald-100 shadow-2xs">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                    3
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Customer details are recorded</p>
                    <p className="text-[11px] text-muted-foreground">
                      Important information is saved automatically so staff don't have to copy it.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-card p-3 border border-emerald-100 shadow-2xs">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                    4
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Team knows what needs attention</p>
                    <p className="text-[11px] text-muted-foreground">
                      The right team member is notified when human attention is needed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-card p-3 border border-emerald-100 shadow-2xs">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                    5
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Follow-up is scheduled</p>
                    <p className="text-[11px] text-muted-foreground">
                      A reminder is created so promising enquiries don't depend on someone remembering.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-200 text-xs text-emerald-800 font-medium">
              Result: Less repetitive work for staff, more consistent follow-up and fewer things falling through the cracks.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
