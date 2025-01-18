'use client'

import { useState, useEffect } from 'react'
import { Users, Rocket } from 'lucide-react'
import styles from '../../styles/landing/ServiceImpactMod.module.css'

const AnimatedNumber = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }, [end, duration])

  return <span>{count}</span>
}

export default function ServiceImpact() {
  return (
    <section className={styles.impact}>
      <div className={`${styles.card} volumetric`}>
        <Users className={styles.icon} />
        <p>
          <AnimatedNumber end={264} /> студентів знайшли свою першу роботу через Ujob.
        </p>
      </div>
      <div className={`${styles.card} volumetric`}>
        <Rocket className={styles.icon} />
        <p>
          <AnimatedNumber end={21} /> Компаній співпрацють з Ujob.
        </p>
      </div>
      <div className={`${styles.card} volumetric`}>
        <Rocket className={styles.icon} />
        <p>
          <AnimatedNumber end={3} /> Стартапи почали фінкціонувати завдяки Ujob.
        </p>
      </div>
    </section>
  )
}

