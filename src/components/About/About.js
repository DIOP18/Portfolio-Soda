import React from "react";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import laptopImg from "../../Assets/developer-illustration.png";

function About() {
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
        }

        @keyframes ab-fadeUp   { from{opacity:0;transform:translateY(28px);} to{opacity:1;transform:translateY(0);} }
        @keyframes ab-revL     { from{opacity:0;transform:translateX(-28px);} to{opacity:1;transform:translateX(0);} }
        @keyframes ab-revR     { from{opacity:0;transform:translateX(28px);}  to{opacity:1;transform:translateX(0);} }
        @keyframes ab-gradShift{ 0%{background-position:0% 50%;} 50%{background-position:100% 50%;} 100%{background-position:0% 50%;} }
        @keyframes ab-float    { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-14px);} }
        @keyframes ab-gradBar  { 0%{background-position:0% 50%;} 100%{background-position:200% 50%;} }
        @keyframes ab-skillIn  { from{opacity:0;transform:scale(.85);} to{opacity:1;transform:scale(1);} }
        @keyframes ab-scanLine { 0%{top:0;} 100%{top:100%;} }

        /* ── Page wrapper ── */
        .ab-page {
          background: var(--bg);
          min-height: 100vh;
          padding-top: 88px;
          font-family: 'Outfit', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .ab-page::before {
          content:''; position:absolute; top:-150px; right:-150px;
          width:500px; height:500px; border-radius:50%;
          background:radial-gradient(circle, rgba(192,132,252,.09) 0%, transparent 65%);
          pointer-events:none;
        }

        /* ══ SECTION 1: Hero about ══ */
        .ab-hero {
          max-width: 1200px; margin: 0 auto;
          padding: 60px 40px 80px;
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 64px; align-items: center;
          position: relative; z-index: 2;
        }
        @media(max-width:920px){
          .ab-hero { grid-template-columns:1fr; padding:40px 24px 60px; gap:48px; }
          .ab-hero-img-col { order:-1; }
        }

        /* Section label */
        .ab-label {
          display:inline-flex; align-items:center; gap:10px;
          background:rgba(192,132,252,.07);
          border:1px solid rgba(192,132,252,.22);
          border-radius:100px; padding:6px 18px;
          color:var(--p1); font-size:.76rem;
          letter-spacing:.15em; text-transform:uppercase;
          font-family:'JetBrains Mono', monospace;
          margin-bottom:28px;
          animation: ab-fadeUp .6s ease both;
        }
        .ab-dot {
          width:7px; height:7px; border-radius:50%; background:var(--p1);
          box-shadow:0 0 10px rgba(192,132,252,.6);
        }

        .ab-section-num {
          position:absolute; right:40px; top:60px;
          font-family:'JetBrains Mono', monospace; font-size:7rem; font-weight:800;
          color:rgba(192,132,252,.04); pointer-events:none; user-select:none; line-height:1;
        }

        .ab-eyebrow {
          font-family:'JetBrains Mono', monospace; font-size:.76rem;
          color:rgba(255,255,255,.3); letter-spacing:.2em; text-transform:uppercase;
          margin-bottom:12px; animation: ab-revL .6s .1s ease both;
        }
        .ab-h1 {
          font-size:clamp(2rem,4.5vw,3.4rem); font-weight:800;
          color:#fff; line-height:1.08; margin-bottom:28px;
          animation: ab-revL .6s .2s ease both;
        }
        .ab-h1 span {
          background: linear-gradient(130deg, var(--p1), var(--p2), var(--p3));
          background-size:200% 200%;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          animation: ab-gradShift 5s ease infinite;
        }

        /* Image col */
        .ab-hero-img-col {
          position:relative; display:flex; justify-content:center; align-items:center;
          animation: ab-revR .7s .3s ease both;
        }
        .ab-img-glow {
          position:absolute; width:300px; height:300px; border-radius:50%;
          background:radial-gradient(circle, rgba(192,132,252,.13) 0%, transparent 68%);
          animation: ab-float 5s ease-in-out infinite;
        }
        .ab-img-ring {
          position:absolute; width:330px; height:330px; border-radius:50%;
          border:1px dashed rgba(192,132,252,.18);
          animation: ab-float 5s ease-in-out infinite;
        }
        .ab-hero-img {
          max-height:360px; position:relative; z-index:1; object-fit:contain;
          filter:drop-shadow(0 0 44px rgba(192,132,252,.16));
          animation: ab-float 5s ease-in-out infinite;
        }

        /* ══ Section headings ══ */
        .ab-section-title {
          text-align:center; font-size:clamp(1.6rem,3.5vw,2.4rem);
          font-weight:800; color:#fff; margin-bottom:48px;
          animation: ab-fadeUp .6s ease both;
        }
        .ab-section-title span {
          background: linear-gradient(130deg, var(--p1), var(--p2));
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        }

        /* Divider */
        .ab-divider {
          max-width:1200px; margin:0 auto 72px;
          height:1px;
          background:linear-gradient(90deg, transparent, rgba(192,132,252,.18), rgba(103,232,249,.12), transparent);
        }

        /* ══ Section wrappers ══ */
        .ab-section {
          max-width:1200px; margin:0 auto;
          padding:0 40px 80px;
          position:relative; z-index:2;
        }
        @media(max-width:768px){ .ab-section{ padding:0 24px 60px; } }

        /* ══ GitHub wrapper ══ */
        .ab-github-wrap {
          max-width:1200px; margin:0 auto;
          padding:0 40px 100px;
          position:relative; z-index:2;
        }
        @media(max-width:768px){ .ab-github-wrap{ padding:0 24px 60px; } }
      `}</style>

            <div className="ab-page">
                <Particle />

                {/* ══ HERO ══ */}
                <div className="ab-hero">
                    <div className="ab-section-num">01</div>

                    <div>
                        <div className="ab-label"><span className="ab-dot" /> À propos</div>
                        <div className="ab-eyebrow">// Mon parcours</div>
                        <h1 className="ab-h1">
                            Découvrez<br /><span>Qui Je Suis</span>
                        </h1>
                        <Aboutcard />
                    </div>

                    <div className="ab-hero-img-col">
                        <div className="ab-img-glow" />
                        <div className="ab-img-ring" />
                        <img src={laptopImg} alt="Soda DIOP - Développeuse" className="ab-hero-img" />
                    </div>
                </div>

                <div className="ab-divider" />

                {/* ══ TECHSTACK ══ */}
                <div className="ab-section">
                    <h2 className="ab-section-title">
                        Compétences <span>Professionnelles</span>
                    </h2>
                    <Techstack />
                </div>

                <div className="ab-divider" />

                {/* ══ TOOLSTACK ══ */}
                <div className="ab-section">
                    <h2 className="ab-section-title">
                        <span>Outils</span> que j'utilise
                    </h2>
                    <Toolstack />
                </div>

                <div className="ab-divider" />

                {/* ══ GITHUB ══ */}
                <div className="ab-github-wrap">
                    <Github />
                </div>
            </div>
        </>
    );
}

export default About;