import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import OurSolutions from '../components/sections/OurSolutions'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import BannerLoop from '../components/ui/BannerLoop'
import { CasesSection } from '../components/cases/CasesSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurSolutions />
      <WhyChooseUs />
      <BannerLoop />
      <CasesSection />
    </>
  )
}