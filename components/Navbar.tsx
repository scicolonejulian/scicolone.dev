"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-darker/80 backdrop-blur-md z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Portfolio
        </h1>
        <div className="flex gap-6 items-center">
          <a href="#about" className="hover:text-accent transition">
            About
          </a>
          <a href="#projects" className="hover:text-accent transition">
            Projects
          </a>
          <a href="#skills" className="hover:text-accent transition">
            Skills
          </a>
          <a href="#contact" className="hover:text-accent transition">
            Contact
          </a>
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent transition">
              <FaGithub size={20} />
            </a>
            <a href="#" className="hover:text-accent transition">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="hover:text-accent transition">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
