import Navbar from "./components/Navbar";
import AttendanceForm from "./pages/AttendanceForm";

function App() {
  return (
    <div className="min-h-screen bg-[#090A10] text-white overflow-hidden relative">

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>

      {/* Main Container */}
      <main className="relative z-10 min-h-screen">

        {/* Navbar */}
        <Navbar />

        {/* Dashboard Content */}
        <section className="flex justify-center items-center px-4 py-10">
          
          <div className="
            w-full 
            max-w-4xl
            bg-white/5 
            backdrop-blur-xl
            border 
            border-white/10
            rounded-3xl
            shadow-2xl
            p-6
            md:p-10
            transition-all
            duration-300
            hover:border-red-500/30
          ">
            
            <AttendanceForm />

          </div>

        </section>

      </main>

    </div>
  );
}

export default App;