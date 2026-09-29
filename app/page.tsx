import * as React from "react"
import Navbar from "@/components/landing/Navbar"
import Hero from "@/components/landing/Hero"
import ToolEcosystem from "@/components/landing/ToolEcosystem"
import ProblemSection from "@/components/landing/ProblemSection"
import WhatCoreBotAutomates from "@/components/landing/WhatCoreBotAutomates"
import RealAutomationExamples from "@/components/landing/RealAutomationExamples"
import InteractiveDemos from "@/components/landing/InteractiveDemos"
import BeforeAfter from "@/components/landing/BeforeAfter"
import WhoWeHelp from "@/components/landing/WhoWeHelp"
import HowItWorks from "@/components/landing/HowItWorks"
import WhyCoreBot from "@/components/landing/WhyCoreBot"
import Founder from "@/components/landing/Founder"
import AutomationCalculator from "@/components/landing/AutomationCalculator"
import Pricing from "@/components/landing/Pricing"
import FAQ from "@/components/landing/FAQ"
import FinalCTA from "@/components/landing/FinalCTA"
import Footer from "@/components/landing/Footer"
import MobileBottomBar from "@/components/landing/MobileBottomBar"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-indigo-100 selection:text-indigo-950">
      {/* 1. Header & Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-1">
        {/* 2. Hero Section with Interactive Workflow Monitor */}
        <Hero />

        {/* 3. Connected Tool Ecosystem */}
        <ToolEcosystem />

        {/* 4. Problem Section: The Operational Reality */}
        <ProblemSection />

        {/* 5. What CoreBot Automates: 4 Practical Solutions */}
        <WhatCoreBotAutomates />

        {/* 6. Real Automation Examples (Diagnostic, Real Estate, Coaching) */}
        <RealAutomationExamples />

        {/* 7. Interactive Demos: 3 Live Simulations */}
        <InteractiveDemos />

        {/* 8. Before vs After Comparison */}
        <BeforeAfter />

        {/* 9. Who We Help: Target Industries */}
        <WhoWeHelp />

        {/* 10. How It Works: 3-Stage Process */}
        <HowItWorks />

        {/* 11. Why CoreBot: Principles & Differentiators */}
        <WhyCoreBot />

        {/* 12. Founder & Operational Accountability */}
        <Founder />

        {/* 13. Automation Opportunity Calculator */}
        <AutomationCalculator />

        {/* 14. Transparent One-Time Pricing */}
        <Pricing />

        {/* 15. Comprehensive FAQ */}
        <FAQ />

        {/* 16. Final Consultation CTA & Contact Form */}
        <FinalCTA />
      </main>

      {/* 17. Footer */}
      <Footer />

      {/* 18. Mobile Quick Action Dock (Visible only on <768px screens) */}
      <MobileBottomBar />
    </div>
  )
}
