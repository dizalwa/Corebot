import * as React from "react"
import Image from "next/image"
import { Mail, MessageSquare, MapPin } from "lucide-react"

export default function Founder() {
  return (
    <section className="border-b border-border/80 bg-secondary py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-border/90 bg-card p-8 sm:p-10 shadow-2xs">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Founder Profile Details */}
            <div className="lg:col-span-8 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Who&apos;s Behind CoreBot
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Built by someone who understands business operations.
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                After years in banking and working closely with businesses, I saw how much time
                teams spend on repetitive follow-ups, customer communication, data entry and
                routine processes.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                CoreBot was created to help businesses take that repetitive work off their
                team&apos;s hands using practical automation — without making technology complicated.
              </p>

              <p className="text-sm font-medium text-foreground pt-1">
                Business-first. Practical. Built for real-world SME operations.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-700">
                <div className="flex items-center gap-1.5">
                  <MapPin className="size-4 text-slate-500" />
                  <span>Based in Ranchi, Jharkhand, India</span>
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
            <div className="lg:col-span-4 rounded-xl border border-border/80 bg-secondary/40 p-6 text-center space-y-3">
              <div className="relative mx-auto size-20 sm:size-24 overflow-hidden rounded-full border border-border/80 shadow-xs">
                <Image
                  src="/founder.png"
                  alt="Vipul Kumar, Founder of CoreBot"
                  width={96}
                  height={96}
                  className="size-full object-cover object-[50%_25%]"
                  priority
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  Vipul Kumar
                </h3>
                <p className="text-xs font-medium text-primary">
                  Founder, CoreBot | Ex-Banker
                </p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Helping growing businesses identify and automate repetitive work with practical automation.
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
