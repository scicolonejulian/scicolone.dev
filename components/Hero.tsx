"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-6">
            Hi, I am{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Your Name
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full-stack Developer | Designer | Problem Solver
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
            I build modern web applications with React, Next.js, and modern web
            technologies. Let's create something amazing together.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex gap-6 justify-center flex-wrap"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-accent hover:bg-blue-600 rounded-lg font-semibold transition flex items-center gap-2"
            >
              View My Work <FaArrowRight />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-accent hover:bg-accent/10 rounded-lg font-semibold transition"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Animated background elements */}
        <div className="absolute top-40 left-10 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>
    </section>
  );
}
