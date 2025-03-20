// SupportUs.jsx 

import React from 'react';
import styles from '../../styles/home/SupportUs.module.css';
import Layout from '../../components/Layout';
import DownloadButton from '../../components/ui/DownloadButton'; // Припускаю, що цей компонент вже готовий

export default function SupportUs() {
  return (
    <Layout>
      <div className={styles.supportUs}>
        <h1 className={styles.title}>Підтримайте Нашу Місію</h1>
        <p className={styles.description}>
          Ваша підтримка допомагає нам поєднувати таланти з можливостями та надихати нове покоління інноваторів.
          Цей проект є важливим кроком для створення справедливого та ефективного середовища, де кожен має змогу
          реалізувати свій потенціал. Разом ми створюємо майбутнє, яке надихає.
        </p>
        <div className={styles.supportOptions}>
          <div className={styles.supportCard}>
            <h2>Одноразовий Внесок</h2>
            <p>Зробіть одноразовий внесок, щоб підтримати нашу справу.</p>
            <button className={styles.donateButton}>Підтримати</button>
          </div>
          <div className={styles.supportCard}>
            <h2>Щомісячна Підтримка</h2>
            <p>Станьте регулярним донором, щоб допомогти нам планувати майбутнє.</p>
            <button className={styles.donateButton}>Стати Партнером</button>
          </div>
        </div>
        <div className={styles.downloadSection}>
          <h2>Документи для Ознайомлення</h2>
          <p>Ми підготували для вас інформаційні документи, щоб ви могли дізнатися більше про наш проект:</p>
          <div className={styles.downloadButtons}>
            <DownloadButton filePath="frontend\src\data\documents\ABusiness Plan of Ujob.pdf" label="Завантажити бізнес-план проекту" />
            <DownloadButton filePath="/documents/donation_guide.pdf" label="Завантажити Інструкцію для Донорів" />
          </div>
        </div>
        <div className={styles.monobankEmbed}>
          <h2>Швидка Пожертва через Monobank</h2>
          <iframe
            src="https://send.monobank.ua/jar/2Xq9eMkJSo"
            width="320"
            height="460"
            frameBorder="0"
            scrolling="no"
            allowTransparency={true}
          ></iframe>
        </div>
      </div>
    </Layout>
  );
}
