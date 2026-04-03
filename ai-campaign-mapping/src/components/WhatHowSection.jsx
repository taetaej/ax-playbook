import React from 'react'
import { motion } from 'framer-motion'
import { Bot, Sparkles, Workflow, CheckCircle, ArrowRight } from 'lucide-react'
import './WhatHowSection.css'

const originalityItems = [
  { icon: <Sparkles size={16} />, text: '"원래 사람이 하는 일"이라는 고정관념을 깼습니다.' },
  { icon: <Workflow size={16} />, text: '없던 매핑 자동화 흐름을 처음부터 설계했습니다.' },
  { icon: <Bot size={16} />, text: 'ML/LLM으로 복잡한 패턴까지 처리했습니다.' },
]

const updatingItems = [
  { icon: <CheckCircle size={16} />, text: '아이디어가 아니라 실제 데이터로 검증했습니다.' },
  { icon: <ArrowRight size={16} />, text: '"AI 자동 처리 + 사람 검수" 구조로 바꿨습니다.' },
  { icon: <CheckCircle size={16} />, text: '데이터와 매체가 늘어나도 같은 방식으로 바로 확장됩니다.' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function WhatHowSection() {
  return (
    <section className="whathow-section">
      <div className="section">
        <div className="section-number">02</div>
        <div className="section-label">WHAT & HOW · 무엇을 어떻게 바꿨나?</div>

        <div className="whathow-grid">
          {/* Card 1: 독창성 */}
          <motion.div
            className="whathow-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="whathow-card-badge">2-1 / ORIGINALITY</div>
            <div className="whathow-keyword-wrap">
              <span className="whathow-keyword">독창성</span>
              <div className="whathow-keyword-glow" />
            </div>
            <h3 className="whathow-card-title">
              수동이 당연했던 곳에
              <br />
              <span className="accent">AI를 심다</span>
            </h3>
            <ul className="whathow-list">
              {originalityItems.map((item, i) => (
                <li key={i} className="whathow-list-item">
                  <span className="whathow-list-icon">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 2: 업(業,UP)데이트 */}
          <motion.div
            className="whathow-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <div className="whathow-card-badge">2-2 / UPDATING</div>
            <div className="whathow-keyword-wrap">
              <span className="whathow-keyword">
                업<span className="whathow-keyword-sub">(業, UP)</span>데이트
              </span>
              <div className="whathow-keyword-glow" />
            </div>
            <h3 className="whathow-card-title">
              AI 기술로
              <br />
              <span className="accent">불가능을 가능으로</span>
            </h3>
            <ul className="whathow-list">
              {updatingItems.map((item, i) => (
                <li key={i} className="whathow-list-item">
                  <span className="whathow-list-icon">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
