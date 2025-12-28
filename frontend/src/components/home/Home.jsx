import React from "react";

export default function Home() {
  return (
    <div className="bg-[#e6f1f5] min-h-screen">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-16 py-4 bg-[#e6f1f5]">
        <h1 className="font-bold text-lg">SmartLite</h1>
        <ul className="flex gap-6 text-sm">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Service</li>
          <li className="cursor-pointer">Contact Us</li>
        </ul>
        <div className="flex gap-3">
          <button className="bg-[#7db9da] px-4 py-2 rounded-lg text-sm">
            Dashboard
          </button>
          <button className="bg-[#7db9da] px-4 py-2 rounded-lg text-sm">
            Book Appointment
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="flex px-16 py-12 gap-10 items-center">
        <div className="w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            Your Health, <span className="text-[#7db9da]">Our Priority</span>
          </h2>
          <p className="text-sm mb-6">
            Smartlite provides seamless clinic management connecting patients
            with expert healthcare professionals
          </p>
          <div className="flex gap-4">
            <button className="bg-[#7db9da] px-5 py-2 rounded-lg">
              Book Appointment
            </button>
            <button className="bg-[#7db9da] px-5 py-2 rounded-lg">
              Learn More
            </button>
          </div>
        </div>

        <div className="w-1/2">
          <img
            src= "https://drcatherinecasey.com/cdn/shop/files/pexels-shkrabaanthony-5214997_1.jpg?v=1751263434&width=990"
            alt="Doctor"
            className="rounded-lg w-full h-[280px] object-cover"
          />
        </div>
      </section>

      {/* QUICK BOOKING BAR */}
      <div className="bg-[#7db9da] mx-16 my-8 px-8 py-4 flex justify-between items-center rounded-lg">
        <p className="font-semibold">Quick Appointment Booking</p>
        <button className="bg-white px-4 py-2 rounded-lg text-sm">
          Book Now
        </button>
      </div>

      {/* WHY CHOOSE */}
      <section className="px-16 py-8 text-center">
        <h3 className="text-xl font-bold mb-2">
          Why Choose SmartLite ?
        </h3>
        <p className="text-sm mb-6">
          Digitizing Care, Delivering Trust
        </p>

        <div className="grid grid-cols-3 gap-6">
          {[
            "Instant Scheduling",
            "Expert Doctors",
            "24/7 Support",
            "Digital Records",
            "E-Prescriptions",
            "Video Consultation",
          ].map((item) => (
            <div
              key={item}
              className="bg-white p-4 rounded-lg text-sm"
            >
              <h4 className="font-semibold mb-1">{item}</h4>
              <p className="text-xs text-gray-600">
                Smart healthcare made simple
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-16 py-10 text-center">
        <h3 className="text-xl font-bold mb-2">Our Services</h3>
        <p className="text-sm mb-6">
          Healing Through Better Management
        </p>

        <div className="flex gap-6 justify-center mb-6">
          <div className="bg-white w-40 h-16 rounded-lg"></div>
          <div className="bg-white w-40 h-16 rounded-lg"></div>
          <div className="bg-white w-40 h-16 rounded-lg"></div>
        </div>

        <button className="bg-[#7db9da] px-5 py-2 rounded-lg">
          View All Services
        </button>
      </section>

      {/* PATIENT FEEDBACK */}
      <section className="px-16 py-10 text-center">
        <h3 className="text-xl font-bold mb-2">Patient feedback</h3>
        <p className="text-sm mb-6">What our patients say about us</p>

        <div className="grid grid-cols-3 gap-6">
          {["James", "Maria", "Robert"].map((name) => (
            <div
              key={name}
              className="bg-white p-4 rounded-lg text-sm"
            >
              <p className="mb-3">
                “SmartLite made booking so easy and fast!”
              </p>
              <p className="font-semibold">{name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-16 py-10 text-center">
        <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
        <div className="flex justify-center gap-6">
          <div className="bg-white w-32 p-4 rounded-lg text-sm">
            Phone
          </div>
          <div className="bg-white w-32 p-4 rounded-lg text-sm">
            Email
          </div>
          <div className="bg-white w-32 p-4 rounded-lg text-sm">
            Address
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2f6f8f] text-white px-16 py-8 text-sm">
        <div className="grid grid-cols-4 gap-6">
          <div>
            <h4 className="font-semibold mb-2">SmartLite</h4>
            <p>Modern clinic management solution</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <p>Home</p>
            <p>About</p>
            <p>Service</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Support</h4>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p>+977 98xxxxxxx</p>
            <p>support@smartlite.com</p>
          </div>
        </div>

        <p className="text-center mt-6 text-xs">
          © 2025 SmartLite Clinic. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
