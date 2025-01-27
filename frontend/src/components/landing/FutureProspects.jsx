'use client'

import { useState } from 'react'
import styles from '../../styles/landing/FutureProspectsMod.module.css'

const features = [
  { title: 'Зручне налаштування профілю', description: 'Керуйте своїм профілем, заявками та вакансіями в одному місці.' },
  { title: 'Інтеграція з благодійними та волонтерськими організаціями', description: 'Знайдіть можливості для волонтерства, що відповідають вашим карʼєрним цілям.' },
  { title: 'Слідкування за заявками в реальному часі', description: 'Отримуйте актуальну інформацію про статус ваших заявок.' },
  { title: 'Розширені пошукові фільтри', description: 'Знайдіть ідеальну роботу чи кандидата за допомогою наших потужних інструментів пошуку.' },
  { title: 'Персоналізовані рекомендації', description: 'Отримуйте пропозиції щодо роботи чи кандидатів, що відповідають вашому профілю та уподобанням.' },
]

export default function FutureProspects() {
  const [openItem, setOpenItem] = useState(null);

  return (
    <section className={styles.prospects}>
      <h2 className={`${styles.title} text-gradient`}>Функції в розробці:</h2>
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


