

const Navbar = () => {

  return (

    <nav className="
      w-full
      px-6
      py-4
      bg-white/5
      backdrop-blur-xl
      border-b
      border-white/10
      shadow-lg
    ">

      <div className="
        max-w-7xl
        mx-auto
        flex
        items-center
        justify-between
      ">


        {/* Logo + Brand */}

        <div className="
          flex
          items-center
          gap-4
        ">


          {/* Logo */}

          <div className="
            w-12
            h-12
            rounded-2xl
            bg-white
            flex
            items-center
            justify-center
            overflow-hidden
            border
            border-white/20
            shadow-lg
            hover:scale-105
            transition
            duration-300
          ">

            <img
              src="/softnova-logo.png"
              className="
                w-10
                h-10
                object-contain
              "
              alt="SoftNova Logo"
            />

          </div>



          {/* Brand Name */}

          <h1 className="
            text-xl
            md:text-2xl
            font-bold
            tracking-wide
          ">

            SoftNova

            <span className="
              text-red-500
            ">
              {" "}Academy
            </span>

          </h1>


        </div>



        {/* Portal Badge */}

        <div className="
          hidden
          md:flex
          items-center
          gap-2
          px-4
          py-2
          rounded-full
          bg-red-500/10
          border
          border-red-500/20
          text-red-400
          text-sm
          font-medium
        ">


          <span className="
            w-2
            h-2
            rounded-full
            bg-red-500
            animate-pulse
          "></span>


          Attendance Portal


        </div>


      </div>


    </nav>

  );
};


export default Navbar;