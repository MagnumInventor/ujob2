const express = require('express');
const app = express();
const port = 5000; // Виберіть порт, на якому буде працювати сервер
const path = require('path');

// Включення статичних файлів з папки public
app.use(express.static(path.join(__dirname, 'public')));

// Маршрут для завантаження JSON
app.get('/api/catalogue', (req, res) => {
  try {
    const data = require('./data/catalogue.json'); // Вкажіть шлях до вашого JSON-файлу
    res.json(data);
  } catch (error) {
    console.error('Error fetching catalogue:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущено на http://localhost:${port}`);
});
