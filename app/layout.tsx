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
    default: "Corebot — AI Automation Agency",
    template: "%s · Corebot",
  },
  description:
    "Corebot builds custom AI automations for small and mid-sized businesses — lead capture, internal ops, and AI assistants. No retainers. No lock-in. You own everything we build.",
  keywords: [
    "AI automation",
    "automation agency",
    "n8n",
    "Make",
    "Zapier",
    "AI chatbots",
    "business automation",
    "India automation agency",
  ],
  authors: [{ name: "Corebot" }],
  creator: "Corebot",
  metadataBase: new URL("https://corebot.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://corebot.in",
    siteName: "Corebot",
    title: "Corebot — AI Automation Agency",
    description:
      "Custom AI automations for small and mid-sized businesses. Lead capture, internal ops, and AI assistants — built in days, not months.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corebot — AI Automation Agency",
    description:
      "Custom AI automations for small and mid-sized businesses. No retainers. No lock-in.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={cn("dark", "antialiased", jetbrainsMono.variable, inter.variable)}
    >
      <body>
        <ThemeProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
