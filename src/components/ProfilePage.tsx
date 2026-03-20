import React, { useState, useEffect } from 'react';
import {
    X, GraduationCap, Briefcase, Heart, Mail, Phone, MapPin,
    Github, Linkedin, Twitter, ExternalLink, ChevronRight,
    Code2, Layers, Smartphone, Database, User
} from 'lucide-react';

// ─────────────────────────────────────────────
//  DATA
// ─────────────────────────────────────────────
const education = [
    {
        degree: "Master Génie Logiciel",
        school: "Université de Paris-Saclay",
        period: "2021 – 2023",
        desc: "Spécialisation Architecture Logicielle & Cloud Computing"
    },
    {
        degree: "Licence Informatique",
        school: "Université Paris 7 – Diderot",
        period: "2018 – 2021",
        desc: "Mention Bien · Parcours Systèmes & Réseaux"
    },
    {
        degree: "Baccalauréat Sciences",
        school: "Lycée Ibn Rochd, Tunis",
        period: "2017 – 2018",
        desc: "Option Mathématiques · Mention Très Bien"
    }
];

const interests = [
    { label: "Web Architecture",   icon: <Layers size={16} />,      color: "#06b6d4" },
    { label: "Mobile Dev",          icon: <Smartphone size={16} />,  color: "#818cf8" },
    { label: "Open Source",         icon: <Code2 size={16} />,       color: "#22c55e" },
    { label: "UI/UX Design",        icon: <Heart size={16} />,       color: "#f472b6" },
    { label: "Cloud & DevOps",      icon: <Database size={16} />,    color: "#f59e0b" },
    { label: "Freelance",           icon: <Briefcase size={16} />,   color: "#34d399" },
];

const contacts = [
    { icon: <Mail size={18} />,    label: "Email",       value: "rihab.lenzeri@example.com", href: "mailto:rihab.lenzeri@example.com" },
    { icon: <Phone size={18} />,   label: "Téléphone",   value: "+33 1 23 45 67 89",          href: "tel:+33123456789" },
    { icon: <MapPin size={18} />,  label: "Localisation",value: "Paris, France",               href: "#" },
];

const socials = [
    { icon: <Github size={20} />,   label: "GitHub",   href: "https://github.com/Rihablenzeri", color: "#e2e8f0" },
    { icon: <Linkedin size={20} />, label: "LinkedIn", href: "#",                              color: "#0ea5e9" },
    { icon: <Twitter size={20} />,  label: "Twitter",  href: "#",                              color: "#38bdf8" },
];

// ─────────────────────────────────────────────
//  PROFILE PANEL
// ─────────────────────────────────────────────
const ProfilePanel = ({ onClose }: { onClose: () => void }) => {
    const [active, setActive] = useState<'education' | 'interests' | 'contact'>('education');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        requestAnimationFrame(() => setMounted(true));
    }, []);

    return (
        <>
            {/* Backdrop */}
            <div
                onClick={onClose}
                style={{
                    position: 'fixed', inset: 0, zIndex: 999,
                    background: 'rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(6px)',
                    opacity: mounted ? 1 : 0,
                    transition: 'opacity 0.35s ease',
                }}
            />

            {/* Panel */}
            <div style={{
                position: 'fixed', top: 0, right: 0, bottom: 0,
                width: 'min(440px, 100vw)',
                zIndex: 1000,
                background: 'linear-gradient(160deg, #0b1220 0%, #0f1e35 60%, #0b1220 100%)',
                borderLeft: '1px solid rgba(6,182,212,0.15)',
                display: 'flex', flexDirection: 'column',
                transform: mounted ? 'translateX(0)' : 'translateX(100%)',
                transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1)',
                overflow: 'hidden',
            }}>

                {/* Decorative glow */}
                <div style={{
                    position: 'absolute', top: '-80px', right: '-80px',
                    width: '260px', height: '260px', borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(6,182,212,0.12), transparent 70%)',
                    filter: 'blur(30px)', pointerEvents: 'none',
                }} />

                {/* Header */}
                <div style={{
                    padding: '28px 28px 0',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}>
          <span style={{ color: '#06b6d4', fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 600 }}>
            Profil
          </span>
                    <button onClick={onClose} style={{
                        background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px', padding: '8px', cursor: 'pointer',
                        color: '#94a3b8', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'all 0.2s',
                    }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(6,182,212,0.15)'; (e.currentTarget as HTMLElement).style.color = '#06b6d4'; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'; (e.currentTarget as HTMLElement).style.color = '#94a3b8'; }}
                    >
                        <X size={16} />
                    </button>
                </div>

                {/* Avatar + info */}
                <div style={{ padding: '24px 28px', display: 'flex', gap: '18px', alignItems: 'center' }}>
                    {/* Avatar ring */}
                    <div style={{ position: 'relative', flexShrink: 0 }}>
                        <div style={{
                            position: 'absolute', inset: '-2px', borderRadius: '50%',
                            background: 'conic-gradient(from 0deg, #06b6d4, #3b82f6, #818cf8, #06b6d4)',
                            animation: 'profileSpin 6s linear infinite',
                        }} />
                        <div style={{ position: 'absolute', inset: '1px', borderRadius: '50%', background: '#0b1220' }} />
                        <div style={{
                            position: 'relative', width: '72px', height: '72px', borderRadius: '50%',
                            overflow: 'hidden', zIndex: 1,
                        }}>
                            <img
                                src="/PortFolio/rihab.png"
                                alt="Rihab"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                                onError={(e) => {
                                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                                    (e.currentTarget.parentElement as HTMLElement).style.background = 'linear-gradient(135deg,#06b6d4,#3b82f6)';
                                    (e.currentTarget.parentElement as HTMLElement).innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:white;font-size:24px;font-weight:700">R</div>';
                                }}
                            />
                        </div>
                        {/* Online dot */}
                        <div style={{
                            position: 'absolute', bottom: '2px', right: '2px',
                            width: '12px', height: '12px', borderRadius: '50%',
                            background: '#22c55e', border: '2px solid #0b1220',
                            zIndex: 2, animation: 'profilePulse 2s infinite',
                        }} />
                    </div>

                    <div style={{ flex: 1 }}>
                        <h2 style={{ color: '#f1f5f9', fontSize: '20px', fontWeight: 700, margin: 0, letterSpacing: '-0.5px' }}>
                            Rihab Lenzeri
                        </h2>
                        <p style={{ color: '#06b6d4', fontSize: '12px', margin: '3px 0 6px', fontWeight: 500 }}>
                            Full Stack Developer
                        </p>
                        <div style={{ display: 'flex', gap: '6px' }}>
                            {socials.map(s => (
                                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                                    width: '30px', height: '30px', borderRadius: '8px',
                                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: '#64748b', textDecoration: 'none', transition: 'all 0.2s',
                                }}
                                   onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = s.color; (e.currentTarget as HTMLElement).style.borderColor = `${s.color}40`; (e.currentTarget as HTMLElement).style.background = `${s.color}10`; }}
                                   onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#64748b'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'; }}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div style={{
                    display: 'flex', margin: '0 28px',
                    background: 'rgba(255,255,255,0.04)',
                    borderRadius: '12px', padding: '4px',
                    border: '1px solid rgba(255,255,255,0.06)',
                }}>
                    {(['education', 'interests', 'contact'] as const).map(tab => (
                        <button key={tab} onClick={() => setActive(tab)} style={{
                            flex: 1, padding: '9px 0', borderRadius: '9px',
                            border: 'none', cursor: 'pointer', fontSize: '11px', fontWeight: 600,
                            letterSpacing: '0.5px', textTransform: 'capitalize',
                            background: active === tab ? 'linear-gradient(135deg,#06b6d4,#3b82f6)' : 'transparent',
                            color: active === tab ? '#fff' : '#64748b',
                            transition: 'all 0.25s ease',
                        }}>
                            {tab === 'education' ? '🎓 Formation' : tab === 'interests' ? '⚡ Domaines' : '📬 Contact'}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div style={{ flex: 1, overflowY: 'auto', padding: '20px 28px 28px' }}>

                    {/* ── EDUCATION ── */}
                    {active === 'education' && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {education.map((edu, i) => (
                                <div key={i} style={{
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.07)',
                                    borderRadius: '14px', padding: '16px',
                                    transition: 'all 0.2s', cursor: 'default',
                                    position: 'relative', overflow: 'hidden',
                                }}
                                     onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(6,182,212,0.3)'; (e.currentTarget as HTMLElement).style.background = 'rgba(6,182,212,0.05)'; }}
                                     onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)'; }}
                                >
                                    {/* Year chip */}
                                    <span style={{
                                        position: 'absolute', top: '14px', right: '14px',
                                        fontSize: '10px', color: '#06b6d4',
                                        background: 'rgba(6,182,212,0.1)', padding: '3px 8px',
                                        borderRadius: '20px', fontWeight: 600, border: '1px solid rgba(6,182,212,0.2)',
                                    }}>
                    {edu.period}
                  </span>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                        <div style={{
                                            width: '36px', height: '36px', borderRadius: '10px', flexShrink: 0,
                                            background: 'linear-gradient(135deg,rgba(6,182,212,0.2),rgba(59,130,246,0.2))',
                                            border: '1px solid rgba(6,182,212,0.2)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        }}>
                                            <GraduationCap size={18} color="#06b6d4" />
                                        </div>
                                        <div style={{ flex: 1, paddingRight: '60px' }}>
                                            <div style={{ color: '#e2e8f0', fontSize: '14px', fontWeight: 700, lineHeight: 1.3 }}>
                                                {edu.degree}
                                            </div>
                                            <div style={{ color: '#94a3b8', fontSize: '12px', margin: '4px 0 6px' }}>
                                                {edu.school}
                                            </div>
                                            <div style={{ color: '#475569', fontSize: '11px', lineHeight: 1.4 }}>
                                                {edu.desc}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* ── INTERESTS ── */}
                    {active === 'interests' && (
                        <div>
                            <p style={{ color: '#475569', fontSize: '12px', marginBottom: '16px', lineHeight: 1.6 }}>
                                Mes domaines de prédilection et centres d'intérêt technologiques.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                                {interests.map((item, i) => (
                                    <div key={i} style={{
                                        background: 'rgba(255,255,255,0.03)',
                                        border: `1px solid ${item.color}25`,
                                        borderRadius: '12px', padding: '14px',
                                        display: 'flex', alignItems: 'center', gap: '10px',
                                        transition: 'all 0.2s', cursor: 'default',
                                    }}
                                         onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `${item.color}10`; (e.currentTarget as HTMLElement).style.borderColor = `${item.color}50`; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
                                         onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)'; (e.currentTarget as HTMLElement).style.borderColor = `${item.color}25`; (e.currentTarget as HTMLElement).style.transform = ''; }}
                                    >
                                        <span style={{ color: item.color }}>{item.icon}</span>
                                        <span style={{ color: '#cbd5e1', fontSize: '12px', fontWeight: 600 }}>{item.label}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Availability badge */}
                            <div style={{
                                marginTop: '20px', padding: '16px',
                                background: 'linear-gradient(135deg,rgba(34,197,94,0.1),rgba(16,185,129,0.1))',
                                border: '1px solid rgba(34,197,94,0.2)', borderRadius: '14px',
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                                    <div style={{
                                        width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e',
                                        animation: 'profilePulse 2s infinite',
                                    }} />
                                    <span style={{ color: '#22c55e', fontSize: '13px', fontWeight: 700 }}>
                    Disponible pour de nouveaux projets
                  </span>
                                </div>
                                <p style={{ color: '#64748b', fontSize: '11px', margin: 0, lineHeight: 1.5 }}>
                                    Missions freelance ou opportunités à plein temps. Réponse sous 24h.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* ── CONTACT ── */}
                    {active === 'contact' && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {contacts.map((c, i) => (
                                <a key={i} href={c.href} style={{
                                    display: 'flex', alignItems: 'center', gap: '14px',
                                    padding: '14px', borderRadius: '14px',
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.07)',
                                    textDecoration: 'none', transition: 'all 0.2s',
                                }}
                                   onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(6,182,212,0.07)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(6,182,212,0.25)'; }}
                                   onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; }}
                                >
                                    <div style={{
                                        width: '40px', height: '40px', borderRadius: '12px', flexShrink: 0,
                                        background: 'linear-gradient(135deg,rgba(6,182,212,0.2),rgba(59,130,246,0.2))',
                                        border: '1px solid rgba(6,182,212,0.2)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: '#06b6d4',
                                    }}>
                                        {c.icon}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ color: '#94a3b8', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '2px' }}>
                                            {c.label}
                                        </div>
                                        <div style={{ color: '#e2e8f0', fontSize: '13px', fontWeight: 600 }}>
                                            {c.value}
                                        </div>
                                    </div>
                                    <ChevronRight size={16} color="#334155" />
                                </a>
                            ))}

                            {/* CTA */}
                            <a href="#contact" style={{
                                marginTop: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                gap: '8px', padding: '14px',
                                background: 'linear-gradient(135deg,#06b6d4,#3b82f6)',
                                borderRadius: '14px', textDecoration: 'none',
                                color: '#fff', fontSize: '13px', fontWeight: 700,
                                boxShadow: '0 4px 20px rgba(6,182,212,0.3)',
                                transition: 'all 0.2s',
                            }}
                               onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(6,182,212,0.4)'; }}
                               onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(6,182,212,0.3)'; }}
                            >
                                <Mail size={16} />
                                Envoyer un message
                                <ExternalLink size={14} style={{ opacity: 0.7 }} />
                            </a>
                        </div>
                    )}
                </div>

                <style>{`
          @keyframes profileSpin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes profilePulse {
            0%,100% { opacity:1; transform:scale(1); }
            50% { opacity:0.5; transform:scale(0.85); }
          }
        `}</style>
            </div>
        </>
    );
};

// ─────────────────────────────────────────────
//  PROFILE TRIGGER BUTTON (goes in Header)
// ─────────────────────────────────────────────
export const ProfileTrigger = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                title="Mon Profil"
                style={{
                    position: 'relative', cursor: 'pointer',
                    background: 'none', border: 'none', padding: 0,
                }}
            >
                {/* Spinning ring */}
                <div style={{
                    position: 'absolute', inset: '-2px', borderRadius: '50%',
                    background: 'conic-gradient(from 0deg, #06b6d4, #3b82f6, #818cf8, #06b6d4)',
                    animation: 'profileSpin 6s linear infinite',
                }} />
                <div style={{
                    position: 'absolute', inset: '1px', borderRadius: '50%',
                    background: '#0f172a',
                }} />
                <div style={{
                    position: 'relative', width: '36px', height: '36px',
                    borderRadius: '50%', overflow: 'hidden', zIndex: 1,
                }}>
                    <img
                        src="/PortFolio/rihab.png"
                        alt="Profil"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                        onError={(e) => {
                            (e.currentTarget as HTMLImageElement).style.display = 'none';
                            (e.currentTarget.parentElement as HTMLElement).style.background = 'linear-gradient(135deg,#06b6d4,#3b82f6)';
                            (e.currentTarget.parentElement as HTMLElement).innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:white;font-size:14px;font-weight:700">R</div>';
                        }}
                    />
                </div>
                {/* Green dot */}
                <div style={{
                    position: 'absolute', bottom: '0', right: '0',
                    width: '9px', height: '9px', borderRadius: '50%',
                    background: '#22c55e', border: '2px solid #0f172a', zIndex: 2,
                    animation: 'profilePulse 2s infinite',
                }} />
                <style>{`
          @keyframes profileSpin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes profilePulse {
            0%,100% { opacity:1; transform:scale(1); }
            50% { opacity:0.5; transform:scale(0.85); }
          }
        `}</style>
            </button>

            {open && <ProfilePanel onClose={() => setOpen(false)} />}
        </>
    );
};

// ─────────────────────────────────────────────
//  DEFAULT EXPORT — standalone preview
// ─────────────────────────────────────────────
export default function ProfilePagePreview() {
    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f172a 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Segoe UI', system-ui, sans-serif",
        }}>
            <div style={{ textAlign: 'center' }}>
                <p style={{ color: '#475569', marginBottom: '16px', fontSize: '13px' }}>
                    Cliquez sur l'icône pour ouvrir le profil
                </p>
                <ProfileTrigger />
            </div>
        </div>
    );
}