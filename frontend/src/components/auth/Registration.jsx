import React from 'react';
import style from '../../styles/common/Form.module.css';

const Form = () => {
  const regions = [
    "Вінницька область", "Волинська область", "Дніпропетровська область",
    "Донецька область", "Житомирська область", "Закарпатська область",
    "Запорізька область", "Івано-Франківська область", "Київська область",
    "Кіровоградська область", "Луганська область", "Львівська область",
    "Миколаївська область", "Одеська область", "Полтавська область",
    "Рівненська область", "Сумська область", "Тернопільська область",
    "Харківська область", "Херсонська область", "Хмельницька область",
    "Черкаська область", "Чернівецька область", "Чернігівська область",
    "м. Київ"
  ];

  return (
    <div className={style.wrapper}>
      <section className={style.container}>
        <header className={style.header}>Форма реєстрації</header>
        <form className={style.form} action="#">
          <div className={style.inputBox}>
            <label>Повне ім'я</label>
            <input required placeholder="Введіть повне ім'я" type="text" />
          </div>
          <div className={style.column}>
            <div className={style.inputBox}>
              <label>Номер телефону</label>
              <input required placeholder="Введіть номер телефону" type="telephone" />
            </div>
            <div className={style.inputBox}>
              <label>Дата народження</label>
              <input required placeholder="Введіть дату народження" type="date" />
            </div>
          </div>
          <div className={style.genderBox}>
            <label>Стать</label>
            <div className={style.genderOption}>
              <div className={style.gender}>
                <input defaultChecked name="gender" id="check-male" type="radio" />
                <label htmlFor="check-male">Чоловік</label>
              </div>
              <div className={style.gender}>
                <input name="gender" id="check-female" type="radio" />
                <label htmlFor="check-female">Жінка</label>
              </div>
              <div className={style.gender}>
                <input name="gender" id="check-other" type="radio" />
                <label htmlFor="check-other">Не вказувати</label>
              </div>
            </div>
          </div>
          <div className={style.inputBox}>
            <label>Адреса</label>
            <input required placeholder="Введіть адресу" type="text" />
            <div className={style.column}>
              <div className={style.selectBox}>
                <select required>
                  <option hidden>Область</option>
                  {regions.map((region, index) => (
                    <option key={index}>{region}</option>
                  ))}
                </select>
              </div>
              <input required placeholder="Введіть місто" type="text" />
            </div>
          </div>
          <button className={style.button}>Зареєструватися</button>
        </form>

        {/* Форма для роботодавців */}
        <header className={style.header}>Реєстрація роботодавця</header>
        <form className={style.form} action="#">
          <div className={style.inputBox}>
            <label>Назва компанії</label>
            <input required placeholder="Введіть назву компанії" type="text" />
          </div>
          <div className={style.inputBox}>
            <label>Тип організації</label>
            <div className={style.selectBox}>
              <select required>
                <option hidden>Оберіть тип</option>
                <option>Компанія</option>
                <option>ФОП</option>
                <option>Громадська організація</option>
                <option>Інше</option>
              </select>
            </div>
          </div>
          <div className={style.inputBox}>
            <label>Контактна особа</label>
            <input required placeholder="Введіть ім'я контактної особи" type="text" />
          </div>
          <div className={style.inputBox}>
            <label>Номер телефону</label>
            <input required placeholder="Введіть номер телефону" type="telephone" />
          </div>
          <div className={style.inputBox}>
            <label>Адреса</label>
            <div className={style.column}>
              <div className={style.selectBox}>
                <select required>
                  <option hidden>Область</option>
                  {regions.map((region, index) => (
                    <option key={index}>{region}</option>
                  ))}
                </select>
              </div>
              <input required placeholder="Введіть місто" type="text" />
            </div>
          </div>
          <button className={style.button}>Зареєструвати роботодавця</button>
        </form>
      </section>
    </div>
  );
};

export default Form;

