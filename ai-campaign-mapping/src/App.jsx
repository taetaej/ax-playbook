import React from 'react'
import { motion } from 'framer-motion'
import HeroSection from './components/HeroSection'
import WhySection from './components/WhySection'
import WhatHowSection from './components/WhatHowSection'
import OutcomeSection from './components/OutcomeSection'
import './App.css'

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

function App() {
  return (
    <div className="app">
      <HeroSection />
      <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
        <WhySection />
      </motion.div>
      <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
        <WhatHowSection />
      </motion.div>
      <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
        <OutcomeSection />
      </motion.div>
    </div>
  )
}

export default App
