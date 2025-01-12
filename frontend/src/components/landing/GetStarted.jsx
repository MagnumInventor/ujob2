import styles from './GetStartedMod.module.css'

export default function GetStarted() {
  return (
    <section className={styles.getStarted}>
      <h2 className={`${styles.title} text-gradient`}>Як розпочати:</h2>
      <div className={styles.columns}>
        <div className={`${styles.column} volumetric`}>
          <h3>"Я хочу працювати"</h3>
          <p className="paragraph">Створіть власний профіль та додавайте важливу інформацію, навички...</p>
          <a href="https://stackoverflow.com" className="btn btn-outline">Почати</a>
        </div>
        <div className={`${styles.column} volumetric`}>
          <h3>"Я маю стартап/організацію"</h3>
          <p className="paragraph">Публікуйте оголошення на вільні робочі місця та находьте найкращих кандидатів для розвитку вашого проекту</p>
          <a href="https://stackoverflow.com" className="btn btn-outline">Публікувати оголошення</a>
        </div>
        <div className={`${styles.column} volumetric`}>
          <h3>"Хочу створити стартап" (В розробці)</h3>
          <p className="paragraph">Запустіть власну справу за допомогою Ujob</p>
          <a href="https://stackoverflow.com" className="btn btn-outline" aria-disabled="true">В процесі</a>
        </div>
      </div>
    </section>
  )
}

