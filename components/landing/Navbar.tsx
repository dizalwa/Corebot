"use client"

import * as React from "react"
import { Menu, X, MessageSquare, ArrowRight } from "lucide-react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand Logo */}
        <a
          href="/"
          className="flex items-center gap-1 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md"
          aria-label="CoreBot Home"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="text-primary shrink-0"
          >
            <path
              d="M50 8H26L12 32L26 56H50V44H33L26 32L33 20H50V8Z"
              fill="currentColor"
            />
            <circle cx="45" cy="32" r="5.5" fill="currentColor" />
          </svg>
          <div className="flex flex-col">
            <span className="inline-block text-xl font-bold tracking-tight leading-tight text-foreground scale-x-[1.38] origin-left">
              Core<span className="text-primary">Bot</span>
            </span>
            <span className="text-[8.5px] font-semibold tracking-wider text-muted-foreground uppercase leading-none">
              AUTOMATE • GROW • FOCUS
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main Navigation">
          <a
            href="#solutions"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1.5 py-1"
          >
            Solutions
          </a>
          <a
            href="#use-cases"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1.5 py-1"
          >
            Use Cases
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1.5 py-1"
          >
            How It Works
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1.5 py-1"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1.5 py-1"
          >
            FAQ
          </a>
        </nav>

        {/* Desktop Action CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://wa.me/918102417697"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3.5 py-2 text-xs font-semibold text-foreground shadow-xs transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Chat with CoreBot on WhatsApp"
          >
            <MessageSquare className="size-3.5 text-emerald-600" />
            <span>WhatsApp</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <span>Discuss Your Workflow</span>
            <ArrowRight className="size-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="https://wa.me/918102417697"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border bg-card p-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Chat on WhatsApp"
          >
            <MessageSquare className="size-4 text-emerald-600" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg border border-border bg-card p-2 text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Drawer / Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-border bg-background px-4 pt-3 pb-6 lg:hidden shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            <a
              href="#solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Solutions
            </a>
            <a
              href="#use-cases"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Use Cases
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Pricing
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              FAQ
            </a>

            <div className="pt-3 border-t border-border flex flex-col gap-2.5">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary/90"
              >
                <span>Discuss Your Workflow</span>
                <ArrowRight className="size-4" />
              </a>
              <a
                href="https://wa.me/918102417697"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg border border-border bg-card py-2.5 text-sm font-semibold text-foreground shadow-xs transition-colors hover:bg-secondary"
              >
                <MessageSquare className="size-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
