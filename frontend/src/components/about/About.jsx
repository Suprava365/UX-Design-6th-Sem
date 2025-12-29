import React from "react";
import Navbar from "../Navbar";

export default function About() {
  return (
    <div className="bg-[#e6f1f5]">

      {/* NAVBAR */}
      <Navbar />

      {/* HEADER STRIP */}
      <div className="bg-[#8fc6e3] py-10 text-center">
        <h1 className="text-2xl font-bold">About Smartlite</h1>
      </div>

      {/* MAIN ABOUT SECTION */}
      <section className="px-20 py-12 flex gap-12 items-start">
        {/* LEFT IMAGE PLACEHOLDER */}
        <div className="w-[360px] h-[200px] bg-white rounded-lg"></div>

        {/* RIGHT CONTENT */}
        <div className="max-w-xl">
          <h2 className="font-bold text-lg mb-2">Our Mission</h2>
          <p className="text-sm mb-4 leading-relaxed">
            At Smartlite, we are committed to transforming healthcare delivery
            through innovative clinic management solutions. Our platform
            empowers healthcare professionals and patients to connect seamlessly,
            ensuring quality care is always just a few clicks away.
          </p>

          <h3 className="font-semibold mb-2">
            Why Choose Smartlite?
          </h3>

          <ul className="list-disc ml-5 text-sm mb-5 space-y-1">
            <li>10+ Years of experience in healthcare technology</li>
            <li>okkobkok</li>
            <li>ahahaha</li>
            <li>hahaha</li>
          </ul>

          <button className="bg-[#7db9da] px-6 py-2 rounded-lg text-sm">
            Book Your Appointment
          </button>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="px-16 py-10 text-center">
        <h2 className="text-xl font-bold mb-8">Meet Our Team</h2>

        <div className="flex justify-center gap-10">
          <div className="bg-white w-60 p-4 rounded-lg">
            <h3 className="font-semibold">Dr. Anish Khan</h3>
            <p className="text-sm text-[#7db9da]">
              Chief Medical Officer
            </p>
            <p className="text-xs text-gray-600">
              General Medicine
            </p>
          </div>

          <div className="bg-white w-60 p-4 rounded-lg">
            <h3 className="font-semibold">Dr. Neha Shah</h3>
            <p className="text-sm text-[#7db9da]">
              Dermatologist
            </p>
            <p className="text-xs text-gray-600">
              Skin & Beauty Care
            </p>
          </div>

          <div className="bg-white w-60 p-4 rounded-lg">
            <h3 className="font-semibold">Dr. Sulav Regmi</h3>
            <p className="text-sm text-[#7db9da]">
              Cardiologist
            </p>
            <p className="text-xs text-gray-600">
              Heart & Cardiovascular
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2f6f8f] text-white px-16 py-8 text-sm">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-2">Smartlite</h4>
            <p>
              Modern clinic management connecting patients with quality healthcare
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <p>Home</p>
            <p>About</p>
            <p>Service</p>
            <p>Contact</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Support</h4>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>FAQs</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p>+977 984xxxxx</p>
            <p>smartlite@gmail.com</p>
            <p>Kathmandu, Nepal</p>
          </div>
        </div>

        <p className="text-center text-xs mt-6">
          © 2025 Smartlite Clinic. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
