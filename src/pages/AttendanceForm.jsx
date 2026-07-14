// import InputField from "../components/InputField";

// export default function AttendanceForm(){
//   return (
//     <div className="max-w-xl mx-auto mt-10 bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 shadow-2xl text-white">
      
//       {/* Small Badge element matching the "New cohort" tag */}
//       <div className="flex justify-center mb-3">
//         <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-[#FF4C4C] bg-[#FF4C4C]/10 rounded-full border border--[#FF4C4C]/20">
//           <span className="w-1.5 h-1.5 rounded-full bg-[#FF4C4C] animate-pulse"></span>
//           SoftNova Portal
//         </span>
//       </div>

//       <h2 className="text-3xl font-bold text-center mb-8 tracking-tight">
//         Student Attendance <span className="text-[#FF4C4C]">Form</span>
//       </h2>

//       {/* Form Fields Stack */}
//       <div className="space-y-5">
//         <InputField 
//           label="Student Full Name"
//           name="fullName"
//         />

//         <InputField 
//           label="Student ID"
//           name="studentId"
//         />

//         <InputField 
//           label="Teacher Name"
//           name="teacherName"
//         />

//         <InputField 
//           label="Course Name"
//           name="courseName"
//         />

//         <InputField 
//           label="Date"
//           name="date"
//           type="date"
//         />

//         {/* Themed Submit Button */}
//         <button
//           className="w-full mt-4 bg-[#FF4C4C] text-white py-3 rounded-xl font-semibold tracking-wide transition-all duration-200 hover:bg-[#E03A3A] hover:shadow-[0_0_20px_rgba(255,76,76,0.3)] active:scale-[0.99]"
//         >
//           Submit Attendance
//         </button>
//       </div>

//     </div>
//   )
// }








import { useState } from "react";
import axios from "axios";
import InputField from "../components/InputField";

export default function AttendanceForm() {
  // ===== State: har field ki value yahan save hogi =====
  const [formData, setFormData] = useState({
    fullName: "",
    studentId: "",
    teacherName: "",
    courseName: "",
    date: "",
  });

  // ===== Jab bhi koi input change ho, state update ho =====
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ===== Submit hone par backend ko data bhejo =====
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/attendance/submit", {
  fullName: formData.fullName,
  studentId: formData.studentId,
  teacherName: formData.teacherName,
  courseName: formData.courseName,
  date: formData.date,
});
      console.log(response.data);
      alert("Attendance submited!");
    } catch (error) {
      console.error(error);
      alert("Error!");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 shadow-2xl text-white">
      
      <div className="flex justify-center mb-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-[#FF4C4C] bg-[#FF4C4C]/10 rounded-full border border--[#FF4C4C]/20">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF4C4C] animate-pulse"></span>
          SoftNova Portal
        </span>
      </div>

      <h2 className="text-3xl font-bold text-center mb-8 tracking-tight">
        Student Attendance <span className="text-[#FF4C4C]">Form</span>
      </h2>

      {/* ===== Form tag add kiya taake onSubmit kaam kare ===== */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <InputField 
          label="Student Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />

        <InputField 
          label="Student ID"
          name="studentId"
          value={formData.studentId}
          onChange={handleChange}
        />

        <InputField 
          label="Teacher Name"
          name="teacherName"
          value={formData.teacherName}
          onChange={handleChange}
        />

        <InputField 
          label="Course Name"
          name="courseName"
          value={formData.courseName}
          onChange={handleChange}
        />

        <InputField 
          label="Date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full mt-4 bg-[#FF4C4C] text-white py-3 rounded-xl font-semibold tracking-wide transition-all duration-200 hover:bg-[#E03A3A] hover:shadow-[0_0_20px_rgba(255,76,76,0.3)] active:scale-[0.99]"
        >
          Submit Attendance
        </button>
      </form>

    </div>
  );
}