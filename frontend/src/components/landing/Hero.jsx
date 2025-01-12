import styles from './HeroMod.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.headline}>
          <span className="text-gradient">Connecting Talent</span> with Opportunities
        </h1>
        <h2 className={styles.subheadline}>ujob.com</h2>
        <p className="paragraph">Empowering the next generation of innovators and businesses.</p>
        <a href="#" className="btn btn-primary">Explore Opportunities</a>
      </div>
      <div className={styles.decoration}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </section>
  )
}