import InputField from "../components/InputField";

export default function AttendanceForm(){

  return (

    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-lg shadow">

      <h2 className="text-2xl font-bold text-center mb-6">
        Student Attendance Form
      </h2>


      <InputField 
        label="Student Full Name"
        name="fullName"
      />


      <InputField 
        label="Student ID"
        name="studentId"
      />


      <InputField 
        label="Teacher Name"
        name="teacherName"
      />


      <InputField 
        label="Course Name"
        name="courseName"
      />


      <InputField 
        label="Date"
        name="date"
        type="date"
      />


      <button
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Submit Attendance
      </button>


    </div>

  )
}