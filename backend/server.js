// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // ===== Middleware =====
// app.use(cors());
// app.use(express.json());

// // ===== Test Route =====
// app.get('/test', (req, res) => {
//   res.send('Test route working');
// });

// // ===== Server Start =====
// app.listen(PORT, () => {
//   console.log(`Server chal raha hai: http://localhost:${PORT}`);
// });


// attendanceRoutes.js




const express = require('express');
const cors = require('cors');
require('dotenv').config();

const attendanceRoutes = require('./routes/attendanceRoutes');   // ← ye line add karni thi

const app = express();
const PORT = process.env.PORT || 5000;

// ===== Middleware =====
app.use(cors());
app.use(express.json());

// ===== Test Route =====
app.get('/test', (req, res) => {
  res.send('Test route working');
});

// ===== Attendance Routes =====
app.use('/api/attendance', attendanceRoutes);   // ← ye line bhi add karni thi

// ===== Server Start =====
app.listen(PORT, () => {
  console.log(`Server chal raha hai: http://localhost:${PORT}`);
});