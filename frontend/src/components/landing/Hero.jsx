import styles from '../../styles/landing/HeroMod.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.headline}>
          <span className="text-gradient">Поєднуємо талант</span> з можливостями
        </h1>
        <h2 className={styles.subheadline}>ujob.com</h2>
        <p className="paragraph">Розширення можливостей нового покоління інноваторів і компаній</p>
        <a href="#" className="btn btn-primary">Досліджуйте можливості</a>
      </div>
      <div className={styles.decoration}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </section>
  )
}