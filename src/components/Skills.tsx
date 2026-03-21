import React, { useEffect, useRef, useState } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '◈',
    color: '#06b6d4',
    skills: [
      { name: 'Angular',      level: 90, color: '#ef4444' },
      { name: 'TypeScript',   level: 88, color: '#818cf8' },
      { name: 'React',        level: 80, color: '#38bdf8' },
      { name: 'HTML / CSS',   level: 95, color: '#f97316' },
      { name: 'Tailwind CSS', level: 85, color: '#06b6d4' },
    ],
  },
  {
    title: 'Backend',
    icon: '◉',
    color: '#22c55e',
    skills: [
      { name: 'Spring Boot', level: 92, color: '#22c55e' },
      { name: 'Node.js',     level: 80, color: '#34d399' },
      { name: 'Java',        level: 88, color: '#f59e0b' },
      { name: 'REST APIs',   level: 90, color: '#a78bfa' },
    ],
  },
  {
    title: 'Base de données',
    icon: '◎',
    color: '#3b82f6',
    skills: [
      { name: 'MySQL',      level: 88, color: '#3b82f6' },
      { name: 'PostgreSQL', level: 78, color: '#6366f1' },
      { name: 'MongoDB',    level: 72, color: '#22c55e' },
    ],
  },
  {
    title: 'Mobile & DevOps',
    icon: '◇',
    color: '#f97316',
    skills: [
      { name: 'Flutter', level: 85, color: '#06b6d4' },
      { name: 'Docker',  level: 75, color: '#38bdf8' },
      { name: 'Git',     level: 90, color: '#f97316' },
      { name: 'n8n',     level: 80, color: '#f59e0b' },
    ],
  },
];

const SkillBar = ({ skill, visible }: { skill: { name: string; level: number; color: string }; visible: boolean }) => {
  const [hovered, setHovered] = useState(false);
  return (
      <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{ marginBottom: '16px' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', alignItems: 'center' }}>
        <span style={{
          fontSize: '12px', fontWeight: 600,
          fontFamily: "'Raleway', sans-serif",
          color: hovered ? skill.color : '#94a3b8',
          transition: 'color 0.2s ease',
          letterSpacing: '0.5px',
        }}>
          {skill.name}
        </span>
          <span style={{
            fontSize: '11px', fontWeight: 700,
            fontFamily: "'Raleway', sans-serif",
            color: skill.color,
            opacity: hovered ? 1 : 0.6,
            transition: 'opacity 0.2s ease',
          }}>
          {skill.level}%
        </span>
        </div>
        <div style={{
          width: '100%', height: '4px',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '4px', overflow: 'hidden',
          position: 'relative',
        }}>
          <div style={{
            height: '100%',
            width: visible ? `${skill.level}%` : '0%',
            background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
            borderRadius: '4px',
            transition: 'width 1.2s cubic-bezier(0.16,1,0.3,1)',
            boxShadow: hovered ? `0 0 10px ${skill.color}80` : 'none',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute', right: 0, top: 0, bottom: 0,
              width: '6px',
              background: `radial-gradient(ellipse, ${skill.color}, transparent)`,
              borderRadius: '4px',
            }} />
          </div>
        </div>
      </div>
  );
};

const Skills = () => {
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
          id="skills"
          ref={sectionRef}
          style={{
            background: '#060d1a',
            padding: '100px 0',
            position: 'relative',
            overflow: 'hidden',
            fontFamily: "'Raleway', sans-serif",
          }}
      >
        {/* Background grid */}
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
          position: 'absolute', top: '10%', right: '-10%',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.06), transparent 70%)',
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', left: '-5%',
          width: '350px', height: '350px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(129,140,248,0.05), transparent 70%)',
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>

          {/* ── HEADER ── */}
          <div style={{
            marginBottom: '64px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(20px)',
            transition: 'all 0.8s ease',
          }}>
            <div style={{
              color: '#06b6d4', fontSize: '10px', letterSpacing: '5px',
              textTransform: 'uppercase', fontWeight: 600, marginBottom: '12px',
            }}>
              {'// expertise technique'}
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 600, color: '#f8fafc',
              letterSpacing: '-1px', margin: '0 0 16px',
              fontFamily: "'Raleway', sans-serif",
            }}>
              Mes <span style={{
              background: 'linear-gradient(90deg, #06b6d4, #818cf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Compétences</span>
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '40px', height: '2px', background: 'linear-gradient(90deg, #06b6d4, #3b82f6)' }} />
              <p style={{
                color: '#475569', fontSize: '14px', margin: 0,
                fontFamily: "'Raleway', sans-serif",
              }}>
                Stack complète · Frontend, Backend, Mobile & DevOps
              </p>
            </div>
          </div>

          {/* ── SKILL CARDS GRID ──
            Desktop : 4 colonnes fixes (comportement original)
            Mobile  : 1 colonne (via media query CSS)
        ── */}
          <div className="skills-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)', /* desktop : 4 colonnes */
            gap: '14px',
            marginBottom: '60px',
          }}>
            {skillCategories.map((cat, ci) => (
                <div
                    key={ci}
                    style={{
                      background: 'rgba(255,255,255,0.02)',
                      border: `1px solid rgba(255,255,255,0.06)`,
                      borderRadius: '18px',
                      padding: '20px',
                      transition: 'all 0.3s ease',
                      opacity: visible ? 1 : 0,
                      transform: visible ? 'none' : 'translateY(30px)',
                      transitionDelay: `${ci * 0.1}s`,
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = `${cat.color}30`;
                      el.style.background = `${cat.color}05`;
                      el.style.transform = 'translateY(-4px)';
                      el.style.boxShadow = `0 20px 60px ${cat.color}10`;
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = 'rgba(255,255,255,0.06)';
                      el.style.background = 'rgba(255,255,255,0.02)';
                      el.style.transform = 'none';
                      el.style.boxShadow = 'none';
                    }}
                >
                  {/* Top accent line */}
                  <div style={{
                    position: 'absolute', top: 0, left: '20%', right: '20%', height: '2px',
                    background: `linear-gradient(90deg, transparent, ${cat.color}, transparent)`,
                    borderRadius: '2px',
                  }} />

                  {/* Card header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                    <div style={{
                      width: '38px', height: '38px', borderRadius: '10px',
                      background: `${cat.color}15`,
                      border: `1px solid ${cat.color}30`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '16px', color: cat.color,
                      flexShrink: 0,
                    }}>
                      {cat.icon}
                    </div>
                    <h3 style={{
                      color: '#f1f5f9', fontSize: '15px', fontWeight: 700,
                      margin: 0, fontFamily: "'Raleway', sans-serif",
                      letterSpacing: '0.3px',
                    }}>
                      {cat.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  {cat.skills.map((skill, si) => (
                      <SkillBar key={si} skill={skill} visible={visible} />
                  ))}
                </div>
            ))}
          </div>

        </div>

        {/* ── RESPONSIVE STYLES ── */}
        <style>{`
        /* Tablette : 2 colonnes */
        @media (max-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        /* Mobile : 1 colonne */
        @media (max-width: 600px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
          #skills {
            padding: 70px 0 50px !important;
          }
        }
      `}</style>
      </section>
  );
};

export default Skills;