import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import GooeyNav from './GooeyNav';
import { ProfileTrigger } from './ProfilePage';

// ─── Sans "À propos" ───
const navItems = [
  { label: 'Accueil',     href: '#home'     },
  { label: 'Compétences', href: '#skills'   },
  { label: 'Projets',     href: '#projects' },
  { label: 'Contact',     href: '#contact'  },
];

const Header = () => {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const ids = navItems.map(n => n.href.replace('#', ''));
    const obs = ids.map((id, idx) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const o = new IntersectionObserver(
          ([e]) => { if (e.isIntersecting) setActiveIdx(idx); },
          { threshold: 0.4 }
      );
      o.observe(el);
      return o;
    });
    return () => obs.forEach(o => o?.disconnect());
  }, []);

  return (
      <>
        <header style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999,
          transition: 'all 0.35s ease',
          background: scrolled ? 'rgba(3,9,18,0.90)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(6,182,212,0.08)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none',
        }}>
          <div style={{
            maxWidth: '1200px', margin: '0 auto', padding: '0 28px',
            display: 'flex', alignItems: 'center',
            height: scrolled ? '58px' : '66px', gap: '24px',
            transition: 'height 0.3s ease',
          }}>

            {/* ── LOGO TEXTE ── */}
            {/*<a href="#home" style={{ textDecoration: 'none', flexShrink: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>*/}
            {/*  <div style={{*/}
            {/*    width: '32px', height: '32px', borderRadius: '9px',*/}
            {/*    background: 'linear-gradient(135deg,#06b6d4,#3b82f6)',*/}
            {/*    display: 'flex', alignItems: 'center', justifyContent: 'center',*/}
            {/*    fontSize: '14px', fontWeight: 900, color: '#030912',*/}
            {/*    fontFamily: "'DM Mono', monospace",*/}
            {/*    boxShadow: '0 0 16px rgba(6,182,212,0.4)',*/}
            {/*    flexShrink: 0,*/}
            {/*  }}>R</div>*/}
            {/*  <span style={{*/}
            {/*    fontFamily: "'DM Mono', monospace",*/}
            {/*    fontSize: '15px', fontWeight: 700,*/}
            {/*    color: '#e2e8f0', letterSpacing: '-0.3px',*/}
            {/*  }}>*/}
            {/*  ihab<span style={{ color: '#06b6d4' }}>.</span>*/}
            {/*</span>*/}
            {/*</a>*/}

            {/* ── GOOEY NAV desktop ── */}
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }} className="desk-nav">
              <div style={{ borderRadius: '12px', padding: '2px' }}>
                <GooeyNav
                    items={navItems}
                    particleCount={15}
                    particleDistances={[90, 10]}
                    particleR={100}
                    initialActiveIndex={activeIdx}
                    animationTime={600}
                    timeVariance={300}
                    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                />
              </div>
            </div>

            {/* ── RIGHT: socials + profile ── */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }} className="desk-right">
              {[
                { icon: <Github size={15}/>,   href: 'https://github.com/RihabJenzeri' },
                { icon: <Linkedin size={15}/>, href: 'https://www.linkedin.com/in/rihab-jenzeri-42bb83202/' },
                { icon: <Mail size={15}/>,     href: 'mailto:rihab.jenzeri@gmail.com' },
              ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                    width: '32px', height: '32px', borderRadius: '8px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#1e3347', textDecoration: 'none', transition: 'all 0.2s ease',
                  }}
                     onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = '#06b6d4'; el.style.background = 'rgba(6,182,212,0.08)'; }}
                     onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = '#1e3347'; el.style.background = 'transparent'; }}
                  >{s.icon}</a>
              ))}
              <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.07)' }} />
              <ProfileTrigger />
            </div>

            {/* ── MOBILE ── */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto', flexShrink: 0 }} className="mob-controls">
              <ProfileTrigger />
              <button onClick={() => setMenuOpen(o => !o)} style={{
                width: '34px', height: '34px', borderRadius: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: menuOpen ? 'rgba(6,182,212,0.1)' : 'rgba(255,255,255,0.04)',
                border: `1px solid ${menuOpen ? 'rgba(6,182,212,0.3)' : 'rgba(255,255,255,0.07)'}`,
                color: menuOpen ? '#06b6d4' : '#3d5166',
                cursor: 'pointer', transition: 'all 0.2s ease',
              }}>
                {menuOpen ? <X size={15}/> : <Menu size={15}/>}
              </button>
            </div>
          </div>

          {/* ── MOBILE MENU ── */}
          <div style={{
            overflow: 'hidden',
            maxHeight: menuOpen ? '260px' : '0',
            transition: 'max-height 0.4s cubic-bezier(0.16,1,0.3,1)',
            borderTop: menuOpen ? '1px solid rgba(255,255,255,0.04)' : 'none',
          }} className="mob-menu">
            <div style={{ background: 'rgba(3,9,18,0.97)', backdropFilter: 'blur(20px)' }}>
              {navItems.map((item, i) => {
                const isActive = activeIdx === i;
                return (
                    <a key={i} href={item.href} onClick={() => setMenuOpen(false)} style={{
                      display: 'flex', alignItems: 'center', gap: '14px',
                      padding: '13px 28px',
                      borderBottom: '1px solid rgba(255,255,255,0.03)',
                      textDecoration: 'none',
                      background: isActive ? 'rgba(6,182,212,0.05)' : 'transparent',
                      borderLeft: `2px solid ${isActive ? '#06b6d4' : 'transparent'}`,
                      transition: 'all 0.2s ease',
                    }}>
                      <span style={{ color: '#0d1e2d', fontSize: '9px', fontFamily: "'DM Mono', monospace", fontWeight: 700 }}>0{i + 1}</span>
                      <span style={{
                        fontSize: '12px', fontFamily: "'DM Mono', monospace",
                        fontWeight: isActive ? 700 : 400,
                        letterSpacing: '1.5px', textTransform: 'uppercase',
                        color: isActive ? '#06b6d4' : '#2d4157',
                      }}>{item.label}</span>
                    </a>
                );
              })}
            </div>
          </div>
        </header>

        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500;600;700&display=swap');
        @media (max-width: 768px) { .desk-nav, .desk-right { display: none !important; } }
        @media (min-width: 769px) { .mob-controls, .mob-menu { display: none !important; } }
      `}</style>
      </>
  );
};

export default Header;