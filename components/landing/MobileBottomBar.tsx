"use client"

import * as React from "react"
import { MessageSquare, ArrowRight, Phone } from "lucide-react"

export default function MobileBottomBar() {
  return (
    <aside
      aria-label="Quick Actions"
      className="fixed bottom-0 inset-x-0 z-40 border-t border-border/80 bg-background/95 backdrop-blur-md px-2.5 py-2 md:hidden shadow-lg transition-transform"
    >
      <div className="flex items-center gap-1.5 max-w-md mx-auto">
        <a
          href="tel:+917970927377"
          className="flex-1 flex items-center justify-center gap-1 rounded-lg border border-border bg-card py-2.5 text-xs font-semibold text-foreground shadow-2xs transition-colors hover:bg-secondary active:scale-[0.98]"
          aria-label="Call CoreBot at +91 7970927377"
        >
          <Phone className="size-3.5 text-primary" />
          <span>Call</span>
        </a>
        <a
          href="https://wa.me/917970927377"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1 rounded-lg border border-border bg-card py-2.5 text-xs font-semibold text-foreground shadow-2xs transition-colors hover:bg-secondary active:scale-[0.98]"
          aria-label="Chat with CoreBot on WhatsApp"
        >
          <MessageSquare className="size-3.5 text-emerald-600" />
          <span>WhatsApp</span>
        </a>
        <a
          href="#contact"
          className="flex-[1.2] flex items-center justify-center gap-1 rounded-lg bg-primary py-2.5 text-xs font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary/90 active:scale-[0.98]"
        >
          <span>Discuss</span>
          <ArrowRight className="size-3" />
        </a>
      </div>
    </aside>
  )
}
