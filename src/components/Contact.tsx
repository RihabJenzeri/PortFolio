import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle } from 'lucide-react';

const contactInfo = [
  { icon: Mail,   label: 'Email',        value: 'rihab.jenzeri@gmail.com',                    href: 'mailto:rihab.jenzeri@gmail.com', color: '#06b6d4' },
  { icon: Phone,  label: 'Téléphone',    value: '+216 26 167 281',                            href: 'tel:+216XXXXXXXX',               color: '#818cf8' },
  { icon: MapPin, label: 'Localisation', value: 'Tunis, Tunisie',                             href: '#',                              color: '#22c55e' },
];

const socials = [
  { icon: Github,   label: 'GitHub',   href: 'https://github.com/RihabJenzeri',                            color: '#e2e8f0' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/rihab-jenzeri-42bb83202/',       color: '#0ea5e9' },
  { icon: Twitter,  label: 'Twitter',  href: '#',                                                           color: '#38bdf8' },
];

const Contact = () => {
  const [visible, setVisible] = useState(false);
  const [sent,    setSent]    = useState(false);
  const [sending, setSending] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  useEffect(() => {
    const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setVisible(true); },
        { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 1800);
  };

  const inputStyle = (name: string) => ({
    width: '100%',
    padding: '13px 16px',
    background: focused === name ? 'rgba(6,182,212,0.05)' : 'rgba(255,255,255,0.03)',
    border: `1px solid ${focused === name ? 'rgba(6,182,212,0.5)' : 'rgba(255,255,255,0.08)'}`,
    borderRadius: '12px',
    color: '#f1f5f9',
    fontSize: '13px',
    fontFamily: "'Raleway', sans-serif",
    outline: 'none',
    transition: 'all 0.25s ease',
    boxShadow: focused === name ? '0 0 0 3px rgba(6,182,212,0.08)' : 'none',
    boxSizing: 'border-box' as const,
  });

  const labelStyle = {
    display: 'block',
    color: '#64748b',
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '1.5px',
    textTransform: 'uppercase' as const,
    marginBottom: '8px',
    fontFamily: "'Raleway', sans-serif",
  };

  return (
      <section
          id="contact"
          ref={sectionRef}
          style={{
            background: '#060d1a',
            padding: '100px 0',
            position: 'relative',
            overflow: 'hidden',
            fontFamily: "'Raleway', sans-serif",
          }}
      >
        {/* Grid BG */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `
          linear-gradient(rgba(6,182,212,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(6,182,212,0.03) 1px, transparent 1px)
        `,
          backgroundSize: '60px 60px',
        }} />

        {/* Blobs */}
        <div style={{
          position: 'absolute', bottom: '-10%', right: '-8%',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.07), transparent 70%)',
          filter: 'blur(70px)', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', top: '5%', left: '-8%',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(129,140,248,0.06), transparent 70%)',
          filter: 'blur(70px)', pointerEvents: 'none',
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
              color: '#22c55e', fontSize: '10px', letterSpacing: '5px',
              textTransform: 'uppercase', fontWeight: 700, marginBottom: '12px',
            }}>
              {'// parlons de votre projet'}
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 600, color: '#f8fafc',
              letterSpacing: '-1px', margin: '0 0 16px',
            }}>
              Me <span style={{
              background: 'linear-gradient(90deg, #06b6d4, #22c55e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Contacter</span>
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '40px', height: '2px', background: 'linear-gradient(90deg, #06b6d4, #22c55e)' }} />
              <p style={{ color: '#475569', fontSize: '14px', margin: 0 }}>
                Réponse garantie sous 24h — disponible pour freelance & CDI
              </p>
            </div>
          </div>

          {/* ── GRID: Form + Info ── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '24px',
            alignItems: 'start',
          }} className="contact-grid">

            {/* ─── FORM ─── */}
            <div style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '24px',
              padding: '40px',
              position: 'relative',
              overflow: 'hidden',
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateX(-30px)',
              transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s',
            }}>
              {/* Top accent */}
              <div style={{
                position: 'absolute', top: 0, left: '15%', right: '15%', height: '2px',
                background: 'linear-gradient(90deg, transparent, #06b6d4, transparent)',
              }} />

              {!sent ? (
                  <>
                    <h3 style={{
                      color: '#f1f5f9', fontSize: '18px', fontWeight: 800,
                      margin: '0 0 28px', letterSpacing: '-0.3px',
                    }}>
                      Envoyez-moi un message
                    </h3>

                    <form onSubmit={handleSubmit}>
                      {/* Name + Email */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }} className="form-row">
                        <div>
                          <label style={labelStyle}>Nom complet</label>
                          <input
                              type="text" required
                              value={form.name}
                              onChange={e => setForm({ ...form, name: e.target.value })}
                              onFocus={() => setFocused('name')}
                              onBlur={() => setFocused(null)}
                              placeholder="Votre nom"
                              style={inputStyle('name')}
                          />
                        </div>
                        <div>
                          <label style={labelStyle}>Email</label>
                          <input
                              type="email" required
                              value={form.email}
                              onChange={e => setForm({ ...form, email: e.target.value })}
                              onFocus={() => setFocused('email')}
                              onBlur={() => setFocused(null)}
                              placeholder="votre@email.com"
                              style={inputStyle('email')}
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div style={{ marginBottom: '16px' }}>
                        <label style={labelStyle}>Sujet</label>
                        <input
                            type="text" required
                            value={form.subject}
                            onChange={e => setForm({ ...form, subject: e.target.value })}
                            onFocus={() => setFocused('subject')}
                            onBlur={() => setFocused(null)}
                            placeholder="Objet de votre message"
                            style={inputStyle('subject')}
                        />
                      </div>

                      {/* Message */}
                      <div style={{ marginBottom: '24px' }}>
                        <label style={labelStyle}>Message</label>
                        <textarea
                            required rows={5}
                            value={form.message}
                            onChange={e => setForm({ ...form, message: e.target.value })}
                            onFocus={() => setFocused('message')}
                            onBlur={() => setFocused(null)}
                            placeholder="Décrivez votre projet ou votre question..."
                            style={{ ...inputStyle('message'), resize: 'none' as const, lineHeight: 1.7 }}
                        />
                      </div>

                      {/* Submit */}
                      <button
                          type="submit"
                          disabled={sending}
                          style={{
                            width: '100%',
                            padding: '14px',
                            borderRadius: '12px',
                            border: 'none',
                            background: sending
                                ? 'rgba(6,182,212,0.3)'
                                : 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                            color: sending ? '#94a3b8' : '#060d1a',
                            fontSize: '14px', fontWeight: 800,
                            fontFamily: "'Raleway', sans-serif",
                            cursor: sending ? 'not-allowed' : 'pointer',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                            transition: 'all 0.3s ease',
                            boxShadow: sending ? 'none' : '0 4px 24px rgba(6,182,212,0.35)',
                            letterSpacing: '0.5px',
                          }}
                          onMouseEnter={e => { if (!sending) { const el = e.currentTarget; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = '0 8px 32px rgba(6,182,212,0.5)'; } }}
                          onMouseLeave={e => { const el = e.currentTarget; el.style.transform = ''; el.style.boxShadow = sending ? 'none' : '0 4px 24px rgba(6,182,212,0.35)'; }}
                      >
                        {sending ? (
                            <>
                              <span style={{ animation: 'spin 1s linear infinite', display: 'inline-block' }}>⟳</span>
                              Envoi en cours...
                            </>
                        ) : (
                            <>
                              <Send size={16} />
                              Envoyer le message
                            </>
                        )}
                      </button>
                    </form>
                  </>
              ) : (
                  /* Success state */
                  <div style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    justifyContent: 'center', padding: '60px 20px', textAlign: 'center',
                    animation: 'fadeInUp 0.6s ease',
                  }}>
                    <div style={{
                      width: '72px', height: '72px', borderRadius: '50%',
                      background: 'rgba(34,197,94,0.1)',
                      border: '2px solid rgba(34,197,94,0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: '20px',
                      animation: 'scaleIn 0.5s cubic-bezier(0.16,1,0.3,1)',
                    }}>
                      <CheckCircle size={32} color="#22c55e" />
                    </div>
                    <h3 style={{ color: '#f1f5f9', fontSize: '20px', fontWeight: 800, marginBottom: '10px' }}>
                      Message envoyé !
                    </h3>
                    <p style={{ color: '#475569', fontSize: '14px', lineHeight: 1.7, marginBottom: '24px' }}>
                      Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                    </p>
                    <button
                        onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                        style={{
                          padding: '10px 24px', borderRadius: '10px', border: '1px solid rgba(6,182,212,0.3)',
                          background: 'rgba(6,182,212,0.05)', color: '#06b6d4',
                          fontSize: '13px', fontWeight: 700, cursor: 'pointer',
                          fontFamily: "'Raleway', sans-serif",
                        }}
                    >
                      Nouveau message
                    </button>
                  </div>
              )}
            </div>

            {/* ─── RIGHT SIDE ─── */}
            <div style={{
              display: 'flex', flexDirection: 'column', gap: '16px',
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateX(30px)',
              transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s',
            }}>

              {/* Contact cards */}
              {contactInfo.map((info, i) => (
                  <a key={i} href={info.href} style={{
                    display: 'flex', alignItems: 'center', gap: '16px',
                    padding: '18px 20px', borderRadius: '16px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                    animation: `fadeInUp 0.6s ease ${0.1 * i + 0.3}s both`,
                  }}
                     onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = `${info.color}40`; el.style.background = `${info.color}07`; el.style.transform = 'translateX(4px)'; }}
                     onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.06)'; el.style.background = 'rgba(255,255,255,0.02)'; el.style.transform = ''; }}
                  >
                    <div style={{
                      width: '42px', height: '42px', borderRadius: '12px', flexShrink: 0,
                      background: `${info.color}12`,
                      border: `1px solid ${info.color}25`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: info.color,
                    }}>
                      <info.icon size={18} />
                    </div>
                    <div>
                      <div style={{ color: '#475569', fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '3px' }}>
                        {info.label}
                      </div>
                      <div style={{ color: '#e2e8f0', fontSize: '13px', fontWeight: 600 }}>
                        {info.value}
                      </div>
                    </div>
                  </a>
              ))}

              {/* Socials */}
              <div style={{
                padding: '20px', borderRadius: '16px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}>
                <div style={{ color: '#475569', fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>
                  Réseaux
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {socials.map((s, i) => (
                      <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                        flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
                        padding: '12px 8px', borderRadius: '12px',
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        color: '#475569', textDecoration: 'none',
                        fontSize: '10px', fontWeight: 700,
                        transition: 'all 0.2s ease',
                      }}
                         onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = s.color; el.style.borderColor = `${s.color}40`; el.style.background = `${s.color}10`; el.style.transform = 'translateY(-3px)'; }}
                         onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = '#475569'; el.style.borderColor = 'rgba(255,255,255,0.06)'; el.style.background = 'rgba(255,255,255,0.02)'; el.style.transform = ''; }}
                      >
                        <s.icon size={18} />
                        {s.label}
                      </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div style={{
                padding: '22px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, rgba(34,197,94,0.07), rgba(6,182,212,0.05))',
                border: '1px solid rgba(34,197,94,0.2)',
                position: 'relative', overflow: 'hidden',
              }}>
                {/* Subtle glow */}
                <div style={{
                  position: 'absolute', top: '-20px', right: '-20px',
                  width: '100px', height: '100px', borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(34,197,94,0.15), transparent 70%)',
                  filter: 'blur(20px)',
                }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <div style={{
                    width: '8px', height: '8px', borderRadius: '50%',
                    background: '#22c55e',
                    boxShadow: '0 0 8px #22c55e',
                    animation: 'pulse 2s infinite',
                  }} />
                  <span style={{ color: '#22c55e', fontSize: '13px', fontWeight: 800 }}>
                  Disponible
                </span>
                </div>
                <p style={{ color: '#475569', fontSize: '12px', lineHeight: 1.7, margin: 0 }}>
                  Ouverte aux missions <strong style={{ color: '#94a3b8' }}>freelance</strong> et opportunités <strong style={{ color: '#94a3b8' }}>CDI</strong>. Réponse sous 24h.
                </p>
              </div>

            </div>
          </div>
        </div>

        <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { transform: scale(0); }
          to   { transform: scale(1); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%,100% { opacity: 1; transform: scale(1); box-shadow: 0 0 8px #22c55e; }
          50%      { opacity: 0.6; transform: scale(0.8); box-shadow: 0 0 16px #22c55e; }
        }
        input::placeholder, textarea::placeholder {
          color: #1e3347;
          font-family: 'Raleway', sans-serif;
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
      </section>
  );
};

export default Contact;