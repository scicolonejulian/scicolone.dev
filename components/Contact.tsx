"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    alert("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Get in <span className="text-accent">Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-8">Let's talk about everything!</h3>
            <p className="text-gray-300 mb-8">
              Have a question or want to work together? Send me a message and
              I'll respond as soon as possible.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-accent text-xl" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:your@email.com" className="text-white hover:text-accent transition">
                    your@email.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaPhone className="text-accent text-xl" />
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a href="tel:+1234567890" className="text-white hover:text-accent transition">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-accent text-xl" />
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">Your City, Country</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-accent text-white placeholder-gray-500 transition"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-accent text-white placeholder-gray-500 transition"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-accent text-white placeholder-gray-500 transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-accent hover:bg-blue-600 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
