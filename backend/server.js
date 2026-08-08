


const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const attendanceRoutes = require('./routes/attendanceRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// ===== Ensure data folder exists =====
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// ===== Middleware =====
app.use(cors());
app.use(express.json());

// ===== Root Route (yahi ab "server running" directly dikhayega) =====
app.get('/', (req, res) => {
  res.send('✅ Server chal raha hai — Attendance API live hai!');
});

// ===== Test Route (chahen to rakh lein debugging ke liye, warna hata dein) =====
app.get('/test', (req, res) => {
  res.send('Test route working');
});

// ===== Attendance Routes =====
app.use('/api/attendance', attendanceRoutes);

// ===== 404 Handler =====
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// ===== Global Error Handler =====
app.use((err, req, res, next) => {
  console.error('Unhandled Error:', err.stack);
  res.status(500).json({ success: false, message: 'Internal server error' });
});

// ===== Server Start =====
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${PORT}`);
});
