'use client';

/**
 * Footer - Estilo hacker/cyberpunk
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hacker-darker border-t-2 border-hacker-accent border-opacity-30 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-12 pb-8 border-b border-hacker-accent border-opacity-20 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-hacker-cyan">&lt;</span>
              <span className="text-hacker-accent">HACKER</span>
              <span className="text-hacker-cyan">/&gt;</span>
            </h3>
            <p className="text-hacker-accent text-opacity-60 text-sm font-mono">
              Building digital futures from the command line
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-hacker-pink font-bold mb-4">NAVIGATION</h4>
            <ul className="space-y-2 text-sm">
              {['HOME', 'ABOUT', 'PROJECTS', 'CONTACT'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-hacker-accent text-opacity-70 hover:text-opacity-100 hover:text-hacker-cyan transition-colors font-mono"
                  >
                    {'$ cd '} {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-hacker-cyan font-bold mb-4">SOCIAL</h4>
            <div className="space-y-2">
              {[
                { label: 'GitHub', handle: '@yourusername' },
                { label: 'LinkedIn', handle: '@yourlinkedin' },
                { label: 'Twitter', handle: '@yourtwitter' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="block text-hacker-accent text-opacity-70 hover:text-opacity-100 hover:text-hacker-pink transition-colors font-mono text-sm"
                >
                  <span className="text-hacker-pink">{'['}</span> {social.handle}
                  <span className="text-hacker-pink">{']'}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-hacker-accent text-opacity-50 text-xs font-mono">
            © {currentYear} Portfolio Hacker. Built with Next.js + Tailwind CSS.
          </p>
          <p className="text-hacker-cyan text-opacity-40 text-xs font-mono mt-2">
            {'< 404_Nothing_Illegal_Here.js />'} 
          </p>
        </div>
      </div>
    </footer>
  );
}
