'use client'

import { useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import styles from '../../styles/home/FutureProspects.module.css'

const features = [
  { title: 'Comprehensive user dashboards', description: 'Manage your profile, applications, and job postings all in one place.' },
  { title: 'Integration with volunteering platforms', description: 'Find volunteering opportunities that align with your career goals.' },
  { title: 'Real-time application tracking', description: 'Stay updated on the status of your job applications in real-time.' },
  { title: 'Advanced search filters', description: 'Find the perfect job or candidate with our powerful search tools.' },
  { title: 'Personalized recommendations', description: 'Receive job or candidate suggestions tailored to your profile and preferences.' },
]

export default function FutureProspects() {
  const [openItem, setOpenItem] = useState(null)

  return (
    <section className={styles.prospects}>
      <h2 className="text-3xl font-bold mb-8 text-gradient">Features in Development</h2>
      <div className={`${styles.accordionWrapper} volumetric`}>
        <Accordion type="single" collapsible className={styles.accordion}>
          {features.map((feature, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger onClick={() => setOpenItem(`item-${index}`)}>
                {feature.title}
              </AccordionTrigger>
              <AccordionContent>{feature.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

