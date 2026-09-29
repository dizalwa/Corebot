import * as React from "react"
import ContactForm from "./ContactForm"
import { MessageSquare, Mail, MapPin, CheckCircle2 } from "lucide-react"

export default function FinalCTA() {
  return (
    <section id="contact" className="border-b border-border/80 bg-secondary py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Direct Invitation & Contact Context */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
                Get In Touch
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
                Tell Us What Your Team Does Manually.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We&apos;ll help identify processes where practical automation could reduce repetitive work.
                No pressure, no hard sell—just honest feedback on whether automation is viable for your workflow.
              </p>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="rounded-xl border border-border/80 bg-secondary/30 p-5 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-foreground">
                Prefer an immediate conversation?
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Send us a direct message on WhatsApp. We answer questions directly and can review your current manual steps.
              </p>
              <a
                href="https://wa.me/918102417697"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-emerald-700"
              >
                <MessageSquare className="size-4" />
                <span>Chat on WhatsApp (+91 8102417697)</span>
              </a>
            </div>

            {/* Credibility Notes */}
            <div className="space-y-2.5 text-xs text-muted-foreground pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                <span>We typically reply within one business day</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                <span>100% confidential discussion of your business steps</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="size-4 text-slate-500 shrink-0" />
                <span>Direct email: <a href="mailto:hellocorebot@gmail.com" className="text-primary hover:underline">hellocorebot@gmail.com</a></span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-4 text-slate-500 shrink-0" />
                <span>Operating from Ranchi, Jharkhand, India</span>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Contact Form */}
          <div className="lg:col-span-7 rounded-2xl border border-border/90 bg-card p-6 sm:p-8 shadow-xs">
            <h3 className="text-base font-bold text-foreground mb-4">
              Describe Your Process
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
