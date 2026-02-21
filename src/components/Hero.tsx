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
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(6,182,212,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.03) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
      }} />

      {/* Glow blobs */}
      <div className="absolute pointer-events-none" style={{
        top: '10%', left: '10%', width: '300px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.1), transparent 70%)', filter: 'blur(40px)',
      }} />
      <div className="absolute pointer-events-none" style={{
        bottom: '10%', right: '10%', width: '250px', height: '250px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59,130,246,0.1), transparent 70%)', filter: 'blur(40px)',
      }} />

      <div className="w-full max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <div
          className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.8s ease',
          }}
        >

          {/* ===== IMAGE CRÉATIVE ===== */}
          <div
            className="flex-shrink-0 flex items-center justify-center"
            style={{
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s, opacity 0.9s ease 0.1s',
            }}
          >
            {/* Outer glow ring */}
            <div style={{ position: 'relative', width: '260px', height: '260px' }}>

              {/* Spinning gradient border */}
              <div style={{
                position: 'absolute', inset: '-3px', borderRadius: '50%',
                background: 'conic-gradient(from 0deg, #06b6d4, #3b82f6, #818cf8, #06b6d4)',
                animation: 'spin 6s linear infinite',
                zIndex: 1,
              }} />

              {/* White gap ring */}
              <div style={{
                position: 'absolute', inset: '0px', borderRadius: '50%',
                background: '#0f172a', zIndex: 2,
              }} />

              {/* Image clipped in circle */}
              <div style={{
                position: 'absolute', inset: '6px', borderRadius: '50%',
                overflow: 'hidden', zIndex: 3,
                boxShadow: '0 0 30px rgba(6,182,212,0.2)',
              }}>
                <img
                  src="/rihab.png"
                  alt="Rihab Lenzeri"
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover', objectPosition: 'center top',
                    filter: 'brightness(1.05) contrast(1.05)',
                  }}
                />
                {/* Bottom transparent fade */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%',
                  background: 'linear-gradient(to top, rgba(15,23,42,0.5), transparent)',
                }} />
              </div>

              {/* Floating badge — disponible */}
              <div style={{
                position: 'absolute', bottom: '8px', right: '-16px',
                display: 'flex', alignItems: 'center', gap: '6px',
                padding: '5px 12px', borderRadius: '20px',
                background: 'rgba(15,23,42,0.95)',
                border: '1px solid rgba(34,197,94,0.5)',
                color: '#22c55e', fontSize: '11px', fontWeight: 600,
                zIndex: 10, backdropFilter: 'blur(8px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
              }}>
                <span style={{
                  width: '7px', height: '7px', borderRadius: '50%',
                  background: '#22c55e', display: 'inline-block',
                  animation: 'pulse 2s infinite',
                }} />
                Disponible
              </div>

              {/* Floating badge — XP */}
              <div style={{
                position: 'absolute', top: '12px', left: '-16px',
                padding: '8px 12px', borderRadius: '12px',
                background: 'rgba(15,23,42,0.95)',
                border: '1px solid rgba(6,182,212,0.4)',
                zIndex: 10, backdropFilter: 'blur(8px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '18px', fontWeight: 800, color: '#06b6d4', lineHeight: 1 }}>3+</div>
                <div style={{ fontSize: '9px', color: '#64748b', lineHeight: 1.4 }}>ans XP</div>
              </div>

              {/* Small orbiting dot */}
              <div style={{
                position: 'absolute', top: '-4px', left: '50%',
                width: '10px', height: '10px', marginLeft: '-5px',
                borderRadius: '50%', background: '#06b6d4',
                boxShadow: '0 0 10px #06b6d4',
                zIndex: 4, animation: 'orbit 6s linear infinite',
              }} />
            </div>
          </div>

          {/* ===== TEXTE ===== */}
          <div
            style={{
              flex: 1,
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s, opacity 0.9s ease 0.2s',
            }}
          >
            {/* Label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{ width: '24px', height: '2px', background: '#06b6d4' }} />
              <span style={{ color: '#06b6d4', fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 500 }}>
                Full Stack Developer
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.8rem, 5vw, 4rem)',
              fontWeight: 800, color: '#f1f5f9',
              lineHeight: 1.05, marginBottom: '6px', letterSpacing: '-1px',
            }}>
              Rihab<span style={{ color: '#06b6d4' }}>.</span>
            </h1>

            <h2 style={{
              fontSize: 'clamp(1rem, 2vw, 1.3rem)',
              fontWeight: 300, color: '#94a3b8',
              marginBottom: '16px', letterSpacing: '0.5px',
            }}>
              Développeuse <span style={{ color: '#e2e8f0', fontWeight: 600 }}>Full Stack</span>
            </h2>

            <p style={{
              color: '#64748b', fontSize: '14px',
              lineHeight: 1.8, marginBottom: '24px', maxWidth: '420px',
            }}>
              Spécialisée en{' '}
              <span style={{ color: '#ef4444', fontWeight: 600 }}>Angular</span>,{' '}
              <span style={{ color: '#f59e0b', fontWeight: 600 }}>Spring Boot</span>,{' '}
              <span style={{ color: '#3b82f6', fontWeight: 600 }}>MySQL</span> et{' '}
              <span style={{ color: '#06b6d4', fontWeight: 600 }}>Flutter</span>.
            </p>

            {/* Tech slider badges */}
            <div style={{ marginBottom: '24px' }}>
              <p style={{ color: '#1e293b', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '8px' }}>
                Stack
              </p>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {techStack.map((tech, i) => (
                  <span
                    key={tech.label}
                    style={{
                      padding: '4px 12px', borderRadius: '20px',
                      fontSize: '11px', fontWeight: 600,
                      background: currentSlide === i ? `${tech.color}20` : 'rgba(15,23,42,0.7)',
                      border: `1px solid ${currentSlide === i ? tech.color : 'rgba(51,65,85,0.5)'}`,
                      color: currentSlide === i ? tech.color : '#334155',
                      transition: 'all 0.4s ease',
                      transform: currentSlide === i ? 'translateY(-2px)' : 'none',
                      boxShadow: currentSlide === i ? `0 4px 12px ${tech.color}30` : 'none',
                      display: 'inline-block',
                    }}
                  >
                    {tech.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Icons row */}
            <div style={{ display: 'flex', gap: '20px', marginBottom: '28px', fontSize: '12px' }}>
              {[
                { icon: <Code size={14} />, label: 'Frontend', color: '#06b6d4' },
                { icon: <Database size={14} />, label: 'Backend', color: '#f59e0b' },
                { icon: <Smartphone size={14} />, label: 'Mobile', color: '#3b82f6' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '5px', color: item.color }}>
                  {item.icon}<span>{item.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <a href="#projects" style={{
                padding: '11px 26px', borderRadius: '8px', fontWeight: 600,
                fontSize: '13px', textDecoration: 'none', color: '#fff',
                background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                boxShadow: '0 4px 15px rgba(6,182,212,0.3)',
                transition: 'all 0.3s ease', display: 'inline-block',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 25px rgba(6,182,212,0.4)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 15px rgba(6,182,212,0.3)'; }}
              >
                Voir mes projets
              </a>
              <a href="#contact" style={{
                padding: '11px 26px', borderRadius: '8px', fontWeight: 600,
                fontSize: '13px', textDecoration: 'none', color: '#06b6d4',
                border: '1.5px solid rgba(6,182,212,0.4)',
                background: 'transparent', transition: 'all 0.3s ease', display: 'inline-block',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(6,182,212,0.08)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.transform = ''; }}
              >
                Me contacter
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
        }}>
          <div style={{ animation: 'bounce 2s infinite' }}>
            <ArrowDown size={16} style={{ color: '#06b6d4', opacity: 0.6 }} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(130px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(130px) rotate(-360deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;