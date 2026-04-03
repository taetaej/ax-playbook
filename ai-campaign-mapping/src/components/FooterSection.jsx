import React from 'react'
import { motion } from 'framer-motion'
import './FooterSection.css'

export default function FooterSection() {
  return (
    <footer className="footer-section">
      <div className="section footer-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="footer-content"
        >
          <h2 className="footer-title">BEST PLAYER</h2>
          <p className="footer-tagline">AI가 만든 새로운 운영 기준</p>
        </motion.div>
      </div>
    </footer>
  )
}
