import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Card */}
      <div className="w-full max-w-5xl bg-[#e6f1f5] rounded-lg shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* LEFT SIDE - FORM */}
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Sign In
          </h2>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder=""
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          {/* Password */}
          <div className="mb-2">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder=""
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          {/* Forget password */}
          <div className="text-right mb-6">
            <button className="text-sm text-gray-600 hover:underline">
              Forget password?
            </button>
          </div>

          {/* Login Button */}
          <button className="w-full bg-sky-400 hover:bg-sky-500 text-white py-3 rounded-md font-semibold transition mb-4">
            Login
          </button>

          {/* Register */}
          <p className="text-center text-sm text-gray-700 mb-6">
            Don’t you have an account?{" "}
            <span className="underline cursor-pointer font-medium">
              Register Now
            </span>
          </p>

          {/* OR */}
          <div className="flex items-center mb-6">
            <div className="flex-1 h-px bg-gray-400"></div>
            <span className="px-3 text-sm text-gray-600">OR</span>
            <div className="flex-1 h-px bg-gray-400"></div>
          </div>

          {/* Social Login */}
          <div className="flex gap-4">
            <button className="flex-1 flex items-center justify-center gap-2 bg-sky-400 hover:bg-sky-500 text-white py-3 rounded-md transition">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Login with Google
            </button>

            <button className="flex-1 flex items-center justify-center gap-2 bg-sky-400 hover:bg-sky-500 text-white py-3 rounded-md transition">
              <img
                src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                alt="Facebook"
                className="w-5 h-5"
              />
              Login with Facebook
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE */}
      {/* RIGHT SIDE - IMAGE */}
<div className="hidden md:block">
  <img
    src="https://iiim.res.in/wp-content/uploads/2020/11/pexels-photo-3786157-1-768x768.jpeg"
   
    className="w-full h-full object-cover"
  />
</div>

        </div>
      </div>
  
  );
};

export default Login;
