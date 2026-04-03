import React from 'react'
import { motion } from 'framer-motion'
import './HeroSection.css'

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-bg-glow" />
      <div className="section hero-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="hero-badge">AI CAMPAIGN MAPPING</span>
        </motion.div>
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          캠페인 데이터를 쓰기 좋게 만드는 <span className="hero-highlight">"이름표 붙이기"</span> 일을,
          <br />
          사람이 아니라 AI가 맡도록 바꾼 사례
        </motion.h1>
        <motion.p
          className="hero-sub"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          연 10만 건 이상의 캠페인 맵핑을 AI로 자동화한 CJ Mezzomedia AX팀의 여정
        </motion.p>
      </div>
    </section>
  )
}
