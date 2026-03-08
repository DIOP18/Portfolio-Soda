import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

/* ── Placeholders SVG inline (remplace les vraies images) ── */
const PlaceholderMedical = () => (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <rect width="400" height="200" fill="#0d0f1d"/>
        <rect x="0" y="0" width="400" height="2" fill="url(#g1)"/>
        <defs>
            <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#c084fc" stopOpacity="0"/>
                <stop offset="50%" stopColor="#c084fc"/>
                <stop offset="100%" stopColor="#67e8f9" stopOpacity="0"/>
            </linearGradient>
        </defs>
        {/* Grid lines */}
        {[40,80,120,160].map(y=><line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(192,132,252,0.06)" strokeWidth="1"/>)}
        {[80,160,240,320].map(x=><line key={x} x1={x} y1="0" x2={x} y2="200" stroke="rgba(192,132,252,0.06)" strokeWidth="1"/>)}
        {/* Cross médical */}
        <rect x="175" y="70" width="50" height="14" rx="4" fill="rgba(192,132,252,0.35)"/>
        <rect x="189" y="56" width="22" height="42" rx="4" fill="rgba(192,132,252,0.35)"/>
        {/* Cercle */}
        <circle cx="200" cy="77" r="50" fill="none" stroke="rgba(192,132,252,0.12)" strokeWidth="1" strokeDasharray="4 4"/>
        {/* Tags */}
        <rect x="20" y="160" width="68" height="22" rx="11" fill="rgba(232,121,249,0.15)" stroke="rgba(232,121,249,0.3)" strokeWidth="1"/>
        <text x="54" y="175" textAnchor="middle" fill="#e879f9" fontSize="10" fontFamily="monospace">Laravel</text>
        <rect x="96" y="160" width="62" height="22" rx="11" fill="rgba(129,140,248,0.15)" stroke="rgba(129,140,248,0.3)" strokeWidth="1"/>
        <text x="127" y="175" textAnchor="middle" fill="#818cf8" fontSize="10" fontFamily="monospace">Angular</text>
        <rect x="166" y="160" width="50" height="22" rx="11" fill="rgba(125,211,252,0.15)" stroke="rgba(125,211,252,0.3)" strokeWidth="1"/>
        <text x="191" y="175" textAnchor="middle" fill="#7dd3fc" fontSize="10" fontFamily="monospace">MySQL</text>
        <rect x="224" y="160" width="38" height="22" rx="11" fill="rgba(250,204,21,0.15)" stroke="rgba(250,204,21,0.3)" strokeWidth="1"/>
        <text x="243" y="175" textAnchor="middle" fill="#facc15" fontSize="10" fontFamily="monospace">JWT</text>
        {/* Label */}
        <text x="200" y="30" textAnchor="middle" fill="rgba(192,132,252,0.5)" fontSize="11" fontFamily="monospace" letterSpacing="2">{'// CLINIQUE MÉDICALE'}</text>
    </svg>
);

const PlaceholderTodo = () => (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <rect width="400" height="200" fill="#0d0f1d"/>
        <rect x="0" y="0" width="400" height="2" fill="url(#g2)"/>
        <defs>
            <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#facc15" stopOpacity="0"/>
                <stop offset="50%" stopColor="#facc15"/>
                <stop offset="100%" stopColor="#a8e6cf" stopOpacity="0"/>
            </linearGradient>
        </defs>
        {[40,80,120,160].map(y=><line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(250,204,21,0.05)" strokeWidth="1"/>)}
        {/* Task rows */}
        {[60,90,120,150].map((y,i)=>(
            <g key={y}>
                <rect x="60" y={y} width={[180,140,160,120][i]} height="14" rx="3" fill={`rgba(255,255,255,${[0.08,0.05,0.06,0.04][i]})`}/>
                <circle cx="40" cy={y+7} r="8" fill="none" stroke={["#facc15","rgba(255,255,255,0.2)","rgba(255,255,255,0.2)","rgba(255,255,255,0.1)"][i]} strokeWidth="1.5"/>
                {i===0 && <path d="M34,67 L38,72 L46,62" stroke="#facc15" strokeWidth="2" fill="none" strokeLinecap="round"/>}
            </g>
        ))}
        {/* Tags */}
        <rect x="20" y="165" width="56" height="20" rx="10" fill="rgba(250,204,21,0.15)" stroke="rgba(250,204,21,0.3)" strokeWidth="1"/>
        <text x="48" y="179" textAnchor="middle" fill="#facc15" fontSize="10" fontFamily="monospace">Python</text>
        <rect x="84" y="165" width="46" height="20" rx="10" fill="rgba(168,230,207,0.15)" stroke="rgba(168,230,207,0.3)" strokeWidth="1"/>
        <text x="107" y="179" textAnchor="middle" fill="#a8e6cf" fontSize="10" fontFamily="monospace">Flask</text>
        <rect x="138" y="165" width="50" height="20" rx="10" fill="rgba(125,211,252,0.15)" stroke="rgba(125,211,252,0.3)" strokeWidth="1"/>
        <text x="163" y="179" textAnchor="middle" fill="#7dd3fc" fontSize="10" fontFamily="monospace">SQLite</text>
        <text x="200" y="30" textAnchor="middle" fill="rgba(250,204,21,0.5)" fontSize="11" fontFamily="monospace" letterSpacing="2">{'// GESTIONNAIRE TÂCHES'}</text>
    </svg>
);

const PlaceholderJava = () => (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <rect width="400" height="200" fill="#0d0f1d"/>
        <rect x="0" y="0" width="400" height="2" fill="url(#g3)"/>
        <defs>
            <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fb923c" stopOpacity="0"/>
                <stop offset="50%" stopColor="#fb923c"/>
                <stop offset="100%" stopColor="#c084fc" stopOpacity="0"/>
            </linearGradient>
        </defs>
        {[40,80,120,160].map(y=><line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(251,146,60,0.05)" strokeWidth="1"/>)}
        {/* Table simulée */}
        <rect x="60" y="45" width="280" height="100" rx="6" fill="none" stroke="rgba(251,146,60,0.2)" strokeWidth="1"/>
        <line x1="60" y1="68" x2="340" y2="68" stroke="rgba(251,146,60,0.15)" strokeWidth="1"/>
        {["Nom","Matière","Heures","Statut"].map((h,i)=>(
            <text key={h} x={80+i*60} y={62} fill="rgba(251,146,60,0.7)" fontSize="9" fontFamily="monospace">{h}</text>
        ))}
        {[["FALL","Maths","18h","✓"],["DIOP","Physique","12h","✓"],["BA","Info","24h","○"]].map((row,ri)=>(
            row.map((cell,ci)=>(
                <text key={`${ri}-${ci}`} x={80+ci*60} y={85+ri*20} fill={`rgba(255,255,255,${ri===0?0.55:0.3})`} fontSize="9" fontFamily="monospace">{cell}</text>
            ))
        ))}
        {/* Tags */}
        <rect x="20" y="163" width="52" height="20" rx="10" fill="rgba(251,146,60,0.15)" stroke="rgba(251,146,60,0.3)" strokeWidth="1"/>
        <text x="46" y="177" textAnchor="middle" fill="#fb923c" fontSize="10" fontFamily="monospace">JavaFX</text>
        <rect x="80" y="163" width="44" height="20" rx="10" fill="rgba(125,211,252,0.15)" stroke="rgba(125,211,252,0.3)" strokeWidth="1"/>
        <text x="102" y="177" textAnchor="middle" fill="#7dd3fc" fontSize="10" fontFamily="monospace">MySQL</text>
        <rect x="132" y="163" width="38" height="20" rx="10" fill="rgba(192,132,252,0.15)" stroke="rgba(192,132,252,0.3)" strokeWidth="1"/>
        <text x="151" y="177" textAnchor="middle" fill="#c084fc" fontSize="10" fontFamily="monospace">MVC</text>
        <text x="200" y="30" textAnchor="middle" fill="rgba(251,146,60,0.5)" fontSize="11" fontFamily="monospace" letterSpacing="2">{'// ÉMARGEMENTS'}</text>
    </svg>
);

const PlaceholderEcommerce = () => (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <rect width="400" height="200" fill="#0d0f1d"/>
        <rect x="0" y="0" width="400" height="2" fill="url(#g4)"/>
        <defs>
            <linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e879f9" stopOpacity="0"/>
                <stop offset="50%" stopColor="#e879f9"/>
                <stop offset="100%" stopColor="#818cf8" stopOpacity="0"/>
            </linearGradient>
        </defs>
        {[40,80,120,160].map(y=><line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(232,121,249,0.05)" strokeWidth="1"/>)}
        {/* Produits */}
        {[0,1,2].map(i=>(
            <g key={i}>
                <rect x={40+i*110} y="45" width="90" height="90" rx="8" fill="rgba(232,121,249,0.06)" stroke="rgba(232,121,249,0.15)" strokeWidth="1"/>
                <rect x={55+i*110} y="60" width="60" height="40" rx="4" fill={`rgba(${["232,121,249","129,140,248","103,232,249"][i]},0.12)`}/>
                <rect x={55+i*110} y="108" width="40" height="8" rx="2" fill="rgba(255,255,255,0.1)"/>
                <text x={100+i*110} y="130" textAnchor="middle" fill={["#e879f9","#818cf8","#67e8f9"][i]} fontSize="11" fontFamily="monospace">{["24 XOF","36 XOF","18 XOF"][i]}</text>
            </g>
        ))}
        {/* Panier icone */}
        <rect x="330" y="50" width="40" height="34" rx="6" fill="rgba(232,121,249,0.1)" stroke="rgba(232,121,249,0.25)" strokeWidth="1"/>
        <text x="350" y="72" textAnchor="middle" fill="#e879f9" fontSize="18">🛒</text>
        <circle cx="368" cy="46" r="8" fill="#e879f9"/>
        <text x="368" y="50" textAnchor="middle" fill="#07080f" fontSize="9" fontFamily="monospace" fontWeight="bold">3</text>
        {/* Tags */}
        <rect x="20" y="162" width="60" height="20" rx="10" fill="rgba(232,121,249,0.15)" stroke="rgba(232,121,249,0.3)" strokeWidth="1"/>
        <text x="50" y="176" textAnchor="middle" fill="#e879f9" fontSize="10" fontFamily="monospace">Laravel</text>
        <rect x="88" y="162" width="44" height="20" rx="10" fill="rgba(249,115,22,0.15)" stroke="rgba(249,115,22,0.3)" strokeWidth="1"/>
        <text x="110" y="176" textAnchor="middle" fill="#f97316" fontSize="10" fontFamily="monospace">Blade</text>
        <rect x="140" y="162" width="50" height="20" rx="10" fill="rgba(125,211,252,0.15)" stroke="rgba(125,211,252,0.3)" strokeWidth="1"/>
        <text x="165" y="176" textAnchor="middle" fill="#7dd3fc" fontSize="10" fontFamily="monospace">MySQL</text>
        <text x="200" y="30" textAnchor="middle" fill="rgba(232,121,249,0.5)" fontSize="11" fontFamily="monospace" letterSpacing="2">{'// E-COMMERCE'}</text>
    </svg>
);

/* ── Données projets avec métriques réelles ─────────────────── */
const projects = [
    {
        id: 1,
        placeholder: <PlaceholderMedical />,
        category: "Application Web • Santé",
        title: "Plateforme de Rendez-vous Médicaux",
        description:
            "Système de gestion de clinique couvrant le cycle complet patient→médecin→admin. " +
            "3 rôles distincts avec permissions granulaires, 12 tables MySQL relationnelles, " +
            "15+ endpoints REST sécurisés par JWT. Réduit la gestion manuelle des RDV de ~70% " +
            "par rapport à un agenda papier. Validation côté serveur sur 100% des formulaires.",
        stack: [
            { name:"Laravel",  color:"#e879f9" },
            { name:"Angular",  color:"#818cf8" },
            { name:"MySQL",    color:"#7dd3fc" },
            { name:"JWT",      color:"#facc15" },
        ],
        highlights: [
            { text:"3 rôles • 15+ endpoints REST",  color:"#c084fc" },
            { text:"12 tables MySQL relationnelles", color:"#818cf8" },
            { text:"Auth JWT + guards Angular",      color:"#67e8f9" },
            { text:"Dashboard temps réel",           color:"#a8e6cf" },
        ],
        ghLink: "https://github.com/DIOP18/Gestion-de-la-Clinique-Dr-Dramane-DIOP",
        filter: ["Web", "Sécurité"],
    },
    {
        id: 2,
        placeholder: <PlaceholderTodo />,
        category: "Application Web • Python",
        title: "Gestionnaire de Tâches (Flask)",
        description:
            "Application todo-list avancée construite avec Flask et SQLite. " +
            "Authentification bcrypt hashée, sessions sécurisées, 4 niveaux de priorité, " +
            "système de rappels par statut. Architecture MVC respectée, " +
            "~800 lignes de code Python bien structuré. " +
            "Support multi-utilisateurs : chaque compte dispose d'un espace isolé.",
        stack: [
            { name:"Python",   color:"#facc15" },
            { name:"Flask",    color:"#a8e6cf" },
            { name:"SQLite",   color:"#7dd3fc" },
            { name:"Bootstrap",color:"#818cf8" },
        ],
        highlights: [
            { text:"Auth bcrypt • sessions sécurisées", color:"#c084fc" },
            { text:"Multi-utilisateurs isolés",          color:"#818cf8" },
            { text:"4 niveaux de priorité",              color:"#67e8f9" },
            { text:"~800 lignes Python structuré",        color:"#a8e6cf" },
        ],
        ghLink: "https://github.com/DIOP18/gestion-des-taches-en-python-",
        filter: ["Web", "Python"],
    },
    {
        id: 3,
        placeholder: <PlaceholderJava />,
        category: "Application Desktop • Java",
        title: "Gestion des Émargements Professeurs",
        description:
            "Application desktop JavaFX pour la gestion académique d'un établissement. " +
            "Suivi de N professeurs sur M matières, calcul automatique des volumes horaires, " +
            "génération de rapports PDF exportables. " +
            "Interface graphique JavaFX avec FXML, 8 tables MySQL, " +
            "pattern MVC strict. Zéro calcul manuel d'heures grâce à l'automatisation.",
        stack: [
            { name:"JavaFX", color:"#fb923c" },
            { name:"Java",   color:"#fb923c" },
            { name:"MySQL",  color:"#7dd3fc" },
            { name:"MVC",    color:"#c084fc" },
        ],
        highlights: [
            { text:"8 tables MySQL • pattern MVC",    color:"#c084fc" },
            { text:"Calcul auto volumes horaires",     color:"#818cf8" },
            { text:"Export rapports PDF",             color:"#67e8f9" },
            { text:"Interface FXML JavaFX",           color:"#fb923c" },
        ],
        ghLink: "https://github.com/DIOP18/soda_examen_java",
        filter: ["Desktop"],
    },
    {
        id: 4,
        placeholder: <PlaceholderEcommerce />,
        category: "Application Web • E-commerce",
        title: "Système de Gestion des Commandes",
        description:
            "Plateforme e-commerce full-stack Laravel avec tunnel d'achat complet en 4 étapes. " +
            "Catalogue produits avec filtres, panier persistant en session, " +
            "suivi de livraison par statuts (en attente → expédié → livré). " +
            "Back-office admin : 10+ vues de gestion, statistiques de vente, " +
            "10 tables MySQL. Architecture MVC Blade, validations Laravel natives.",
        stack: [
            { name:"Laravel", color:"#e879f9" },
            { name:"Blade",   color:"#f97316" },
            { name:"MySQL",   color:"#7dd3fc" },
            { name:"PHP",     color:"#818cf8" },
        ],
        highlights: [
            { text:"Tunnel achat 4 étapes",       color:"#c084fc" },
            { text:"10 tables • 10+ vues admin",  color:"#818cf8" },
            { text:"Suivi livraison par statuts",  color:"#67e8f9" },
            { text:"Panier session persistant",   color:"#e879f9" },
        ],
        ghLink: "https://github.com/DIOP18/laravel_projet",
        filter: ["Web", "E-commerce"],
    },
];

const filters = ["Tous", "Web", "Desktop", "Sécurité", "Python", "E-commerce"];

const stats = [
    { value:"4+",   label:"Projets réalisés"       },
    { value:"10+",  label:"Technologies utilisées"  },
    { value:"50+",  label:"Endpoints REST codés"    },
    { value:"100%", label:"Open source"             },
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
          --p1:#c084fc; --p2:#818cf8; --p3:#67e8f9;
          --bg:#07080f; --bg2:#0d0f1d;
        }

        @keyframes pr-fadeUp    { from{opacity:0;transform:translateY(28px);} to{opacity:1;transform:translateY(0);} }
        @keyframes pr-gradShift { 0%{background-position:0% 50%;} 50%{background-position:100% 50%;} 100%{background-position:0% 50%;} }
        @keyframes pr-gradBar   { 0%{background-position:0%;} 100%{background-position:200%;} }
        @keyframes pr-glow      { 0%,100%{box-shadow:0 0 14px rgba(192,132,252,.3);} 50%{box-shadow:0 0 28px rgba(192,132,252,.7);} }

        .pr-page {
          background:var(--bg); min-height:100vh; padding-top:88px;
          font-family:'Outfit', sans-serif; position:relative; overflow:hidden;
        }
        .pr-page::before {
          content:''; position:absolute; top:-150px; right:-150px;
          width:500px; height:500px; border-radius:50%;
          background:radial-gradient(circle,rgba(192,132,252,.08) 0%,transparent 65%);
          pointer-events:none;
        }
        .pr-page::after {
          content:''; position:absolute; bottom:-100px; left:-100px;
          width:400px; height:400px; border-radius:50%;
          background:radial-gradient(circle,rgba(103,232,249,.05) 0%,transparent 65%);
          pointer-events:none;
        }

        .pr-header {
          max-width:1200px; margin:0 auto;
          padding:60px 40px 48px; text-align:center;
          position:relative; z-index:2;
        }
        @media(max-width:768px){ .pr-header{padding:40px 24px 36px;} }

        .pr-label {
          display:inline-flex; align-items:center; gap:10px;
          background:rgba(192,132,252,.07); border:1px solid rgba(192,132,252,.22);
          border-radius:100px; padding:6px 18px; color:#c084fc; font-size:.76rem;
          letter-spacing:.15em; text-transform:uppercase;
          font-family:'JetBrains Mono',monospace; margin-bottom:24px;
          animation:pr-fadeUp .6s ease both;
        }
        .pr-dot {
          width:7px; height:7px; border-radius:50%; background:#c084fc;
          animation:pr-glow 2s ease-in-out infinite;
        }
        .pr-h1 {
          font-size:clamp(2rem,5vw,3.6rem); font-weight:800;
          color:#fff; line-height:1.08; margin-bottom:16px;
          animation:pr-fadeUp .6s .1s ease both;
        }
        .pr-h1 span {
          background:linear-gradient(130deg,#c084fc,#818cf8,#67e8f9);
          background-size:200% 200%;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          animation:pr-gradShift 5s ease infinite;
        }
        .pr-subtitle {
          font-family:'JetBrains Mono',monospace; font-size:.86rem;
          color:rgba(255,255,255,.38); max-width:520px; margin:0 auto 40px; line-height:1.75;
          animation:pr-fadeUp .6s .2s ease both;
        }

        /* Stats */
        .pr-stats {
          display:flex; justify-content:center; gap:0;
          background:rgba(13,15,29,.6); border:1px solid rgba(192,132,252,.1);
          border-radius:14px; overflow:hidden;
          max-width:680px; margin:0 auto 48px;
          animation:pr-fadeUp .6s .3s ease both;
        }
        .pr-stat {
          flex:1; padding:18px 10px; text-align:center;
          border-right:1px solid rgba(255,255,255,.05);
          transition:background .2s; cursor:default;
        }
        .pr-stat:last-child{border-right:none;}
        .pr-stat:hover{background:rgba(192,132,252,.06);}
        .pr-stat-val {
          font-size:1.5rem; font-weight:800; line-height:1;
          background:linear-gradient(130deg,#c084fc,#818cf8);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          font-family:'Outfit',sans-serif;
        }
        .pr-stat-lbl {
          font-family:'JetBrains Mono',monospace; font-size:.6rem;
          color:rgba(255,255,255,.28); margin-top:5px;
          letter-spacing:.06em; text-transform:uppercase;
        }

        /* Filtres */
        .pr-filters {
          display:flex; flex-wrap:wrap; justify-content:center;
          gap:10px; margin-bottom:48px;
          animation:pr-fadeUp .6s .35s ease both;
        }
        .pr-filter {
          padding:8px 20px; border-radius:100px;
          font-family:'JetBrains Mono',monospace; font-size:.74rem;
          letter-spacing:.1em; cursor:pointer; border:1px solid;
          transition:all .22s; background:none;
        }

        /* Grid */
        .pr-inner {
          max-width:1200px; margin:0 auto;
          padding:0 40px 64px; position:relative; z-index:2;
        }
        @media(max-width:768px){.pr-inner{padding:0 24px 48px;}}
        .pr-grid {
          display:grid;
          grid-template-columns:repeat(auto-fill,minmax(320px,1fr));
          gap:24px;
        }
        @media(max-width:700px){.pr-grid{grid-template-columns:1fr;}}
        .pr-empty {
          grid-column:1/-1; text-align:center; padding:60px 20px;
          font-family:'JetBrains Mono',monospace; font-size:.88rem;
          color:rgba(255,255,255,.25);
        }

        /* CTA GitHub */
        .pr-github-cta {
          max-width:1200px; margin:0 auto;
          padding:0 40px 100px; position:relative; z-index:2;
        }
        @media(max-width:768px){.pr-github-cta{padding:0 24px 64px;}}
        .pr-cta-inner {
          background:rgba(13,15,29,.7); border:1px solid rgba(192,132,252,.15);
          border-radius:20px; padding:40px 48px;
          display:flex; align-items:center; justify-content:space-between;
          gap:24px; flex-wrap:wrap; position:relative; overflow:hidden;
          transition:border-color .3s, box-shadow .3s;
        }
        @media(max-width:600px){.pr-cta-inner{padding:28px 24px;}}
        .pr-cta-inner:hover{
          border-color:rgba(192,132,252,.3);
          box-shadow:0 16px 48px rgba(192,132,252,.1);
        }
        .pr-cta-inner::before {
          content:''; position:absolute; top:0; left:0; right:0; height:1.5px;
          background:linear-gradient(90deg,transparent,#c084fc,#818cf8,#67e8f9,transparent);
          background-size:300% 100%; animation:pr-gradBar 4s linear infinite;
        }
        .pr-cta-inner::after {
          content:''; position:absolute; right:-60px; top:-60px;
          width:200px; height:200px; border-radius:50%;
          background:radial-gradient(circle,rgba(192,132,252,.07) 0%,transparent 70%);
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
          font-family:'JetBrains Mono',monospace; font-size:.8rem;
          color:rgba(255,255,255,.35); line-height:1.6;
        }
        .pr-cta-btn {
          display:inline-flex; align-items:center; gap:10px;
          padding:13px 28px; border-radius:10px;
          background:linear-gradient(135deg,#c084fc,#818cf8);
          color:#07080f; font-family:'Outfit',sans-serif; font-weight:700;
          font-size:.9rem; text-decoration:none;
          transition:all .25s; white-space:nowrap; flex-shrink:0;
        }
        .pr-cta-btn:hover{
          transform:translateY(-3px);
          box-shadow:0 12px 36px rgba(192,132,252,.3); color:#07080f;
        }
        .pr-cta-btn svg{font-size:1.2rem;}
      `}</style>

            <div className="pr-page">
                <Particle />

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
                            <button key={f} className="pr-filter"
                                    style={{
                                        borderColor: activeFilter===f ? "#c084fc" : "rgba(255,255,255,.1)",
                                        color:        activeFilter===f ? "#c084fc" : "rgba(255,255,255,.4)",
                                        background:   activeFilter===f ? "rgba(192,132,252,.1)" : "transparent",
                                    }}
                                    onClick={() => setActiveFilter(f)}
                            >{f}</button>
                        ))}
                    </div>
                </div>

                <div className="pr-inner">
                    <div className="pr-grid">
                        {filtered.length === 0 ? (
                            <div className="pr-empty">{'// Aucun projet dans cette catégorie'}</div>
                        ) : (
                            filtered.map((p, i) => (
                                <div key={p.id} style={{ animationDelay:`${i * .1}s` }}>
                                    <ProjectCard
                                        placeholder={p.placeholder}
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

                <div className="pr-github-cta">
                    <div className="pr-cta-inner">
                        <div>
                            <div className="pr-cta-title">Plus de projets sur <span>GitHub</span></div>
                            <p className="pr-cta-sub">
                                Retrouvez l'ensemble de mes dépôts, contributions<br />
                                et expérimentations open source.
                            </p>
                        </div>
                        <a href="https://github.com/DIOP18" target="_blank" rel="noreferrer" className="pr-cta-btn">
                            <BsGithub /> Voir mon GitHub
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;