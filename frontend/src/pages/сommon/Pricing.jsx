import Layout from '../../components/Layout';
import styles from '../../styles/home/Pricing.module.css';

export default function Pricing() {
  return (
    <Layout>
      <div className={styles.pricing}>
        <h1 className={styles.title}>Ціни</h1>   
        <p className={styles.description}>
          Ознайомтесь з нашими варіантами ціноутворення для шукачів роботи та роботодавців. Знайдіть план, який відповідає вашим потребам.
        </p>

        <h2 className={styles.forworker}>Для працівників</h2>
        <div className={styles.pricingPlans}>
          <div className={styles.plan}>
            <h2 className={styles.planName}>Базовий</h2>
            <p className={styles.planPrice}>39 &#8372; U+20B4</p>
            <ul className={styles.planFeatures}>
              <li>Створення профілю</li>
              <li>Перегляд вакансій</li>
              <li>Подання до 15 заявок на місяць</li>
            </ul>
            <button className="btn btn-primary">Почати</button>
          </div>
          <div className={styles.plan}>
            <h2 className={styles.planName}>Профі</h2>
            <p className={styles.planPrice}>&#8372;2.5/міцясь</p>
            <ul className={styles.planFeatures}>
              <li>Просування профілю</li>
              <li>Персоналізований дизайн , вміст профілю</li>
              <li>Подання до 50 заявок на місяць</li>
              <li>Доступ до <strong>ШІ</strong> аналітики*</li>
            </ul>
            <button className="btn btn-primary">Оновити до профі</button>
          </div>
          </div>

          

      <h2 className={styles.forcompany} >Для роботодавців</h2>
        <div className={styles.pricingPlans}>
          <div className={styles.plan}>
            <h2 className={styles.planName}>Базовий</h2>
            <p className={styles.planPrice}><strong>Безплатно</strong> 2 місяці дальше - &#8372;1/місяць</p>
            <ul className={styles.planFeatures}>
              <li>Створення профілю компанії/організації</li>
              <li>Перегляд заявок</li>
              <li>Подання &gt5 вакансій/місяць</li>
            </ul>
            <button className="btn btn-primary">Почати</button>
          </div>
          <div className={styles.plan}>
            <h2 className={styles.planName}>Профі</h2>
            <p className={styles.planPrice}>&#8372;452.99/міцясь</p>
            <ul className={styles.planFeatures}>
              <li>Просування вакансій</li>
              <li>Подання &gt25 вакансій/місяць</li>
              <li>Розширені методи комунікації з кандидатами</li>             
              <li>Доступ до <strong>ШІ</strong> аналітика*</li>
            </ul>
            <button className="btn btn-primary">Оновити до профі</button>
          </div>
          <div className={styles.plan}>
            <h2 className={styles.planName}>Профі</h2>
            <p className={styles.planPrice}>&#8372;14.99/місяць</p>
            <ul className={styles.planFeatures}>
              <li>Усі функції Профі плану</li>
              <li>Персоналізований дизайн , вміст профілю</li>
              <li>Безлімітне подання вакансій</li>
              <li>Пріоритетна підтримка</li>
              <li>Перевірка резюме ШІ</li>
              <li>Додаткові функції<strong>ШІ</strong> помічника</li>
            </ul>
            <button className="btn btn-primary">Оновити до VIP</button>
          </div>
          <div className={styles.plan}>
            <h2 className={styles.planName}>Корпоративний</h2>
            <p className={styles.planPrice}>Індивідуально</p>
            <ul className={styles.planFeatures}>
              <li>Усі функції VIP плану</li>
              <li>Індивідуальні рішення</li>
              <li>Персоналізований пошук за межами платформи</li>
              <li>Виділений менеджер акаунтів</li>
              <li>Доступ до API</li>
            </ul>
            <button className="btn btn-primary">Зв'язатися з відділом продажу</button>
          </div>  
          </div>

      </div>
    </Layout>
  );
}


