import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export default function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();

  // Email passed from OTP page
  const email = location.state?.email || "";

  const [form, setForm] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleResetPassword = async () => {
    if (!form.newPassword || !form.confirmPassword) {
      setError("Please fill all fields");
      return;
    }

    if (form.newPassword.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (form.newPassword !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await axios.post("/api/auth/reset-password", {
        email,
        password: form.newPassword,
      });

      setSuccess("Password reset successfully");

      // Redirect to login after success
      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (err) {
      setError(
        err.response?.data?.message || "Password reset failed"
      );
    } finally {
      setLoading(false);
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
          Create a new password for your account
        </p>

        {/* NEW PASSWORD */}
        <div className="mb-4">
          <label className="block text-sm mb-1">New Password</label>
          <input
            type="password"
            name="newPassword"
            value={form.newPassword}
            onChange={handleChange}
            placeholder="Enter new password"
            className="w-full h-11 px-4 rounded-lg bg-white outline-none"
          />
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="mb-4">
          <label className="block text-sm mb-1">
            Confirm New Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm new password"
            className="w-full h-11 px-4 rounded-lg bg-white outline-none"
          />
        </div>

        {/* ERROR */}
        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">
            {error}
          </p>
        )}

        {/* SUCCESS */}
        {success && (
          <p className="text-green-600 text-sm mb-4 text-center">
            {success}
          </p>
        )}

        {/* RESET BUTTON */}
        <button
          onClick={handleResetPassword}
          disabled={loading}
          className="w-full h-11 bg-[#7db9da] text-white rounded-lg disabled:opacity-50"
        >
          {loading ? "Updating..." : "Reset Password"}
        </button>

      </div>
    </div>
  );
}
