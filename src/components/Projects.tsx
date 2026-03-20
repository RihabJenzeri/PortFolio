import React, { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink, Star, Users, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'SCALY — E-Commerce Platform',
    description: 'Plateforme e-commerce complète avec gestion des commandes, stock, colis, intégration sociétés de livraison, réclamations et caisse. Générateur de boutique personnalisable (CMS).',
    technologies: ['Angular', 'Spring Boot', 'MySQL', 'n8n'],
    image: 'Capture.PNG',
    github: 'https://github.com/RihabJenzeri',
    demo: 'http://102.204.206.54:8040/login',
    color: '#06b6d4',
    period: 'Jan 2024 – Jan 2026',
    company: 'Click Trading, Sousse',
    stats: { stars: 24, contributors: 3, commits: 156 },
  },
  {
    title: 'PROIMPO — App Mobile',
    description: 'Application mobile multiplateforme de vente et gestion de produits. Catalogue, panier, commandes et notifications temps réel avec Firebase.',
    technologies: ['Flutter', 'PHP', 'MySQL', 'Firebase'],
    image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/RihabJenzeri',
    demo: '#',
    color: '#818cf8',
    period: 'Jan – Juil 2024',
    company: 'Click Trading — PFE',
    stats: { stars: 18, contributors: 2, commits: 89 },
  },
  {
    title: 'Plateforme Éducative',
    description: 'Plateforme de cours de rattrapage avec gestion RBAC, inscriptions, paiements en ligne, supports pédagogiques et tableau de bord administrateur.',
    technologies: ['Angular', 'Node.js', 'Spring Security', 'JWT'],
    image: 'img.png',
    github: 'https://github.com/RihabJenzeri',
    demo: 'http://102.204.206.54:8040/login',
    color: '#22c55e',
    period: 'Fév 2026 – Présent',
    company: 'DevIT / Freelance',
    stats: { stars: 21, contributors: 2, commits: 134 },
  },
  {
    title: 'Chat Temps Réel',
    description: 'Application de messagerie en temps réel avec salles privées, notifications push et gestion des utilisateurs connectés via WebSocket.',
    technologies: ['Angular', 'Spring WebSocket', 'MongoDB'],
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/RihabJenzeri',
    demo: '#',
    color: '#f59e0b',
    period: '2023',
    company: 'Projet académique',
    stats: { stars: 15, contributors: 2, commits: 94 },
  },
];

const ProjectCard = ({ project, index, visible }: { project: typeof projects[0]; index: number; visible: boolean }) => {
  const [hovered, setHovered] = useState(false);

  return (
      <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            background: hovered ? `${project.color}07` : 'rgba(255,255,255,0.02)',
            border: `1px solid ${hovered ? project.color + '35' : 'rgba(255,255,255,0.06)'}`,
            borderRadius: '20px',
            overflow: 'hidden',
            transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
            transform: visible ? (hovered ? 'translateY(-6px)' : 'none') : 'translateY(30px)',
            opacity: visible ? 1 : 0,
            transitionDelay: `${index * 0.1}s`,
            boxShadow: hovered ? `0 24px 60px ${project.color}15` : 'none',
            position: 'relative',
            cursor: 'default',
          }}
      >
        {/* Top accent */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
          background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
          opacity: hovered ? 1 : 0.3,
          transition: 'opacity 0.3s ease',
        }} />

        {/* Image */}
        <div style={{ position: 'relative', overflow: 'hidden', height: '180px' }}>
          <img
              src={project.image}
              alt={project.title}
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s ease',
                transform: hovered ? 'scale(1.06)' : 'scale(1)',
                filter: 'brightness(0.5)',
              }}
          />
          {/* Image overlay gradient */}
          <div style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(to bottom, transparent 30%, #060d1a 100%)`,
          }} />
          {/* Period badge */}
          <div style={{
            position: 'absolute', top: '14px', left: '14px',
            padding: '4px 10px', borderRadius: '6px',
            background: 'rgba(6,9,24,0.8)',
            backdropFilter: 'blur(8px)',
            border: `1px solid ${project.color}40`,
            color: project.color,
            fontSize: '10px', fontWeight: 700,
            fontFamily: "'Raleway', sans-serif",
            letterSpacing: '1px',
          }}>
            {project.period}
          </div>
          {/* Arrow icon top right */}
          <div style={{
            position: 'absolute', top: '14px', right: '14px',
            width: '32px', height: '32px', borderRadius: '8px',
            background: 'rgba(6,9,24,0.8)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'scale(1)' : 'scale(0.7)',
            transition: 'all 0.25s ease',
            color: project.color,
          }}>
            <ArrowUpRight size={14} />
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '22px' }}>

          {/* Company tag */}
          <div style={{
            color: project.color, fontSize: '10px',
            fontWeight: 700, letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '8px',
            fontFamily: "'Raleway', sans-serif",
          }}>
            {project.company}
          </div>

          <h4 style={{
            color: '#f1f5f9', fontSize: '16px', fontWeight: 800,
            margin: '0 0 10px', lineHeight: 1.3,
            fontFamily: "'Raleway', sans-serif",
            letterSpacing: '-0.3px',
          }}>
            {project.title}
          </h4>

          <p style={{
            color: '#475569', fontSize: '13px', lineHeight: 1.7,
            margin: '0 0 16px',
            fontFamily: "'Raleway', sans-serif",
          }}>
            {project.description}
          </p>

          {/* Tech badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
            {project.technologies.map((tech, i) => (
                <span key={i} style={{
                  padding: '3px 10px', borderRadius: '6px',
                  fontSize: '10px', fontWeight: 700,
                  background: `${project.color}10`,
                  border: `1px solid ${project.color}25`,
                  color: project.color,
                  fontFamily: "'Raleway', sans-serif",
                  letterSpacing: '0.5px',
                }}>
              {tech}
            </span>
            ))}
          </div>

          {/* Stats row */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '16px',
            marginBottom: '18px',
            padding: '10px 0',
            borderTop: '1px solid rgba(255,255,255,0.04)',
            borderBottom: '1px solid rgba(255,255,255,0.04)',
          }}>
            {[
              { icon: <Star size={12}/>, val: project.stats.stars },
              { icon: <Users size={12}/>, val: project.stats.contributors },
              { label: `${project.stats.commits} commits` },
            ].map((s, i) => (
                <span key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '5px',
                  color: '#334155', fontSize: '11px',
                  fontFamily: "'Raleway', sans-serif",
                }}>
              {s.icon && <span style={{ color: project.color }}>{s.icon}</span>}
                  {s.val ?? s.label}
            </span>
            ))}
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
              flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
              padding: '9px 0', borderRadius: '10px',
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(255,255,255,0.03)',
              color: '#64748b', textDecoration: 'none',
              fontSize: '12px', fontWeight: 700,
              fontFamily: "'Raleway', sans-serif",
              transition: 'all 0.2s ease',
            }}
               onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = '#e2e8f0'; el.style.borderColor = 'rgba(255,255,255,0.15)'; el.style.background = 'rgba(255,255,255,0.06)'; }}
               onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = '#64748b'; el.style.borderColor = 'rgba(255,255,255,0.08)'; el.style.background = 'rgba(255,255,255,0.03)'; }}
            >
              <Github size={13} /> Code
            </a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{
              flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
              padding: '9px 0', borderRadius: '10px',
              background: `linear-gradient(135deg, ${project.color}CC, ${project.color})`,
              color: '#060d1a', textDecoration: 'none',
              fontSize: '12px', fontWeight: 800,
              fontFamily: "'Raleway', sans-serif",
              transition: 'all 0.2s ease',
              boxShadow: `0 4px 16px ${project.color}30`,
            }}
               onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-1px)'; el.style.boxShadow = `0 8px 24px ${project.color}50`; }}
               onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ''; el.style.boxShadow = `0 4px 16px ${project.color}30`; }}
            >
              <ExternalLink size={13} /> Demo
            </a>
          </div>
        </div>
      </div>
  );
};

const Projects = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setVisible(true); },
        { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
      <section
          id="projects"
          ref={sectionRef}
          style={{
            background: '#060d1a',
            padding: '100px 0',
            position: 'relative',
            overflow: 'hidden',
            fontFamily: "'Raleway', sans-serif",
          }}
      >
        {/* Grid background */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `
          linear-gradient(rgba(6,182,212,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(6,182,212,0.03) 1px, transparent 1px)
        `,
          backgroundSize: '60px 60px',
        }} />

        {/* Glow blobs */}
        <div style={{
          position: 'absolute', top: '-5%', left: '-10%',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(129,140,248,0.06), transparent 70%)',
          filter: 'blur(70px)', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '0', right: '-5%',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.06), transparent 70%)',
          filter: 'blur(70px)', pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>

          {/* ── HEADER ── */}
          <div style={{
            marginBottom: '64px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(20px)',
            transition: 'all 0.8s ease',
          }}>
            <div style={{
              color: '#818cf8', fontSize: '10px', letterSpacing: '5px',
              textTransform: 'uppercase', fontWeight: 700, marginBottom: '12px',
              fontFamily: "'Raleway', sans-serif",
            }}>
              {'// projets réalisés'}
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 600, color: '#f8fafc',
              letterSpacing: '-1px', margin: '0 0 16px',
              fontFamily: "'Raleway', sans-serif",
            }}>
              Mes <span style={{
              background: 'linear-gradient(90deg, #818cf8, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Projets</span>
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '40px', height: '2px', background: 'linear-gradient(90deg, #818cf8, #06b6d4)' }} />
              <p style={{
                color: '#475569', fontSize: '14px', margin: 0,
                fontFamily: "'Raleway', sans-serif",
              }}>
                Projets livrés en production — web, mobile & automatisation
              </p>
            </div>
          </div>

          {/* ── PROJECTS GRID ── */}
          <div className="projects-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
            marginBottom: '60px',
          }}>
            {projects.map((project, i) => (
                <ProjectCard key={i} project={project} index={i} visible={visible} />
            ))}
          </div>

          {/* ── GITHUB CTA ── */}
          <div style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '20px',
            padding: '48px 40px',
            display: 'flex', gap: '32px',
            alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap',
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(20px)',
            transition: 'all 0.8s ease 0.5s',
            position: 'relative', overflow: 'hidden',
          }}>
            {/* CTA accent line */}
            <div style={{
              position: 'absolute', top: 0, left: '10%', right: '10%', height: '2px',
              background: 'linear-gradient(90deg, transparent, #06b6d4, #818cf8, transparent)',
            }} />

            <div>
              <div style={{
                color: '#06b6d4', fontSize: '10px', letterSpacing: '4px',
                textTransform: 'uppercase', fontWeight: 700, marginBottom: '8px',
                fontFamily: "'Raleway', sans-serif",
              }}>
                Open Source
              </div>
              <h3 style={{
                color: '#f1f5f9', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                fontWeight: 900, margin: '0 0 8px',
                fontFamily: "'Raleway', sans-serif",
              }}>
                Plus de projets sur GitHub
              </h3>
              <p style={{
                color: '#475569', fontSize: '14px', margin: 0,
                fontFamily: "'Raleway', sans-serif",
              }}>
                Découvrez toutes mes contributions et expérimentations
              </p>
            </div>

            <a
                href="https://github.com/RihabJenzeri"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  padding: '14px 28px', borderRadius: '12px',
                  background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                  color: '#060d1a', textDecoration: 'none',
                  fontSize: '14px', fontWeight: 800,
                  fontFamily: "'Raleway', sans-serif",
                  boxShadow: '0 4px 24px rgba(6,182,212,0.35)',
                  transition: 'all 0.25s ease',
                  flexShrink: 0,
                }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-3px)'; el.style.boxShadow = '0 10px 35px rgba(6,182,212,0.5)'; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ''; el.style.boxShadow = '0 4px 24px rgba(6,182,212,0.35)'; }}
            >
              <Github size={18} />
              Voir GitHub Profile
              <ArrowUpRight size={16} />
            </a>
          </div>

        </div>
        <style>{`
        @media (max-width: 700px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      </section>
  );
};

export default Projects;