import React from "react";

const Contact = () => {
    return (
        <div>
            <header>
                <h1>Контакти</h1>
            </header>
            <main>
                <section>
                    <p>Email: support@ujob.com</p>
                    <p>Телефон: +380 99 123 45 67</p>
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
    );
};

export default Contact;
