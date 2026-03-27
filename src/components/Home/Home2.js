import React, { useEffect, useRef, useState } from "react";
import myImg from "../../Assets/avatar.png";
const skills = [
  { name: "Laravel",  color: "#e879f9" },  // mauve rosé
  { name: "Angular",  color: "#818cf8" },  // indigo
  { name: "Flutter",  color: "#67e8f9" },  // bleu ciel
  { name: "JavaFX",   color: "#c084fc" },  // mauve clair
  { name: "C#",       color: "#a78bfa" },  // violet
  { name: "MySQL",    color: "#7dd3fc" },  // bleu pastel
];

const stats = [
  { value: "Bac+3", label: "Génie Logiciel" },
  { value: "Mention", label: "Excellent" },
  { value: "100%", label: "Investissement" },
];

const domains = [
  {  label: "Architecture logicielle" },
  {  label: "Développement mobile (Flutter)" },
  {  label: "Gestion de bases de données" },
];

/* ── Typewriter interne ────────────────────────────────────── */
function TypewriterText({ texts }) {
  const [displayed, setDisplayed] = useState("");
  const [tIdx, setTIdx] = useState(0);
  const [cIdx, setCIdx] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const cur = texts[tIdx];
    let t;
    if (!del && cIdx < cur.length)       t = setTimeout(() => setCIdx(i => i + 1), 75);
    else if (!del && cIdx === cur.length) t = setTimeout(() => setDel(true), 1800);
    else if (del && cIdx > 0)            t = setTimeout(() => setCIdx(i => i - 1), 38);
    else { setDel(false); setTIdx(i => (i + 1) % texts.length); }
    setDisplayed(cur.slice(0, cIdx));
    return () => clearTimeout(t);
  }, [cIdx, del, tIdx, texts]);
  return (
      <span>
      {displayed}
        <span style={{ animation: "h2-blink 1s step-end infinite", color: "#c084fc" }}>|</span>
    </span>
  );
}

/* ── Home2 ─────────────────────────────────────────────────── */
function Home2() {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const fn = (e) => {
      const r = el.getBoundingClientRect();
      setMouse({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
    };
    if (el) el.addEventListener("mousemove", fn);
    return () => { if (el) el.removeEventListener("mousemove", fn); };
  }, []);

  return (
      <>
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800&family=JetBrains+Mono:wght@300;400&display=swap');

        /* ── keyframes ── */
        @keyframes h2-blink      { 50%{opacity:0;} }
        @keyframes h2-floatImg   { 0%,100%{transform:translateY(0) rotate(-1deg);} 50%{transform:translateY(-12px) rotate(1deg);} }
        @keyframes h2-orbit      { from{transform:rotate(0deg) translateX(135px) rotate(0deg);} to{transform:rotate(360deg) translateX(135px) rotate(-360deg);} }
        @keyframes h2-revL       { from{opacity:0;transform:translateX(-36px);} to{opacity:1;transform:translateX(0);} }
        @keyframes h2-revR       { from{opacity:0;transform:translateX(36px);}  to{opacity:1;transform:translateX(0);} }
        @keyframes h2-fadeUp     { from{opacity:0;transform:translateY(28px);}  to{opacity:1;transform:translateY(0);} }
        @keyframes h2-skillPop   { from{opacity:0;transform:scale(.82) translateY(10px);} to{opacity:1;transform:scale(1) translateY(0);} }
        @keyframes h2-glow       { 0%,100%{box-shadow:0 0 14px rgba(192,132,252,.35);} 50%{box-shadow:0 0 32px rgba(192,132,252,.75),0 0 64px rgba(192,132,252,.18);} }
        @keyframes h2-scan       { 0%{top:0;} 100%{top:100%;} }
        @keyframes h2-gradShift  { 0%{background-position:0% 50%;} 50%{background-position:100% 50%;} 100%{background-position:0% 50%;} }
        @keyframes h2-divider    { from{width:0;opacity:0;} to{width:100%;opacity:1;} }

        /* ── Section wrapper ── */
        .h2-wrap {
          background: #07080f;
          min-height:100vh;
          padding:100px 20px 80px;
          font-family:'Outfit', sans-serif;
          position:relative;
          overflow:hidden;
        }

        /* Subtle grid */
        .h2-grid-bg {
          position:absolute; inset:0; pointer-events:none;
          background-image:
            linear-gradient(rgba(192,132,252,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(192,132,252,.03) 1px, transparent 1px);
          background-size:64px 64px;
        }
        /* Separator from hero */
        .h2-separator {
          position:absolute; top:0; left:10%; right:10%; height:1px;
          background: linear-gradient(90deg, transparent, rgba(192,132,252,.25), rgba(103,232,249,.2), transparent);
          animation: h2-divider .8s ease both;
        }

        /* Mouse glow blob */
        .h2-blob {
          position:absolute; border-radius:50%;
          filter:blur(110px); pointer-events:none; transition:all .35s ease;
        }

        /* Inner */
        .h2-inner {
          max-width:1200px; margin:0 auto; position:relative; z-index:2;
        }

        /* Section label */
        .h2-label {
          display:inline-flex; align-items:center; gap:10px;
          background:rgba(192,132,252,.07);
          border:1px solid rgba(192,132,252,.22);
          border-radius:100px; padding:6px 18px;
          color:#c084fc; font-size:.76rem;
          letter-spacing:.15em; text-transform:uppercase;
          font-family:'JetBrains Mono', monospace;
          margin-bottom:44px;
          animation: h2-fadeUp .6s ease both;
        }
        .h2-dot {
          width:7px; height:7px; border-radius:50%;
          background:#c084fc;
          animation: h2-glow 2s ease-in-out infinite;
        }

        /* Section number */
        .h2-section-num {
          position:absolute; right:0; top:0;
          font-family:'JetBrains Mono', monospace;
          font-size:8rem; font-weight:800; line-height:1;
          color:rgba(192,132,252,.04); pointer-events:none;
          user-select:none;
        }

        /* Layout */
        .h2-layout {
          display:grid; grid-template-columns:1fr 360px;
          gap:80px; align-items:start;
        }
        @media(max-width:920px){
          .h2-layout{grid-template-columns:1fr; gap:56px;}
          .h2-right{order:-1;}
        }

        /* ── LEFT ── */
        .h2-eyebrow {
          font-family:'JetBrains Mono', monospace; font-size:.76rem;
          color:rgba(255,255,255,.35); letter-spacing:.2em; text-transform:uppercase;
          margin-bottom:14px;
          animation: h2-revL .7s .1s ease both;
        }
        .h2-title {
          font-size:clamp(2rem,4.5vw,3.4rem); font-weight:800; color:#fff;
          line-height:1.08; margin-bottom:8px;
          animation: h2-revL .7s .2s ease both;
        }
        .h2-title-grad {
          background: linear-gradient(130deg, #c084fc, #818cf8, #67e8f9);
          background-size:200% 200%;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          animation: h2-gradShift 5s ease infinite;
        }

        .h2-tw-wrap {
          font-size:clamp(.95rem,1.8vw,1.2rem); font-weight:600;
          color:rgba(255,255,255,.45); margin-bottom:30px; min-height:2em;
          animation: h2-revL .7s .3s ease both;
        }
        .h2-tw-wrap .tw-accent { color:#c084fc; }

        .h2-bio {
          font-family:'JetBrains Mono', monospace; font-size:.87rem;
          line-height:1.95; color:rgba(255,255,255,.52);
          margin-bottom:40px;
          animation: h2-revL .7s .4s ease both;
          border-left:2px solid rgba(192,132,252,.28);
          padding-left:20px;
        }
        .h2-bio strong { color:#c084fc; font-weight:400; }

        /* Stack */
        .h2-stack-label {
          font-size:.7rem; letter-spacing:.2em; text-transform:uppercase;
          color:rgba(255,255,255,.28); font-family:'JetBrains Mono', monospace;
          margin-bottom:12px;
          animation: h2-fadeUp .7s .5s ease both;
        }
        .h2-stack {
          display:flex; flex-wrap:wrap; gap:10px; margin-bottom:44px;
          animation: h2-fadeUp .7s .55s ease both;
        }
        .h2-skill {
          padding:7px 15px; border-radius:6px;
          font-family:'JetBrains Mono', monospace; font-size:.8rem;
          border:1px solid; cursor:default; transition:all .22s;
          animation: h2-skillPop .5s ease both;
        }
        .h2-skill:hover { transform:translateY(-3px); filter:brightness(1.35); }

        /* Stats */
        .h2-stats {
          display:flex; gap:0; margin-bottom:0;
          animation: h2-fadeUp .7s .65s ease both;
          border:1px solid rgba(255,255,255,.07); border-radius:12px;
          overflow:hidden;
        }
        .h2-stat {
          flex:1; padding:18px 20px; text-align:center;
          border-right:1px solid rgba(255,255,255,.07);
          background:rgba(192,132,252,.03);
          transition:background .2s;
        }
        .h2-stat:last-child { border-right:none; }
        .h2-stat:hover { background:rgba(192,132,252,.07); }
        .h2-stat-val {
          font-size:1.5rem; font-weight:800; color:#fff; line-height:1;
          background: linear-gradient(130deg, #c084fc, #818cf8);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        }
        .h2-stat-lbl {
          font-family:'JetBrains Mono', monospace; font-size:.68rem;
          color:rgba(255,255,255,.32); margin-top:5px;
        }

        /* CTAs */
        .h2-cta {
          display:flex; gap:12px; margin-top:32px; flex-wrap:wrap;
          animation: h2-fadeUp .7s .75s ease both;
        }
        .h2-btn-main {
          padding:12px 26px;
          background: linear-gradient(130deg, #c084fc, #818cf8);
          color:#07080f; border:none; border-radius:8px;
          font-family:'Outfit', sans-serif; font-weight:700; font-size:.88rem;
          cursor:pointer; text-decoration:none; display:inline-flex; align-items:center; gap:8px;
          transition:all .22s;
        }
        .h2-btn-main:hover { transform:translateY(-2px); box-shadow:0 12px 36px rgba(192,132,252,.28); }
        .h2-btn-outline {
          padding:12px 26px; background:transparent;
          color:rgba(255,255,255,.65); border:1px solid rgba(255,255,255,.13);
          border-radius:8px; font-family:'Outfit', sans-serif; font-weight:600; font-size:.88rem;
          cursor:pointer; text-decoration:none; display:inline-flex; align-items:center; gap:8px;
          transition:all .22s;
        }
        .h2-btn-outline:hover { border-color:rgba(192,132,252,.5); color:#c084fc; transform:translateY(-2px); }

        /* ── RIGHT: Avatar ── */
        .h2-right { animation: h2-revR .7s .3s ease both; }
        .h2-avatar-wrap {
          position:relative; width:300px; height:360px; margin:0 auto 28px;
        }
        .h2-avatar-frame {
          position:absolute; inset:0; border-radius:22px;
          border:1px solid rgba(192,132,252,.2);
          background: linear-gradient(145deg, rgba(192,132,252,.05), rgba(103,232,249,.04));
          overflow:hidden;
        }
        .h2-avatar-img {
          width:100%; height:100%; object-fit:cover; object-position:top;
          animation: h2-floatImg 5s ease-in-out infinite;
          filter:contrast(1.04) brightness(1.04) saturate(1.1);
        }
        .h2-scan {
          position:absolute; left:0; right:0; height:2px;
          background: linear-gradient(90deg, transparent, rgba(192,132,252,.4), transparent);
          animation: h2-scan 3.5s linear infinite; pointer-events:none;
        }
        /* corner brackets */
        .h2-corner {
          position:absolute; width:16px; height:16px;
          border-color:#c084fc; border-style:solid;
        }
        .h2-corner.tl { top:-1px; left:-1px; border-width:2px 0 0 2px; border-radius:4px 0 0 0; }
        .h2-corner.tr { top:-1px; right:-1px; border-width:2px 2px 0 0; border-radius:0 4px 0 0; }
        .h2-corner.bl { bottom:-1px; left:-1px; border-width:0 0 2px 2px; border-radius:0 0 0 4px; }
        .h2-corner.br { bottom:-1px; right:-1px; border-width:0 2px 2px 0; border-radius:0 0 4px 0; }
        /* orbit dot */
        .h2-orbit-dot {
          position:absolute; width:9px; height:9px; background:#c084fc;
          border-radius:50%; top:50%; left:50%; margin:-4.5px 0 0 -4.5px;
          animation: h2-orbit 7s linear infinite;
          box-shadow:0 0 10px #c084fc;
        }
        /* badge */
        .h2-badge {
          position:absolute; bottom:-18px; right:-18px;
          background:#0d0f1d; border:1px solid rgba(192,132,252,.25);
          border-radius:12px; padding:12px 16px;
          font-family:'JetBrains Mono', monospace;
        }
        .h2-badge-val {
          font-size:1.4rem; font-weight:800; color:#c084fc;
          font-family:'Outfit', sans-serif; line-height:1;
        }
        .h2-badge-lbl { font-size:.68rem; color:rgba(255,255,255,.38); margin-top:3px; }

        /* Domains list */
        .h2-domains { display:flex; flex-direction:column; gap:8px; }
        .h2-domain {
          display:flex; align-items:center; gap:10px;
          font-family:'JetBrains Mono', monospace; font-size:.78rem;
          color:rgba(255,255,255,.45); padding:9px 12px;
          border-radius:8px; border:1px solid rgba(255,255,255,.06);
          transition:all .2s; cursor:default;
        }
        .h2-domain:hover {
          border-color:rgba(192,132,252,.22); color:rgba(255,255,255,.82);
          background:rgba(192,132,252,.05);
        }
        .h2-domain-icon { font-size:.95rem; }
      `}</style>

        <section className="h2-wrap" ref={ref} id="about">
          <div className="h2-grid-bg" />
          <div className="h2-separator" />

          {/* Mouse glow */}
          <div className="h2-blob" style={{
            width:480, height:480,
            background:"radial-gradient(circle, rgba(192,132,252,0.1) 0%, transparent 70%)",
            left:`${mouse.x}%`, top:`${mouse.y}%`, transform:"translate(-50%,-50%)"
          }} />
          <div className="h2-blob" style={{
            width:300, height:300,
            background:"rgba(103,232,249,0.06)",
            right:"8%", bottom:"8%"
          }} />

          <div className="h2-inner">
            <div className="h2-section-num">02</div>

            {/* Label pill */}
            <div className="h2-label">
              <span className="h2-dot" />
              Qui suis-je ?
            </div>

            <div className="h2-layout">
              {/* ── LEFT ── */}
              <div>
                <div className="h2-eyebrow">// À propos de moi</div>
                <h2 className="h2-title">
                  Développeuse&nbsp;<br />
                  <span className="h2-title-grad">Full-Stack</span>
                </h2>

                <div className="h2-tw-wrap">
                  Je conçois des{" "}
                  <span className="tw-accent">
                  <TypewriterText texts={[
                    "apps web sécurisées",
                    "architectures robustes",
                    "interfaces fluides",
                    "solutions mobiles",
                  ]} />
                </span>
                </div>

                <p className="h2-bio">
                  Diplômée en <strong>Génie Logiciel</strong> avec mention Excellent.
                  Je conçois des systèmes qui allient <strong>sécurité, architecture solide</strong> et expérience utilisateur irréprochable.
                  Mon approche : coder avec intention, livrer avec précision.
                </p>

                <div className="h2-stack-label">Stack technique</div>
                <div className="h2-stack">
                  {skills.map((s, i) => (
                      <span key={s.name} className="h2-skill" style={{
                        color: s.color,
                        borderColor: s.color + "42",
                        background: s.color + "12",
                        animationDelay: `${.6 + i * .08}s`,
                      }}>{s.name}</span>
                  ))}
                </div>

                {/* Stats strip */}
                <div className="h2-stats">
                  {stats.map(s => (
                      <div key={s.label} className="h2-stat">
                        <div className="h2-stat-val">{s.value}</div>
                        <div className="h2-stat-lbl">{s.label}</div>
                      </div>
                  ))}
                </div>

                <div className="h2-cta">
                  <a href="project" className="h2-btn-main">Mes projets</a>
                  <a href="contact"  className="h2-btn-outline">Me contacter</a>
                </div>
              </div>

              {/* ── RIGHT ── */}
              <div className="h2-right">
                <div className="h2-avatar-wrap">
                  <div className="h2-avatar-frame">
                    <img src={myImg} className="h2-avatar-img" alt="Soda DIOP" />
                    <div className="h2-scan" />
                  </div>
                  <div className="h2-corner tl" /><div className="h2-corner tr" />
                  <div className="h2-corner bl" /><div className="h2-corner br" />
                  <div className="h2-orbit-dot" />
                  <div className="h2-badge">
                    <div className="h2-badge-val">Bac+3</div>
                    <div className="h2-badge-lbl">Mention Excellent</div>
                  </div>
                </div>

                <div className="h2-domains">
                  {domains.map(d => (
                      <div key={d.label} className="h2-domain">
                        <span className="h2-domain-icon">{d.icon}</span>
                        {d.label}
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  );
}

export default Home2;