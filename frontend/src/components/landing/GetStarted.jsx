import styles from './GetStartedMod.module.css'

export default function GetStarted() {
  return (
    <section className={styles.getStarted}>
      <h2 className={`${styles.title} text-gradient`}>How to Get Started</h2>
      <div className={styles.columns}>
        <div className={`${styles.column} volumetric`}>
          <h3>I am a worker</h3>
          <p className="paragraph">Create your profile and start applying for jobs that match your skills and aspirations.</p>
          <a href="https://stackoverflow.com" className="btn btn-outline">Get Started</a>
        </div>
        <div className={`${styles.column} volumetric`}>
          <h3>I am a startup/organization</h3>
          <p className="paragraph">Post job openings and find the perfect candidates to help grow your business.</p>
          <a href="https://stackoverflow.com" className="btn btn-outline">Post a Job</a>
        </div>
        <div className={`${styles.column} volumetric`}>
          <h3>Create a startup (Coming Soon)</h3>
          <p className="paragraph">Launch your startup idea with our resources, support, and access to top talent.</p>
          <a href="https://stackoverflow.com" className="btn btn-outline" aria-disabled="true">Coming Soon</a>
        </div>
      </div>
    </section>
  )
}

