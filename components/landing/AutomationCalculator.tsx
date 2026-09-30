"use client"

import * as React from "react"
import { ArrowRight, Info } from "lucide-react"

export default function AutomationCalculator() {
  const [people, setPeople] = React.useState<number>(3)
  const [hoursPerWeek, setHoursPerWeek] = React.useState<number>(8)
  const [hourlyCost, setHourlyCost] = React.useState<number>(350)

  // Calculations
  const weeklyHours = people * hoursPerWeek
  const monthlyHours = Math.round(weeklyHours * 4.33)
  const monthlyCost = Math.round(monthlyHours * hourlyCost)

  return (
    <section id="calculator" className="border-b border-border/80 bg-background py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
            Interactive Assessment
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            See How Much Time Your Team Spends on Repetitive Work
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Estimate how many hours your team may be spending each month on routine tasks — and what that time could be worth.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-border/90 bg-card p-6 sm:p-10 shadow-xs">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Slider 1: People */}
              <div>
                <div className="flex items-center justify-between text-sm font-semibold text-foreground">
                  <label htmlFor="people-slider">How many people do this task?</label>
                  <span className="font-mono text-base font-bold text-primary">
                    {people} {people === 1 ? "person" : "people"}
                  </span>
                </div>
                <input
                  id="people-slider"
                  type="range"
                  min={1}
                  max={20}
                  value={people}
                  onChange={(e) => setPeople(Number(e.target.value))}
                  className="mt-3 w-full accent-primary cursor-pointer"
                />
                <div className="mt-1 flex justify-between text-[11px] font-mono text-muted-foreground">
                  <span>1 person</span>
                  <span>10 people</span>
                  <span>20 people</span>
                </div>
              </div>

              {/* Slider 2: Hours Per Week */}
              <div>
                <div className="flex items-center justify-between text-sm font-semibold text-foreground">
                  <label htmlFor="hours-slider">How many hours per person each week?</label>
                  <span className="font-mono text-base font-bold text-primary">
                    {hoursPerWeek} hrs / week
                  </span>
                </div>
                <input
                  id="hours-slider"
                  type="range"
                  min={1}
                  max={30}
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="mt-3 w-full accent-primary cursor-pointer"
                />
                <div className="mt-1 flex justify-between text-[11px] font-mono text-muted-foreground">
                  <span>1 hr</span>
                  <span>15 hrs</span>
                  <span>30 hrs</span>
                </div>
              </div>

              {/* Slider 3: Hourly Cost */}
              <div>
                <div className="flex items-center justify-between text-sm font-semibold text-foreground">
                  <label htmlFor="cost-slider">Approximate hourly staff cost?</label>
                  <span className="font-mono text-base font-bold text-primary">
                    ₹{hourlyCost} / hr
                  </span>
                </div>
                <input
                  id="cost-slider"
                  type="range"
                  min={150}
                  max={2000}
                  step={50}
                  value={hourlyCost}
                  onChange={(e) => setHourlyCost(Number(e.target.value))}
                  className="mt-3 w-full accent-primary cursor-pointer"
                />
                <div className="mt-1 flex justify-between text-[11px] font-mono text-muted-foreground">
                  <span>₹150</span>
                  <span>₹1,000</span>
                  <span>₹2,000</span>
                </div>
              </div>
            </div>

            {/* Output Metric Display */}
            <div className="lg:col-span-5 rounded-xl border border-border/80 bg-secondary/40 p-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="font-mono text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Estimated Monthly Time
                </span>

                <div className="pt-2">
                  <p className="text-sm sm:text-base leading-relaxed text-foreground">
                    Your team may be spending about{" "}
                    <span className="font-bold tabular-nums text-2xl sm:text-3xl text-foreground">
                      ~{monthlyHours} hours
                    </span>{" "}
                    a month on this task.
                  </p>
                </div>

                <div className="pt-3 border-t border-border/60">
                  <p className="text-sm sm:text-base leading-relaxed text-foreground">
                    That is roughly{" "}
                    <span className="font-bold tabular-nums text-2xl sm:text-3xl text-primary">
                      ₹{monthlyCost.toLocaleString("en-IN")}
                    </span>{" "}
                    of staff time each month.
                  </p>
                </div>

                <div className="rounded-lg bg-indigo-50/70 p-3 border border-indigo-100 text-xs text-slate-700 space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold text-primary">
                    <Info className="size-3.5 shrink-0" />
                    <span>This may be worth automating.</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-muted-foreground">
                    Not every task should be automated. This estimate simply helps you identify repetitive work that may be worth looking at.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60">
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary/90"
                >
                  <span>Discuss This Workflow</span>
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-[11px] font-mono text-muted-foreground">
            *ESTIMATE ONLY: Every business process is unique. These figures reflect estimated staff time
            spent on routine manual work and do not constitute a financial guarantee.
          </p>
        </div>
      </div>
    </section>
  )
}
