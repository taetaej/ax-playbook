import React from 'react'
import { motion } from 'framer-motion'
import './WhySection.css'

const chatFlow = [
  { type: 'question', label: 'Question 1', text: '왜 데이터에 "이름표"를 붙여야 하나요?' },
  { type: 'answer', text: <>대규모 캠페인 데이터를 수집하더라도,<br />맵핑(라벨링) 없이는 분석 및 AI 솔루션 제공이 불가합니다.</> },
  { type: 'answer', text: 'CJ Mezzomedia 핵심 솔루션은 맵핑 데이터 기반으로 작동합니다.', sub: 'adly · Reach Caster · Budget Optimizer · Anxer · Targetpick · Tableau 등' },
  { type: 'question', label: 'Question 2', text: '그럼 사람이 직접 붙이면 안 되나요?' },
  { type: 'answer', text: <>연 10만 건 이상의 캠페인을 사람이 직접 처리하다 보니,<br />속도와 인력에 한계가 있었고 맵핑률도 낮을 수밖에 없었습니다.</> },
]

const bubbleVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.92 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.25, ease: 'easeOut' },
  }),
}

export default function WhySection() {
  return (
    <section className="why-section">
      <div className="section">
        <div className="section-number">01</div>
        <div className="section-label">WHY · 왜 필요했나?</div>

        <div className="why-layout">
          <div className="why-left">
            <h2 className="section-title">
              캠페인 데이터는 먼저
              <br />
              <span className="accent">"이름표"</span>가 붙어야
              <br />
              쓸 수 있습니다
            </h2>
          </div>

          <div className="why-chat">
            {chatFlow.map((item, i) => (
              <motion.div
                className={`bubble-row ${item.type === 'question' ? 'bubble-row-right' : 'bubble-row-left'}`}
                key={i}
                custom={i}
                variants={bubbleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  className={`bubble ${item.type === 'question' ? 'bubble-question' : 'bubble-answer'}`}
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                >
                  {item.label && <span className="bubble-label">{item.label}</span>}
                  <p>{item.text}</p>
                  {item.sub && <p className="bubble-sub">{item.sub}</p>}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
