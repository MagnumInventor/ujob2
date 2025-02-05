import Layout from '../../components/Layout';
import styles from '../../styles/home/FAQs.module.css';
import React, { useState } from 'react';

const faqs = [
  {
    question: "Що таке Ujob?",
    answer:
      "Ujob — це платформа, яка з'єднує талановитих людей з можливостями працевлаштування, зосереджуючись на підтримці нового покоління інноваторів і бізнесів.",
  },
  {
    question: "Як створити обліковий запис?",
    answer:
      "Щоб створити обліковий запис, натисніть кнопку 'Зареєструватися' у верхньому правому куті сторінки. Ви можете обрати реєстрацію як фізична особа, яка шукає роботу, або як компанія, яка шукає працівників.",
  },
  {
    question: "Чи безкоштовний Ujob?",
    answer:
      "Ujob пропонує як безкоштовні, так і преміум послуги. Базовий пошук вакансій і розміщення оголошень безкоштовні, тоді як розширені функції можуть вимагати підписки. Деталі дивіться на сторінці 'Ціни'.",
  },
  {
    question: "Як я можу підтримати Ujob?",
    answer:
      "Ви можете підтримати Ujob, використовуючи нашу платформу, поширюючи інформацію про нас або зробивши пожертву. Відвідайте сторінку 'Підтримати нас', щоб дізнатися більше про те, як ви можете сприяти нашій місії.",
  },
];


export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout>
      <div className={styles.faqs}>
        <h1 className={styles.title}>Frequently Asked Questions</h1>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className={styles.faqIcon}>
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className={styles.faqAnswer}>{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}



