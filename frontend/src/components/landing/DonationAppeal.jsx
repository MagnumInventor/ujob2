import styles from '../../styles/landing/DonationAppeal.module.css'

export default function DonationAppeal() {
  return (
    <section className={styles.donation}>
      <div className={`${styles.content} volumetric`}>
        <h2 className={`${styles.title} text-gradient`}>Підтримайте майбутнє нашого проекту!</h2>
        <p className="paragraph">Допоможіть нам з'єднати більше талановитих людей з можливостями та надихнути наступне покоління інноваторів, щоб вони змогли реалізувати свій потенціал та змінити світ на краще.</p>
        <a href="https://send.monobank.ua/jar/6NXzCamYky" className="btn btn-primary">Підтримати</a>
      </div>
    </section>
  )
}