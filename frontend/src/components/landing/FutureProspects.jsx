'use client'

import { useState } from 'react'
import styles from './FutureProspectsMod.css'

const features = [
  { title: 'Comprehensive user dashboards', description: 'Manage your profile, applications, and job postings all in one place.' },
  { title: 'Integration with volunteering platforms', description: 'Find volunteering opportunities that align with your career goals.' },
  { title: 'Real-time application tracking', description: 'Stay updated on the status of your job applications in real-time.' },
  { title: 'Advanced search filters', description: 'Find the perfect job or candidate with our powerful search tools.' },
  { title: 'Personalized recommendations', description: 'Receive job or candidate suggestions tailored to your profile and preferences.' },
]

export default function FutureProspects() {
  const [openItem, setOpenItem] = useState<string | null>(null)

  return (
    <section className={styles.prospects}>
      <h2 className={`${styles.title} text-gradient`}>Features in Development</h2>
      <div className={`${styles.accordionWrapper} volumetric`}>
        <div className={styles.accordion}>
          {features.map((feature, index) => (
            <div key={index} className={styles.accordionItem}>
              <button
                className={styles.accordionTrigger}
                onClick={() => setOpenItem(openItem === `item-${index}` ? null : `item-${index}`)}
              >
                {feature.title}
              </button>
              {openItem === `item-${index}` && (
                <div className={styles.accordionContent}>
                  {feature.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


