import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

// ─────────────────────────────────────────────
//  ✅ CONFIGURATION EMAILJS
//  1. Va sur https://www.emailjs.com/ → créer un compte gratuit
//  2. "Email Services" → Add Service → Gmail → connecte rihab.jenzeri@gmail.com
//     → copie le SERVICE_ID
//  3. "Email Templates" → Create Template → colle le template ci-dessous
//     → copie le TEMPLATE_ID
//  4. "Account" → API Keys → copie le PUBLIC_KEY
// ─────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // ex: 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // ex: 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // ex: 'aBcDeFgH...'

// ─────────────────────────────────────────────
//  TEMPLATE EmailJS à coller dans l'interface :
//
//  Subject : Nouveau message de {{from_name}} — Portfolio
//  Body    :
//    Nom    : {{from_name}}
//    Email  : {{from_email}}
//    Sujet  : {{subject}}
//    Message:
//    {{message}}
//
//  To Email : rihab.jenzeri@gmail.com
// ─────────────────────────────────────────────

const contactInfo = [
  { icon: <Mail size={18} />,   label: 'EMAIL',        value: 'rihab.jenzeri@gmail.com', href: 'mailto:rihab.jenzeri@gmail.com', color: '#06b6d4' },
  { icon: <Phone size={18} />,  label: 'TÉLÉPHONE',    value: '+216 26 167 281',           href: 'tel:+21626167281',              color: '#818cf8' },
  { icon: <MapPin size={18} />, label: 'LOCALISATION', value: 'Tunis, Tunisie',             href: '#',                             color: '#22c55e' },
];

const socialLinks = [
  { icon: <Github size={18} />,   label: 'GitHub',   href: 'https://github.com/RihabJenzeri',                      color: '#e2e8f0' },
  { icon: <Linkedin size={18} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/rihab-jenzeri-42bb83202/', color: '#0ea5e9' },
  { icon: <Twitter size={18} />,  label: 'Twitter',  href: '#',                                                    color: '#38bdf8' },
];

type Status = 'idle' | 'loading' | 'success' | 'error';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus('loading');

    try {
      await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name:  form.name,
            from_email: form.email,
            subject:    form.subject || '(Sans sujet)',
            message:    form.message,
            to_email:   'rihab.jenzeri@gmail.com',
          },
          EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      // Reset après 5s
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  // ── Styles communs ──
  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '12px 16px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '10px', color: '#e2e8f0',
    fontSize: '13px', fontFamily: "'DM Mono', monospace",
    outline: 'none', transition: 'border-color 0.2s ease',
    boxSizing: 'border-box',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: '10px', fontWeight: 700,
    letterSpacing: '2px', textTransform: 'uppercase',
    color: '#475569', marginBottom: '8px',
    fontFamily: "'DM Mono', monospace",
  };

  return (
      <section id="contact" style={{
        background: '#060d1a', padding: '100px 0',
        position: 'relative', overflow: 'hidden',
        fontFamily: "'DM Mono', monospace",
      }}>
        {/* Grid background */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `
          linear-gradient(rgba(6,182,212,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(6,182,212,0.03) 1px, transparent 1px)
        `,
          backgroundSize: '60px 60px',
        }} />

        {/* Glow */}
        <div style={{
          position: 'absolute', top: '20%', right: '-5%',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.06), transparent 70%)',
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

          {/* ── HEADER ── */}
          <div style={{ marginBottom: '56px' }}>
            <div style={{ color: '#06b6d4', fontSize: '10px', letterSpacing: '5px', textTransform: 'uppercase', fontWeight: 600, marginBottom: '12px' }}>
              {'// parlons de votre projet'}
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#f8fafc', letterSpacing: '-1px', margin: '0 0 16px' }}>
              Me{' '}
              <span style={{ background: 'linear-gradient(90deg, #06b6d4, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Contacter
            </span>
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '40px', height: '2px', background: 'linear-gradient(90deg, #06b6d4, #3b82f6)' }} />
              <p style={{ color: '#475569', fontSize: '13px', margin: 0 }}>
                Réponse garantie sous 24h — disponible pour freelance & CDI
              </p>
            </div>
          </div>

          {/* ── GRID: formulaire + infos ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }} className="contact-grid">

            {/* ── FORMULAIRE ── */}
            <div style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '20px', padding: '32px',
            }}>
              <h3 style={{ color: '#f1f5f9', fontSize: '16px', fontWeight: 700, margin: '0 0 24px' }}>
                Envoyez-moi un message
              </h3>

              <form ref={formRef} onSubmit={handleSubmit}>

                {/* Nom + Email */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }} className="form-row">
                  <div>
                    <label style={labelStyle}>Nom complet</label>
                    <input
                        name="name" value={form.name} onChange={handleChange}
                        placeholder="Votre nom" required
                        style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = 'rgba(6,182,212,0.5)')}
                        onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email</label>
                    <input
                        name="email" type="email" value={form.email} onChange={handleChange}
                        placeholder="votre@email.com" required
                        style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = 'rgba(6,182,212,0.5)')}
                        onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                    />
                  </div>
                </div>

                {/* Sujet */}
                <div style={{ marginBottom: '16px' }}>
                  <label style={labelStyle}>Sujet</label>
                  <input
                      name="subject" value={form.subject} onChange={handleChange}
                      placeholder="Objet de votre message"
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = 'rgba(6,182,212,0.5)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                  />
                </div>

                {/* Message */}
                <div style={{ marginBottom: '24px' }}>
                  <label style={labelStyle}>Message</label>
                  <textarea
                      name="message" value={form.message} onChange={handleChange}
                      placeholder="Décrivez votre projet ou votre question..." required
                      rows={5}
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                      onFocus={e => (e.target.style.borderColor = 'rgba(6,182,212,0.5)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                  />
                </div>

                {/* Bouton Envoyer */}
                <button
                    type="submit"
                    disabled={status === 'loading'}
                    style={{
                      width: '100%', padding: '14px 24px',
                      borderRadius: '10px', border: 'none',
                      cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                      fontSize: '13px', fontWeight: 700,
                      fontFamily: "'DM Mono', monospace", letterSpacing: '1px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                      transition: 'all 0.25s ease',
                      ...(status === 'success'
                              ? { background: 'linear-gradient(135deg,#22c55e,#16a34a)', color: '#fff', boxShadow: '0 4px 20px rgba(34,197,94,0.3)' }
                              : status === 'error'
                                  ? { background: 'linear-gradient(135deg,#ef4444,#dc2626)', color: '#fff', boxShadow: '0 4px 20px rgba(239,68,68,0.3)' }
                                  : { background: 'linear-gradient(135deg,#06b6d4,#3b82f6)', color: '#fff', boxShadow: '0 4px 20px rgba(6,182,212,0.3)' }
                      ),
                    }}
                    onMouseEnter={e => {
                      if (status === 'idle') (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.transform = '';
                    }}
                >
                  {status === 'loading' && <Loader size={16} style={{ animation: 'spin 1s linear infinite' }} />}
                  {status === 'success' && <CheckCircle size={16} />}
                  {status === 'error'   && <AlertCircle size={16} />}
                  {status === 'idle'    && <Send size={16} />}

                  {status === 'loading' ? 'Envoi en cours...'
                      : status === 'success' ? 'Message envoyé ✓'
                          : status === 'error'   ? 'Erreur — Réessayer'
                              : 'Envoyer le message'}
                </button>

              </form>
            </div>

            {/* ── INFOS DE CONTACT ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

              {contactInfo.map((c, i) => (
                  <a key={i} href={c.href} style={{
                    display: 'flex', alignItems: 'center', gap: '16px',
                    padding: '18px 20px', borderRadius: '14px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    textDecoration: 'none', transition: 'all 0.2s ease',
                  }}
                     onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = `${c.color}35`; el.style.background = `${c.color}08`; }}
                     onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.07)'; el.style.background = 'rgba(255,255,255,0.02)'; }}
                  >
                    <div style={{
                      width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0,
                      background: `${c.color}15`, border: `1px solid ${c.color}30`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', color: c.color,
                    }}>{c.icon}</div>
                    <div>
                      <div style={{ color: '#334155', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '3px' }}>{c.label}</div>
                      <div style={{ color: '#e2e8f0', fontSize: '14px', fontWeight: 600 }}>{c.value}</div>
                    </div>
                  </a>
              ))}

              {/* Réseaux */}
              <div style={{
                padding: '20px', borderRadius: '14px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}>
                <div style={{ color: '#334155', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>Réseaux</div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {socialLinks.map((s, i) => (
                      <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                        flex: 1, padding: '12px', borderRadius: '10px',
                        background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
                        color: '#64748b', textDecoration: 'none', transition: 'all 0.2s ease',
                        fontSize: '10px', fontWeight: 600, letterSpacing: '0.5px',
                      }}
                         onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = s.color; el.style.borderColor = `${s.color}40`; el.style.background = `${s.color}10`; el.style.transform = 'translateY(-3px)'; }}
                         onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = '#64748b'; el.style.borderColor = 'rgba(255,255,255,0.07)'; el.style.background = 'rgba(255,255,255,0.03)'; el.style.transform = ''; }}
                      >
                        {s.icon}
                        {s.label}
                      </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @media (min-width: 768px) {
          .contact-grid {
            grid-template-columns: 3fr 2fr !important;
          }
          .form-row {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 767px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      </section>
  );
};

export default Contact;