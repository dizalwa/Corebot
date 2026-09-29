import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  title: {
    default: "CoreBot | Practical AI Automation for Growing Businesses",
    template: "%s · CoreBot",
  },
  description:
    "CoreBot builds practical AI automations for businesses, helping automate repetitive tasks, customer communication, lead follow-ups and everyday workflows.",
  keywords: [
    "AI automation",
    "business automation",
    "workflow automation",
    "SME automation",
    "WhatsApp automation",
    "lead automation",
    "custom AI workflows",
    "practical AI",
  ],
  authors: [{ name: "CoreBot", url: "https://corebot.in" }],
  creator: "CoreBot",
  metadataBase: new URL("https://corebot.in"),
  alternates: {
    canonical: "https://corebot.in",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://corebot.in",
    siteName: "CoreBot",
    title: "CoreBot | Practical AI Automation for Growing Businesses",
    description:
      "CoreBot builds practical AI automations for businesses, helping automate repetitive tasks, customer communication, lead follow-ups and everyday workflows.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CoreBot | Practical AI Automation for Growing Businesses",
    description:
      "CoreBot builds practical AI automations for businesses, helping automate repetitive tasks, customer communication, lead follow-ups and everyday workflows.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CoreBot",
  url: "https://corebot.in",
  logo: "https://corebot.in/icon.svg",
  description:
    "CoreBot builds practical AI automations for businesses, helping automate repetitive tasks, customer communication, lead follow-ups and everyday workflows.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ranchi",
    addressRegion: "Jharkhand",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "hellocorebot@gmail.com",
    contactType: "customer service",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", jetbrainsMono.variable, inter.variable)}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
