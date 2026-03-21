// ══════════════════════════════════════════════
// PATCH AVATAR — à appliquer dans Header.tsx
// ══════════════════════════════════════════════

// 1. L'image est dans /public/rihab.png
//    → le chemin correct dans Vite est simplement "/rihab.png"
//    → PAS "./rihab.png", PAS "../public/rihab.png"

// 2. Cherche dans Header.tsx le bloc de l'avatar.
//    Il ressemble à l'une de ces formes :

// ── Forme A : div avec lettre R ──
// <div className="w-10 h-10 rounded-full bg-cyan-500 ...">R</div>
// <div style={{ width:40, height:40, borderRadius:'50%', background:'#06b6d4' }}>R</div>

// ── Forme B : img déjà présente mais chemin faux ──
// <img src="rihab.png" .../>          ← manque le /
// <img src="./rihab.png" .../>        ← chemin relatif → ne fonctionne pas
// <img src="../public/rihab.png" .../> ← chemin relatif → ne fonctionne pas

// ══════════════════════════════════════════════
// REMPLACEMENT CORRECT (colle ce JSX à la place)
// ══════════════════════════════════════════════

const AvatarImage = () => (
  <img
    src="/rihab.png"          // ← chemin absolu depuis public/
    alt="Rihab Jenzeri"
    onError={(e) => {
      // fallback : affiche les initiales si l'image ne charge pas
      const target = e.currentTarget as HTMLImageElement;
      target.style.display = 'none';
      const parent = target.parentElement;
      if (parent) {
        parent.innerHTML = '<span style="color:#06b6d4;font-weight:700;font-size:16px;">RJ</span>';
      }
    }}
    style={{
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      objectFit: 'cover',
      objectPosition: 'center top',   // cadre le visage
      border: '2px solid #06b6d4',
      boxShadow: '0 0 12px rgba(6,182,212,0.45)',
      display: 'block',
      flexShrink: 0,
    }}
  />
);

export default AvatarImage;

// ══════════════════════════════════════════════
// UTILISATION dans Header.tsx :
//
// import AvatarImage from './AvatarImage';
//
// Puis remplace l'ancien avatar par :
// <AvatarImage />
// ══════════════════════════════════════════════
