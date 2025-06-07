import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import OurSolutions from '../components/sections/OurSolutions'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import BannerLoop from '../components/ui/BannerLoop'
import { CasesSection } from '../components/cases/CasesSection'
import SolutionsSection from '../components/sections/SolutionsSection'
import { FaqSection } from '../components/sections/FaqSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurSolutions />
      <WhyChooseUs />
      <BannerLoop />
      <CasesSection />
      <SolutionsSection />
      <FaqSection />
    </>
  )
}