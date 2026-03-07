import React from "react";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  const interests = [
    "La cybersécurité et la protection des données",
    "La conception d'architectures logicielles robustes",
    "L'apprentissage continu et l'innovation technologique",
  ];

  return (
      <>
        <style>{`
        @keyframes ac-revL { from{opacity:0;transform:translateX(-24px);} to{opacity:1;transform:translateX(0);} }
        @keyframes ac-fadeUp { from{opacity:0;transform:translateY(18px);} to{opacity:1;transform:translateY(0);} }

        .ac-card {
          background: rgba(13,15,29,0.7);
          border: 1px solid rgba(192,132,252,.15);
          border-radius: 20px;
          padding: 36px 36px 32px;
          backdrop-filter: blur(12px);
          position: relative;
          overflow: hidden;
          animation: ac-revL .7s .25s ease both;
          transition: border-color .3s, box-shadow .3s;
        }
        .ac-card:hover {
          border-color: rgba(192,132,252,.3);
          box-shadow: 0 20px 60px rgba(192,132,252,.1);
        }
        /* Corner accent */
        .ac-card::before {
          content:'';
          position:absolute; top:0; left:0;
          width:80px; height:80px;
          background:radial-gradient(circle at top left, rgba(192,132,252,.12) 0%, transparent 70%);
          pointer-events:none;
        }
        .ac-card::after {
          content:'';
          position:absolute; bottom:0; right:0;
          width:60px; height:60px;
          background:radial-gradient(circle at bottom right, rgba(103,232,249,.08) 0%, transparent 70%);
          pointer-events:none;
        }

        .ac-hi {
          font-family:'JetBrains Mono', monospace;
          font-size:.78rem; color:rgba(255,255,255,.32);
          letter-spacing:.15em; text-transform:uppercase;
          margin-bottom:16px;
        }

        .ac-body {
          font-family:'JetBrains Mono', monospace;
          font-size:.86rem; line-height:1.9;
          color:rgba(255,255,255,.5);
          margin-bottom:24px;
        }
        .ac-name  { color:#c084fc; font-weight:400; }
        .ac-deg   { color:#818cf8; font-weight:400; }
        .ac-master{ color:#67e8f9; font-weight:400; }

        .ac-also {
          font-family:'JetBrains Mono', monospace;
          font-size:.8rem; color:rgba(255,255,255,.38);
          margin-bottom:14px;
          letter-spacing:.05em;
        }

        .ac-interests { list-style:none; margin:0 0 28px; padding:0; display:flex; flex-direction:column; gap:10px; }
        .ac-interest {
          display:flex; align-items:flex-start; gap:12px;
          font-family:'JetBrains Mono', monospace; font-size:.82rem;
          color:rgba(255,255,255,.5); line-height:1.6;
          padding:10px 14px; border-radius:10px;
          border:1px solid rgba(255,255,255,.05);
          background:rgba(192,132,252,.03);
          transition:all .22s; cursor:default;
          animation: ac-fadeUp .5s ease both;
        }
        .ac-interest:hover {
          border-color:rgba(192,132,252,.2);
          background:rgba(192,132,252,.07);
          color:rgba(255,255,255,.75);
          transform:translateX(4px);
        }
        .ac-interest-icon {
          color:#c084fc; flex-shrink:0; margin-top:2px; font-size:.9rem;
        }

        /* Quote */
        .ac-quote-wrap {
          border-left:2px solid rgba(192,132,252,.35);
          padding:12px 18px;
          background:rgba(192,132,252,.04);
          border-radius:0 10px 10px 0;
        }
        .ac-quote {
          font-family:'JetBrains Mono', monospace;
          font-size:.82rem; line-height:1.75;
          font-style:italic;
          background: linear-gradient(130deg, #c084fc, #818cf8, #67e8f9);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          margin-bottom:6px;
        }
        .ac-quote-author {
          font-family:'JetBrains Mono', monospace;
          font-size:.72rem; color:rgba(255,255,255,.28);
          letter-spacing:.1em;
        }
        .ac-quote-author::before { content:'— '; }
      `}</style>

        <div className="ac-card">
          <div className="ac-hi">// Bonjour, monde !</div>

          <p className="ac-body">
            Je suis <span className="ac-name">Soda DIOP</span>, diplômée d'une{" "}
            <span className="ac-deg">Licence en Génie Logiciel</span>{" "}
            <span className="ac-master"></span>.
            <br /><br />
            Passionnée par le développement d'applications web et mobiles sécurisées,
            performantes et centrées sur l'utilisateur. Mon objectif : concevoir des
            solutions numériques fiables intégrant des standards élevés en matière de sécurité.
          </p>

          <div className="ac-also">// Ce qui m'anime également :</div>

          <ul className="ac-interests">
            {interests.map((item, i) => (
                <li
                    key={i}
                    className="ac-interest"
                    style={{ animationDelay: `${.4 + i * .1}s` }}
                >
                  <ImPointRight className="ac-interest-icon" />
                  {item}
                </li>
            ))}
          </ul>

          <div className="ac-quote-wrap">
            <p className="ac-quote">
              "Construire des solutions sécurisées aujourd'hui<br />
              pour un monde numérique plus fiable demain."
            </p>
            <span className="ac-quote-author">Soda DIOP</span>
          </div>
        </div>
      </>
  );
}

export default AboutCard;