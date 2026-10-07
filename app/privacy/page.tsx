import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How CoreBot uses information provided through its contact form.",
  alternates: {
    canonical: "/privacy",
  },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-16 text-foreground sm:px-6 sm:py-24">
      <article className="mx-auto max-w-3xl">
        <a
          href="/"
          className="text-sm font-semibold text-primary hover:underline"
        >
          ← Back to CoreBot
        </a>
        <h1 className="mt-8 text-3xl font-bold tracking-tight sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: October 7, 2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-muted-foreground">
          <section>
            <h2 className="text-lg font-semibold text-foreground">
              Information we collect
            </h2>
            <p className="mt-2">
              When you use the CoreBot contact form, we collect the information
              you choose to provide, such as your name, phone or WhatsApp
              number, business name, and details about the workflow you would
              like to discuss.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              How we use it
            </h2>
            <p className="mt-2">
              CoreBot uses this information to understand your enquiry and
              respond to you about it. We do not knowingly sell the information
              you provide through the contact form.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              Questions about your information
            </h2>
            <p className="mt-2">
              To ask about information you have provided to CoreBot, contact us
              at{" "}
              <a
                href="mailto:hellocorebot@gmail.com"
                className="text-primary hover:underline"
              >
                hellocorebot@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </main>
  )
}
