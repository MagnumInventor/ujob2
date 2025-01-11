import { Button } from '@/components/ui/button'
import styles from './DonationAppeal.module.css'

export default function DonationAppeal() {
  return (
    <section className={styles.donation}>
      <div className={`${styles.content} volumetric`}>
        <h2 className="text-3xl font-bold mb-4 text-gradient">Support Our Mission</h2>
        <p className="paragraph">Help us connect more talent with opportunities and empower the next generation of innovators.</p>
        <Button className={styles.donateButton}>Donate Now</Button>
      </div>
    </section>
  )
}

