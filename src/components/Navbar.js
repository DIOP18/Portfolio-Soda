import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser, AiFillGithub } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

const navLinks = [
  { to: "/",        icon: <AiOutlineHome />,                    label: "Accueil"  },
  { to: "/about",   icon: <AiOutlineUser />,                    label: "À Propos" },
  { to: "/project", icon: <AiOutlineFundProjectionScreen />,    label: "Projets"  },
  { to: "/resume",  icon: <CgFileDocument />,                   label: "CV"       },
];

function NavBar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY >= 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // close menu on route change
  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
      <>
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&family=JetBrains+Mono:wght@400&display=swap');

        :root {
          --p1: #c084fc;
          --p2: #818cf8;
          --p3: #67e8f9;
          --bg: #07080f;
          --bg2: #0d0f1d;
        }

        @keyframes nb-fadeDown  { from{opacity:0;transform:translateY(-14px);} to{opacity:1;transform:translateY(0);} }
        @keyframes nb-gradBar   { 0%{background-position:0% 50%;} 100%{background-position:200% 50%;} }
        @keyframes nb-menuSlide { from{opacity:0;transform:translateY(-10px);} to{opacity:1;transform:translateY(0);} }
        @keyframes nb-burgerTop    { from{transform:none;}                  to{transform:translateY(7px) rotate(45deg);}  }
        @keyframes nb-burgerMid    { from{opacity:1;}                       to{opacity:0; transform:scaleX(0);}           }
        @keyframes nb-burgerBot    { from{transform:none;}                  to{transform:translateY(-7px) rotate(-45deg);}  }
        @keyframes nb-burgerTopRev { from{transform:translateY(7px) rotate(45deg);}   to{transform:none;} }
        @keyframes nb-burgerMidRev { from{opacity:0;transform:scaleX(0);}  to{opacity:1; transform:scaleX(1);} }
        @keyframes nb-burgerBotRev { from{transform:translateY(-7px) rotate(-45deg);} to{transform:none;} }

        /* ── Navbar shell ── */
        .sd-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          font-family: 'Outfit', sans-serif;
          transition: background .35s, box-shadow .35s, backdrop-filter .35s;
          animation: nb-fadeDown .6s ease both;
        }
        .sd-nav.scrolled {
          background: rgba(7,8,15,0.82);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 1px 0 rgba(192,132,252,.1), 0 8px 32px rgba(0,0,0,.5);
        }
        .sd-nav.top {
          background: transparent;
        }

        /* Gradient top line */
        .sd-nav-bar {
          position: absolute; top: 0; left: 0; right: 0; height: 1.5px;
          background: linear-gradient(90deg, transparent, var(--p1), var(--p2), var(--p3), transparent);
          background-size: 300% 100%;
          animation: nb-gradBar 4s linear infinite;
          opacity: .85;
        }

        /* Inner layout */
        .sd-nav-inner {
          max-width: 1200px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 32px; height: 68px;
        }

        /* Logo */
        .sd-logo {
          text-decoration: none; display: flex; align-items: center; gap: 10px;
          flex-shrink: 0;
        }
        .sd-logo-mark {
          width: 36px; height: 36px; border-radius: 9px;
          background: linear-gradient(135deg, var(--p1), var(--p2));
          display: flex; align-items: center; justify-content: center;
          font-family: 'Outfit', sans-serif; font-weight: 800;
          font-size: .95rem; color: #07080f;
          box-shadow: 0 4px 14px rgba(192,132,252,.35);
          transition: transform .22s, box-shadow .22s;
        }
        .sd-logo:hover .sd-logo-mark {
          transform: scale(1.08) rotate(-3deg);
          box-shadow: 0 6px 20px rgba(192,132,252,.5);
        }
        .sd-logo-txt {
          font-weight: 700; font-size: .95rem; color: #fff;
          letter-spacing: .01em; line-height: 1.1;
        }
        .sd-logo-sub {
          font-family: 'JetBrains Mono', monospace;
          font-size: .62rem; color: rgba(255,255,255,.35);
          letter-spacing: .12em; text-transform: uppercase;
          display: block;
        }

        /* Desktop links */
        .sd-links {
          display: flex; align-items: center; gap: 4px; list-style: none;
          margin: 0; padding: 0;
        }
        .sd-link {
          position: relative;
        }
        .sd-link a {
          display: flex; align-items: center; gap: 7px;
          padding: 8px 14px; border-radius: 8px;
          text-decoration: none; font-size: .88rem; font-weight: 600;
          color: rgba(255,255,255,.5);
          transition: color .2s, background .2s;
          letter-spacing: .01em;
        }
        .sd-link a svg { font-size: 1rem; }
        .sd-link a:hover {
          color: #fff;
          background: rgba(192,132,252,.08);
        }
        .sd-link a.active {
          color: var(--p1);
          background: rgba(192,132,252,.1);
        }
        /* active underline dot */
        .sd-link a.active::after {
          content: '';
          position: absolute; bottom: 2px; left: 50%; transform: translateX(-50%);
          width: 4px; height: 4px; border-radius: 50%;
          background: var(--p1);
        }

        /* GitHub button */
        .sd-gh-btn {
          display: flex; align-items: center; gap: 8px;
          padding: 8px 16px; border-radius: 8px;
          border: 1px solid rgba(192,132,252,.28);
          background: rgba(192,132,252,.06);
          color: rgba(255,255,255,.7); text-decoration: none;
          font-size: .85rem; font-weight: 600;
          font-family: 'JetBrains Mono', monospace;
          transition: all .22s; white-space: nowrap;
        }
        .sd-gh-btn svg { font-size: 1.1rem; }
        .sd-gh-btn:hover {
          border-color: var(--p1); color: var(--p1);
          background: rgba(192,132,252,.12);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(192,132,252,.2);
        }

        /* ── Hamburger ── */
        .sd-burger {
          display: none; flex-direction: column; gap: 5px;
          padding: 8px; cursor: pointer; background: none; border: none;
          border-radius: 8px; transition: background .2s;
        }
        .sd-burger:hover { background: rgba(192,132,252,.08); }
        .sd-burger span {
          display: block; width: 22px; height: 2px;
          background: rgba(255,255,255,.75); border-radius: 2px;
          transform-origin: center; transition: all .3s ease;
        }
        /* open state */
        .sd-burger.open span:nth-child(1) { animation: nb-burgerTop .3s forwards; }
        .sd-burger.open span:nth-child(2) { animation: nb-burgerMid .3s forwards; }
        .sd-burger.open span:nth-child(3) { animation: nb-burgerBot .3s forwards; }
        .sd-burger:not(.open) span:nth-child(1) { animation: nb-burgerTopRev .3s forwards; }
        .sd-burger:not(.open) span:nth-child(2) { animation: nb-burgerMidRev .3s forwards; }
        .sd-burger:not(.open) span:nth-child(3) { animation: nb-burgerBotRev .3s forwards; }

        /* ── Mobile menu ── */
        .sd-mobile-menu {
          position: absolute; top: 68px; left: 0; right: 0;
          background: rgba(7,8,15,.96);
          backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(192,132,252,.12);
          padding: 16px 24px 24px;
          animation: nb-menuSlide .25s ease both;
        }
        .sd-mobile-links {
          list-style: none; margin: 0; padding: 0;
          display: flex; flex-direction: column; gap: 4px;
        }
        .sd-mobile-links li a {
          display: flex; align-items: center; gap: 10px;
          padding: 12px 16px; border-radius: 10px;
          text-decoration: none; font-size: .9rem; font-weight: 600;
          color: rgba(255,255,255,.5); transition: all .2s;
        }
        .sd-mobile-links li a svg { font-size: 1.05rem; }
        .sd-mobile-links li a:hover, .sd-mobile-links li a.active {
          color: var(--p1); background: rgba(192,132,252,.08);
        }
        .sd-mobile-gh {
          margin-top: 16px; padding-top: 16px;
          border-top: 1px solid rgba(255,255,255,.06);
        }
        .sd-mobile-gh a {
          display: flex; align-items: center; gap: 8px;
          padding: 11px 16px; border-radius: 10px;
          border: 1px solid rgba(192,132,252,.22);
          background: rgba(192,132,252,.05);
          color: rgba(255,255,255,.6); text-decoration: none;
          font-size: .86rem; font-weight: 600;
          font-family: 'JetBrains Mono', monospace;
          transition: all .22s;
        }
        .sd-mobile-gh a:hover { color: var(--p1); border-color: var(--p1); }

        @media(max-width: 768px) {
          .sd-links-desktop { display: none !important; }
          .sd-burger { display: flex; }
        }
        @media(min-width: 769px) {
          .sd-mobile-menu { display: none !important; }
        }
      `}</style>

        <nav className={`sd-nav ${scrolled ? "scrolled" : "top"}`}>
          <div className="sd-nav-bar" />

          <div className="sd-nav-inner">
            {/* Logo */}
            <Link to="/" className="sd-logo">
              <div className="sd-logo-mark">SD</div>
              <div className="sd-logo-txt">
                Soda DIOP
                <span className="sd-logo-sub">Full-Stack Dev</span>
              </div>
            </Link>

            {/* Desktop links */}
            <ul className="sd-links sd-links-desktop">
              {navLinks.map(l => (
                  <li key={l.to} className="sd-link">
                    <Link
                        to={l.to}
                        className={location.pathname === l.to ? "active" : ""}
                    >
                      {l.icon} {l.label}
                    </Link>
                  </li>
              ))}
              <li style={{ marginLeft: 8 }}>
                <a
                    href="https://github.com/DIOP18"
                    target="_blank"
                    rel="noreferrer"
                    className="sd-gh-btn"
                >
                  <AiFillGithub /> GitHub
                </a>
              </li>
            </ul>

            {/* Burger */}
            <button
                className={`sd-burger ${menuOpen ? "open" : ""}`}
                onClick={() => setMenuOpen(o => !o)}
                aria-label="Menu"
            >
              <span /><span /><span />
            </button>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
              <div className="sd-mobile-menu">
                <ul className="sd-mobile-links">
                  {navLinks.map(l => (
                      <li key={l.to}>
                        <Link
                            to={l.to}
                            className={location.pathname === l.to ? "active" : ""}
                            onClick={() => setMenuOpen(false)}
                        >
                          {l.icon} {l.label}
                        </Link>
                      </li>
                  ))}
                </ul>
                <div className="sd-mobile-gh">
                  <a href="https://github.com/DIOP18" target="_blank" rel="noreferrer">
                    <AiFillGithub /> GitHub
                  </a>
                </div>
              </div>
          )}
        </nav>
      </>
  );
}

export default NavBar;