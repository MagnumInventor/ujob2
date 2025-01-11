import { Button } from '../ui/button'
import styles from '../../styles/home/Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.headline}>
          <span className="text-gradient">Connecting Talent</span> with Opportunities
        </h1>
        <h2 className={styles.subheadline}>ujob.com</h2>
        <p className="paragraph">Empowering the next generation of innovators and businesses.</p>
        <Button className={styles.cta}>Explore Opportunities</Button>
      </div>
      <div className={styles.decoration}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </section>
  )
}

