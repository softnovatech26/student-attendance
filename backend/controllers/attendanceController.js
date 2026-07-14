// const ExcelJS = require('exceljs');
// const path = require('path');
// const fs = require('fs');

// const filePath = path.join(__dirname, '..', 'data', 'attendance.xlsx');

// // ===== Attendance Submit Controller =====
// const submitAttendance = async (req, res) => {
//   try {
//     const { studentName, rollNo, className, status } = req.body;

//     // Basic validation
//     if (!studentName || !rollNo || !className || !status) {
//       return res.status(400).json({
//         success: false,
//         message: 'Sari fields (studentName, rollNo, className, status) zaroori hain',
//       });
//     }

//     const workbook = new ExcelJS.Workbook();
//     let worksheet;

//     // Agar file pehlay se maujood hai to usay load karo, warna nayi banao
//     if (fs.existsSync(filePath)) {
//       await workbook.xlsx.readFile(filePath);
//       worksheet = workbook.getWorksheet('Attendance');
//     } else {
//       worksheet = workbook.addWorksheet('Attendance');
//       worksheet.columns = [
//         { header: 'Student Name', key: 'studentName', width: 25 },
//         { header: 'Roll No', key: 'rollNo', width: 15 },
//         { header: 'Class', key: 'className', width: 15 },
//         { header: 'Status', key: 'status', width: 15 },
//         { header: 'Date', key: 'date', width: 25 },
//       ];
//       worksheet.getRow(1).font = { bold: true };
//     }

//     // Naya row add karo
//     worksheet.addRow({
//       studentName,
//       rollNo,
//       className,
//       status,
//       date: new Date().toLocaleString(),
//     });

//     // Ensure data folder exists
//     fs.mkdirSync(path.dirname(filePath), { recursive: true });

//     await workbook.xlsx.writeFile(filePath);

//     return res.status(200).json({
//       success: true,
//       message: 'Attendance Excel mein save ho gayi',
//     });
//   } catch (error) {
//     console.error('Attendance Error:', error);
//     return res.status(500).json({ success: false, message: 'Server error' });
//   }
// };

// // ===== Excel File Download Controller =====
// const downloadAttendance = (req, res) => {
//   if (!fs.existsSync(filePath)) {
//     return res.status(404).json({ success: false, message: 'Abhi tak koi attendance record nahi hai' });
//   }
//   res.download(filePath, 'attendance.xlsx');
// };

// module.exports = { submitAttendance, downloadAttendance };






const ExcelJS = require('exceljs');
const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, '..', 'data', 'attendance.xlsx');

// ===== Attendance Submit Controller =====
const submitAttendance = async (req, res) => {
  try {
    const { fullName, studentId, teacherName, courseName, date } = req.body;

    // Basic validation
    if (!fullName || !studentId || !teacherName || !courseName || !date) {
      return res.status(400).json({
        success: false,
        message: 'Sari fields (fullName, studentId, teacherName, courseName, date) zaroori hain',
      });
    }

    const workbook = new ExcelJS.Workbook();
    let worksheet;

    // Agar file pehlay se maujood hai to usay load karo, warna nayi banao
    if (fs.existsSync(filePath)) {
      await workbook.xlsx.readFile(filePath);
      worksheet = workbook.getWorksheet('Attendance');
    } else {
      worksheet = workbook.addWorksheet('Attendance');
      worksheet.columns = [
        { header: 'Full Name', key: 'fullName', width: 25 },
        { header: 'Student ID', key: 'studentId', width: 15 },
        { header: 'Teacher Name', key: 'teacherName', width: 25 },
        { header: 'Course Name', key: 'courseName', width: 25 },
        { header: 'Date', key: 'date', width: 20 },
      ];
      worksheet.getRow(1).font = { bold: true };
    }

    // Naya row add karo
    worksheet.addRow({
      fullName,
      studentId,
      teacherName,
      courseName,
      date,
    });

    // Ensure data folder exists
    fs.mkdirSync(path.dirname(filePath), { recursive: true });

    await workbook.xlsx.writeFile(filePath);

    return res.status(200).json({
      success: true,
      message: 'Attendance Excel mein save ho gayi',
    });
  } catch (error) {
    console.error('Attendance Error:', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

// ===== Excel File Download Controller =====
const downloadAttendance = (req, res) => {
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ success: false, message: 'Abhi tak koi attendance record nahi hai' });
  }
  res.download(filePath, 'attendance.xlsx');
};

module.exports = { submitAttendance, downloadAttendance };