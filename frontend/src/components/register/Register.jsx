import React from "react";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      {/* CARD */}
      <div className="w-[1200px] h-[650px] bg-[#e6f1f5] flex">

        {/* LEFT SIDE */}
        <div className="w-1/2 px-16 py-12 flex flex-col">
          <h1 className="text-3xl font-bold mb-6">
            Create An Account
          </h1>

          {/* Full Name */}
          <label className="mb-1">Full Name</label>
          <input
            type="text"
            className="h-11 mb-4 px-4 rounded-lg bg-white outline-none"
          />

          {/* Phone Number */}
          <label className="mb-1">Phone Number</label>
          <input
            type="text"
            className="h-11 mb-4 px-4 rounded-lg bg-white outline-none"
          />

          {/* Email */}
          <label className="mb-1">Email</label>
          <input
            type="email"
            className="h-11 mb-4 px-4 rounded-lg bg-white outline-none"
          />

          {/* Password */}
          <label className="mb-1">Password</label>
          <input
            type="password"
            className="h-11 mb-4 px-4 rounded-lg bg-white outline-none"
          />

          {/* Terms */}
          <div className="flex items-center gap-2 text-sm mb-6">
            <input type="checkbox" />
            <span>
              I agree to the Terms & Conditions and Privacy Policy
            </span>
          </div>

          {/* Register Button */}
          <button className="mx-auto bg-[#7db9da] w-44 h-10 rounded-lg mb-3">
            Register Now
          </button>

          {/* Login Link */}
          <p className="text-center text-sm underline mb-6 cursor-pointer">
            Already have an account ? Login
          </p>

          {/* OR */}
          <div className="flex items-center mb-6">
            <div className="flex-1 h-px bg-gray-400"></div>
            <span className="mx-4 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-400"></div>
          </div>

          {/* Social Buttons */}
          <div className="flex justify-center gap-6">
            <button className="flex items-center gap-2 bg-[#7db9da] px-4 py-2 rounded-lg">
              <span>Register with Google</span>
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-5 h-5"
                alt="google"
              />
            </button>

            <button className="flex items-center gap-2 bg-[#7db9da] px-4 py-2 rounded-lg">
              <span>Register with Facebook</span>
              <img
                src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                className="w-5 h-5"
                alt="facebook"
              />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="w-1/2">
          <img
            src="https://external-preview.redd.it/integrating-azure-ad-b2c-in-sitecore-xm-cloud-v0-uKvXtEcaIKIlMWWQhZ2DXIJOQjwk43E25GTQ0t1TpeA.jpg?width=640&crop=smart&auto=webp&s=922c41127ca1689aace6f2671f13251a2eb46ed8"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  );
}
