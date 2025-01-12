import styles from '../../styles/common/DonationAppealMod.module.css'

export default function DonationAppeal() {
  return (
    <section className={styles.donation}>
      <div className={`${styles.content} volumetric`}>
        <h2 className={`${styles.title} text-gradient`}>Підтримайте майбутнє нашого проекту!</h2>
        <p className="paragraph">Help us connect more talent with opportunities and empower the next generation of innovators.</p>
        <a href="#" className="btn btn-primary">Підтримати</a>
      </div>
    </section>
  )
}