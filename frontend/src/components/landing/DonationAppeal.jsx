import styles from './DonationAppealMod.module.css'

export default function DonationAppeal() {
  return (
    <section className={styles.donation}>
      <div className={`${styles.content} volumetric`}>
        <h2 className={`${styles.title} text-gradient`}>Support Our Mission</h2>
        <p className="paragraph">Help us connect more talent with opportunities and empower the next generation of innovators.</p>
        <a href="#" className="btn btn-primary">Donate Now</a>
      </div>
    </section>
  )
}