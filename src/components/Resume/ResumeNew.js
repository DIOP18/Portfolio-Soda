import React, { useState, useEffect } from "react";
import Particle from "../Particle";
import pdf from "../../Assets/DIOP SODA DIOP.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { BsEye, BsFileEarmarkPdf } from "react-icons/bs";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { MdOutlineWorkOutline, MdOutlineSecurity } from "react-icons/md";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

/* ── Highlights rapides du CV ─────────────────────────────── */
const highlights = [
  {
    icon: <HiOutlineAcademicCap />,
    color: "#c084fc",
    title: "Formation",
    items: ["Licence Génie Logiciel — Mention Excellent"],
  },
  {
    icon: <MdOutlineSecurity />,
    color: "#818cf8",
    title: "Spécialités",
    items: ["Architecture logicielle & APIs REST", "Développement Full-Stack sécurisé"],
  },
  {
    icon: <MdOutlineWorkOutline />,
    color: "#67e8f9",
    title: "Stack principale",
    items: ["Laravel · Angular · Flutter", "C# · JavaFX · MySQL", "Python · Git · Docker · Linux"],
  },
];

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [pdfLoaded, setPdfLoaded] = useState(false);
  const [activeHighlight, setActiveHighlight] = useState(null);

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const pdfScale = width > 1100 ? 1.7 : width > 786 ? 1.2 : width > 480 ? 0.85 : 0.55;

  return (
      <>
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800&family=JetBrains+Mono:wght@300;400&display=swap');

        :root {
          --p1:#c084fc; --p2:#818cf8; --p3:#67e8f9;
          --bg:#07080f; --bg2:#0d0f1d;
        }

        @keyframes rv-fadeUp    { from{opacity:0;transform:translateY(28px);} to{opacity:1;transform:translateY(0);} }
        @keyframes rv-gradShift { 0%{background-position:0% 50%;} 50%{background-position:100% 50%;} 100%{background-position:0% 50%;} }
        @keyframes rv-gradBar   { 0%{background-position:0%;} 100%{background-position:200%;} }
        @keyframes rv-glow      { 0%,100%{box-shadow:0 0 14px rgba(192,132,252,.3);} 50%{box-shadow:0 0 28px rgba(192,132,252,.65);} }
        @keyframes rv-scanLine  { 0%{top:0;} 100%{top:100%;} }
        @keyframes rv-pulse     { 0%,100%{transform:scale(1);opacity:.5;} 100%{transform:scale(2);opacity:0;} }
        @keyframes rv-shimmer   {
          0%  { background-position:-400px 0; }
          100%{ background-position: 400px 0; }
        }

        /* ── Page ── */
        .rv-page {
          background:var(--bg); min-height:100vh; padding-top:88px;
          font-family:'Outfit', sans-serif; position:relative; overflow:hidden;
        }
        .rv-page::before {
          content:''; position:absolute; top:-150px; right:-150px;
          width:500px; height:500px; border-radius:50%;
          background:radial-gradient(circle, rgba(192,132,252,.08) 0%, transparent 65%);
          pointer-events:none;
        }

        /* ── Header ── */
        .rv-header {
          max-width:1100px; margin:0 auto;
          padding:56px 40px 48px; text-align:center;
          position:relative; z-index:2;
        }
        @media(max-width:768px){ .rv-header{padding:36px 20px 32px;} }

        .rv-label {
          display:inline-flex; align-items:center; gap:10px;
          background:rgba(192,132,252,.07);
          border:1px solid rgba(192,132,252,.22);
          border-radius:100px; padding:6px 18px;
          color:var(--p1); font-size:.76rem;
          letter-spacing:.15em; text-transform:uppercase;
          font-family:'JetBrains Mono', monospace;
          margin-bottom:20px;
          animation: rv-fadeUp .6s ease both;
        }
        .rv-label-dot {
          width:7px; height:7px; border-radius:50%; background:var(--p1);
          animation: rv-glow 2s ease-in-out infinite;
        }
        .rv-h1 {
          font-size:clamp(1.9rem,4.5vw,3.2rem); font-weight:800;
          color:#fff; line-height:1.1; margin-bottom:14px;
          animation: rv-fadeUp .6s .1s ease both;
        }
        .rv-h1 span {
          background:linear-gradient(130deg,var(--p1),var(--p2),var(--p3));
          background-size:200% 200%;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          animation: rv-gradShift 5s ease infinite;
        }
        .rv-sub {
          font-family:'JetBrains Mono', monospace; font-size:.84rem;
          color:rgba(255,255,255,.36); margin-bottom:36px; line-height:1.7;
          animation: rv-fadeUp .6s .2s ease both;
        }

        /* ── CTA buttons ── */
        .rv-cta-row {
          display:flex; justify-content:center; gap:14px; flex-wrap:wrap;
          margin-bottom:0;
          animation: rv-fadeUp .6s .3s ease both;
        }
        .rv-btn-main {
          display:inline-flex; align-items:center; gap:9px;
          padding:13px 28px; border-radius:10px;
          background:linear-gradient(135deg,var(--p1),var(--p2));
          color:#07080f; font-family:'Outfit', sans-serif; font-weight:700;
          font-size:.9rem; text-decoration:none; border:none;
          transition:all .25s; cursor:pointer;
        }
        .rv-btn-main:hover {
          transform:translateY(-3px);
          box-shadow:0 14px 40px rgba(192,132,252,.32);
          color:#07080f;
        }
        .rv-btn-main svg{ font-size:1.1rem; }
        .rv-btn-outline {
          display:inline-flex; align-items:center; gap:9px;
          padding:13px 28px; border-radius:10px;
          background:transparent;
          border:1px solid rgba(192,132,252,.28);
          color:rgba(255,255,255,.65); font-family:'Outfit', sans-serif; font-weight:600;
          font-size:.9rem; text-decoration:none;
          transition:all .25s;
        }
        .rv-btn-outline:hover {
          border-color:var(--p1); color:var(--p1);
          transform:translateY(-3px);
          box-shadow:0 8px 24px rgba(192,132,252,.15);
        }
        .rv-btn-outline svg{ font-size:1.1rem; }

        /* ── Highlights cards ── */
        .rv-highlights {
          max-width:1100px; margin:52px auto 0;
          padding:0 40px;
          display:grid; grid-template-columns:repeat(3,1fr); gap:18px;
          position:relative; z-index:2;
          animation: rv-fadeUp .6s .4s ease both;
        }
        @media(max-width:820px){ .rv-highlights{grid-template-columns:1fr; padding:0 20px;} }

        .rv-hl-card {
          background:rgba(13,15,29,.72);
          border:1px solid rgba(255,255,255,.07);
          border-radius:16px; padding:22px 20px;
          cursor:default; transition:all .25s;
          position:relative; overflow:hidden;
        }
        .rv-hl-card.active,
        .rv-hl-card:hover {
          transform:translateY(-4px);
        }
        .rv-hl-card::before {
          content:''; position:absolute; top:0; left:0; right:0; height:2px;
          opacity:0; transition:opacity .3s;
          background:linear-gradient(90deg,var(--p1),var(--p2),var(--p3));
        }
        .rv-hl-card.active::before,
        .rv-hl-card:hover::before { opacity:1; }

        .rv-hl-icon {
          font-size:1.5rem; margin-bottom:12px;
          display:flex; align-items:center;
          transition:filter .25s;
        }
        .rv-hl-title {
          font-size:.72rem; letter-spacing:.18em; text-transform:uppercase;
          font-family:'JetBrains Mono', monospace;
          margin-bottom:12px;
        }
        .rv-hl-items {
          list-style:none; margin:0; padding:0;
          display:flex; flex-direction:column; gap:7px;
        }
        .rv-hl-item {
          display:flex; align-items:flex-start; gap:8px;
          font-family:'JetBrains Mono', monospace; font-size:.75rem;
          color:rgba(255,255,255,.45); line-height:1.5;
        }
        .rv-hl-item-dot {
          width:5px; height:5px; border-radius:50%;
          flex-shrink:0; margin-top:5px;
        }

        /* ── Divider ── */
        .rv-divider {
          max-width:1100px; margin:52px auto;
          height:1px;
          background:linear-gradient(90deg, transparent, rgba(192,132,252,.18), rgba(103,232,249,.12), transparent);
        }

        /* ── PDF viewer ── */
        .rv-pdf-section {
          max-width:1100px; margin:0 auto;
          padding:0 40px 80px;
          position:relative; z-index:2;
        }
        @media(max-width:768px){ .rv-pdf-section{padding:0 16px 60px;} }

        .rv-pdf-label {
          display:flex; align-items:center; gap:10px;
          font-family:'JetBrains Mono', monospace; font-size:.72rem;
          letter-spacing:.15em; text-transform:uppercase;
          color:rgba(255,255,255,.25); margin-bottom:20px;
          justify-content:center;
        }
        .rv-pdf-label-line {
          flex:1; height:1px; max-width:120px;
          background:rgba(255,255,255,.07);
        }

        .rv-pdf-frame {
          position:relative;
          background:rgba(13,15,29,.8);
          border:1px solid rgba(192,132,252,.15);
          border-radius:20px; overflow:hidden;
          transition:border-color .3s, box-shadow .3s;
        }
        .rv-pdf-frame:hover {
          border-color:rgba(192,132,252,.28);
          box-shadow:0 20px 60px rgba(192,132,252,.1);
        }
        /* Gradient top line */
        .rv-pdf-frame::before {
          content:''; position:absolute; top:0; left:0; right:0; height:2px;
          background:linear-gradient(90deg, transparent, var(--p1), var(--p2), var(--p3), transparent);
          background-size:300% 100%;
          animation: rv-gradBar 5s linear infinite;
          z-index:3;
        }

        /* Toolbar inside frame */
        .rv-pdf-toolbar {
          display:flex; align-items:center; justify-content:space-between;
          padding:14px 20px;
          border-bottom:1px solid rgba(255,255,255,.06);
          background:rgba(7,8,15,.6);
        }
        .rv-pdf-toolbar-left {
          display:flex; align-items:center; gap:8px;
        }
        .rv-pdf-toolbar-dot {
          width:10px; height:10px; border-radius:50%;
        }
        .rv-pdf-toolbar-title {
          font-family:'JetBrains Mono', monospace; font-size:.72rem;
          color:rgba(255,255,255,.3); letter-spacing:.08em;
          margin-left:8px;
        }
        .rv-pdf-toolbar-btn {
          display:inline-flex; align-items:center; gap:7px;
          padding:7px 16px; border-radius:8px;
          background:rgba(192,132,252,.1); border:1px solid rgba(192,132,252,.25);
          color:#c084fc; text-decoration:none;
          font-family:'JetBrains Mono', monospace; font-size:.72rem;
          transition:all .22s;
        }
        .rv-pdf-toolbar-btn:hover {
          background:rgba(192,132,252,.2); color:#c084fc;
          transform:translateY(-1px);
        }

        /* PDF canvas area */
        .rv-pdf-canvas {
          display:flex; justify-content:center;
          padding:32px 20px 28px;
          min-height:300px; position:relative;
        }

        /* Loading shimmer */
        .rv-pdf-loading {
          position:absolute; inset:0;
          display:flex; flex-direction:column;
          align-items:center; justify-content:center; gap:16px;
          background:rgba(13,15,29,.9);
          z-index:2;
          transition:opacity .4s;
        }
        .rv-pdf-loading.hidden { opacity:0; pointer-events:none; }
        .rv-shimmer-bar {
          height:12px; border-radius:6px; background:#1a1d2e;
          background-image:linear-gradient(90deg, #1a1d2e 0px, rgba(192,132,252,.12) 200px, #1a1d2e 400px);
          background-size:400px 100%;
          animation: rv-shimmer 1.4s ease infinite;
        }
        .rv-pdf-loading-txt {
          font-family:'JetBrains Mono', monospace; font-size:.72rem;
          color:rgba(255,255,255,.25); letter-spacing:.1em;
        }

        /* Scan line on PDF */
        .rv-pdf-scan {
          position:absolute; left:0; right:0; height:1px;
          background:linear-gradient(90deg, transparent, rgba(192,132,252,.3), transparent);
          animation: rv-scanLine 4s linear infinite;
          pointer-events:none; z-index:1;
        }

        /* react-pdf override */
        .rv-pdf-canvas .react-pdf__Page__canvas {
          border-radius:4px;
          box-shadow:0 8px 40px rgba(0,0,0,.5);
        }
        .rv-pdf-canvas .react-pdf__Document {
          display:flex; justify-content:center;
        }
      `}</style>

        <div className="rv-page">
          <Particle />

          {/* ── Header ── */}
          <div className="rv-header">
            <div className="rv-label">
              <span className="rv-label-dot" /> Curriculum Vitæ
            </div>
            <h1 className="rv-h1">Mon <span>CV Professionnel</span></h1>
            <p className="rv-sub">
              Développeuse Full-Stack ·<br />
              Disponible pour de nouvelles opportunités
            </p>

            <div className="rv-cta-row">
              <a href={pdf} target="_blank" rel="noreferrer" className="rv-btn-main">
                <AiOutlineDownload /> Télécharger le CV
              </a>
              <a href={pdf} target="_blank" rel="noreferrer" className="rv-btn-outline">
                <BsEye /> Voir en plein écran
              </a>
            </div>
          </div>

          {/* ── Highlights ── */}
          <div className="rv-highlights">
            {highlights.map((h, i) => (
                <div
                    key={h.title}
                    className={`rv-hl-card ${activeHighlight === i ? "active" : ""}`}
                    style={{
                      borderColor: activeHighlight === i ? h.color + "55" : "rgba(255,255,255,.07)",
                      boxShadow:   activeHighlight === i ? `0 12px 36px ${h.color}18` : "none",
                      animationDelay:`${.4 + i * .1}s`,
                    }}
                    onMouseEnter={() => setActiveHighlight(i)}
                    onMouseLeave={() => setActiveHighlight(null)}
                >
                  <div className="rv-hl-icon" style={{ color: h.color, filter: activeHighlight === i ? `drop-shadow(0 0 8px ${h.color}80)` : "none" }}>
                    {h.icon}
                  </div>
                  <div className="rv-hl-title" style={{ color: h.color }}>{h.title}</div>
                  <ul className="rv-hl-items">
                    {h.items.map(item => (
                        <li key={item} className="rv-hl-item">
                          <span className="rv-hl-item-dot" style={{ background: h.color }} />
                          {item}
                        </li>
                    ))}
                  </ul>
                </div>
            ))}
          </div>

          {/* ── Divider ── */}
          <div className="rv-divider" />

          {/* ── PDF Viewer ── */}
          <div className="rv-pdf-section">
            <div className="rv-pdf-label">
              <div className="rv-pdf-label-line" />
              <BsFileEarmarkPdf style={{ color:"#c084fc" }} />
              <span>Aperçu du document</span>
              <div className="rv-pdf-label-line" />
            </div>

            <div className="rv-pdf-frame">
              {/* Toolbar */}
              <div className="rv-pdf-toolbar">
                <div className="rv-pdf-toolbar-left">
                  <div className="rv-pdf-toolbar-dot" style={{ background:"#c084fc" }} />
                  <div className="rv-pdf-toolbar-dot" style={{ background:"#818cf8" }} />
                  <div className="rv-pdf-toolbar-dot" style={{ background:"#67e8f9" }} />
                  <span className="rv-pdf-toolbar-title">DIOP_SODA_CV.pdf</span>
                </div>
                <a href={pdf} target="_blank" rel="noreferrer" className="rv-pdf-toolbar-btn">
                  <AiOutlineDownload /> Télécharger
                </a>
              </div>

              {/* PDF canvas */}
              <div className="rv-pdf-canvas">
                <div className="rv-pdf-scan" />

                {/* Loading overlay */}
                <div className={`rv-pdf-loading ${pdfLoaded ? "hidden" : ""}`}>
                  <BsFileEarmarkPdf style={{ fontSize:"2.5rem", color:"rgba(192,132,252,.4)" }} />
                  <div style={{ display:"flex", flexDirection:"column", gap:"8px", width:"240px" }}>
                    {[100, 75, 88, 60].map((w, i) => (
                        <div key={i} className="rv-shimmer-bar" style={{ width:`${w}%`, animationDelay:`${i * 0.15}s` }} />
                    ))}
                  </div>
                  <span className="rv-pdf-loading-txt">Chargement du CV…</span>
                </div>

                <Document
                    file={pdf}
                    onLoadSuccess={() => setPdfLoaded(true)}
                    className="d-flex justify-content-center"
                >
                  <Page
                      pageNumber={1}
                      scale={pdfScale}
                      renderAnnotationLayer={false}
                      renderTextLayer={false}
                  />
                </Document>
              </div>
            </div>

            {/* Bottom CTA */}
            <div style={{ display:"flex", justifyContent:"center", marginTop:"36px" }}>
              <a href={pdf} target="_blank" rel="noreferrer" className="rv-btn-main">
                <AiOutlineDownload /> Télécharger le CV
              </a>
            </div>
          </div>
        </div>
      </>
  );
}

export default ResumeNew;