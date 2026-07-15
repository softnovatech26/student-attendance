


const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, '..', 'data', 'attendance.csv');

const HEADERS = ['Full Name', 'Student ID', 'Teacher Name', 'Course Name', 'Date'];

const escapeCsvField = (field) => {
  const str = String(field ?? '');
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
};

const submitAttendance = async (req, res) => {
  try {
    const { fullName, studentId, teacherName, courseName, date } = req.body;

    if (!fullName || !studentId || !teacherName || !courseName || !date) {
      return res.status(400).json({
        success: false,
        message: 'Sari fields (fullName, studentId, teacherName, courseName, date) zaroori hain',
      });
    }

    const dataDir = path.dirname(filePath);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const fileExists = fs.existsSync(filePath) && fs.statSync(filePath).size > 0;
    if (!fileExists) {
      fs.writeFileSync(filePath, '\uFEFF' + HEADERS.join(',') + '\n', 'utf8');
    }

    const row = [fullName, studentId, teacherName, courseName, date]
      .map(escapeCsvField)
      .join(',');

    fs.appendFileSync(filePath, row + '\n', 'utf8');

    return res.status(200).json({
      success: true,
      message: 'Attendance CSV mein save ho gayi',
    });
  } catch (error) {
    console.error('Attendance Error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Server error',
    });
  }
};

const downloadAttendance = (req, res) => {
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ success: false, message: 'Abhi tak koi attendance record nahi hai' });
  }
  res.download(filePath, 'attendance.csv');
};

module.exports = { submitAttendance, downloadAttendance };