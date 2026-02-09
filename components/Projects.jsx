'use client';

/**
 * Projects Section - Terminal style gallery
 */
const projects = [
  {
    id: 1,
    title: 'EvilCorp Portal',
    description: 'Full-stack e-commerce con stripe y análisis de seguridad',
    tech: ['Next.js', 'Stripe', 'MongoDB'],
    status: 'ACTIVE',
    level: '█████',
  },
  {
    id: 2,
    title: 'Cipher Dashboard',
    description: 'Dashboard de análisis con gráficos interactivos en tiempo real',
    tech: ['React', 'Node.js', 'WebSocket'],
    status: 'ACTIVE',
    level: '████░',
  },
  {
    id: 3,
    title: 'SecureVault',
    description: 'Sistema de cifrado y almacenamiento seguro en la nube',
    tech: ['Next.js', 'Cryptography', 'PostgreSQL'],
    status: 'BUILDING',
    level: '███░░',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-hacker-pink">{'<'}</span>
            <span className="glitch" data-text="PROJECTS">PROJECTS</span>
            <span className="text-hacker-pink">{'>'}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-hacker-pink to-hacker-cyan mx-auto shadow-neon"></div>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-hacker-dark border-2 border-hacker-accent border-opacity-30 p-6 rounded-lg hover:border-opacity-100 transition-all duration-300 hover:shadow-neon group"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-hacker-accent text-lg font-bold group-hover:text-hacker-cyan transition-colors">
                    {'$ '} {project.title}
                  </h3>
                  <div className="text-xs font-mono text-hacker-pink text-opacity-70 mt-1">
                    {project.status}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-hacker-accent text-opacity-70 text-sm mb-4 font-mono">
                {'// '} {project.description}
              </p>

              {/* Progress level */}
              <div className="mb-4">
                <div className="text-xs text-hacker-cyan font-mono mb-2">COMPLETION</div>
                <div className="text-hacker-pink font-mono">{project.level}</div>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-hacker-cyan bg-opacity-10 border border-hacker-cyan border-opacity-40 text-hacker-cyan px-2 py-1 rounded font-mono"
                  >
                    {'#'} {tech}
                  </span>
                ))}
              </div>

              {/* Footer links */}
              <div className="pt-4 border-t border-hacker-accent border-opacity-20 flex gap-4">
                <a href="#" className="text-xs btn-hacker">
                  {'[LIVE]'}
                </a>
                <a href="#" className="text-xs btn-hacker">
                  {'[CODE]'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
