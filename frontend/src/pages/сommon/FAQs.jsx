import React from "react";
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'


export default function FAQs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="mb-4">Find answers to common questions about Ujob...</p>
        <div>
            <header>
                <h1>Контакти</h1>
            </header>
            <main>
                <section>
                    <p>Email: ujobsupport@gmail.com</p>
                    <p>Телефон: +380960427745</p>
                </section>
                <section>
                    <h2>Зв'яжіться з нами через форму</h2>
                    <form>
                        <label>
                            Ваше ім'я:
                            <input type="text" name="name" />
                        </label>
                        <label>
                            Ваше повідомлення:
                            <textarea name="message"></textarea>
                        </label>
                        <button type="submit">Відправити</button>
                    </form>
                </section>
            </main>
        </div>
      </main>
      <Footer />
    </div>
  )
}


