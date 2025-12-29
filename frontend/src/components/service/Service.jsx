import React from "react";
import Navbar from "../Navbar";

export default function Service() {
  return (
    <div className="bg-[#e6f1f5]">

      {/* NAVBAR */}
      <Navbar />
      {/* HEADER SECTION */}
      <div className="bg-[#8fc6e3] py-10 text-center">
        <h1 className="text-2xl font-bold mb-2">
          All Medical & Roof Service Under One
        </h1>
        <p className="text-sm">
          Comprehension healthcare solutions covering all aspects of your medical needs
        </p>
      </div>

      {/* SERVICES GRID */}
      <section className="px-16 py-12">
        <div className="grid grid-cols-3 gap-8">
          {[
            "General Consultation",
            "Cardiology",
            "Dermatology",
            "Orthopedics",
            "Pediatrics",
            "Pharmacy Services",
          ].map((service) => (
            <div
              key={service}
              className="bg-white h-24 rounded-lg flex items-center px-6 font-semibold"
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="bg-white py-12 text-center">
        <h2 className="text-xl font-bold mb-2">
          Ready to Book Your Appointment?
        </h2>
        <p className="text-sm mb-6">
          Choose your preferred service and schedule your consultation with our
          expert healthcare professionals today
        </p>
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
