import * as React from "react"
import { Mail, MessageSquare, MapPin } from "lucide-react"

export default function Founder() {
  return (
    <section className="border-b border-border/80 bg-background py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-border/90 bg-card p-8 sm:p-10 shadow-2xs">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Founder Profile Details */}
            <div className="lg:col-span-8 space-y-4">
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
                Leadership &amp; Accountability
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Built by someone who understands business operations.
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                CoreBot was started with a simple observation: growing businesses lose far too much
                time and mental energy to repetitive administrative chores—copying leads, answering
                the same inquiries, updating sheets, and following up manually.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                We believe practical automation shouldn&apos;t require enterprise budgets or complex IT departments.
                By connecting existing tools with clean, sensible AI workflows, we help business owners
                regain time to focus on actual customer service and revenue growth.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-700">
                <div className="flex items-center gap-1.5">
                  <MapPin className="size-4 text-slate-500" />
                  <span>Based in Jharkhand, India</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="size-4 text-slate-500" />
                  <a
                    href="mailto:hellocorebot@gmail.com"
                    className="text-primary hover:underline"
                  >
                    hellocorebot@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Founder Badge Card */}
            <div className="lg:col-span-4 rounded-xl border border-border/80 bg-secondary/30 p-6 text-center space-y-3">
              <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-xl font-bold text-primary font-mono">
                VK
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  Vipul Kumar
                </h3>
                <p className="text-xs font-medium text-primary">
                  Founder, CoreBot
                </p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Focused on designing resilient automation architectures for Indian and global growing enterprises.
              </p>
              <div className="pt-2">
                <a
                  href="https://wa.me/918102417697"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                >
                  <MessageSquare className="size-3.5 text-emerald-600" />
                  <span>Message Directly on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
