import { useState } from "react";
import axios from "axios";
import InputField from "../components/InputField";

export default function AttendanceForm() {

  const [formData, setFormData] = useState({
    fullName: "",
    studentId: "",
    teacherName: "",
    courseName: "",
    date: "",
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/attendance/submit",
        {
          fullName: formData.fullName,
          studentId: formData.studentId,
          teacherName: formData.teacherName,
          courseName: formData.courseName,
          date: formData.date,
        }
      );

      console.log(response.data);

      alert("✅ Attendance Submitted");

      setFormData({
        fullName: "",
        studentId: "",
        teacherName: "",
        courseName: "",
        date: "",
      });

    } catch (error) {

      console.error("Submit error:", error);

      const errMsg =
        error.response?.data?.message ||
        error.message ||
        "Something is wrong";

      alert(`❌ Error: ${errMsg}`);
    }
  };


  return (

    <div className="
      w-full
      text-white
      animate-fadeIn
    ">


      {/* Badges */}
      <div className="flex justify-center mb-5">

        <span className="
          flex items-center gap-2
          px-4 py-1.5
          rounded-full
          text-xs
          font-semibold
          tracking-wide
          text-red-400
          bg-red-500/10
          border
          border-red-500/20
        ">

          <span className="
            w-2
            h-2
            bg-red-500
            rounded-full
            animate-pulse
          "></span>

          SoftNova Attendance Portal

        </span>

      </div>



      {/* Heading */}
      <div className="text-center mb-8">

        <h2 className="
          text-3xl
          md:text-4xl
          font-bold
          tracking-tight
        ">

          Student Attendance

          <span className="text-red-500">
            {" "}Form
          </span>

        </h2>


        <p className="
          text-gray-400
          text-sm
          mt-3
        ">
          Submit daily student attendance records securely
        </p>


      </div>



      <form 
        onSubmit={handleSubmit}
        className="space-y-6"
      >


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
          label="Attendance Date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
        />



        <button
          type="submit"
          className="
            group
            relative
            w-full
            mt-5
            py-3.5
            rounded-xl
            font-semibold
            tracking-wide
            overflow-hidden
            bg-gradient-to-r
            from-red-500
            to-orange-500
            hover:shadow-[0_0_30px_rgba(255,76,76,0.4)]
            transition-all
            duration-300
            active:scale-95
          "
        >

          <span className="
            relative
            z-10
          ">
            Submit Attendance
          </span>


        </button>


      </form>


    </div>

  );
}