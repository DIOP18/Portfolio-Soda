import React, { useState, useRef } from "react";
import Particle from "../Particle";
import emailjs from "@emailjs/browser";
import {
    AiOutlineMail, AiOutlineCheckCircle, AiOutlineCloseCircle,
} from "react-icons/ai";
import { FiPhone, FiSend, FiLoader } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub, BsGeoAlt } from "react-icons/bs";
import { MdOutlineAccessTime } from "react-icons/md";

/* ────────────────────────────────────────────────────────────
   CONFIGURATION EMAILJS
   1. Crée un compte sur https://www.emailjs.com (gratuit)
   2. Add Email Service  →  copie le SERVICE_ID
   3. Email Templates    →  crée un template, copie le TEMPLATE_ID
      Variables à mettre dans le template :
        {{from_name}}   — nom de l'expéditeur
        {{from_email}}  — email de l'expéditeur
        {{subject}}     — sujet
        {{message}}     — message
        {{to_name}}     — Soda DIOP  (valeur fixe dans le template)
   4. Account > API Keys →  copie le PUBLIC_KEY
   ──────────────────────────────────────────────────────────── */
const EMAILJS_SERVICE_ID  = "service_nqimweg";
const EMAILJS_TEMPLATE_ID = "template_bivwf14";
const EMAILJS_PUBLIC_KEY  = "fsbfyb5sS4t0GX3ZC";

/* Info contact */
const contactInfo = [
    {
        icon: <AiOutlineMail />,
        label: "Email",
        value: "diopsoda1812@gmail.com",
        href: "mailto:diopsoda1812@gmail.com",
        color: "#c084fc",
    },
    {
        icon: <FiPhone />,
        label: "Téléphone",
        value: "+221 78 529 36 32",
        href: "tel:+221785293632",
        color: "#818cf8",
    },
    {
        icon: <BsGeoAlt />,
        label: "Localisation",
        value: "Dakar, Sénégal",
        href: null,
        color: "#67e8f9",
    },
    {
        icon: <MdOutlineAccessTime />,
        label: "Disponibilité",
        value: "Ouverte aux opportunités",
        href: null,
        color: "#a8e6cf",
    },
];

const socialLinks = [
    {
        icon: <BsGithub />,
        label: "GitHub",
        href: "https://github.com/DIOP18",
        color: "#c084fc",
    },
    {
        icon: <FaLinkedinIn />,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/soda-diop-1a0235282/",
        color: "#818cf8",
    },
    {
        icon: <AiOutlineMail />,
        label: "Email",
        href: "mailto:diopsoda1812@gmail.com",
        color: "#67e8f9",
    },
];

const subjects = [
    "Proposition de stage",
    "Offre d'emploi (CDI/CDD)",
    "Collaboration freelance",
    "Question technique",
    "Autre",
];

/* ── Composant principal ────────────────────────────────── */
function Contact() {
    const formRef = useRef(null);

    const [form, setForm] = useState({
        from_name: "",
        from_email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState("idle"); // idle | sending | success | error
    const [errors, setErrors] = useState({});
    const [focusedField, setFocusedField] = useState(null);
    const [charCount, setCharCount] = useState(0);

    /* Validation */
    const validate = () => {
        const e = {};
        if (!form.from_name.trim())   e.from_name  = "Votre nom est requis";
        if (!form.from_email.trim())  e.from_email = "Votre email est requis";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.from_email))
            e.from_email = "Format email invalide";
        if (!form.subject)            e.subject    = "Choisissez un sujet";
        if (!form.message.trim())     e.message    = "Le message est requis";
        else if (form.message.trim().length < 20)
            e.message = "Message trop court (min. 20 caractères)";
        return e;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(f => ({ ...f, [name]: value }));
        if (name === "message") setCharCount(value.length);
        if (errors[name]) setErrors(er => ({ ...er, [name]: null }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) { setErrors(errs); return; }

        setStatus("sending");
        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_PUBLIC_KEY
            );
            setStatus("success");
            setForm({ from_name:"", from_email:"", subject:"", message:"" });
            setCharCount(0);
        } catch {
            setStatus("error");
        }
    };

    const resetStatus = () => setStatus("idle");

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800&family=JetBrains+Mono:wght@300;400&display=swap');

        :root {
          --p1:#c084fc; --p2:#818cf8; --p3:#67e8f9;
          --bg:#07080f; --bg2:#0d0f1d;
        }

        @keyframes ct-fadeUp    { from{opacity:0;transform:translateY(28px);} to{opacity:1;transform:translateY(0);} }
        @keyframes ct-revL      { from{opacity:0;transform:translateX(-28px);} to{opacity:1;transform:translateX(0);} }
        @keyframes ct-revR      { from{opacity:0;transform:translateX(28px);} to{opacity:1;transform:translateX(0);} }
        @keyframes ct-gradShift { 0%{background-position:0% 50%;} 50%{background-position:100% 50%;} 100%{background-position:0% 50%;} }
        @keyframes ct-gradBar   { 0%{background-position:0%;} 100%{background-position:200%;} }
        @keyframes ct-glow      { 0%,100%{box-shadow:0 0 14px rgba(192,132,252,.3);} 50%{box-shadow:0 0 28px rgba(192,132,252,.65);} }
        @keyframes ct-spin      { to{transform:rotate(360deg);} }
        @keyframes ct-popIn     { from{opacity:0;transform:scale(.85);} to{opacity:1;transform:scale(1);} }
        @keyframes ct-shake     { 0%,100%{transform:translateX(0);} 20%,60%{transform:translateX(-6px);} 40%,80%{transform:translateX(6px);} }

        /* ── Page ── */
        .ct-page {
          background:var(--bg); min-height:100vh; padding-top:88px;
          font-family:'Outfit',sans-serif; position:relative; overflow:hidden;
        }
        .ct-page::before {
          content:''; position:absolute; top:-150px; right:-150px;
          width:500px; height:500px; border-radius:50%;
          background:radial-gradient(circle,rgba(192,132,252,.08) 0%,transparent 65%);
          pointer-events:none;
        }
        .ct-page::after {
          content:''; position:absolute; bottom:-100px; left:-100px;
          width:400px; height:400px; border-radius:50%;
          background:radial-gradient(circle,rgba(103,232,249,.05) 0%,transparent 65%);
          pointer-events:none;
        }

        /* ── Header ── */
        .ct-header {
          max-width:1100px; margin:0 auto;
          padding:56px 40px 52px; text-align:center;
          position:relative; z-index:2;
        }
        @media(max-width:768px){.ct-header{padding:36px 20px 40px;}}

        .ct-label {
          display:inline-flex; align-items:center; gap:10px;
          background:rgba(192,132,252,.07); border:1px solid rgba(192,132,252,.22);
          border-radius:100px; padding:6px 18px; color:#c084fc; font-size:.76rem;
          letter-spacing:.15em; text-transform:uppercase;
          font-family:'JetBrains Mono',monospace; margin-bottom:20px;
          animation:ct-fadeUp .6s ease both;
        }
        .ct-dot {
          width:7px; height:7px; border-radius:50%; background:#c084fc;
          animation:ct-glow 2s ease-in-out infinite;
        }
        .ct-h1 {
          font-size:clamp(2rem,5vw,3.4rem); font-weight:800;
          color:#fff; line-height:1.08; margin-bottom:14px;
          animation:ct-fadeUp .6s .1s ease both;
        }
        .ct-h1 span {
          background:linear-gradient(130deg,#c084fc,#818cf8,#67e8f9);
          background-size:200% 200%;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          animation:ct-gradShift 5s ease infinite;
        }
        .ct-sub {
          font-family:'JetBrains Mono',monospace; font-size:.84rem;
          color:rgba(255,255,255,.36); max-width:480px; margin:0 auto;
          line-height:1.75; animation:ct-fadeUp .6s .2s ease both;
        }

        /* ── Layout ── */
        .ct-body {
          max-width:1100px; margin:0 auto;
          padding:0 40px 100px;
          display:grid; grid-template-columns:340px 1fr;
          gap:32px; align-items:start;
          position:relative; z-index:2;
        }
        @media(max-width:900px){
          .ct-body{grid-template-columns:1fr; padding:0 20px 80px;}
        }

        /* ── LEFT: Infos ── */
        .ct-left { animation:ct-revL .7s .3s ease both; }

        .ct-info-card {
          background:rgba(13,15,29,.75);
          border:1px solid rgba(192,132,252,.12);
          border-radius:18px; padding:28px 24px;
          margin-bottom:16px;
          position:relative; overflow:hidden;
          transition:border-color .3s;
        }
        .ct-info-card::before {
          content:''; position:absolute; top:0; left:0; right:0; height:1.5px;
          background:linear-gradient(90deg,transparent,#c084fc,#818cf8,#67e8f9,transparent);
          background-size:300% 100%; animation:ct-gradBar 5s linear infinite;
        }
        .ct-info-card:hover { border-color:rgba(192,132,252,.28); }

        .ct-info-title {
          font-family:'JetBrains Mono',monospace; font-size:.7rem;
          letter-spacing:.2em; text-transform:uppercase;
          color:rgba(255,255,255,.28); margin-bottom:20px;
        }

        .ct-info-list { display:flex; flex-direction:column; gap:14px; }
        .ct-info-item {
          display:flex; align-items:flex-start; gap:12px;
          text-decoration:none; transition:all .2s;
          border-radius:10px; padding:10px 12px; margin:-10px -12px;
        }
        .ct-info-item:hover { background:rgba(255,255,255,.03); }
        .ct-info-icon {
          width:36px; height:36px; border-radius:9px;
          display:flex; align-items:center; justify-content:center;
          font-size:1rem; flex-shrink:0; border:1px solid;
          transition:all .2s;
        }
        .ct-info-item:hover .ct-info-icon { transform:scale(1.08); }
        .ct-info-lbl {
          font-family:'JetBrains Mono',monospace; font-size:.65rem;
          letter-spacing:.12em; text-transform:uppercase;
          color:rgba(255,255,255,.28); margin-bottom:3px;
        }
        .ct-info-val {
          font-size:.88rem; font-weight:600; color:rgba(255,255,255,.65);
          transition:color .2s;
        }
        .ct-info-item:hover .ct-info-val { color:#fff; }

        /* Social */
        .ct-social-card {
          background:rgba(13,15,29,.75);
          border:1px solid rgba(192,132,252,.12);
          border-radius:18px; padding:22px 24px;
        }
        .ct-social-title {
          font-family:'JetBrains Mono',monospace; font-size:.7rem;
          letter-spacing:.2em; text-transform:uppercase;
          color:rgba(255,255,255,.28); margin-bottom:16px;
        }
        .ct-socials { display:flex; gap:10px; }
        .ct-social-btn {
          flex:1; display:flex; align-items:center; justify-content:center; gap:8px;
          padding:10px 14px; border-radius:10px;
          border:1px solid rgba(255,255,255,.08);
          background:rgba(255,255,255,.02);
          text-decoration:none; font-size:.82rem; font-weight:600;
          color:rgba(255,255,255,.45); transition:all .22s;
          font-family:'Outfit',sans-serif;
        }
        .ct-social-btn svg { font-size:1.05rem; }
        .ct-social-btn:hover { transform:translateY(-3px); }

        /* Status badge */
        .ct-status-badge {
          display:flex; align-items:center; gap:10px;
          background:rgba(13,15,29,.75); border:1px solid rgba(168,230,207,.2);
          border-radius:14px; padding:14px 18px; margin-top:16px;
        }
        .ct-status-pulse {
          width:9px; height:9px; border-radius:50%; background:#a8e6cf;
          box-shadow:0 0 0 0 rgba(168,230,207,.4);
          animation:ct-glow 2s ease-in-out infinite;
          flex-shrink:0;
        }
        .ct-status-txt {
          font-family:'JetBrains Mono',monospace; font-size:.76rem;
          color:rgba(168,230,207,.8); line-height:1.4;
        }
        .ct-status-txt strong { color:#a8e6cf; display:block; font-size:.8rem; }

        /* ── RIGHT: Formulaire ── */
        .ct-right { animation:ct-revR .7s .3s ease both; }

        .ct-form-card {
          background:rgba(13,15,29,.75);
          border:1px solid rgba(192,132,252,.12);
          border-radius:18px; padding:36px 32px;
          position:relative; overflow:hidden;
          transition:border-color .3s, box-shadow .3s;
        }
        @media(max-width:600px){.ct-form-card{padding:24px 18px;}}
        .ct-form-card::before {
          content:''; position:absolute; top:0; left:0; right:0; height:1.5px;
          background:linear-gradient(90deg,transparent,#c084fc,#818cf8,#67e8f9,transparent);
          background-size:300% 100%; animation:ct-gradBar 5s linear infinite;
        }
        .ct-form-card:focus-within {
          border-color:rgba(192,132,252,.28);
          box-shadow:0 20px 60px rgba(192,132,252,.08);
        }

        .ct-form-title {
          font-size:1.25rem; font-weight:800; color:#fff;
          margin-bottom:6px;
        }
        .ct-form-subtitle {
          font-family:'JetBrains Mono',monospace; font-size:.78rem;
          color:rgba(255,255,255,.32); margin-bottom:28px; line-height:1.6;
        }

        /* Field */
        .ct-field { margin-bottom:20px; }
        .ct-row-2 {
          display:grid; grid-template-columns:1fr 1fr; gap:16px;
        }
        @media(max-width:600px){.ct-row-2{grid-template-columns:1fr;}}

        .ct-label-txt {
          display:block; font-family:'JetBrains Mono',monospace;
          font-size:.7rem; letter-spacing:.15em; text-transform:uppercase;
          color:rgba(255,255,255,.35); margin-bottom:8px;
          transition:color .2s;
        }
        .ct-field.focused .ct-label-txt { color:var(--p1); }
        .ct-field.has-error .ct-label-txt { color:#f87171; }

        .ct-input, .ct-select, .ct-textarea {
          width:100%; padding:12px 16px;
          background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.1);
          border-radius:10px; color:#fff; outline:none;
          font-family:'Outfit',sans-serif; font-size:.9rem;
          transition:border-color .22s, background .22s, box-shadow .22s;
          resize:none;
        }
        .ct-input::placeholder, .ct-textarea::placeholder {
          color:rgba(255,255,255,.2);
        }
        .ct-input:focus, .ct-select:focus, .ct-textarea:focus {
          border-color:rgba(192,132,252,.5);
          background:rgba(192,132,252,.04);
          box-shadow:0 0 0 3px rgba(192,132,252,.1);
        }
        .ct-select {
          appearance:none; cursor:pointer;
          background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='rgba(192,132,252,0.6)'%3E%3Cpath d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'/%3E%3C/svg%3E");
          background-repeat:no-repeat; background-position:right 14px center;
          background-size:20px;
          padding-right:40px;
        }
        .ct-select option { background:#0d0f1d; color:#fff; }
        .ct-textarea { min-height:140px; }

        /* Error msg */
        .ct-error {
          font-family:'JetBrains Mono',monospace; font-size:.7rem;
          color:#f87171; margin-top:6px;
          display:flex; align-items:center; gap:5px;
          animation:ct-popIn .25s ease both;
        }
        .ct-field.has-error .ct-input,
        .ct-field.has-error .ct-select,
        .ct-field.has-error .ct-textarea {
          border-color:rgba(248,113,113,.4);
          animation:ct-shake .4s ease;
        }

        /* Char counter */
        .ct-char {
          font-family:'JetBrains Mono',monospace; font-size:.68rem;
          color:rgba(255,255,255,.22); text-align:right; margin-top:5px;
        }

        /* Submit button */
        .ct-submit {
          width:100%; padding:14px 24px; border-radius:10px;
          background:linear-gradient(135deg,#c084fc,#818cf8);
          border:none; color:#07080f;
          font-family:'Outfit',sans-serif; font-weight:700; font-size:.95rem;
          cursor:pointer; display:flex; align-items:center; justify-content:center; gap:10px;
          transition:all .25s; margin-top:8px; position:relative; overflow:hidden;
        }
        .ct-submit::before {
          content:''; position:absolute; inset:0;
          background:linear-gradient(135deg,#818cf8,#c084fc);
          opacity:0; transition:opacity .3s;
        }
        .ct-submit:hover::before { opacity:1; }
        .ct-submit:hover { transform:translateY(-2px); box-shadow:0 14px 40px rgba(192,132,252,.32); }
        .ct-submit:disabled { opacity:.6; cursor:not-allowed; transform:none; }
        .ct-submit span { position:relative; z-index:1; display:flex; align-items:center; gap:10px; }
        .ct-spinner { animation:ct-spin 1s linear infinite; font-size:1.1rem; }

        /* Success / Error overlays */
        .ct-overlay {
          position:absolute; inset:0; border-radius:18px;
          display:flex; flex-direction:column; align-items:center; justify-content:center;
          gap:16px; z-index:10;
          animation:ct-popIn .35s ease both;
          backdrop-filter:blur(4px);
        }
        .ct-overlay-icon { font-size:3rem; }
        .ct-overlay-title {
          font-size:1.4rem; font-weight:800; color:#fff;
          font-family:'Outfit',sans-serif; text-align:center;
        }
        .ct-overlay-sub {
          font-family:'JetBrains Mono',monospace; font-size:.82rem;
          color:rgba(255,255,255,.5); text-align:center; line-height:1.6;
        }
        .ct-overlay-btn {
          padding:10px 24px; border-radius:8px; border:none; cursor:pointer;
          font-family:'Outfit',sans-serif; font-weight:700; font-size:.88rem;
          transition:all .22s;
        }

        .ct-overlay.success { background:rgba(7,8,15,.92); }
        .ct-overlay.success .ct-overlay-icon { color:#a8e6cf; }
        .ct-overlay.success .ct-overlay-btn {
          background:linear-gradient(135deg,#c084fc,#818cf8); color:#07080f;
        }
        .ct-overlay.success .ct-overlay-btn:hover { transform:translateY(-2px); box-shadow:0 8px 24px rgba(192,132,252,.3); }

        .ct-overlay.error { background:rgba(7,8,15,.92); }
        .ct-overlay.error .ct-overlay-icon { color:#f87171; }
        .ct-overlay.error .ct-overlay-btn {
          background:rgba(248,113,113,.15); color:#f87171; border:1px solid rgba(248,113,113,.3);
        }
        .ct-overlay.error .ct-overlay-btn:hover { background:rgba(248,113,113,.25); }
      `}</style>

            <div className="ct-page">
                <Particle />

                {/* ── Header ── */}
                <div className="ct-header">
                    <div className="ct-label"><span className="ct-dot" /> Contact</div>
                    <h1 className="ct-h1">Travaillons <span>Ensemble</span></h1>
                    <p className="ct-sub">
                        Une idée de projet, une offre, une question ?<br />
                        Je réponds sous 24h.
                    </p>
                </div>

                {/* ── Body ── */}
                <div className="ct-body">

                    {/* ── LEFT ── */}
                    <div className="ct-left">
                        <div className="ct-info-card">
                            <div className="ct-info-title">{"// Mes coordonnées"}</div>
                            <div className="ct-info-list">
                                {contactInfo.map(c => {
                                    const Wrap = c.href ? "a" : "div";
                                    return (
                                        <Wrap
                                            key={c.label}
                                            href={c.href || undefined}
                                            target={c.href?.startsWith("http") ? "_blank" : undefined}
                                            rel="noreferrer"
                                            className="ct-info-item"
                                        >
                                            <div
                                                className="ct-info-icon"
                                                style={{
                                                    color: c.color,
                                                    borderColor: c.color + "44",
                                                    background: c.color + "12",
                                                }}
                                            >
                                                {c.icon}
                                            </div>
                                            <div>
                                                <div className="ct-info-lbl">{c.label}</div>
                                                <div className="ct-info-val">{c.value}</div>
                                            </div>
                                        </Wrap>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="ct-social-card">
                            <div className="ct-social-title">{"// Réseaux"}</div>
                            <div className="ct-socials">
                                {socialLinks.map(s => (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="ct-social-btn"
                                        onMouseEnter={e => {
                                            e.currentTarget.style.borderColor = s.color + "55";
                                            e.currentTarget.style.color = s.color;
                                            e.currentTarget.style.background = s.color + "12";
                                            e.currentTarget.style.boxShadow = `0 6px 20px ${s.color}22`;
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.borderColor = "rgba(255,255,255,.08)";
                                            e.currentTarget.style.color = "rgba(255,255,255,.45)";
                                            e.currentTarget.style.background = "rgba(255,255,255,.02)";
                                            e.currentTarget.style.boxShadow = "none";
                                        }}
                                    >
                                        {s.icon} {s.label}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Disponibilité badge */}
                        <div className="ct-status-badge">
                            <div className="ct-status-pulse" />
                            <div className="ct-status-txt">
                                <strong>Disponible</strong>
                                Stage · CDI · Freelance · Remote
                            </div>
                        </div>
                    </div>

                    {/* ── RIGHT: Formulaire ── */}
                    <div className="ct-right">
                        <div className="ct-form-card">

                            {/* Success overlay */}
                            {status === "success" && (
                                <div className="ct-overlay success">
                                    <div className="ct-overlay-icon"><AiOutlineCheckCircle /></div>
                                    <div className="ct-overlay-title">Message envoyé ! 🎉</div>
                                    <div className="ct-overlay-sub">
                                        Merci pour votre message.<br />
                                        Je vous réponds dans les 24h.
                                    </div>
                                    <button className="ct-overlay-btn" onClick={resetStatus}>
                                        Envoyer un autre message
                                    </button>
                                </div>
                            )}

                            {/* Error overlay */}
                            {status === "error" && (
                                <div className="ct-overlay error">
                                    <div className="ct-overlay-icon"><AiOutlineCloseCircle /></div>
                                    <div className="ct-overlay-title">Erreur d'envoi</div>
                                    <div className="ct-overlay-sub">
                                        Une erreur est survenue.<br />
                                        Contactez-moi directement à diopsoda1812@gmail.com
                                    </div>
                                    <button className="ct-overlay-btn" onClick={resetStatus}>
                                        Réessayer
                                    </button>
                                </div>
                            )}

                            <div className="ct-form-title">Envoyez-moi un message</div>
                            <div className="ct-form-subtitle">
                                {'// Tous les champs marqués sont obligatoires'}
                            </div>

                            <form ref={formRef} onSubmit={handleSubmit} noValidate>

                                {/* Nom + Email */}
                                <div className="ct-row-2">
                                    <div className={`ct-field ${focusedField==="from_name"?"focused":""} ${errors.from_name?"has-error":""}`}>
                                        <label className="ct-label-txt">Votre nom *</label>
                                        <input
                                            name="from_name"
                                            className="ct-input"
                                            placeholder="Marie Dupont"
                                            value={form.from_name}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField("from_name")}
                                            onBlur={() => setFocusedField(null)}
                                        />
                                        {errors.from_name && (
                                            <div className="ct-error">⚠ {errors.from_name}</div>
                                        )}
                                    </div>

                                    <div className={`ct-field ${focusedField==="from_email"?"focused":""} ${errors.from_email?"has-error":""}`}>
                                        <label className="ct-label-txt">Votre email *</label>
                                        <input
                                            name="from_email"
                                            type="email"
                                            className="ct-input"
                                            placeholder="marie@exemple.com"
                                            value={form.from_email}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField("from_email")}
                                            onBlur={() => setFocusedField(null)}
                                        />
                                        {errors.from_email && (
                                            <div className="ct-error">⚠ {errors.from_email}</div>
                                        )}
                                    </div>
                                </div>

                                {/* Sujet */}
                                <div className={`ct-field ${focusedField==="subject"?"focused":""} ${errors.subject?"has-error":""}`}>
                                    <label className="ct-label-txt">Sujet *</label>
                                    <select
                                        name="subject"
                                        className="ct-select"
                                        value={form.subject}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField("subject")}
                                        onBlur={() => setFocusedField(null)}
                                    >
                                        <option value="">-- Choisissez un sujet --</option>
                                        {subjects.map(s => (
                                            <option key={s} value={s}>{s}</option>
                                        ))}
                                    </select>
                                    {errors.subject && (
                                        <div className="ct-error">⚠ {errors.subject}</div>
                                    )}
                                </div>

                                {/* Message */}
                                <div className={`ct-field ${focusedField==="message"?"focused":""} ${errors.message?"has-error":""}`}>
                                    <label className="ct-label-txt">Message *</label>
                                    <textarea
                                        name="message"
                                        className="ct-textarea"
                                        placeholder="Décrivez votre projet, votre offre ou votre question..."
                                        value={form.message}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField("message")}
                                        onBlur={() => setFocusedField(null)}
                                    />
                                    <div className="ct-char">{charCount} caractères</div>
                                    {errors.message && (
                                        <div className="ct-error">⚠ {errors.message}</div>
                                    )}
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="ct-submit"
                                    disabled={status === "sending"}
                                >
                  <span>
                    {status === "sending" ? (
                        <><FiLoader className="ct-spinner" /> Envoi en cours…</>
                    ) : (
                        <><FiSend /> Envoyer le message</>
                    )}
                  </span>
                                </button>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Contact;