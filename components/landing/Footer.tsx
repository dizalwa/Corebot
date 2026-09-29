import * as React from "react"
import { MessageSquare, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border/80 bg-background text-foreground pb-28 md:pb-12">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <a href="/" className="flex items-center gap-2" aria-label="CoreBot Home">
              <svg
                width="28"
                height="28"
                viewBox="4 4 48 56"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="text-primary shrink-0"
              >
                <path
                  fill="currentColor"
                  d="M32 6C17.6 6 6 17.6 6 32s11.6 26 26 26c2.4 0 4.8-.3 7-1v-9.2c-2.2.8-4.5 1.2-7 1.2-9.4 0-17-7.6-17-17s7.6-17 17-17c2.5 0 4.8.5 7 1.2V7c-2.2-.7-4.6-1-7-1z"
                />
                <circle cx="40" cy="32" r="6" fill="currentColor" />
              </svg>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Core<span className="text-primary">Bot</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Practical AI automation for growing businesses. Helping SMEs turn repetitive manual processes into clean, automated workflows.
            </p>
            <p className="text-xs text-muted-foreground pt-1">
              No retainers. No lock-in. You own everything we build.
            </p>
          </div>

          {/* Column 1: Solutions */}
          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
              Solutions
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-muted-foreground">
              <li>
                <a href="#solutions" className="transition-colors hover:text-foreground">
                  Lead &amp; Sales Follow-Up
                </a>
              </li>
              <li>
                <a href="#solutions" className="transition-colors hover:text-foreground">
                  Customer AI Assistants
                </a>
              </li>
              <li>
                <a href="#solutions" className="transition-colors hover:text-foreground">
                  Internal Ops &amp; Sheets Sync
                </a>
              </li>
              <li>
                <a href="#solutions" className="transition-colors hover:text-foreground">
                  Custom Automations
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-muted-foreground">
              <li>
                <a href="#use-cases" className="transition-colors hover:text-foreground">
                  Example Workflows
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="transition-colors hover:text-foreground">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="transition-colors hover:text-foreground">
                  Pricing &amp; Terms
                </a>
              </li>
              <li>
                <a href="#faq" className="transition-colors hover:text-foreground">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
              Direct Contact
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-muted-foreground">
              <li className="flex items-center gap-1.5">
                <Mail className="size-3.5 text-primary" />
                <a href="mailto:hellocorebot@gmail.com" className="hover:text-foreground break-all">
                  hellocorebot@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-1.5">
                <MessageSquare className="size-3.5 text-emerald-600" />
                <a
                  href="https://wa.me/918102417697"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  WhatsApp: +91 8102417697
                </a>
              </li>
              <li className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="size-3.5 text-slate-400" />
                <span>Jharkhand, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border/70 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} CoreBot Solutions. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#contact" className="hover:text-foreground">
              Contact
            </a>
            <a href="#faq" className="hover:text-foreground">
              Data Privacy FAQ
            </a>
            <a href="#pricing" className="hover:text-foreground">
              Deliverables &amp; Ownership
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
