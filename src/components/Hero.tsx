import React, { useEffect, useState, useRef } from 'react';
import { ArrowDown, Code, Zap, GitBranch } from 'lucide-react';

const techStack = [
  { label: 'Angular',     color: '#ef4444', icon: '◈' },
  { label: 'Spring Boot', color: '#f59e0b', icon: '◉' },
  { label: 'MySQL',       color: '#3b82f6', icon: '◎' },
  { label: 'Flutter',     color: '#06b6d4', icon: '◇' },
  { label: 'TypeScript',  color: '#818cf8', icon: '◆' },
  { label: 'Docker',      color: '#22d3ee', icon: '◈' },
  { label: 'Node.js',     color: '#34d399', icon: '◉' },
  { label: 'n8n',         color: '#f97316', icon: '◎' },
];

const floatingTags = [
  { label: 'AI Integration', x: '72%', y: '12%', delay: '0s',   color: '#818cf8' },
  { label: 'REST API',        x: '80%', y: '38%', delay: '0.4s', color: '#06b6d4' },
  { label: 'CI/CD',           x: '86%', y: '55%', delay: '0.6s', color: '#f59e0b' },
  { label: 'n8n Automation',  x: '76%', y: '76%', delay: '1.2s', color: '#f97316' },
];

const stats = [
  { value: '2+',   label: 'ans XP',        icon: <Zap size={14}/> },
  { value: '10+',  label: 'projets livrés', icon: <GitBranch size={14}/> },
  { value: '100%', label: 'satisfaction',   icon: <Code size={14}/> },
];

const Hero = () => {
  const [isVisible,   setIsVisible]   = useState(false);
  const [mousePos,    setMousePos]    = useState({ x: 0.5, y: 0.5 });
  const [activeTech,  setActiveTech]  = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setTimeout(() => setIsVisible(true), 80); }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveTech(p => (p + 1) % techStack.length), 1800);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) =>
        setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const px = (mousePos.x - 0.5) * 18;
  const py = (mousePos.y - 0.5) * 12;

  return (
      <section
          id="home"
          ref={containerRef}
          style={{
            minHeight: '100vh',
            background: '#060d1a',
            display: 'flex', alignItems: 'center',
            position: 'relative', overflow: 'hidden',
            fontFamily: "'DM Mono', 'Fira Code', monospace",
          }}
      >
        {/* Grid */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `
          linear-gradient(rgba(6,182,212,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(6,182,212,0.04) 1px, transparent 1px)
        `,
          backgroundSize: '60px 60px',
          transform: `translate(${px * 0.3}px, ${py * 0.3}px)`,
          transition: 'transform 0.1s ease',
        }} />

        {/* Glow blobs */}
        <div style={{
          position: 'absolute', top: '-10%', left: '-5%',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.08), transparent 70%)',
          filter: 'blur(60px)', pointerEvents: 'none',
          transform: `translate(${px * 0.8}px, ${py * 0.6}px)`,
          transition: 'transform 0.15s ease',
        }} />
        <div style={{
          position: 'absolute', bottom: '-5%', right: '5%',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(129,140,248,0.07), transparent 70%)',
          filter: 'blur(60px)', pointerEvents: 'none',
          transform: `translate(${-px * 0.5}px, ${-py * 0.4}px)`,
          transition: 'transform 0.15s ease',
        }} />

        {/* Floating tags */}
        {floatingTags.map((tag, i) => (
            <div key={i} className="floating-tag" style={{
              position: 'absolute', left: tag.x, top: tag.y,
              padding: '5px 12px', borderRadius: '20px',
              border: `1px solid ${tag.color}35`,
              background: `${tag.color}10`,
              color: tag.color, fontSize: '10px', fontWeight: 700,
              letterSpacing: '1px', textTransform: 'uppercase',
              animation: `floatTag 4s ease-in-out infinite`,
              animationDelay: tag.delay,
              backdropFilter: 'blur(8px)',
              display: 'none',
            }}>
              {tag.label}
            </div>
        ))}

        {/* MAIN CONTENT */}
        <div style={{
          maxWidth: '1100px', width: '100%',
          margin: '0 auto', padding: '80px 32px 60px',
          position: 'relative', zIndex: 10,
        }}>
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'none' : 'translateY(24px)',
            transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1)',
          }}>

            {/* Status badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 16px', borderRadius: '4px',
              border: '1px solid rgba(6,182,212,0.3)',
              background: 'rgba(6,182,212,0.06)',
              marginBottom: '32px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'none' : 'translateX(-20px)',
              transition: 'all 0.7s ease 0.1s',
            }}>
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: '#22c55e', display: 'inline-block',
              animation: 'pulse 2s infinite',
            }} />
              <span style={{ color: '#94a3b8', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase' }}>
              Disponible · Tunis, Tunisie
            </span>
            </div>

            {/* Subtitle tag */}
            <div style={{
              fontSize: 'clamp(13px, 1.8vw, 16px)',
              color: '#334155', letterSpacing: '6px',
              textTransform: 'uppercase', fontWeight: 500,
              marginBottom: '8px', fontFamily: "'DM Mono', monospace",
            }}>
              {'< FULL STACK DEVELOPER />'}
            </div>

            {/* ── NAME + LOGO ABSOLU à droite ── */}
            <div style={{ position: 'relative', display: 'inline-block' }}>

              {/* Noms empilés */}
              <h1 style={{
                fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                fontWeight: 900, lineHeight: 0.9,
                letterSpacing: '-3px', margin: 0,
                fontFamily: "'DM Mono', monospace",
                color: '#f8fafc',
              }}>
                Rihab
              </h1>
              <h1 style={{
                fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                fontWeight: 900, lineHeight: 0.9,
                letterSpacing: '-3px', margin: '0 0 28px',
                fontFamily: "'DM Mono', monospace",
                background: 'linear-gradient(90deg, #06b6d4, #818cf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'block',
              }}>
                Jenzeri
              </h1>



            </div>

            {/* Description */}
            <div style={{
              fontSize: 'clamp(15px, 1.6vw, 18px)',
              color: '#64748b', lineHeight: 1.7,
              maxWidth: '520px', marginBottom: '36px',
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontWeight: 400,
            }}>
              Full Stack Developer spécialisée en{' '}
              <span style={{ color: '#ffffff', fontWeight: 600 }}>Angular</span>,{' '}
              <span style={{ color: '#ffffff', fontWeight: 600 }}>Spring Boot</span> &{' '}
              <span style={{ color: '#ffffff', fontWeight: 600 }}>Flutter</span>.{' '}
              <span style={{ color: '#475569' }}>Passionnée d'IA & d'automatisation de workflows.</span>
            </div>

            {/* Stats */}
            {/*<div style={{*/}
            {/*  display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '36px',*/}
            {/*  opacity: isVisible ? 1 : 0,*/}
            {/*  transform: isVisible ? 'none' : 'translateY(16px)',*/}
            {/*  transition: 'all 0.8s ease 0.3s',*/}
            {/*}}>*/}
            {/*  {stats.map((s, i) => (*/}
            {/*      <div key={i} style={{*/}
            {/*        display: 'flex', alignItems: 'center', gap: '10px',*/}
            {/*        padding: '10px 20px', borderRadius: '8px',*/}
            {/*        border: '1px solid rgba(255,255,255,0.06)',*/}
            {/*        background: 'rgba(255,255,255,0.02)',*/}
            {/*      }}>*/}
            {/*        <span style={{ color: '#06b6d4' }}>{s.icon}</span>*/}
            {/*        <span style={{ color: '#f1f5f9', fontWeight: 800, fontSize: '18px', fontFamily: "'DM Mono', monospace" }}>{s.value}</span>*/}
            {/*        <span style={{ color: '#475569', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px' }}>{s.label}</span>*/}
            {/*      </div>*/}
            {/*  ))}*/}
            {/*</div>*/}

            {/* Tech badges */}
            <div style={{
              marginBottom: '40px',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.8s ease 0.4s',
            }}>
              <div style={{ color: '#1e293b', fontSize: '9px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '10px' }}>
                Stack
              </div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {techStack.map((tech, i) => (
                    <span key={tech.label} style={{
                      padding: '5px 13px', borderRadius: '6px',
                      fontSize: '11px', fontWeight: 700, fontFamily: "'DM Mono', monospace",
                      background: activeTech === i ? `${tech.color}18` : 'rgba(255,255,255,0.02)',
                      border: `1px solid ${activeTech === i ? tech.color : 'rgba(255,255,255,0.06)'}`,
                      color: activeTech === i ? tech.color : '#334155',
                      transition: 'all 0.4s ease',
                      transform: activeTech === i ? 'translateY(-3px)' : 'none',
                      boxShadow: activeTech === i ? `0 6px 20px ${tech.color}25` : 'none',
                    }}>
                  {tech.icon} {tech.label}
                </span>
                ))}
              </div>
            </div>

            {/* CTA buttons */}
            <div style={{
              display: 'flex', gap: '12px', flexWrap: 'wrap',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'none' : 'translateY(16px)',
              transition: 'all 0.8s ease 0.5s',
            }}>
              <a href="#projects" style={{
                padding: '13px 28px', borderRadius: '8px', fontWeight: 700,
                fontSize: '13px', textDecoration: 'none', color: '#060d1a',
                background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                boxShadow: '0 4px 24px rgba(6,182,212,0.35)',
                transition: 'all 0.25s ease', display: 'inline-flex', alignItems: 'center', gap: '8px',
                fontFamily: "'DM Mono', monospace", letterSpacing: '0.5px',
              }}
                 onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-3px)'; el.style.boxShadow = '0 10px 35px rgba(6,182,212,0.45)'; }}
                 onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ''; el.style.boxShadow = '0 4px 24px rgba(6,182,212,0.35)'; }}
              >
                <Code size={15} /> Voir mes projets
              </a>
              <a href="#contact" style={{
                padding: '13px 28px', borderRadius: '8px', fontWeight: 700,
                fontSize: '13px', textDecoration: 'none', color: '#94a3b8',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.03)', transition: 'all 0.25s ease',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                fontFamily: "'DM Mono', monospace", letterSpacing: '0.5px',
              }}
                 onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(6,182,212,0.4)'; el.style.color = '#06b6d4'; el.style.transform = 'translateY(-3px)'; }}
                 onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.1)'; el.style.color = '#94a3b8'; el.style.transform = ''; }}
              >
                Me contacter →
              </a>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: '28px', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
          opacity: isVisible ? 1 : 0, transition: 'opacity 1s ease 1.2s',
        }}>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, transparent, rgba(6,182,212,0.5))', animation: 'scrollLine 2s ease-in-out infinite' }} />
          <ArrowDown size={14} style={{ color: '#06b6d4', opacity: 0.5 }} />
        </div>

        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500;700&family=DM+Sans:wght@400;600;700;900&display=swap');

        @keyframes pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.4; transform:scale(0.7); }
        }
        @keyframes floatTag {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes scrollLine {
          0%,100% { transform: scaleY(1); opacity:0.5; }
          50% { transform: scaleY(1.3); opacity:1; }
        }
        @keyframes spinRing {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes floatLogo {
          0%,100% { transform: translateY(0px); }
          50%     { transform: translateY(-10px); }
        }
        @media (min-width: 900px) {
          .floating-tag { display: block !important; }
          .logo-circle-abs { display: block !important; }
        }
        @media (max-width: 899px) {
          .logo-circle-abs { display: none !important; }
        }
      `}</style>
      </section>
  );
};

export default Hero;
//
// {/* ── LOGO CERCLE ── */}
// <div style={{
//   position: 'relative',
//   width: 'clamp(250px, 8vw, 250px)',
//   height: 'clamp(250px, 8vw, 250px)',
//   flexShrink: 0,
//   animation: 'floatLogo 3s ease-in-out infinite',
// }}>
//   <div style={{
//     position: 'absolute', inset: '2px', borderRadius: '50%',
//     background: '#060d1a',
//   }} />
//   {/* Logo image */}
//   <div style={{
//     position: 'relative', width: '100%', height: '100%',
//     borderRadius: '50%', overflow: 'hidden',
//     zIndex: 1,
//     display: 'flex', alignItems: 'center', justifyContent: 'center',
//   }}>
//     <img
//         src="/PortFolio/public/rr.png"
//         alt="Logo"
//         style={{
//           width: '85%', height: '85%',
//           objectFit: 'contain',
//           filter: 'invert(1) brightness(12) contrast(1.2)',
//         }}
//         onError={e => {
//           (e.currentTarget as HTMLImageElement).style.display = 'none';
//           (e.currentTarget.parentElement as HTMLElement).innerHTML =
//               '<div style="color:#06b6d4;font-size:2rem;font-weight:900;font-family:DM Mono">R</div>';
//         }}
//     />
//   </div>
//
//   {/* Glow behind circle */}
//   <div style={{
//     position: 'absolute', inset: '-8px', borderRadius: '50%',
//     background: 'radial-gradient(circle, rgba(6,182,212,0.25), transparent 70%)',
//     filter: 'blur(10px)',
//     zIndex: -1,
//   }} />
// </div>