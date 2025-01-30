import styles from '../../styles/landing/DonationAppeal.module.css'

export default function DonationAppeal() {
  return (
    <section className={styles.donation}>
      <div className={`${styles.content} volumetric`}>
        <h2 className={`${styles.title} text-gradient`}>Підтримайте наш проект!</h2>
        <p className="paragraph">На даному етапі майбтнє нашого проєкту залежить від кожної копійки , тому щиро просимо допомогти нам з'єднати більше талановитих людей з можливостями та надихнути сучасне покоління, щоб вони змогли реалізувати свій потенціал та змінити <strong>Україну</strong> на краще.</p>
        <a href="https://send.monobank.ua/jar/6NXzCamYky" className="btn btn-primary">Підтримати</a>
      </div>
    </section>
  )
}