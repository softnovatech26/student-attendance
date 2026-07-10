import Navbar from "./components/Navbar";
import AttendanceForm from "./pages/AttendanceForm";


function App() {

  return (

    <>
    <main className=" bg-gradient-to-br from-[#090A10] to-[#200B0E]   border ">
      
      {/* Background radial gradient effect */}
      
      <Navbar />


      <AttendanceForm />
      
      </main>

    </>

  )
}


export default App;