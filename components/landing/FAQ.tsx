"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"

const FAQS = [
  {
    q: "What exactly can CoreBot automate?",
    a: "CoreBot can automate repetitive work such as responding to enquiries, sending reminders, following up with customers, recording information, sending notifications, and moving information between the tools your team already uses.",
  },
  {
    q: "Do I need to change the way my team works?",
    a: "No. We start with the way your business already works and look for repetitive steps that can be simplified or automated. We only change what makes sense.",
  },
  {
    q: "Will my team still be involved?",
    a: "Yes. CoreBot handles routine work, while your team stays in control of decisions, approvals, customer conversations, and anything that needs human judgement.",
  },
  {
    q: "Will I need to buy new software?",
    a: "Not necessarily. We first look at the tools you already use and see what can be connected. If a new tool is genuinely useful, we will explain why before adding it.",
  },
  {
    q: "What happens if something goes wrong?",
    a: "We test the automation before handing it over and provide support after launch. We also make sure your team knows what the automation is doing and what to do if attention is needed.",
  },
  {
    q: "Who owns the automation after it is built?",
    a: "You do. The agreed automation and setup belong to your business. We do not want you to be unnecessarily locked into CoreBot.",
  },
  {
    q: "How much does automation cost?",
    a: "Our Starter automation package begins at ₹19,999 one-time. The final cost depends on what you want automated and how complex the automation is. You can see the available packages above.",
  },
  {
    q: "How do we get started?",
    a: "Simply tell us about one repetitive task that takes your team's time. We will discuss the current process and identify whether it is worth automating.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className="border-b border-border/80 bg-background py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            Questions Business Owners Usually Ask
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            A few straightforward answers before we get started.
          </p>
        </div>

        {/* 8 FAQ Accordion Items */}
        <div className="mt-12 space-y-3.5" role="region" aria-label="Frequently Asked Questions">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-xl border border-border/90 bg-card transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`size-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-border/60 px-5 pt-3 pb-5 text-xs sm:text-sm leading-relaxed text-muted-foreground animate-in fade-in duration-150">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
