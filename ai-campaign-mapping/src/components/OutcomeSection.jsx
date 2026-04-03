import React from 'react'
import { motion } from 'framer-motion'
import { Award, Clock, Users, Settings, ArrowRight, CheckCircle, User } from 'lucide-react'
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
    <div className="quality-compare">
      <div className="quality-group">
        <span className="quality-group-label muted">Before</span>
        <div className="quality-metric">
          <div className="quality-row">
            <span className="quality-label">매핑률</span>
            <span className="quality-before">15~50%</span>
          </div>
          <div className="quality-bar-bg">
            <motion.div className="quality-bar-fill-before" style={{ width: '32%' }}
              variants={barVariants} custom={0.2} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          </div>
        </div>
        <div className="quality-metric">
          <div className="quality-row">
            <span className="quality-label">정확도</span>
            <span className="quality-before">?</span>
          </div>
          <div className="quality-bar-bg">
            <motion.div className="quality-bar-fill-before" style={{ width: '0%' }}
              variants={barVariants} custom={0.3} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          </div>
        </div>
      </div>
      <ArrowRight size={18} className="quality-arrow" />
      <div className="quality-group">
        <span className="quality-group-label accent">After</span>
        <div className="quality-metric">
          <div className="quality-row">
            <span className="quality-label">매핑률</span>
            <span className="quality-value">80%</span>
          </div>
          <div className="quality-bar-bg">
            <motion.div className="quality-bar-fill" style={{ width: '80%' }}
              variants={barVariants} custom={0.4} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          </div>
        </div>
        <div className="quality-metric">
          <div className="quality-row">
            <span className="quality-label">정확도</span>
            <span className="quality-value">90%</span>
          </div>
          <div className="quality-bar-bg">
            <motion.div className="quality-bar-fill" style={{ width: '90%' }}
              variants={barVariants} custom={0.6} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          </div>
        </div>
      </div>
    </div>
  )
}

function TimeContent() {
  const [beforeCount, setBeforeCount] = React.useState(0)
  const [afterCount, setAfterCount] = React.useState(0)
  const [started, setStarted] = React.useState(false)
  const ref = React.useRef(null)

  React.useEffect(() => {
    if (!started) return
    const bStart = performance.now()
    const bDuration = 2500
    const tick = (now) => {
      const progress = Math.min((now - bStart) / bDuration, 1)
      setBeforeCount(Math.floor(progress * 60))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)

    const aStart = performance.now()
    const aDuration = 300
    const aTick = (now) => {
      const progress = Math.min((now - aStart) / aDuration, 1)
      setAfterCount(+(progress * 1.5).toFixed(1))
      if (progress < 1) requestAnimationFrame(aTick)
    }
    requestAnimationFrame(aTick)
  }, [started])

  const clockSize = 32
  const center = clockSize / 2
  const handLen = 10

  return (
    <div className="time-counter-wrapper" ref={ref}>
      <motion.div
        className="time-counter-trigger"
        onViewportEnter={() => setStarted(true)}
        viewport={{ once: true }}
      />
      <div className="time-counter-row">
        <span className="time-counter-label muted">Before</span>
        <svg className="time-clock" width={clockSize} height={clockSize} viewBox={`0 0 ${clockSize} ${clockSize}`}>
          <circle cx={center} cy={center} r={center - 2} fill="none" stroke="var(--text-muted)" strokeWidth="1.5" opacity="0.3" />
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 - 90) * (Math.PI / 180)
            const x1 = center + Math.cos(angle) * (center - 5)
            const y1 = center + Math.sin(angle) * (center - 5)
            const x2 = center + Math.cos(angle) * (center - 3)
            const y2 = center + Math.sin(angle) * (center - 3)
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--text-muted)" strokeWidth="1" opacity="0.4" />
          })}
          <motion.line
            x1={center} y1={center}
            x2={center} y2={center - handLen}
            stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round"
            style={{ transformOrigin: `${center}px ${center}px` }}
            animate={started ? { rotate: 360 * 60 } : { rotate: 0 }}
            transition={{ duration: 2.5, ease: 'linear' }}
          />
        </svg>
        <div className="time-counter-num-row">
          <span className="time-counter-num muted">{beforeCount}</span>
          <span className="time-counter-unit muted">시간</span>
        </div>
      </div>
      <ArrowRight size={18} className="time-counter-arrow" />
      <div className="time-counter-row">
        <span className="time-counter-label accent">After</span>
        <svg className="time-clock" width={clockSize} height={clockSize} viewBox={`0 0 ${clockSize} ${clockSize}`}>
          <circle cx={center} cy={center} r={center - 2} fill="none" stroke="var(--accent)" strokeWidth="1.5" opacity="0.3" />
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 - 90) * (Math.PI / 180)
            const x1 = center + Math.cos(angle) * (center - 5)
            const y1 = center + Math.sin(angle) * (center - 5)
            const x2 = center + Math.cos(angle) * (center - 3)
            const y2 = center + Math.sin(angle) * (center - 3)
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--accent)" strokeWidth="1" opacity="0.4" />
          })}
          <motion.line
            x1={center} y1={center}
            x2={center} y2={center - handLen}
            stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"
            style={{ transformOrigin: `${center}px ${center}px` }}
            animate={started ? { rotate: 360 * 1.5 } : { rotate: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </svg>
        <div className="time-counter-num-row">
          <span className="time-counter-num accent">{afterCount}</span>
          <span className="time-counter-unit accent">시간</span>
        </div>
      </div>
    </div>
  )
}

function ResourceContent() {
  return (
    <div className="resource-visual">
      <span className="resource-group-label muted">Before</span>
      <span className="resource-arrow-cell" />
      <span className="resource-group-label accent">After</span>

      <div className="resource-icons before">
        {Array.from({ length: 30 }).map((_, i) => (
          <User key={`b-${i}`} size={11} className="resource-person muted" />
        ))}
      </div>
      <ArrowRight size={18} className="resource-arrow" />
      <div className="resource-icons after">
        {Array.from({ length: 3 }).map((_, i) => (
          <User key={`a-${i}`} size={26} className="resource-person accent" />
        ))}
      </div>

      <span className="resource-group-info muted">30명 · 주 1회</span>
      <span className="resource-arrow-cell" />
      <span className="resource-group-info accent">3명 · 월 1회</span>
    </div>
  )
}

function OperatingContent() {
  return (
    <div className="operating-compare">
      <div className="operating-group">
        <span className="operating-group-label muted">Before</span>
        <span className="operating-value muted">수동 운영</span>
      </div>
      <ArrowRight size={18} className="operating-arrow" />
      <div className="operating-group">
        <span className="operating-group-label accent">After</span>
        <span className="operating-value accent">자동화 100%</span>
      </div>
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
