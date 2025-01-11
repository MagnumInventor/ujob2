import { Button } from '../ui/button'
import styles from '../../styles/home/GetStarted.module.css'

export default function GetStarted() {
  return (
    <section className={styles.getStarted}>
      <h2 className="text-3xl font-bold mb-8 text-gradient">How to Get Started</h2>
      <div className={styles.columns}>
        <div className={`${styles.column} volumetric`}>
          <h3 className="text-xl font-semibold mb-4">I am a worker</h3>
          <p className="paragraph">Create your profile and start applying for jobs that match your skills and aspirations.</p>
          <Button variant="outline">Get Started</Button>
        </div>
        <div className={`${styles.column} volumetric`}>
          <h3 className="text-xl font-semibold mb-4">I am a startup/organization</h3>
          <p className="paragraph">Post job openings and find the perfect candidates to help grow your business.</p>
          <Button variant="outline">Post a Job</Button>
        </div>
        <div className={`${styles.column} volumetric`}>
          <h3 className="text-xl font-semibold mb-4">Create a startup (Coming Soon)</h3>
          <p className="paragraph">Launch your startup idea with our resources, support, and access to top talent.</p>
          <Button variant="outline" disabled>Coming Soon</Button>
        </div>
      </div>
    </section>
  )
}

