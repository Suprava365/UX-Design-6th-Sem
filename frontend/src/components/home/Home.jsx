import React from 'react'


 export default function Home() {
  return (
    <div className="bg-[#d9e7ec] min-h-screen">
      
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-sm">
        
        {/* Logo placeholder (if you have logo replace text or add <img/> ) */}
        <h1 className="text-2xl font-bold text-black">Smartlite</h1>

        {/* Nav Links */}
        <ul className="flex gap-8 text-black font-semibold text-lg">
          <li className="cursor-pointer hover:text-gray-600">Home</li>
          <li className="cursor-pointer hover:text-gray-600">About</li>
          <li className="cursor-pointer hover:text-gray-600">Service</li>
          <li className="cursor-pointer hover:text-gray-600">Contact Us</li>
        </ul>

        {/* Buttons */}
        <div className="flex gap-5">
          <button className="bg-[#5eb1d6] text-white px-5 py-2 rounded-full font-medium hover:opacity-90">
            Dashboard
          </button>
          <button className="bg-[#3fa9f5] text-white px-5 py-2 rounded-full font-medium hover:opacity-90">
            Book Appointment
          </button>
        </div>

      </nav>


      {/* LANDING SECTION */}
      <section className="flex justify-between items-center px-20 pt-16">
        
        {/* Left Text Area */}
        <div className="max-w-xl">
          <h1 className="text-6xl font-extrabold text-black leading-tight">
            Your Health, <span className="text-[#3fa9f5]">Our Priority</span>
          </h1>

          <p className="text-black text-lg mt-6 leading-relaxed">
            Smartlite provides seamless clinic management connecting patients with 
            expert healthcare professionals.
          </p>

          {/* Landing Buttons */}
          <div className="flex gap-6 mt-10">
            <button className="bg-[#3fa9f5] text-white px-6 py-3 rounded-xl font-semibold text-lg hover:opacity-90">
              Book Appointment
            </button>
            <button className="bg-[#5eb1d6] text-white px-6 py-3 rounded-xl font-semibold text-lg hover:opacity-90">
              Learn More
            </button>
          </div>
        </div>


        {/* Right Image Area */}
        <div>
          <img
            src="/doctor.png" 
            alt="Doctor Consultation"
            className="w-[500px] rounded-3xl shadow-lg"
          />
        </div>

      </section>

    </div>
  );
}


