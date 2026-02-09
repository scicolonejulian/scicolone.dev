'use client';

/**
 * About Section - Estilo hacker/terminal
 */
export default function About() {
  const skills = [
    'React.js',
    'Next.js',
    'JavaScript',
    'Node.js',
    'MongoDB',
    'PostgreSQL',
    'REST API',
    'Git Flow',
    'Docker',
    'AWS',
    'Linux',
    'Cybersecurity',
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-hacker-pink">{'<'}</span>
            <span className="glitch" data-text="ABOUT_ME">ABOUT_ME</span>
            <span className="text-hacker-pink">{'>'}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-hacker-cyan to-hacker-accent mx-auto shadow-neon"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* About text */}
          <div className="border-l-2 border-hacker-accent pl-6">
            <div className="font-mono text-sm text-hacker-pink mb-4">{'// about_me.js'}</div>
            <p className="text-hacker-accent text-opacity-80 mb-4 leading-relaxed">
              Soy un desarrollador full stack apasionado por la ciberseguridad y las tecnologías
              emergentes. Me encanta construir aplicaciones rápidas, escalables y seguras.
            </p>
            <p className="text-hacker-accent text-opacity-80 leading-relaxed">
              Cuando no estoy codificando, contribuyo a proyectos open source o exploro nuevas
              técnicas de seguridad. Por eso creo en el código limpio y las mejores prácticas.
            </p>
          </div>

          {/* Skills grid */}
          <div>
            <div className="font-mono text-sm text-hacker-pink mb-4">{'// skills_array.push('}</div>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="bg-hacker-dark border-2 border-hacker-accent border-opacity-30 px-4 py-3 rounded hover:border-opacity-100 transition-all duration-200 hover:shadow-neon group"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`,
                  }}
                >
                  <span className="text-hacker-cyan text-sm">{'$ '}</span>
                  <span className="text-hacker-accent text-sm group-hover:text-hacker-pink transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
            <div className="font-mono text-sm text-hacker-pink mt-4">{')  // array'}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

const style = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
