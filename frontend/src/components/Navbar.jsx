import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-16 py-4 bg-[#e6f1f5]">
        <h1 className="font-bold text-lg">SmartLite</h1>
        <ul className="flex gap-6 text-sm">
          <Link to="/"><li className="cursor-pointer">Home</li></Link>
          <Link to="/about"> <li className="cursor-pointer">About</li></Link>
           <Link to="/service"><li className="cursor-pointer">Service</li></Link>
          <Link to="/contact"> <li className="cursor-pointer">Contact Us</li></Link>
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
    </div>
  )
}
