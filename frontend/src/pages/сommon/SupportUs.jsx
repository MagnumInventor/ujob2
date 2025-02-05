import React from 'react';

import styles from '../../styles/home/SupportUs.module.css'
import Layout from '../../components/Layout';

export default function SupportUs() {
  return (
    <Layout>
      <div className={styles.supportUs}>
        <h1 className={styles.title}>Підтримайте Нашу Місію</h1>
        <p className={styles.description}>
          Ваша підтримка допомагає нам поєднувати таланти з можливостями та надихати нове покоління інноваторів.
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
