import * as React from "react"
import { MessageSquare, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border/80 bg-background pb-28 text-foreground md:pb-12">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-2">
            <a
              href="/"
              className="flex items-center gap-1"
              aria-label="CoreBot Home"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="shrink-0 text-primary"
              >
                <path
                  d="M50 8H26L12 32L26 56H50V44H33L26 32L33 20H50V8Z"
                  fill="currentColor"
                />
                <circle cx="45" cy="32" r="5.5" fill="currentColor" />
              </svg>
              <div className="flex flex-col">
                <span className="text-xl leading-tight font-bold tracking-tight text-foreground">
                  Core<span className="text-primary">Bot</span>
                </span>
                <span className="text-[8.5px] leading-none font-semibold tracking-wider text-muted-foreground uppercase">
                  AUTOMATE • GROW • FOCUS
                </span>
              </div>
            </a>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Practical AI automation for growing businesses. Helping SMEs turn
              repetitive manual processes into clean, automated workflows.
            </p>
            <p className="pt-1 text-xs text-muted-foreground">
              No retainers. No lock-in. You own everything we build.
            </p>
          </div>

          {/* Column 1: Solutions */}
          <div>
            <h4 className="font-mono text-xs font-semibold tracking-wider text-foreground uppercase">
              Solutions
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-muted-foreground sm:text-sm">
              <li>
                <a
                  href="#solutions"
                  className="transition-colors hover:text-foreground"
                >
                  Get More Leads Handled
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="transition-colors hover:text-foreground"
                >
                  Keep Customers Updated
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="transition-colors hover:text-foreground"
                >
                  Save Staff Time
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="transition-colors hover:text-foreground"
                >
                  Automate Your Own Process
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-mono text-xs font-semibold tracking-wider text-foreground uppercase">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-muted-foreground sm:text-sm">
              <li>
                <a
                  href="#use-cases"
                  className="transition-colors hover:text-foreground"
                >
                  Example Workflows
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="transition-colors hover:text-foreground"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="transition-colors hover:text-foreground"
                >
                  Pricing &amp; Terms
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="transition-colors hover:text-foreground"
                >
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-mono text-xs font-semibold tracking-wider text-foreground uppercase">
              Direct Contact
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-muted-foreground sm:text-sm">
              <li className="flex items-center gap-1.5">
                <Mail className="size-3.5 text-primary" />
                <a
                  href="mailto:hellocorebot@gmail.com"
                  className="break-all hover:text-foreground"
                >
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
                <span>Ranchi, Jharkhand, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-border/70 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CoreBot. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#contact" className="hover:text-foreground">
              Contact
            </a>
            <a href="#faq" className="hover:text-foreground">
              FAQ
            </a>
            <a href="#pricing" className="hover:text-foreground">
              Deliverables &amp; Ownership
            </a>
            <a href="/privacy" className="hover:text-foreground">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
