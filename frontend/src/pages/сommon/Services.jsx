import Layout from '../../components/Layout';
import styles from '../../styles/home/Services.module.css';

import React, { useState } from 'react';
import { Briefcase, Users, Rocket, Book } from 'lucide-react';

export default function Services() {
  return (
    <Layout>
      <div className={styles.services}>
        <h1 className={styles.title}>Наші Послуги</h1>
        <p className={styles.description}>
          Ми пропонуємо широкий спектр послуг, які допомагають поєднувати таланти з можливостями та дають бізнесу змогу знаходити потрібних людей.
        </p>
        <div className={styles.servicesList}>
          <div className={styles.serviceItem}>
            <Briefcase className={styles.serviceIcon} />
            <h2 className={styles.serviceName}>Підбір Вакансій</h2>
            <p className={styles.serviceDescription}>
              Наш алгоритм на основі штучного інтелекту підбирає для шукачів роботи найкращі вакансії відповідно до їхніх навичок, досвіду та уподобань.
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Users className={styles.serviceIcon} />
            <h2 className={styles.serviceName}>Залучення Талантів</h2>
            <p className={styles.serviceDescription}>
              Ми допомагаємо бізнесу знаходити та залучати найкращі таланти через нашу широку мережу та передові інструменти рекрутингу.
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Rocket className={styles.serviceIcon} />
            <h2 className={styles.serviceName}>Кар'єрний Розвиток</h2>
            <p className={styles.serviceDescription}>
              Отримуйте доступ до ресурсів, майстер-класів та програм наставництва, щоб прискорити свій професійний розвиток.
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Book className={styles.serviceIcon} />
            <h2 className={styles.serviceName}>Навчання Навичок</h2>
            <p className={styles.serviceDescription}>
              Покращуйте свої навички за допомогою наших онлайн-курсів та навчальних програм, створених з урахуванням потреб індустрії.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

