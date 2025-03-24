"use client"

import Header from "../components/header"
import HeroSection from "../components/hero-section"
import AboutMe from "../components/about-me"
import PortfolioSection from "../components/portfolio-section"
import SkillsSection from "../components/skills-section"
import LearningSection from "../components/learning-section"
import ContactSection from "../components/contact-section"
import Footer from "../components/footer"


export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Header />
      <HeroSection />
      <AboutMe />
      <PortfolioSection />
      <SkillsSection />
      <LearningSection /> 
      <ContactSection />
      <Footer />
    </main>
  )
}

