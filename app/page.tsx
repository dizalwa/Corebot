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

      {/* ── SERVICES ───────────────────────────────── */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          01 / Services
        </p>
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
          What we build
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Every automation is custom-built for your workflow — not a template.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Lead Capture & Follow-up</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Automatically capture leads from your website, WhatsApp, and email — then follow up within seconds, not days.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Internal Ops Automation</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Connect your tools so data moves on its own. No more copying between sheets, CRMs, and inboxes.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">AI Assistants & Chatbots</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Custom AI assistants trained on your business — answering customers, qualifying leads, and drafting replies 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* ── PROCESS ────────────────────────────────── */}
      <section id="process" className="border-t border-border/60 mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          02 / Process
        </p>
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
          How it works
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          From first call to live automation in days, not months.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-mono text-3xl font-light text-primary">01</p>
            <h3 className="mt-4 text-lg font-semibold">Free discovery call</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              A 30-minute call to understand your workflow and find the tasks worth automating.
            </p>
          </div>

          <div>
            <p className="font-mono text-3xl font-light text-primary">02</p>
            <h3 className="mt-4 text-lg font-semibold">We build it</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              You get a working automation, tested on your real data. No theory, no slide decks.
            </p>
          </div>

          <div>
            <p className="font-mono text-3xl font-light text-primary">03</p>
            <h3 className="mt-4 text-lg font-semibold">You own it</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We hand over the keys, document everything, and stay available if you need us.
            </p>
          </div>
        </div>
      </section>

      {/* ── PRICING ────────────────────────────────── */}
      <section id="pricing" className="border-t border-border/60 mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          03 / Pricing
        </p>
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
          Simple, one-time pricing
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          No subscriptions. No surprise fees. Pay once, own it forever.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* Starter */}
          <div className="flex flex-col rounded-xl border border-border bg-card p-8">
            <h3 className="text-lg font-semibold">Starter</h3>
            <p className="mt-4 font-mono text-3xl font-bold">₹14,999</p>
            <p className="text-sm text-muted-foreground">one-time</p>
            <ul className="mt-6 flex-1 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">✓</span>
                <span className="text-muted-foreground">1 automation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">✓</span>
                <span className="text-muted-foreground">Up to 3 tools connected</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">✓</span>
                <span className="text-muted-foreground">7-day delivery</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">✓</span>
                <span className="text-muted-foreground">30-day support</span>
              </li>
            </ul>
            <a href="#contact" className="mt-8 rounded-lg border border-border px-5 py-2.5 text-center text-sm font-medium transition-colors hover:bg-secondary">
              Get started
            </a>
          </div>

          {/* Growth — highlighted */}
          <div className="relative flex flex-col rounded-xl border-2 border-primary bg-card p-8">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
              Most popular
            </div>
            <h3 className="text-lg font-semibold">Growth</h3>
            <p className="mt-4 font-mono text-3xl font-bold">₹34,999</p>
            <p className="text-sm text-muted-foreground">one-time</p>
            <ul className="mt-6 flex-1 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">✓</span>
                <span className="text-muted-foreground">Up to 3 automations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">✓</span>
                <span className="text-muted-foreground">Unlimited tool connections</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">✓</span>
                <span className="text-muted-foreground">AI assistant included</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">✓</span>
                <span className="text-muted-foreground">14-day delivery</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">✓</span>
                <span className="text-muted-foreground">60-day support</span>
              </li>
            </ul>
            <a href="#contact" className="mt-8 rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
              Book a free call
            </a>
          </div>

          {/* Custom */}
          <div className="flex flex-col rounded-xl border border-border bg-card p-8">
            <h3 className="text-lg font-semibold">Custom</h3>
            <p className="mt-4 font-mono text-3xl font-bold">Let&apos;s talk</p>
            <p className="text-sm text-muted-foreground">tailored quote</p>
            <ul className="mt-6 flex-1 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">✓</span>
                <span className="text-muted-foreground">Complex workflows</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">✓</span>
                <span className="text-muted-foreground">Multi-team automation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">✓</span>
                <span className="text-muted-foreground">Ongoing retainer available</span>
              </li>
            </ul>
            <a href="#contact" className="mt-8 rounded-lg border border-border px-5 py-2.5 text-center text-sm font-medium transition-colors hover:bg-secondary">
              Contact us
            </a>
          </div>
        </div>
      </section>

      {/* ── FOUNDING CLIENTS ───────────────────────── */}
      <section className="border-t border-border/60 mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 via-transparent to-transparent p-10 md:p-14">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">
            04 / Founding Clients
          </p>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            We&apos;re taking on 3 founding clients.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Get your first automation built at 50% off in exchange for a testimonial and honest feedback. Only 3 spots.
          </p>
          <a href="#contact" className="mt-8 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            Claim a founding spot
          </a>
        </div>
      </section>

      {/* ── WHATSAPP CTA ───────────────────────────── */}
      <section className="border-t border-border/60 mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col items-center rounded-2xl bg-primary px-8 py-14 text-center md:py-20">
          <h2 className="text-2xl font-bold tracking-tight text-primary-foreground md:text-3xl">
            Prefer to just talk?
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-primary-foreground/80">
            Message us on WhatsApp — we usually reply within a few hours.
          </p>
          <a
            href="https://wa.me/918102417697"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary-foreground px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary-foreground/90"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────── */}
      <section id="contact" className="border-t border-border/60 mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              05 / Contact
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Tell us what&apos;s slowing you down
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Fill this in and we&apos;ll reply within one business day.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <p className="text-muted-foreground">
                Or email us directly at{" "}
                <a href="mailto:hello@corebot.in" className="text-primary transition-colors hover:text-primary/80">
                  hello@corebot.in
                </a>
              </p>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Name</label>
              <input
                id="name"
                type="text"
                required
                className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email</label>
              <input
                id="email"
                type="email"
                required
                className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="business" className="mb-1.5 block text-sm font-medium">
                Business name <span className="text-muted-foreground">(optional)</span>
              </label>
              <input
                id="business"
                type="text"
                className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                placeholder="Your business"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                What do you want to automate?
              </label>
              <textarea
                id="message"
                rows={4}
                required
                className="w-full resize-none rounded-lg border border-border bg-card px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                placeholder="Tell us about the repetitive work you want to eliminate..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Send message
            </button>
          </form>
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
