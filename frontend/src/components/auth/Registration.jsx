'use client';

import React, { useState } from 'react';
import styles from './Form.module.css';

const initialFormState = {
  isCompany: false,
  name: '',
  email: '',
  mobile: '',
  address: '',
  region: '',
  sex: '',
  dateOfBirth: '',
  companyType: '',
};

export default function RegistrationForm() {
  const [formData, setFormData] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Реєстрація успішна!');
    setFormData(initialFormState); // Очищення форми після відправки
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Реєстрація</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>
            <input
              type="checkbox"
              name="isCompany"
              checked={formData.isCompany}
              onChange={handleInputChange}
            />
            Реєстрація як компанія
          </label>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="name">Ім'я {formData.isCompany && 'компанії'}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="mobile">Номер телефону</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="address">Адреса</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="region">Область</label>
          <select
            id="region"
            name="region"
            value={formData.region}
            onChange={handleInputChange}
            required
          >
            <option value="">Оберіть область</option>
            <option value="Київська">Київська</option>
            <option value="Львівська">Львівська</option>
            <option value="Одеська">Одеська</option>
            <option value="Харківська">Харківська</option>
            <option value="Дніпропетровська">Дніпропетровська</option>
          </select>
        </div>

        {!formData.isCompany && (
          <>
            <div className={styles.formGroup}>
              <label htmlFor="sex">Стать</label>
              <select
                id="sex"
                name="sex"
                value={formData.sex}
                onChange={handleInputChange}
                required
              >
                <option value="">Оберіть стать</option>
                <option value="male">Чоловік</option>
                <option value="female">Жінка</option>
                <option value="other">Інше</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="dateOfBirth">Дата народження</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                required
              />
            </div>
          </>
        )}

        {formData.isCompany && (
          <div className={styles.formGroup}>
            <label htmlFor="companyType">Тип компанії</label>
            <input
              type="text"
              id="companyType"
              name="companyType"
              value={formData.companyType}
              onChange={handleInputChange}
              required
            />
          </div>
        )}

        <button type="submit" className={styles.submitButton}>Зареєструватися</button>
      </form>
    </div>
  );
}

