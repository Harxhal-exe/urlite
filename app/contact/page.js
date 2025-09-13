"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contactadmin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("✅ Message saved & emailed!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Error: " + data.error);
      }
    } catch (err) {
      setStatus("❌ Failed to connect to server");
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-slate-800 text-center">
          Contact Us
        </h1>
        <p className="text-slate-600 text-center mt-2">
          Got a question? We’d love to hear from you. Send us a message and we’ll respond as soon as possible.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-slate-700 font-medium mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="eg. John Doe"
              className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-slate-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
              className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-slate-700 font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Write your message here..."
              className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Send Message
          </button>
        </form>

        {/* Status Message */}
        {status && <p className="mt-4 text-center text-slate-600">{status}</p>}

        {/* Extra Info */}
        <div className="mt-8 text-center text-slate-500 text-sm">
          <p>
            📧 Email us at:{" "}
            <a href="mailto:support@urlite.com" className="text-blue-600 hover:underline">
              support@urlite.com
            </a>
          </p>
          <p>
            🌐 Or connect with us on{" "}
            <a href="https://github.com/" className="text-blue-600 hover:underline">
              GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
