const express = require('express');
const router = express.Router();
const { submitAttendance, downloadAttendance } = require('../controllers/attendanceController');

// POST -> Attendance submit karke Excel mein save karega
router.post('/submit', submitAttendance);

// GET -> Excel file download karne ke liye
router.get('/download', downloadAttendance);

module.exports = router;