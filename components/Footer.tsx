"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darker/50 border-t border-slate-700">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-12 mb-12"
        >
          <div>
            <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
            <p className="text-gray-400">
              Building amazing web experiences with modern technologies.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-accent transition">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-accent transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-accent transition">
                <FaGithub size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="border-t border-slate-700 pt-8 text-center text-gray-400"
        >
          <p>
            © {currentYear} Your Name. All rights reserved. Built with Next.js & Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
