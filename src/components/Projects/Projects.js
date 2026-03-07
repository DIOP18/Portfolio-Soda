import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import emotion    from "../../Assets/Projects/emotion.png";
import chatify    from "../../Assets/Projects/chatify.png";
import suicide    from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

const projects = [
  {
    id: 1,
    imgPath: chatify,
    category: "Application Web",
    title: "Plateforme de Rendez-vous Médicaux",
    description:
        "Application web complète de gestion de clinique. Authentification JWT sécurisée, gestion des rôles (admin, médecin, patient), calendrier de rendez-vous en temps réel et tableau de bord analytique.",
    stack: [
      { name:"Laravel",  color:"#e879f9" },
      { name:"Angular",  color:"#818cf8" },
      { name:"MySQL",    color:"#7dd3fc" },
      { name:"JWT",      color:"#facc15" },
    ],
    highlights: [
      { text:"Authentification sécurisée", color:"#c084fc" },
      { text:"Gestion des rôles",          color:"#818cf8" },
      { text:"Dashboard analytique",       color:"#67e8f9" },
      { text:"REST API",                   color:"#a8e6cf" },
    ],
    ghLink: "https://github.com/DIOP18/Gestion-de-la-Clinique-Dr-Dramane-DIOP",
    filter: ["Web", "Sécurité"],
  },
  {
    id: 2,
    imgPath: bitsOfCode,
    category: "Application Web • Python",
    title: "Gestionnaire de Tâches (Flask)",
    description:
        "Application de gestion de tâches avec Flask. Système d'authentification complet, gestion multi-utilisateurs, notifications et rappels, interface intuitive avec priorités et statuts.",
    stack: [
      { name:"Python",   color:"#facc15" },
      { name:"Flask",    color:"#a8e6cf" },
      { name:"SQLite",   color:"#7dd3fc" },
      { name:"Bootstrap",color:"#818cf8" },
    ],
    highlights: [
      { text:"Auth utilisateurs",   color:"#c084fc" },
      { text:"Notifications",       color:"#818cf8" },
      { text:"Gestion priorités",   color:"#67e8f9" },
      { text:"CRUD complet",        color:"#a8e6cf" },
    ],
    ghLink: "https://github.com/DIOP18/gestion-des-taches-en-python-",
    filter: ["Web", "Python"],
  },
  {
    id: 3,
    imgPath: suicide,
    category: "Application Desktop • Java",
    title: "Gestion des Émargements Professeurs",
    description:
        "Application JavaFX de gestion académique. Suivi des matières, calcul automatique des heures de cours, système d'émargement numérique et génération de rapports pour l'administration.",
    stack: [
      { name:"JavaFX",  color:"#fb923c" },
      { name:"Java",    color:"#fb923c" },
      { name:"MySQL",   color:"#7dd3fc" },
      { name:"MVC",     color:"#c084fc" },
    ],
    highlights: [
      { text:"Architecture MVC",      color:"#c084fc" },
      { text:"Rapports automatiques", color:"#818cf8" },
      { text:"Interface JavaFX",      color:"#67e8f9" },
      { text:"Gestion académique",    color:"#fb923c" },
    ],
    ghLink: "https://github.com/DIOP18/soda_examen_java",
    filter: ["Desktop"],
  },
  {
    id: 4,
    imgPath: emotion,
    category: "Application Web • E-commerce",
    title: "Système de Gestion des Commandes",
    description:
        "Plateforme e-commerce Laravel avec tunnel de commande complet. Catalogue produits, panier, suivi de livraison en temps réel, espace client et back-office administrateur.",
    stack: [
      { name:"Laravel", color:"#e879f9" },
      { name:"Blade",   color:"#f97316" },
      { name:"MySQL",   color:"#7dd3fc" },
      { name:"PHP",     color:"#818cf8" },
    ],
    highlights: [
      { text:"Tunnel commande",   color:"#c084fc" },
      { text:"Suivi livraison",   color:"#818cf8" },
      { text:"Back-office admin", color:"#67e8f9" },
      { text:"Full Laravel",      color:"#e879f9" },
    ],
    ghLink: "https://github.com/DIOP18/laravel_projet",
    filter: ["Web", "E-commerce"],
  },
];

const filters = ["Tous", "Web", "Desktop", "Sécurité", "Python", "E-commerce"];

const stats = [
  { value:"4+",   label:"Projets réalisés"      },
  { value:"6+",   label:"Technologies utilisées" },
  { value:"3",    label:"Langages maîtrisés"     },
  { value:"100%", label:"Open source"            },
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filtered = activeFilter === "Tous"
      ? projects
      : projects.filter(p => p.filter.includes(activeFilter));

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

        @keyframes pr-fadeUp   { from{opacity:0;transform:translateY(28px);} to{opacity:1;transform:translateY(0);} }
        @keyframes pr-gradShift{ 0%{background-position:0% 50%;} 50%{background-position:100% 50%;} 100%{background-position:0% 50%;} }
        @keyframes pr-gradBar  { 0%{background-position:0%;} 100%{background-position:200%;} }
        @keyframes pr-glow     { 0%,100%{box-shadow:0 0 14px rgba(192,132,252,.3);} 50%{box-shadow:0 0 28px rgba(192,132,252,.7);} }

        .pr-page {
          background: var(--bg);
          min-height: 100vh;
          padding-top: 88px;
          font-family: 'Outfit', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .pr-page::before {
          content:''; position:absolute; top:-150px; right:-150px;
          width:500px; height:500px; border-radius:50%;
          background:radial-gradient(circle, rgba(192,132,252,.08) 0%, transparent 65%);
          pointer-events:none;
        }
        .pr-page::after {
          content:''; position:absolute; bottom:-100px; left:-100px;
          width:400px; height:400px; border-radius:50%;
          background:radial-gradient(circle, rgba(103,232,249,.05) 0%, transparent 65%);
          pointer-events:none;
        }

        /* ── Header ── */
        .pr-header {
          max-width:1200px; margin:0 auto;
          padding:60px 40px 48px;
          text-align:center;
          position:relative; z-index:2;
        }
        @media(max-width:768px){ .pr-header{ padding:40px 24px 36px; } }

        .pr-label {
          display:inline-flex; align-items:center; gap:10px;
          background:rgba(192,132,252,.07);
          border:1px solid rgba(192,132,252,.22);
          border-radius:100px; padding:6px 18px;
          color:#c084fc; font-size:.76rem;
          letter-spacing:.15em; text-transform:uppercase;
          font-family:'JetBrains Mono', monospace;
          margin-bottom:24px;
          animation: pr-fadeUp .6s ease both;
        }
        .pr-dot {
          width:7px; height:7px; border-radius:50%; background:#c084fc;
          animation: pr-glow 2s ease-in-out infinite;
        }

        .pr-h1 {
          font-size:clamp(2rem,5vw,3.6rem); font-weight:800;
          color:#fff; line-height:1.08; margin-bottom:16px;
          animation: pr-fadeUp .6s .1s ease both;
        }
        .pr-h1 span {
          background:linear-gradient(130deg,#c084fc,#818cf8,#67e8f9);
          background-size:200% 200%;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          animation: pr-gradShift 5s ease infinite;
        }

        .pr-subtitle {
          font-family:'JetBrains Mono', monospace; font-size:.86rem;
          color:rgba(255,255,255,.38); max-width:520px; margin:0 auto 40px;
          line-height:1.75;
          animation: pr-fadeUp .6s .2s ease both;
        }

        /* Stats */
        .pr-stats {
          display:flex; justify-content:center; gap:0;
          background:rgba(13,15,29,.6);
          border:1px solid rgba(192,132,252,.1);
          border-radius:14px; overflow:hidden;
          max-width:640px; margin:0 auto 48px;
          animation: pr-fadeUp .6s .3s ease both;
        }
        .pr-stat {
          flex:1; padding:18px 10px; text-align:center;
          border-right:1px solid rgba(255,255,255,.05);
          transition:background .2s; cursor:default;
        }
        .pr-stat:last-child{ border-right:none; }
        .pr-stat:hover{ background:rgba(192,132,252,.06); }
        .pr-stat-val {
          font-size:1.5rem; font-weight:800; line-height:1;
          background:linear-gradient(130deg,#c084fc,#818cf8);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          font-family:'Outfit', sans-serif;
        }
        .pr-stat-lbl {
          font-family:'JetBrains Mono', monospace; font-size:.62rem;
          color:rgba(255,255,255,.28); margin-top:5px;
          letter-spacing:.08em; text-transform:uppercase;
        }

        /* Filtres */
        .pr-filters {
          display:flex; flex-wrap:wrap; justify-content:center;
          gap:10px; margin-bottom:48px;
          animation: pr-fadeUp .6s .35s ease both;
        }
        .pr-filter {
          padding:8px 20px; border-radius:100px;
          font-family:'JetBrains Mono', monospace; font-size:.74rem;
          letter-spacing:.1em; cursor:pointer; border:1px solid;
          transition:all .22s; background:none;
        }
        .pr-filter:hover{ opacity:.85; }

        /* Grid */
        .pr-inner {
          max-width:1200px; margin:0 auto;
          padding:0 40px 64px;
          position:relative; z-index:2;
        }
        @media(max-width:768px){ .pr-inner{ padding:0 24px 48px; } }

        .pr-grid {
          display:grid;
          grid-template-columns:repeat(auto-fill, minmax(320px, 1fr));
          gap:24px;
        }
        @media(max-width:700px){ .pr-grid{ grid-template-columns:1fr; } }

        .pr-empty {
          grid-column:1/-1; text-align:center; padding:60px 20px;
          font-family:'JetBrains Mono', monospace; font-size:.88rem;
          color:rgba(255,255,255,.25);
        }

        /* GitHub CTA */
        .pr-github-cta {
          max-width:1200px; margin:0 auto;
          padding:0 40px 100px;
          position:relative; z-index:2;
        }
        @media(max-width:768px){ .pr-github-cta{ padding:0 24px 64px; } }

        .pr-cta-inner {
          background:rgba(13,15,29,.7);
          border:1px solid rgba(192,132,252,.15);
          border-radius:20px; padding:40px 48px;
          display:flex; align-items:center; justify-content:space-between;
          gap:24px; flex-wrap:wrap;
          position:relative; overflow:hidden;
          transition:border-color .3s, box-shadow .3s;
        }
        @media(max-width:600px){ .pr-cta-inner{ padding:28px 24px; } }
        .pr-cta-inner:hover {
          border-color:rgba(192,132,252,.3);
          box-shadow:0 16px 48px rgba(192,132,252,.1);
        }
        .pr-cta-inner::before {
          content:'';
          position:absolute; top:0; left:0; right:0; height:1.5px;
          background:linear-gradient(90deg, transparent, #c084fc, #818cf8, #67e8f9, transparent);
          background-size:300% 100%;
          animation: pr-gradBar 4s linear infinite;
        }
        .pr-cta-inner::after {
          content:'';
          position:absolute; right:-60px; top:-60px;
          width:200px; height:200px; border-radius:50%;
          background:radial-gradient(circle, rgba(192,132,252,.07) 0%, transparent 70%);
          pointer-events:none;
        }
        .pr-cta-title {
          font-size:clamp(1.3rem,3vw,1.9rem); font-weight:800; color:#fff;
          line-height:1.2; margin-bottom:8px;
        }
        .pr-cta-title span {
          background:linear-gradient(130deg,#c084fc,#818cf8);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        }
        .pr-cta-sub {
          font-family:'JetBrains Mono', monospace; font-size:.8rem;
          color:rgba(255,255,255,.35); line-height:1.6;
        }
        .pr-cta-btn {
          display:inline-flex; align-items:center; gap:10px;
          padding:13px 28px; border-radius:10px;
          background:linear-gradient(135deg,#c084fc,#818cf8);
          color:#07080f; font-family:'Outfit', sans-serif; font-weight:700;
          font-size:.9rem; text-decoration:none;
          transition:all .25s; white-space:nowrap; flex-shrink:0;
        }
        .pr-cta-btn:hover {
          transform:translateY(-3px);
          box-shadow:0 12px 36px rgba(192,132,252,.3);
          color:#07080f;
        }
        .pr-cta-btn svg{ font-size:1.2rem; }
      `}</style>

        <div className="pr-page">
          <Particle />

          {/* Header */}
          <div className="pr-header">
            <div className="pr-label"><span className="pr-dot" /> Portfolio</div>
            <h1 className="pr-h1">Mes <span>Projets Réalisés</span></h1>
            <p className="pr-subtitle">
              Projets académiques et personnels construits avec rigueur —<br />
              chaque ligne de code reflète une intention précise.
            </p>

            <div className="pr-stats">
              {stats.map(s => (
                  <div key={s.label} className="pr-stat">
                    <div className="pr-stat-val">{s.value}</div>
                    <div className="pr-stat-lbl">{s.label}</div>
                  </div>
              ))}
            </div>

            <div className="pr-filters">
              {filters.map(f => (
                  <button
                      key={f}
                      className="pr-filter"
                      style={{
                        borderColor: activeFilter === f ? "#c084fc" : "rgba(255,255,255,.1)",
                        color:        activeFilter === f ? "#c084fc" : "rgba(255,255,255,.4)",
                        background:   activeFilter === f ? "rgba(192,132,252,.1)" : "transparent",
                      }}
                      onClick={() => setActiveFilter(f)}
                  >
                    {f}
                  </button>
              ))}
            </div>
          </div>

          {/* Grille */}
          <div className="pr-inner">
            <div className="pr-grid">
              {filtered.length === 0 ? (
                  <div className="pr-empty">// Aucun projet dans cette catégorie</div>
              ) : (
                  filtered.map((p, i) => (
                      <div key={p.id} style={{ animationDelay:`${i * .1}s` }}>
                        <ProjectCard
                            imgPath={p.imgPath}
                            category={p.category}
                            title={p.title}
                            description={p.description}
                            stack={p.stack}
                            highlights={p.highlights}
                            ghLink={p.ghLink}
                            demoLink={p.demoLink}
                            isBlog={false}
                        />
                      </div>
                  ))
              )}
            </div>
          </div>

          {/* GitHub CTA */}
          <div className="pr-github-cta">
            <div className="pr-cta-inner">
              <div>
                <div className="pr-cta-title">
                  Plus de projets sur <span>GitHub</span>
                </div>
                <p className="pr-cta-sub">
                  Retrouvez l'ensemble de mes dépôts, contributions<br />
                  et expérimentations open source.
                </p>
              </div>
              <a
                  href="https://github.com/DIOP18"
                  target="_blank"
                  rel="noreferrer"
                  className="pr-cta-btn"
              >
                <BsGithub /> Voir mon GitHub
              </a>
            </div>
          </div>
        </div>
      </>
  );
}

export default Projects;