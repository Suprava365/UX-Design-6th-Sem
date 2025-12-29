import React from "react";

export default function Contact() {
  return (
    <div className="bg-[#e6f1f5]">

      {/* NAVBAR */}
      <nav className="bg-white px-16 py-4 flex justify-between items-center text-sm">
        <ul className="flex gap-6 font-medium">
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Contact Us</li>
        </ul>
        <div className="flex gap-4">
          <button className="bg-[#7db9da] px-4 py-2 rounded-lg">
            Dashboard
          </button>
          <button className="bg-[#7db9da] px-4 py-2 rounded-lg">
            Book Appointment
          </button>
        </div>
      </nav>

      {/* HEADER */}
      <div className="bg-[#8fc6e3] py-10 text-center">
        <h1 className="text-2xl font-bold mb-2">Get In Touch</h1>
        <p className="text-sm">
          Have questions or concerns? Our dedicated support team is here to help you.
          Contact us anytime.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <section className="px-16 py-12 flex gap-10">

        {/* LEFT FORM */}
        <div className="w-1/2 bg-white rounded-lg p-6">
          <h2 className="font-semibold mb-4">Send us a Message</h2>

          <div className="space-y-3">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full h-10 px-4 rounded-lg bg-[#e6f1f5] outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full h-10 px-4 rounded-lg bg-[#e6f1f5] outline-none"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full h-10 px-4 rounded-lg bg-[#e6f1f5] outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full h-10 px-4 rounded-lg bg-[#e6f1f5] outline-none"
            />
            <textarea
              placeholder="Message"
              className="w-full h-24 px-4 py-2 rounded-lg bg-[#e6f1f5] outline-none"
            ></textarea>
          </div>

          <button className="mt-4 bg-[#7db9da] px-6 py-2 rounded-lg text-sm">
            Send Message
          </button>
        </div>

        {/* RIGHT INFO */}
        <div className="w-1/2 space-y-4">

          {/* Support Line */}
          <div className="bg-white rounded-lg p-4 flex gap-4 items-center">
            <div className="bg-[#cfe7f3] p-3 rounded-lg">📞</div>
            <div>
              <p className="font-semibold text-sm">Support Line</p>
              <p className="text-xs text-gray-600">+977 984xxxxx</p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white rounded-lg p-4 flex gap-4 items-center">
            <div className="bg-[#cfe7f3] p-3 rounded-lg">✉️</div>
            <div>
              <p className="font-semibold text-sm">Email Address</p>
              <p className="text-xs text-gray-600">support@smartlite.com</p>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white rounded-lg p-4 flex gap-4 items-center">
            <div className="bg-[#cfe7f3] p-3 rounded-lg">📍</div>
            <div>
              <p className="font-semibold text-sm">Location</p>
              <p className="text-xs text-gray-600">Kathmandu, Nepal</p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="bg-white rounded-lg p-4">
            <p className="font-semibold text-sm mb-2">Working Hours</p>
            <div className="text-xs text-gray-600 space-y-1">
              <p>Monday - Friday : 9:00 AM - 5:00 PM</p>
              <p>Saturday : 10:00 AM - 4:00 PM</p>
              <p>Sunday : Closed</p>
              <p className="text-[#7db9da] font-semibold">
                Emergency : 24/7 Available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="px-16 pb-12 text-center">
        <h2 className="font-bold mb-4">Find Us On The Map</h2>
        <div className="w-full h-64 bg-white rounded-lg flex items-center justify-center text-gray-500">
          Map Placeholder
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
          </div>

          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p>+977 984xxxxx</p>
            <p>support@smartlite.com</p>
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
