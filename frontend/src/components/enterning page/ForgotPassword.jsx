import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSendOtp = async () => {
    if (!email) {
      setError("Please enter your email");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await axios.post("/api/auth/send-reset-otp", { email });

      // ✅ OTP SENT → GO TO OTP PAGE
      navigate("/reset-password-otp", {
        state: { email },
      });
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to send OTP"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">

      {/* CARD */}
      <div className="w-[420px] bg-[#e6f1f5] rounded-2xl p-8">

        <h1 className="text-2xl font-bold mb-2 text-center">
          Forgot Password
        </h1>

        <p className="text-sm text-gray-600 text-center mb-6">
          Enter your registered email to reset your password
        </p>

        {/* EMAIL INPUT */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            className="w-full h-11 px-4 rounded-lg bg-white outline-none"
          />
        </div>

        {/* ERROR */}
        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">
            {error}
          </p>
        )}

        {/* SEND OTP BUTTON */}
        <button
          onClick={handleSendOtp}
          disabled={loading}
          className="w-full h-11 bg-[#7db9da] text-white rounded-lg disabled:opacity-50"
        >
          {loading ? "Sending OTP..." : "Send OTP"}
        </button>

        {/* BACK TO LOGIN */}
        <p
          onClick={() => navigate("/login")}
          className="text-sm text-center mt-4 underline cursor-pointer"
        >
          Back to Login
        </p>

      </div>
    </div>
  );
}
