import React, { useEffect, useRef, useState } from "react";
import homeLogo from "../../Assets/developer-illustration.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

/* ─── Palette tokens (mauve clair + bleu clair) ─────────────────────────────
   --p1  : #c084fc  (mauve clair / violet pastel)
   --p2  : #818cf8  (indigo doux)
   --p3  : #67e8f9  (bleu ciel / cyan clair)
   --bg  : #07080f  (fond très sombre, légèrement bleuté)
   --bg2 : #0d0f1d  (fond cartes)
   ─────────────────────────────────────────────────────────────────────────── */

/* ── Canvas particules ─────────────────────────────────────── */
function FloatingParticles() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    const colors = ["rgba(192,132,252,", "rgba(129,140,248,", "rgba(103,232,249,"];
    const dots = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.6 + 0.3,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.45 + 0.08,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((d) => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0) d.x = canvas.width;
        if (d.x > canvas.width) d.x = 0;
        if (d.y < 0) d.y = canvas.height;
        if (d.y > canvas.height) d.y = 0;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = d.color + d.alpha + ")";
        ctx.fill();
      });
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 95) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(192,132,252,${0.05 * (1 - dist / 95)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return (
      <canvas
          ref={canvasRef}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}
      />
  );
}

/* ── Scramble hover ────────────────────────────────────────── */
function ScrambleText({ text }) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const [displayed, setDisplayed] = useState(text);
  const rafRef = useRef(null);
  const hover = () => {
    let iter = 0;
    cancelAnimationFrame(rafRef.current);
    const step = () => {
      setDisplayed(text.split("").map((ch, i) =>
          i < iter ? ch : chars[Math.floor(Math.random() * chars.length)]
      ).join(""));
      iter += 0.45;
      if (iter < text.length) rafRef.current = requestAnimationFrame(step);
      else setDisplayed(text);
    };
    step();
  };
  return (
      <span onMouseEnter={hover} style={{ cursor: "default" }}>
      {displayed}
    </span>
  );
}

/* ── Home ──────────────────────────────────────────────────── */
function Home() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const socials = [
    { href: "https://github.com/DIOP18?tab=repositories", icon: <AiFillGithub />, label: "GitHub",   color: "#c084fc" },
    { href: "https://twitter.com/",                        icon: <AiOutlineTwitter />, label: "Twitter",  color: "#67e8f9" },
    { href: "https://www.linkedin.com/in/soda-diop-1a0235282/", icon: <FaLinkedinIn />,  label: "LinkedIn", color: "#818cf8" },
  ];

  return (
      <>
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800&family=JetBrains+Mono:wght@300;400&display=swap');

        :root {
          --p1: #c084fc;
          --p2: #818cf8;
          --p3: #67e8f9;
          --bg: #07080f;
          --bg2: #0d0f1d;
          --text: rgba(255,255,255,0.88);
          --muted: rgba(255,255,255,0.38);
        }

        /* ── keyframes ── */
        @keyframes sd-revealUp   { from { opacity:0; transform:translateY(32px);  } to { opacity:1; transform:translateY(0); } }
        @keyframes sd-revealLeft { from { opacity:0; transform:translateX(-32px); } to { opacity:1; transform:translateX(0); } }
        @keyframes sd-float      { 0%,100%{ transform:translateY(0) rotate(-1deg);} 50%{ transform:translateY(-16px) rotate(1deg);} }
        @keyframes sd-pulse      { 0%,100%{ transform:scale(1); opacity:.5;} 100%{ transform:scale(1.9); opacity:0;} }
        @keyframes sd-lineGrow   { from{ width:0;} to{ width:52px;} }
        @keyframes sd-gradShift  { 0%{ background-position:0% 50%;} 50%{ background-position:100% 50%;} 100%{ background-position:0% 50%;} }
        @keyframes sd-accentBar  { 0%{ background-position:0% 50%;} 100%{ background-position:200% 50%;} }
        @keyframes sd-tagIn      { from{ opacity:0; transform:scale(.85) translateY(10px);} to{ opacity:1; transform:scale(1) translateY(0);} }
        @keyframes sd-scrollPulse{ 0%,100%{opacity:.25; transform:scaleY(1);} 50%{opacity:.8; transform:scaleY(.65);} }
        @keyframes sd-wave       { 0%,100%{transform:rotate(0);} 20%{transform:rotate(18deg);} 40%{transform:rotate(-6deg);} 60%{transform:rotate(18deg);} 80%{transform:rotate(-4deg);} }
        @keyframes sd-blink      { 50%{opacity:0;} }

        /* ── Hero wrapper ── */
        .sd-hero {
          min-height: 100vh;
          background: var(--bg);
          position: relative;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          font-family: 'Outfit', sans-serif;
        }
        .sd-hero::before {
          content:'';
          position:absolute; top:-180px; right:-180px;
          width:560px; height:560px;
          background: radial-gradient(circle, rgba(192,132,252,0.11) 0%, transparent 65%);
          pointer-events:none;
        }
        .sd-hero::after {
          content:'';
          position:absolute; bottom:-120px; left:-80px;
          width:380px; height:380px;
          background: radial-gradient(circle, rgba(103,232,249,0.07) 0%, transparent 65%);
          pointer-events:none;
        }

        /* accent top bar */
        .sd-top-bar {
          position:absolute; top:0; left:0; right:0; height:2px; z-index:10;
          background: linear-gradient(90deg, transparent, var(--p1), var(--p2), var(--p3), transparent);
          background-size: 300% 100%;
          animation: sd-accentBar 4s linear infinite;
        }

        /* grid */
        .sd-grid {
          flex:1;
          display:grid;
          grid-template-columns: 1fr 400px;
          gap:60px;
          align-items:center;
          max-width:1200px;
          margin:0 auto;
          padding:120px 40px 80px;
          position:relative; z-index:2;
        }
        @media(max-width:920px){
          .sd-grid{ grid-template-columns:1fr; padding:100px 24px 60px; gap:48px;}
          .sd-img-col{ order:-1;}
        }

        /* ── LEFT ── */
        .sd-greeting {
          display:flex; align-items:center; gap:12px; margin-bottom:20px;
          animation: sd-revealUp .6s .1s ease both;
        }
        .sd-greeting-line {
          height:1px; background: linear-gradient(90deg, var(--p1), var(--p2));
          animation: sd-lineGrow .8s .35s ease both; width:52px;
        }
        .sd-greeting-txt {
          font-family:'JetBrains Mono', monospace;
          font-size:.78rem; color:var(--p1);
          letter-spacing:.2em; text-transform:uppercase;
        }
        .sd-wave { display:inline-block; animation: sd-wave 2.2s ease 1.2s both; transform-origin:70% 70%; }

        .sd-h1 {
          font-size:clamp(2.6rem,5.5vw,4.8rem);
          font-weight:800; color:#fff; line-height:1; margin-bottom:4px;
          animation: sd-revealUp .6s .2s ease both;
        }
        .sd-name {
          font-size:clamp(2.6rem,5.5vw,4.8rem);
          font-weight:800; line-height:1.06; margin-bottom:24px;
          background: linear-gradient(130deg, var(--p1) 0%, var(--p2) 45%, var(--p3) 100%);
          background-size:200% 200%;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          animation: sd-revealUp .6s .3s ease both, sd-gradShift 6s ease infinite;
          font-family:'Outfit', sans-serif;
        }

        .sd-type-wrap {
          font-family:'JetBrains Mono', monospace;
          font-size:clamp(.95rem,1.8vw,1.18rem);
          color:var(--muted); margin-bottom:36px; min-height:2.4em;
          animation: sd-revealUp .6s .4s ease both;
        }
        /* typewriter cursor override */
        .sd-type-wrap .Typewriter__cursor { color: var(--p1); }

        /* tags */
        .sd-tags { display:flex; flex-wrap:wrap; gap:9px; margin-bottom:40px; }
        .sd-tag {
          padding:5px 13px; border-radius:100px;
          font-family:'JetBrains Mono', monospace; font-size:.72rem;
          border:1px solid rgba(192,132,252,.18);
          color:rgba(255,255,255,.45); background:rgba(192,132,252,.05);
          transition:all .22s; animation: sd-tagIn .5s ease both; cursor:default;
        }
        .sd-tag:hover {
          border-color:var(--p1); color:var(--p1);
          background:rgba(192,132,252,.1); transform:translateY(-2px);
        }

        /* CTAs */
        .sd-cta { display:flex; gap:14px; flex-wrap:wrap; animation: sd-revealUp .6s .68s ease both; }
        .sd-btn-main {
          padding:13px 28px;
          background: linear-gradient(130deg, var(--p1), var(--p2));
          color:#07080f; border:none; border-radius:8px;
          font-family:'Outfit', sans-serif; font-weight:700; font-size:.9rem;
          cursor:pointer; text-decoration:none; display:inline-flex; align-items:center; gap:8px;
          transition:all .22s; letter-spacing:.02em;
        }
        .sd-btn-main:hover { transform:translateY(-3px); box-shadow:0 14px 40px rgba(192,132,252,.3); }
        .sd-btn-outline {
          padding:13px 28px; background:transparent;
          color:rgba(255,255,255,.6); border:1px solid rgba(255,255,255,.14);
          border-radius:8px; font-family:'Outfit', sans-serif; font-weight:600; font-size:.9rem;
          cursor:pointer; text-decoration:none; display:inline-flex; align-items:center; gap:8px;
          transition:all .22s;
        }
        .sd-btn-outline:hover { border-color:var(--p1); color:var(--p1); transform:translateY(-3px); }

        /* ── RIGHT image ── */
        .sd-img-col {
          position:relative; display:flex; justify-content:center; align-items:center;
          animation: sd-revealUp .7s .5s ease both;
        }
        .sd-img-glow {
          position:absolute; width:320px; height:320px; border-radius:50%;
          background: radial-gradient(circle, rgba(192,132,252,.14) 0%, transparent 68%);
          animation: sd-float 5s ease-in-out infinite;
        }
        .sd-img-ring {
          position:absolute; width:350px; height:350px; border-radius:50%;
          border:1px dashed rgba(192,132,252,.2);
          animation: sd-float 5s ease-in-out infinite;
        }
        .sd-img-ring-pulse {
          position:absolute; width:350px; height:350px; border-radius:50%;
          border:1px solid rgba(192,132,252,.12);
          animation: sd-pulse 3.2s ease-out infinite;
        }
        .sd-img {
          max-height:400px; position:relative; z-index:1;
          filter: drop-shadow(0 0 48px rgba(192,132,252,.18));
          animation: sd-float 5s ease-in-out infinite; object-fit:contain;
        }

        /* scroll hint */
        .sd-scroll-hint {
          position:absolute; bottom:28px; left:50%; transform:translateX(-50%);
          display:flex; flex-direction:column; align-items:center; gap:7px;
          pointer-events:none; z-index:5;
          transition:opacity .5s;
        }
        .sd-scroll-label {
          font-family:'JetBrains Mono', monospace; font-size:.62rem;
          letter-spacing:.2em; text-transform:uppercase; color:var(--muted);
        }
        .sd-scroll-line {
          width:1px; height:36px;
          background: linear-gradient(to bottom, var(--p1), transparent);
          animation: sd-scrollPulse 1.6s ease-in-out infinite;
        }

        /* ── Social section ── */
        .sd-social-section {
          background: var(--bg2);
          border-top:1px solid rgba(192,132,252,.08);
          padding:80px 40px;
          font-family:'Outfit', sans-serif;
        }
        .sd-social-inner {
          max-width:1200px; margin:0 auto;
          display:flex; align-items:center; justify-content:space-between;
          gap:40px; flex-wrap:wrap;
        }
        .sd-social-eyebrow {
          font-family:'JetBrains Mono', monospace; font-size:.72rem;
          letter-spacing:.2em; text-transform:uppercase; color:var(--muted); margin-bottom:10px;
        }
        .sd-social-title {
          font-size:clamp(1.5rem,3vw,2.2rem); font-weight:800; color:#fff; line-height:1.18;
        }
        .sd-social-title span {
          background: linear-gradient(130deg, var(--p1), var(--p2));
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        }
        .sd-social-list { display:flex; gap:14px; list-style:none; flex-wrap:wrap; }
        .sd-social-link {
          display:flex; align-items:center; gap:10px; padding:13px 22px;
          border-radius:10px; border:1px solid rgba(255,255,255,.07);
          background:rgba(255,255,255,.02); text-decoration:none;
          transition:all .22s;
        }
        .sd-social-link:hover { transform:translateY(-4px); background:rgba(192,132,252,.06); }
        .sd-social-icon { font-size:1.35rem; color:var(--muted); transition:color .22s; }
        .sd-social-name {
          font-family:'JetBrains Mono', monospace; font-size:.78rem;
          color:var(--muted); transition:color .22s;
        }
        .sd-social-link:hover .sd-social-name { color:#fff; }

        /* noise overlay */
        .sd-noise {
          position:fixed; inset:0; opacity:.016; pointer-events:none; z-index:9999;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size:256px 256px;
        }
      `}</style>

        <div className="sd-noise" />

        {/* ══ SECTION 1 : HERO ══ */}
        <section className="sd-hero" id="home">
          <div className="sd-top-bar" />
          <FloatingParticles />
          <Particle />

          <div className="sd-grid">
            {/* Left */}
            <div>
              <div className="sd-greeting">
                <div className="sd-greeting-line" />
                <span className="sd-greeting-txt">
                Bonjour&nbsp;<span className="sd-wave"></span>
              </span>
              </div>

              <h1 className="sd-h1">Je suis</h1>
              <div className="sd-name">
                <ScrambleText text="Soda DIOP" />
              </div>

              <div className="sd-type-wrap">
                <Type />
              </div>

              <div className="sd-tags">
                {["Full-Stack Dev","Cybersécurité","Architecture","Laravel","Flutter","Angular","C#","MySQL"].map((t, i) => (
                    <span key={t} className="sd-tag" style={{ animationDelay: `${.5 + i * .07}s` }}>{t}</span>
                ))}
              </div>

              <div className="sd-cta">
                <a href="project" className="sd-btn-main">Voir mes projets →</a>
                <a href="resume"   className="sd-btn-outline">↓ Télécharger CV</a>
              </div>
            </div>

            {/* Right */}
            <div className="sd-img-col">
              <div className="sd-img-glow" />
              <div className="sd-img-ring" />
              <div className="sd-img-ring-pulse" />
              <img src={homeLogo} alt="Soda DIOP – Développeuse" className="sd-img" />
            </div>
          </div>

          {/* Scroll hint */}
          <div className="sd-scroll-hint" style={{ opacity: scrollY > 50 ? 0 : 1 }}>
            <span className="sd-scroll-label">scroll</span>
            <div className="sd-scroll-line" />
          </div>
        </section>

        {/* ══ SECTION 2 : À PROPOS (Home2) ══ */}
        <Home2 />

        {/* ══ SECTION 3 : RÉSEAUX ══ */}
        <section className="sd-social-section">
          <div className="sd-social-inner">
            <div>
              <div className="sd-social-eyebrow">// Retrouvez-moi</div>
              <h2 className="sd-social-title">
                Mes réseaux<br /><span>professionnels</span>
              </h2>
            </div>

            <ul className="sd-social-list">
              {socials.map((s, i) => (
                  <li key={s.label}>
                    <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="sd-social-link"
                        onMouseEnter={e => {
                          e.currentTarget.style.borderColor = s.color + "55";
                          e.currentTarget.style.boxShadow  = `0 8px 28px ${s.color}22`;
                          e.currentTarget.querySelector(".sd-social-icon").style.color = s.color;
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.borderColor = "rgba(255,255,255,.07)";
                          e.currentTarget.style.boxShadow  = "none";
                          e.currentTarget.querySelector(".sd-social-icon").style.color = "rgba(255,255,255,.38)";
                        }}
                        style={{ animationDelay: `${i * .1}s` }}
                    >
                      <span className="sd-social-icon">{s.icon}</span>
                      <span className="sd-social-name">{s.label}</span>
                    </a>
                  </li>
              ))}
            </ul>
          </div>
        </section>
      </>
  );
}

export default Home;