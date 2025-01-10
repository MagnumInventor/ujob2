const express = require('express');
const cors = require('cors');
const path = require('path'); // Для обслуговування статичних файлів
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API маршрути
app.get('/api/example', (req, res) => {
    res.json({ message: 'Hello from backend!' });
});

// Обслуговування статичних файлів фронтенду
const frontendPath = path.join(__dirname, '../frontend/build'); // Шлях до зібраного фронтенду
app.use(express.static(frontendPath));

// Всі інші маршрути перенаправляються на фронтенд
app.get('*', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
});

// Запуск сервера
app.listen(3003, () => {
    console.log('Server is running on port 3003');
});
