export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* ── NAVBAR ─────────────────────────────────── */}
      <nav className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="/" className="flex items-center gap-2.5">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <polygon
                points="16,3 27,9.5 27,22.5 16,29 5,22.5 5,9.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
                className="text-primary"
              />
              <circle cx="16" cy="16" r="3" className="fill-primary" />
            </svg>
            <span className="text-base font-semibold tracking-tight">
              <span className="font-bold">CORE</span>
              <span className="font-normal">BOT</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Services</a>
            <a href="#process" className="text-sm text-muted-foreground transition-colors hover:text-foreground">How it works</a>
            <a href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Pricing</a>
            <a href="#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Contact</a>
          </div>

          <a
            href="#contact"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book a free call
          </a>
        </div>
      </nav>

      {/* ── HERO ───────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-32 md:pb-28">
          <p className="mb-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            AI Automation Agency · Jharkhand, India
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Automate the work
            <br />
            that&apos;s slowing you down.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Corebot builds custom AI automations for small and mid-sized businesses — so your team stops doing repetitive tasks and starts doing the work that actually grows revenue.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Book a free call
            </a>
            <a
              href="#process"
              className="rounded-lg border border-border bg-transparent px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              See how it works
            </a>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            No retainers. No lock-in. You own everything we build.
          </p>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────── */}
      <footer className="border-t border-border/60 mt-24">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2.5">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                  <polygon
                    points="16,3 27,9.5 27,22.5 16,29 5,22.5 5,9.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    className="text-primary"
                  />
                  <circle cx="16" cy="16" r="3" className="fill-primary" />
                </svg>
                <span className="text-base font-semibold tracking-tight">
                  <span className="font-bold">CORE</span>
                  <span className="font-normal">BOT</span>
                </span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                AI Automation Agency
              </p>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Services</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#services" className="text-muted-foreground transition-colors hover:text-foreground">Lead Capture</a></li>
                <li><a href="#services" className="text-muted-foreground transition-colors hover:text-foreground">Ops Automation</a></li>
                <li><a href="#services" className="text-muted-foreground transition-colors hover:text-foreground">AI Assistants</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Company</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#process" className="text-muted-foreground transition-colors hover:text-foreground">How it works</a></li>
                <li><a href="#pricing" className="text-muted-foreground transition-colors hover:text-foreground">Pricing</a></li>
                <li><a href="#contact" className="text-muted-foreground transition-colors hover:text-foreground">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Contact</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="mailto:hello@corebot.in" className="text-muted-foreground transition-colors hover:text-foreground">hello@corebot.in</a></li>
                <li><a href="https://wa.me/918102417697" className="text-muted-foreground transition-colors hover:text-foreground">WhatsApp</a></li>
                <li className="text-muted-foreground">Jharkhand, India</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
            © 2026 Corebot Solutions. All rights reserved. Built in Jharkhand, India.
          </div>
        </div>
      </footer>

    </main>
  )
}
