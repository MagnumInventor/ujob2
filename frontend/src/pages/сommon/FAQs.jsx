import Layout from '../../components/Layout';
import styles from '../../styles/home/FAQs.module.css';
import React, { useState } from 'react';

const faqs = [
  {
    question: "What is Ujob?",
    answer:
      "Ujob is a platform that connects talented individuals with job opportunities, focusing on empowering the next generation of innovators and businesses.",
  },
  {
    question: "How do I create an account?",
    answer:
      "To create an account, click on the 'Register' button in the top right corner of the page. You can choose to register as an individual looking for work or as a company looking to hire.",
  },
  {
    question: "Is Ujob free to use?",
    answer:
      "Ujob offers both free and premium services. Basic job searching and posting is free, while advanced features may require a subscription. Check our Pricing page for more details.",
  },
  {
    question: "How can I support Ujob?",
    answer:
      "You can support Ujob by using our platform, spreading the word, or making a donation. Visit our 'Support Us' page to learn more about how you can contribute to our mission.",
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



