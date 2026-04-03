import React from 'react'
import { motion } from 'framer-motion'
import { Award, Clock, Users, Settings, ArrowRight, CheckCircle } from 'lucide-react'
import './OutcomeSection.css'

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
}

const barVariants = {
  hidden: { scaleX: 0 },
  visible: (delay) => ({
    scaleX: 1,
    transition: { duration: 0.8, delay, ease: 'easeOut' },
  }),
}

function QualityContent() {
  return (
    <>
      <div className="quality-metric">
        <div className="quality-row">
          <span className="quality-label">매핑률</span>
          <span className="quality-value">80%</span>
        </div>
        <div className="quality-bar-bg">
          <motion.div className="quality-bar-fill" style={{ width: '80%' }}
            variants={barVariants} custom={0.2} initial="hidden" whileInView="visible" viewport={{ once: true }} />
        </div>
      </div>
      <div className="quality-metric">
        <div className="quality-row">
          <span className="quality-label">정확도</span>
          <span className="quality-value">90%</span>
        </div>
        <div className="quality-bar-bg">
          <motion.div className="quality-bar-fill" style={{ width: '90%' }}
            variants={barVariants} custom={0.4} initial="hidden" whileInView="visible" viewport={{ once: true }} />
        </div>
      </div>
    </>
  )
}

function TimeContent() {
  return (
    <div className="time-bars">
      <div className="time-bar-col">
        <span className="time-bar-label muted">60시간</span>
        <div className="time-bar-track">
          <motion.div className="time-bar-fill before"
            initial={{ height: 0 }} whileInView={{ height: '100%' }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} />
        </div>
        <span className="time-bar-name">Before</span>
      </div>
      <div className="time-bar-col">
        <span className="time-bar-label accent">1.5시간</span>
        <div className="time-bar-track">
          <motion.div className="time-bar-fill after"
            initial={{ height: 0 }} whileInView={{ height: '2.5%' }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} />
        </div>
        <span className="time-bar-name">After</span>
      </div>
    </div>
  )
}

function ResourceContent() {
  return (
    <div className="resource-compare">
      <div className="resource-item">
        <span className="resource-num muted">30</span>
        <span className="resource-text">명</span>
        <span className="resource-freq muted">주 1회</span>
      </div>
      <ArrowRight size={18} className="resource-arrow" />
      <div className="resource-item">
        <span className="resource-num accent">3</span>
        <span className="resource-text">명</span>
        <span className="resource-freq accent">월 1회</span>
      </div>
    </div>
  )
}

function OperatingContent() {
  return (
    <div className="operating-visual">
      <span className="operating-label-muted">수동</span>
      <ArrowRight size={18} className="operating-arrow" />
      <span className="operating-label-accent">자동화 100%</span>
    </div>
  )
}

const cards = [
  { key: 'quality', icon: <Award size={18} />, label: 'QUALITY', message: '실무에 바로 쓰는 품질 확보', content: <QualityContent /> },
  { key: 'time', icon: <Clock size={18} />, label: 'TIME', message: '분석 대응 속도 대폭 개선', content: <TimeContent /> },
  { key: 'resource', icon: <Users size={18} />, label: 'RESOURCE', message: '운영 인력 최소화', content: <ResourceContent /> },
  { key: 'operating', icon: <Settings size={18} />, label: 'OPERATING', message: '표준 프로세스 기반 마련', content: <OperatingContent /> },
]

const qualitativeEffects = [
  '분석 대응 속도 개선',
  '반복 업무와 실수 감소',
  '핵심 인력이 더 중요한 일에 집중',
  '새 매체도 같은 방식으로 빠르게 연결 가능',
]

export default function OutcomeSection() {
  return (
    <section className="outcome-section">
      <div className="section">
        <div className="section-number">03</div>
        <div className="section-label">OUTCOME · 어떤 성과를 이루어냈나?</div>
        <motion.p
          className="outcome-highlight"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <span className="accent">속도, 인력, 운영 방식까지</span> — 숫자가 증명하는 변화입니다
        </motion.p>

        <div className="outcome-grid">
          {cards.map((c, i) => (
            <motion.div
              className="outcome-card"
              key={c.key}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="outcome-card-header">
                <span className="outcome-card-icon">{c.icon}</span>
                <span className="outcome-card-label">{c.label}</span>
              </div>
              <p className="outcome-card-message">{c.message}</p>
              <div className="outcome-card-body">
                {c.content}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 정성적 효과 */}
        <motion.div
          className="qualitative-bar"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="qualitative-title">그래서 무엇이 달라졌나</span>
          <div className="qualitative-items">
            {qualitativeEffects.map((text, i) => (
              <div className="qualitative-item" key={i}>
                <CheckCircle size={14} className="qualitative-check" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
