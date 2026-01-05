import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export default function ResetPasswordOtp() {
  const navigate = useNavigate();
  const location = useLocation();

  // Email passed from forgot password page
  const email = location.state?.email || "";

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // VERIFY OTP
  const handleVerifyOtp = async () => {
    if (otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await axios.post("/api/auth/verify-reset-otp", {
        email,
        otp,
      });

      // ✅ OTP VERIFIED → GO TO RESET PASSWORD PAGE
      navigate("/reset-password", {
        state: { email },
      });
    } catch (err) {
      setError(err.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  // RESEND OTP
  const handleResendOtp = async () => {
    try {
      await axios.post("/api/auth/send-reset-otp", { email });
    } catch (err) {
      setError("Failed to resend OTP");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">

      {/* CARD */}
      <div className="w-[420px] bg-[#e6f1f5] rounded-2xl p-8">

        <h1 className="text-2xl font-bold text-center mb-2">
          Reset Password
        </h1>

        <p className="text-sm text-gray-600 text-center mb-6">
          Enter the OTP sent to your email to reset your password
        </p>

        {/* EMAIL */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            value={email}
            disabled
            className="w-full h-11 px-4 rounded-lg bg-gray-200 outline-none"
          />
        </div>

        {/* OTP INPUT */}
        <div className="mb-4">
          <label className="block text-sm mb-1">OTP</label>
          <input
            type="text"
            value={otp}
            onChange={(e) =>
              setOtp(e.target.value.replace(/\D/g, ""))
            }
            maxLength={6}
            placeholder="------"
            className="w-full h-12 px-4 rounded-lg bg-white outline-none text-center tracking-widest text-lg"
          />
        </div>

        {/* ERROR */}
        {error && (
          <p className="text-red-500 text-sm text-center mb-4">
            {error}
          </p>
        )}

        {/* VERIFY BUTTON */}
        <button
          onClick={handleVerifyOtp}
          disabled={loading}
          className="w-full h-11 bg-[#7db9da] text-white rounded-lg disabled:opacity-50"
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>

        {/* RESEND */}
        <p
          onClick={handleResendOtp}
          className="text-sm text-center mt-4 underline cursor-pointer"
        >
          Resend OTP
        </p>

      </div>
    </div>
  );
}
