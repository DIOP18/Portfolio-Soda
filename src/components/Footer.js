import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

function Footer() {
    const year = new Date().getFullYear();

    const contacts = [
        {
            href: "mailto:diopsoda1812@gmail.com",
            icon: <AiOutlineMail />,
            label: "diopsoda1812@gmail.com",
            color: "#c084fc",
        },
        {
            href: "tel:+221785293632",
            icon: <FiPhone />,
            label: "+221 78 529 36 32",
            color: "#818cf8",
        },
        {
            href: "https://www.linkedin.com/in/soda-diop-1a0235282/",
            icon: <FaLinkedinIn />,
            label: "LinkedIn",
            color: "#67e8f9",
            external: true,
        },
    ];

    const navLinks = [
        { to: "/",        label: "Accueil"  },
        { to: "/about",   label: "À Propos" },
        { to: "/project", label: "Projets"  },
        { to: "/resume",  label: "CV"       },
        {to: "/contact", label: "Contact"  },
    ];

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800&family=JetBrains+Mono:wght@300;400&display=swap');

        @keyframes ft-gradShift { 0%{background-position:0% 50%;} 50%{background-position:100% 50%;} 100%{background-position:0% 50%;} }
        @keyframes ft-gradBar   { 0%{background-position:0% 50%;} 100%{background-position:200% 50%;} }

        .sd-footer {
          background: #07080f;
          border-top: 1px solid rgba(192,132,252,.1);
          font-family: 'Outfit', sans-serif;
          position: relative;
          overflow: hidden;
        }
        /* top gradient line */
        .sd-footer::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1.5px;
          background: linear-gradient(90deg, transparent, #c084fc, #818cf8, #67e8f9, transparent);
          background-size: 300% 100%;
          animation: ft-gradBar 5s linear infinite;
        }
        /* bg glow */
        .sd-footer::after {
          content: '';
          position: absolute; bottom: -100px; left: 50%; transform: translateX(-50%);
          width: 600px; height: 300px; border-radius: 50%;
          background: radial-gradient(circle, rgba(192,132,252,.06) 0%, transparent 65%);
          pointer-events: none;
        }

        .sd-footer-inner {
          max-width: 1200px; margin: 0 auto;
          padding: 64px 40px 0;
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 48px;
          position: relative; z-index: 1;
        }
        @media(max-width:800px){
          .sd-footer-inner { grid-template-columns: 1fr; gap: 36px; padding: 48px 24px 0; }
        }

        /* ── Col 1 : Brand ── */
        .sd-ft-brand {}
        .sd-ft-logo {
          display: flex; align-items: center; gap: 10px;
          text-decoration: none; margin-bottom: 18px;
        }
        .sd-ft-logo-mark {
          width: 40px; height: 40px; border-radius: 10px;
          background: linear-gradient(135deg, #c084fc, #818cf8);
          display: flex; align-items: center; justify-content: center;
          font-weight: 800; font-size: 1rem; color: #07080f;
          box-shadow: 0 4px 16px rgba(192,132,252,.3);
          flex-shrink: 0;
        }
        .sd-ft-logo-txt { font-weight: 700; font-size: 1rem; color: #fff; }
        .sd-ft-logo-sub {
          font-family: 'JetBrains Mono', monospace;
          font-size: .6rem; color: rgba(255,255,255,.3);
          letter-spacing: .12em; text-transform: uppercase; display: block;
        }
        .sd-ft-tagline {
          font-family: 'JetBrains Mono', monospace;
          font-size: .82rem; line-height: 1.75;
          color: rgba(255,255,255,.4); max-width: 280px;
          margin-bottom: 24px;
        }
        .sd-ft-tagline span {
          background: linear-gradient(130deg, #c084fc, #818cf8);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .sd-ft-socials { display: flex; gap: 10px; }
        .sd-ft-social-btn {
          width: 38px; height: 38px; border-radius: 9px;
          border: 1px solid rgba(255,255,255,.08);
          background: rgba(255,255,255,.03);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,.4); font-size: 1.05rem;
          text-decoration: none; transition: all .22s;
        }
        .sd-ft-social-btn:hover {
          transform: translateY(-3px);
        }

        /* ── Col 2 : Navigation ── */
        .sd-ft-nav-title, .sd-ft-contact-title {
          font-size: .72rem; letter-spacing: .2em; text-transform: uppercase;
          color: rgba(255,255,255,.28); font-family: 'JetBrains Mono', monospace;
          margin-bottom: 18px;
        }
        .sd-ft-nav-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; }
        .sd-ft-nav-list li a {
          text-decoration: none; color: rgba(255,255,255,.45); font-size: .88rem;
          font-weight: 600; transition: color .2s;
          display: flex; align-items: center; gap: 6px;
        }
        .sd-ft-nav-list li a::before {
          content: '→'; font-size: .75rem; color: rgba(192,132,252,.4);
          transition: color .2s, transform .2s;
        }
        .sd-ft-nav-list li a:hover { color: #c084fc; }
        .sd-ft-nav-list li a:hover::before { color: #c084fc; transform: translateX(3px); }

        /* ── Col 3 : Contact ── */
        .sd-ft-contact-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 12px; }
        .sd-ft-contact-item a {
          display: flex; align-items: center; gap: 10px;
          text-decoration: none; font-size: .85rem;
          font-family: 'JetBrains Mono', monospace; font-weight: 300;
          color: rgba(255,255,255,.4); transition: all .2s;
        }
        .sd-ft-contact-item a svg {
          font-size: 1rem; flex-shrink: 0; transition: color .2s;
        }
        .sd-ft-contact-item a:hover { color: rgba(255,255,255,.8); }

        /* ── Bottom bar ── */
        .sd-ft-bottom {
          margin-top: 52px;
          border-top: 1px solid rgba(255,255,255,.05);
          padding: 20px 40px;
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px; flex-wrap: wrap;
          position: relative; z-index: 1;
          max-width: 100%;
        }
        .sd-ft-copy {
          font-family: 'JetBrains Mono', monospace;
          font-size: .72rem; color: rgba(255,255,255,.22);
          letter-spacing: .05em;
        }
        .sd-ft-copy span {
          background: linear-gradient(130deg, #c084fc, #818cf8);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .sd-ft-made {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; color: rgba(255,255,255,.18);
          letter-spacing: .05em;
        }
        .sd-ft-made span { color: #c084fc; }
      `}</style>

            <footer className="sd-footer">
                <div className="sd-footer-inner">

                    {/* ── Col 1 : Brand ── */}
                    <div className="sd-ft-brand">
                        <Link to="/" className="sd-ft-logo">
                            <div className="sd-ft-logo-mark">SD</div>
                            <div className="sd-ft-logo-txt">
                                Soda DIOP
                                <span className="sd-ft-logo-sub">Full-Stack Dev</span>
                            </div>
                        </Link>
                        <p className="sd-ft-tagline">
                            Concevoir des systèmes<br />
                            <span>performants, sécurisés</span><br />
                            et centrés sur l'utilisateur.
                        </p>
                        <div className="sd-ft-socials">
                            {[
                                { href:"https://github.com/DIOP18", icon:<AiFillGithub />, color:"#c084fc" },
                                { href:"https://www.linkedin.com/in/soda-diop-1a0235282/", icon:<FaLinkedinIn />, color:"#818cf8" },
                                { href:"mailto:diopsoda1812@gmail.com", icon:<AiOutlineMail />, color:"#67e8f9" },
                            ].map((s, i) => (
                                <a
                                    key={i}
                                    href={s.href}
                                    target={s.href.startsWith("mailto") ? undefined : "_blank"}
                                    rel="noreferrer"
                                    className="sd-ft-social-btn"
                                    onMouseEnter={e => {
                                        e.currentTarget.style.borderColor = s.color + "55";
                                        e.currentTarget.style.color = s.color;
                                        e.currentTarget.style.background = s.color + "12";
                                        e.currentTarget.style.boxShadow = `0 6px 20px ${s.color}22`;
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.borderColor = "rgba(255,255,255,.08)";
                                        e.currentTarget.style.color = "rgba(255,255,255,.4)";
                                        e.currentTarget.style.background = "rgba(255,255,255,.03)";
                                        e.currentTarget.style.boxShadow = "none";
                                    }}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ── Col 2 : Navigation ── */}
                    <div>
                        <div className="sd-ft-nav-title">// Navigation</div>
                        <ul className="sd-ft-nav-list">
                            {navLinks.map(l  => (
                                <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* ── Col 3 : Contact ── */}
                    <div>
                        <div className="sd-ft-contact-title">// Me contacter</div>
                        <ul className="sd-ft-contact-list">
                            {contacts.map((c, i) => (
                                <li key={i} className="sd-ft-contact-item">
                                    <a
                                        href={c.href}
                                        target={c.external ? "_blank" : undefined}
                                        rel="noreferrer"
                                        onMouseEnter={e => {
                                            e.currentTarget.style.color = c.color;
                                            e.currentTarget.querySelector("svg").style.color = c.color;
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.color = "rgba(255,255,255,.4)";
                                            e.currentTarget.querySelector("svg").style.color = "rgba(255,255,255,.4)";
                                        }}
                                    >
                                        {c.icon} {c.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Bottom bar */}
                <div className="sd-ft-bottom">
          <span className="sd-ft-copy">
            © {year} <span>Soda DIOP</span>. Tous droits réservés.
          </span>
                    <span className="sd-ft-made">
            Conçu & développé avec <span>♥</span> par Soda DIOP
          </span>
                </div>
            </footer>
        </>
    );
}

export default Footer;