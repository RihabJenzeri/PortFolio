import React, { useEffect, useState } from 'react';
import { ArrowDown, Code, Database, Smartphone } from 'lucide-react';

const techStack = [
  { label: 'Angular', color: '#ef4444' },
  { label: 'Spring Boot', color: '#f59e0b' },
  { label: 'MySQL', color: '#3b82f6' },
  { label: 'Flutter', color: '#06b6d4' },
  { label: 'TypeScript', color: '#818cf8' },
  { label: 'Docker', color: '#22d3ee' },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % techStack.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f172a 100%)' }}
    >
      {/* Grid background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(6,182,212,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(6,182,212,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Glow orbs */}
      <div className="absolute" style={{
        top: '20%', left: '5%', width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.08), transparent 70%)',
        filter: 'blur(30px)',
      }} />
      <div className="absolute" style={{
        bottom: '10%', right: '5%', width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59,130,246,0.08), transparent 70%)',
        filter: 'blur(30px)',
      }} />

      {/* ===== IMAGE TRANSPARENTE EN ARRIÈRE-PLAN ===== */}
      <div
        className="absolute"
        style={{
          left: '0',
          top: '0',
          width: '55%',
          height: '100%',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 1.2s ease',
        }}
      >
        {/* L'image avec fondu transparent */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/rihab.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center bottom',
          WebkitMaskImage: `linear-gradient(to right, transparent 0%, black 25%, black 55%, transparent 100%),
            linear-gradient(to top, transparent 0%, black 12%, black 88%, transparent 100%)`,
          WebkitMaskComposite: 'source-in',
          maskImage: `linear-gradient(to right, transparent 0%, black 25%, black 55%, transparent 100%),
            linear-gradient(to top, transparent 0%, black 12%, black 88%, transparent 100%)`,
          maskComposite: 'intersect',
          filter: 'brightness(0.9) contrast(1.05) saturate(0.9)',
        }} />

        {/* Overlay pour fondre avec le fond */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(to right, #0f172a 0%, transparent 25%, transparent 55%, #0f172a 100%),
            linear-gradient(to top, #0f172a 0%, transparent 12%)
          `,
        }} />
      </div>

      {/* ===== CONTENU PRINCIPAL ===== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between">

          {/* Espace gauche pour l'image transparente */}
          <div className="lg:w-1/2 hidden lg:block" />

          {/* Contenu texte à droite */}
          <div
            className="lg:w-1/2 text-left"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
              transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
            }}
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-5">
              <div style={{ width: '28px', height: '2px', background: '#06b6d4' }} />
              <span style={{ color: '#06b6d4', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 500 }}>
                Portfolio
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(3.5rem, 6vw, 5rem)',
              fontWeight: 800,
              color: '#f1f5f9',
              lineHeight: 1.05,
              marginBottom: '6px',
              letterSpacing: '-1px',
            }}>
              Rihab<span style={{ color: '#06b6d4' }}>.</span>
            </h1>

            <h2 style={{
              fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
              fontWeight: 300,
              color: '#94a3b8',
              marginBottom: '20px',
              letterSpacing: '1px',
            }}>
              Développeuse <span style={{ color: '#e2e8f0', fontWeight: 600 }}>Full Stack</span>
            </h2>

            <p style={{
              color: '#64748b',
              fontSize: '15px',
              lineHeight: 1.9,
              marginBottom: '32px',
              maxWidth: '440px',
            }}>
              Passionnée par le développement d'applications web et mobiles performantes.
              Spécialisée en{' '}
              <span style={{ color: '#ef4444', fontWeight: 600 }}>Angular</span>,{' '}
              <span style={{ color: '#f59e0b', fontWeight: 600 }}>Spring Boot</span>,{' '}
              <span style={{ color: '#3b82f6', fontWeight: 600 }}>MySQL</span> et{' '}
              <span style={{ color: '#06b6d4', fontWeight: 600 }}>Flutter</span>.
            </p>

            {/* Tech slider */}
            <div style={{ marginBottom: '32px' }}>
              <p style={{ color: '#334155', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '10px' }}>
                Stack technique
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {techStack.map((tech, i) => (
                  <div
                    key={tech.label}
                    style={{
                      padding: '5px 14px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: 600,
                      background: currentSlide === i ? `${tech.color}20` : 'rgba(15,23,42,0.6)',
                      border: `1px solid ${currentSlide === i ? tech.color : 'rgba(51,65,85,0.6)'}`,
                      color: currentSlide === i ? tech.color : '#334155',
                      transition: 'all 0.4s ease',
                      transform: currentSlide === i ? 'translateY(-2px)' : 'none',
                      boxShadow: currentSlide === i ? `0 4px 15px ${tech.color}25` : 'none',
                    }}
                  >
                    {tech.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Icons */}
            <div style={{ display: 'flex', gap: '24px', marginBottom: '36px', fontSize: '13px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#06b6d4' }}>
                <Code size={16} /><span>Frontend</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#f59e0b' }}>
                <Database size={16} /><span>Backend</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#3b82f6' }}>
                <Smartphone size={16} /><span>Mobile</span>
              </div>
            </div>

            {/* Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <a
                href="#projects"
                style={{
                  padding: '13px 30px',
                  background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                  color: '#fff',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '14px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(6,182,212,0.25)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(6,182,212,0.4)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = '';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(6,182,212,0.25)';
                }}
              >
                Voir mes projets
              </a>
              <a
                href="#contact"
                style={{
                  padding: '13px 30px',
                  background: 'transparent',
                  color: '#06b6d4',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '14px',
                  textDecoration: 'none',
                  border: '1.5px solid rgba(6,182,212,0.5)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(6,182,212,0.08)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  (e.currentTarget as HTMLElement).style.borderColor = '#06b6d4';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                  (e.currentTarget as HTMLElement).style.transform = '';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(6,182,212,0.5)';
                }}
              >
                Me contacter
              </a>
            </div>
          </div>
        </div>

        {/* Scroll */}
        <div style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
        }}>
          <span style={{ color: '#334155', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ animation: 'bounce 2s infinite' }}>
            <ArrowDown size={16} style={{ color: '#06b6d4' }} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;