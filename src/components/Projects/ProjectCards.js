import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

function ProjectCards(props) {
    const [hovered, setHovered] = useState(false);

    return (
        <>
            <style>{`
        @keyframes pc-fadeUp { from{opacity:0;transform:translateY(24px);} to{opacity:1;transform:translateY(0);} }

        .pc-card {
          background:rgba(13,15,29,.75);
          border:1px solid rgba(192,132,252,.12);
          border-radius:18px; overflow:hidden;
          display:flex; flex-direction:column; height:100%;
          transition:border-color .3s, box-shadow .3s, transform .3s;
          animation:pc-fadeUp .6s ease both; cursor:default; position:relative;
        }
        .pc-card.hov {
          border-color:rgba(192,132,252,.35);
          box-shadow:0 24px 60px rgba(192,132,252,.13);
          transform:translateY(-6px);
        }
        .pc-card::before {
          content:''; position:absolute; top:0; left:0; right:0; height:2px;
          background:linear-gradient(90deg,#c084fc,#818cf8,#67e8f9);
          opacity:0; transition:opacity .3s; z-index:2;
        }
        .pc-card.hov::before { opacity:1; }

        /* Image / placeholder */
        .pc-img-wrap {
          position:relative; overflow:hidden;
          height:200px; flex-shrink:0; background:#070a10;
        }
        /* Real image */
        .pc-img {
          width:100%; height:100%; object-fit:cover;
          transition:transform .5s ease, filter .5s ease;
          filter:brightness(.85) saturate(.9);
        }
        .pc-card.hov .pc-img {
          transform:scale(1.06);
          filter:brightness(.95) saturate(1.1);
        }
        /* SVG placeholder fills container */
        .pc-placeholder {
          width:100%; height:100%;
          display:flex; align-items:center; justify-content:center;
        }
        .pc-placeholder svg { width:100%; height:100%; }

        .pc-img-overlay {
          position:absolute; inset:0;
          background:linear-gradient(to bottom,rgba(7,8,15,0) 40%,rgba(7,8,15,.85) 100%);
          z-index:1;
        }
        .pc-stack-badges {
          position:absolute; bottom:12px; left:14px; right:14px;
          display:flex; flex-wrap:wrap; gap:6px; z-index:2;
        }
        .pc-badge {
          padding:3px 10px; border-radius:100px;
          font-family:'JetBrains Mono',monospace; font-size:.63rem;
          letter-spacing:.05em; border:1px solid; backdrop-filter:blur(8px);
        }

        /* Body */
        .pc-body { padding:22px 22px 20px; display:flex; flex-direction:column; flex:1; }
        .pc-category {
          font-family:'JetBrains Mono',monospace; font-size:.63rem;
          letter-spacing:.18em; text-transform:uppercase;
          color:rgba(255,255,255,.28); margin-bottom:8px;
        }
        .pc-title {
          font-family:'Outfit',sans-serif; font-weight:700;
          font-size:1.02rem; color:#fff; line-height:1.3; margin-bottom:12px;
          display:flex; align-items:flex-start; justify-content:space-between; gap:8px;
        }
        .pc-card.hov .pc-title-text {
          background:linear-gradient(130deg,#c084fc,#818cf8);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        }
        .pc-arrow {
          color:rgba(192,132,252,.4); flex-shrink:0; font-size:1rem;
          transition:color .25s, transform .25s; margin-top:2px;
        }
        .pc-card.hov .pc-arrow { color:#c084fc; transform:translate(2px,-2px); }

        .pc-desc {
          font-family:'JetBrains Mono',monospace; font-size:.78rem;
          line-height:1.85; color:rgba(255,255,255,.45); flex:1; margin-bottom:18px;
        }

        .pc-highlights { display:flex; flex-wrap:wrap; gap:6px; margin-bottom:20px; }
        .pc-highlight {
          display:flex; align-items:center; gap:5px;
          font-family:'JetBrains Mono',monospace; font-size:.65rem;
          color:rgba(255,255,255,.35); padding:4px 10px;
          border-radius:6px; border:1px solid rgba(255,255,255,.06);
          background:rgba(255,255,255,.02);
          transition:all .2s;
        }
        .pc-card.hov .pc-highlight {
          border-color:rgba(255,255,255,.1);
          color:rgba(255,255,255,.5);
        }
        .pc-highlight-dot { width:5px; height:5px; border-radius:50%; flex-shrink:0; }

        .pc-actions { display:flex; gap:10px; flex-wrap:wrap; margin-top:auto; }
        .pc-btn-gh {
          display:inline-flex; align-items:center; gap:7px;
          padding:9px 18px; border-radius:8px;
          background:rgba(192,132,252,.1); border:1px solid rgba(192,132,252,.25);
          color:#c084fc; text-decoration:none;
          font-family:'Outfit',sans-serif; font-weight:600; font-size:.82rem;
          transition:all .22s; flex:1; justify-content:center;
        }
        .pc-btn-gh:hover {
          background:rgba(192,132,252,.2); border-color:#c084fc; color:#c084fc;
          transform:translateY(-2px); box-shadow:0 6px 20px rgba(192,132,252,.2);
        }
        .pc-btn-demo {
          display:inline-flex; align-items:center; gap:7px;
          padding:9px 18px; border-radius:8px;
          background:linear-gradient(135deg,#c084fc,#818cf8);
          border:none; color:#07080f;
          font-family:'Outfit',sans-serif; font-weight:700; font-size:.82rem;
          text-decoration:none; transition:all .22s; flex:1; justify-content:center;
        }
        .pc-btn-demo:hover { transform:translateY(-2px); box-shadow:0 8px 24px rgba(192,132,252,.3); color:#07080f; }
      `}</style>

            <div
                className={`pc-card ${hovered ? "hov" : ""}`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {/* Image ou placeholder SVG */}
                <div className="pc-img-wrap">
                    {props.imgPath ? (
                        <img src={props.imgPath} alt={props.title} className="pc-img" />
                    ) : props.placeholder ? (
                        <div className="pc-placeholder">{props.placeholder}</div>
                    ) : (
                        <div style={{
                            width:"100%", height:"100%", display:"flex",
                            alignItems:"center", justifyContent:"center",
                            background:"#0d0f1d", color:"rgba(192,132,252,.3)",
                            fontFamily:"monospace", fontSize:".8rem", letterSpacing:".1em"
                        }}>
                            // screenshot coming soon
                        </div>
                    )}
                    <div className="pc-img-overlay" />
                    {props.stack && (
                        <div className="pc-stack-badges">
                            {props.stack.map(s => (
                                <span key={s.name} className="pc-badge"
                                      style={{ color:s.color, borderColor:s.color+"55", background:s.color+"18" }}>
                  {s.name}
                </span>
                            ))}
                        </div>
                    )}
                </div>

                <div className="pc-body">
                    {props.category && <div className="pc-category">// {props.category}</div>}

                    <div className="pc-title">
                        <span className="pc-title-text">{props.title}</span>
                        <HiOutlineArrowUpRight className="pc-arrow" />
                    </div>

                    <p className="pc-desc">{props.description}</p>

                    {props.highlights && (
                        <div className="pc-highlights">
                            {props.highlights.map(h => (
                                <span key={h.text} className="pc-highlight">
                  <span className="pc-highlight-dot" style={{ background:h.color||"#c084fc" }} />
                                    {h.text}
                </span>
                            ))}
                        </div>
                    )}

                    <div className="pc-actions">
                        <a href={props.ghLink} target="_blank" rel="noreferrer" className="pc-btn-gh">
                            <BsGithub /> {props.isBlog ? "Blog" : "GitHub"}
                        </a>
                        {!props.isBlog && props.demoLink && (
                            <a href={props.demoLink} target="_blank" rel="noreferrer" className="pc-btn-demo">
                                <CgWebsite /> Démo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectCards;