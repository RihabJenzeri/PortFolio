import React, { useRef, useEffect, useState } from 'react';

interface GooeyNavItem {
    label: string;
    href: string;
}

export interface GooeyNavProps {
    items: GooeyNavItem[];
    animationTime?: number;
    particleCount?: number;
    particleDistances?: [number, number];
    particleR?: number;
    timeVariance?: number;
    colors?: number[];
    initialActiveIndex?: number;
}

const GooeyNav: React.FC<GooeyNavProps> = ({
                                               items,
                                               animationTime = 600,
                                               particleCount = 15,
                                               particleDistances = [90, 10],
                                               particleR = 100,
                                               timeVariance = 300,
                                               colors = [1, 2, 3, 1, 2, 3, 1, 4],
                                               initialActiveIndex = 0,
                                           }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const navRef       = useRef<HTMLUListElement>(null);
    const filterRef    = useRef<HTMLSpanElement>(null);
    const textRef      = useRef<HTMLSpanElement>(null);
    const [activeIndex, setActiveIndex] = useState<number>(initialActiveIndex);

    // sync avec le scroll
    useEffect(() => {
        setActiveIndex(initialActiveIndex);
    }, [initialActiveIndex]);

    const noise = (n = 1) => n / 2 - Math.random() * n;

    const getXY = (distance: number, pointIndex: number, totalPoints: number): [number, number] => {
        const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
        return [distance * Math.cos(angle), distance * Math.sin(angle)];
    };

    const createParticle = (i: number, t: number, d: [number, number], r: number) => {
        const rotate = noise(r / 10);
        return {
            start: getXY(d[0], particleCount - i, particleCount),
            end:   getXY(d[1] + noise(7), particleCount - i, particleCount),
            time:  t,
            scale: 1 + noise(0.2),
            color: colors[Math.floor(Math.random() * colors.length)],
            rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10,
        };
    };

    const makeParticles = (element: HTMLElement) => {
        const d: [number, number] = particleDistances;
        const r = particleR;
        element.style.setProperty('--time', `${animationTime * 2 + timeVariance}ms`);
        element.classList.remove('gn-active');
        for (let i = 0; i < particleCount; i++) {
            const t = animationTime * 2 + noise(timeVariance * 2);
            const p = createParticle(i, t, d, r);
            setTimeout(() => {
                const particle = document.createElement('span');
                const point    = document.createElement('span');
                particle.classList.add('gn-particle');
                particle.style.setProperty('--start-x', `${p.start[0]}px`);
                particle.style.setProperty('--start-y', `${p.start[1]}px`);
                particle.style.setProperty('--end-x',   `${p.end[0]}px`);
                particle.style.setProperty('--end-y',   `${p.end[1]}px`);
                particle.style.setProperty('--time',    `${p.time}ms`);
                particle.style.setProperty('--scale',   `${p.scale}`);
                particle.style.setProperty('--color',   `var(--gn-color-${p.color})`);
                particle.style.setProperty('--rotate',  `${p.rotate}deg`);
                point.classList.add('gn-point');
                particle.appendChild(point);
                element.appendChild(particle);
                requestAnimationFrame(() => element.classList.add('gn-active'));
                setTimeout(() => { try { element.removeChild(particle); } catch {} }, t);
            }, 30);
        }
    };

    const updateEffectPosition = (element: HTMLElement) => {
        if (!containerRef.current || !filterRef.current) return;
        const cr  = containerRef.current.getBoundingClientRect();
        const pos = element.getBoundingClientRect();
        const s   = {
            left:   `${pos.x - cr.x}px`,
            top:    `${pos.y - cr.y}px`,
            width:  `${pos.width}px`,
            height: `${pos.height}px`,
        };
        Object.assign(filterRef.current.style, s);
    };

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, index: number) => {
        const liEl = e.currentTarget.closest('li') as HTMLElement;
        if (activeIndex === index) return;
        setActiveIndex(index);
        updateEffectPosition(liEl);
        filterRef.current?.querySelectorAll('.gn-particle').forEach(p => filterRef.current!.removeChild(p));
        if (filterRef.current) makeParticles(filterRef.current);
    };

    useEffect(() => {
        if (!navRef.current || !containerRef.current) return;
        const li = navRef.current.querySelectorAll('li')[activeIndex] as HTMLElement;
        if (li) updateEffectPosition(li);
        const ro = new ResizeObserver(() => {
            const l = navRef.current?.querySelectorAll('li')[activeIndex] as HTMLElement;
            if (l) updateEffectPosition(l);
        });
        ro.observe(containerRef.current);
        return () => ro.disconnect();
    }, [activeIndex]);

    return (
        <>
            <style>{`
        :root {
          --gn-color-1: #06b6d4;
          --gn-color-2: #3b82f6;
          --gn-color-3: #818cf8;
          --gn-color-4: #22d3ee;
        }
        .gn-effect {
          position: absolute; opacity: 1; pointer-events: none;
          display: grid; place-items: center; z-index: 0;
        }
        .gn-text { display: none; } 
.gn-filter {
  filter: blur(7px) contrast(100) blur(0);
  mix-blend-mode: screen;   // ✅ fonctionne sur fond sombre
  z-index: 0;
}
        .gn-filter::before {
          content: ""; position: absolute; inset: -75px;
          z-index: -2; background: transparent;
        }
.gn-filter::after {
  background: #06b6d4;  // ✅ couleur visible sur fond sombre
}
        .gn-filter.gn-active::after {
          animation: gn-pill 0.3s ease both;
        }
        @keyframes gn-pill { to { transform: scale(1); opacity: 1; } }
        .gn-particle, .gn-point {
          display: block; opacity: 0;
          width: 20px; height: 20px;
          border-radius: 9999px; transform-origin: center;
        }
        .gn-particle {
          --time: 5s;
          position: absolute;
          top: calc(50% - 8px); left: calc(50% - 8px);
          animation: gn-panim calc(var(--time)) ease 1 -350ms;
        }
        .gn-point {
          background: var(--color); opacity: 1;
          animation: gn-qanim calc(var(--time)) ease 1 -350ms;
        }
        @keyframes gn-panim {
          0%   { transform: rotate(0deg) translate(var(--start-x),var(--start-y)); opacity:1; animation-timing-function: cubic-bezier(.55,0,1,.45); }
          70%  { transform: rotate(calc(var(--rotate)*.5)) translate(calc(var(--end-x)*1.2),calc(var(--end-y)*1.2)); opacity:1; animation-timing-function:ease; }
          85%  { transform: rotate(calc(var(--rotate)*.66)) translate(var(--end-x),var(--end-y)); opacity:1; }
          100% { transform: rotate(calc(var(--rotate)*1.2)) translate(calc(var(--end-x)*.5),calc(var(--end-y)*.5)); opacity:1; }
        }
        @keyframes gn-qanim {
          0%   { transform:scale(0); opacity:0; animation-timing-function:cubic-bezier(.55,0,1,.45); }
          25%  { transform:scale(calc(var(--scale)*.25)); }
          38%  { opacity:1; }
          65%  { transform:scale(var(--scale)); opacity:1; animation-timing-function:ease; }
          85%  { transform:scale(var(--scale)); opacity:1; }
          100% { transform:scale(0); opacity:0; }
        }

        /* ✅ FIX PRINCIPAL : le li et le lien sont au-dessus du fond blanc */
        .gn-li {
          position: relative; cursor: pointer; list-style: none;
          color: #94a3b8; border-radius: 8px;
          font-family: 'DM Mono', monospace;
          font-size: 13px; font-weight: 500;
          transition: color 0.3s ease;
          isolation: isolate;
        }
        .gn-li::after {
          content: ""; position: absolute; inset: 0;
          border-radius: 8px; background: white;
          opacity: 0; transform: scale(0);
          transition: all 0.3s ease;
          z-index: -1;
        }
        .gn-li.gn-li-active { color: #030912 !important; }
        .gn-li.gn-li-active::after { opacity: 1; transform: scale(1); }
        .gn-link {
          display: inline-block; padding: .5em 1em;
          text-decoration: none; color: inherit; outline: none;
          position: relative; z-index: 1;
        }
      `}</style>

            <div ref={containerRef} style={{ position: 'relative' }}>
                <nav style={{ transform: 'translate3d(0,0,0.01px)', position: 'relative' }}>
                    <ul ref={navRef} style={{
                        display: 'flex', gap: '2px', listStyle: 'none',
                        padding: '4px', margin: 0,
                        position: 'relative', zIndex: 3,
                    }}>
                        {items.map((item, index) => (
                            <li key={index} className={`gn-li${activeIndex === index ? ' gn-li-active' : ''}`}>
                                <a href={item.href} className="gn-link" onClick={e => handleClick(e, index)}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <span className="gn-effect gn-filter" ref={filterRef} />
            </div>
        </>
    );
};

export default GooeyNav;