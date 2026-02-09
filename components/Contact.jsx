'use client';

import { useState } from 'react';

/**
 * Contact Section - Terminal style form
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-hacker-pink">{'<'}</span>
            <span className="glitch" data-text="CONTACT">CONTACT</span>
            <span className="text-hacker-pink">{'>'}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-hacker-cyan to-hacker-pink mx-auto shadow-neon"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="font-mono text-hacker-pink mb-6">{'// CONNECT_WITH_ME()'}</div>
            <div className="space-y-4">
              <div className="border-l-4 border-hacker-cyan pl-4">
                <div className="text-hacker-cyan text-sm font-mono">EMAIL</div>
                <a
                  href="mailto:your@email.com"
                  className="text-hacker-accent hover:text-hacker-pink transition-colors"
                >
                  your@email.com
                </a>
              </div>
              <div className="border-l-4 border-hacker-pink pl-4">
                <div className="text-hacker-pink text-sm font-mono">PHONE</div>
                <a
                  href="tel:+1234567890"
                  className="text-hacker-accent hover:text-hacker-cyan transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
              <div className="border-l-4 border-hacker-purple pl-4">
                <div className="text-hacker-purple text-sm font-mono">LOCATION</div>
                <p className="text-hacker-accent">Tu Ciudad, País</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <div className="font-mono text-hacker-pink mb-4">{'// SOCIAL_NETWORKS'}</div>
              <div className="flex gap-4">
                {[
                  { name: 'GITHUB', icon: '{ git }', color: 'text-hacker-cyan' },
                  { name: 'LINKEDIN', icon: '[ in ]', color: 'text-hacker-pink' },
                  { name: 'TWITTER', icon: '@ tw ', color: 'text-hacker-purple' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className={`font-mono text-sm border-2 border-current px-4 py-2 rounded transition-all duration-200 ${social.color} hover:shadow-neon`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-hacker-dark border-2 border-hacker-accent border-opacity-30 p-8 rounded-lg">
            <div className="font-mono text-hacker-pink mb-6">{'// MESSAGE_FORM.send()'}</div>

            {isSubmitted && (
              <div className="mb-4 p-3 bg-hacker-accent bg-opacity-10 border border-hacker-accent text-hacker-accent text-sm rounded font-mono">
                ✓ Mensaje enviado correctamente! 
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-hacker-cyan text-xs font-mono mb-2">
                  {'$ '} NAME:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  className="w-full"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-hacker-cyan text-xs font-mono mb-2">
                  {'$ '} EMAIL:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                  className="w-full"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-hacker-cyan text-xs font-mono mb-2">
                  {'$ '} MESSAGE:
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tu mensaje aquí..."
                  rows="4"
                  className="w-full"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" className="w-full btn-hacker">
                {'>> SEND_MESSAGE()'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
