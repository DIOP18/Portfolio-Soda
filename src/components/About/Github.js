import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
    return (
        <>
            <style>{`
        @keyframes gh-fadeUp { from{opacity:0;transform:translateY(24px);} to{opacity:1;transform:translateY(0);} }

        .gh-wrap {
          text-align:center;
          animation: gh-fadeUp .7s ease both;
        }
        .gh-eyebrow {
          font-family:'JetBrains Mono', monospace;
          font-size:.76rem; letter-spacing:.2em; text-transform:uppercase;
          color:rgba(255,255,255,.28); margin-bottom:12px;
        }
        .gh-title {
          font-family:'Outfit', sans-serif;
          font-size:clamp(1.6rem,3.5vw,2.4rem); font-weight:800;
          color:#fff; margin-bottom:48px; line-height:1.15;
        }
        .gh-title span {
          background: linear-gradient(130deg, #c084fc, #818cf8);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        }

        .gh-calendar-wrap {
          display:flex; justify-content:center;
          padding:32px 36px;
          background:rgba(13,15,29,.7);
          border:1px solid rgba(192,132,252,.14);
          border-radius:20px;
          backdrop-filter:blur(12px);
          overflow-x:auto;
          transition:border-color .3s, box-shadow .3s;
        }
        .gh-calendar-wrap:hover {
          border-color:rgba(192,132,252,.28);
          box-shadow:0 16px 48px rgba(192,132,252,.09);
        }

        .gh-stats {
          display:flex; justify-content:center; gap:24px; flex-wrap:wrap;
          margin-top:28px;
        }
        .gh-stat {
          display:flex; flex-direction:column; align-items:center;
          padding:14px 22px; border-radius:12px;
          border:1px solid rgba(255,255,255,.06);
          background:rgba(192,132,252,.04);
          font-family:'JetBrains Mono', monospace;
          transition:all .22s; cursor:default;
        }
        .gh-stat:hover {
          border-color:rgba(192,132,252,.22);
          background:rgba(192,132,252,.08);
          transform:translateY(-3px);
        }
        .gh-stat-val {
          font-size:1.3rem; font-weight:700;
          background:linear-gradient(130deg,#c084fc,#818cf8);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          line-height:1.2;
          font-family:'Outfit',sans-serif;
        }
        .gh-stat-lbl {
          font-size:.68rem; color:rgba(255,255,255,.3);
          letter-spacing:.1em; text-transform:uppercase; margin-top:4px;
        }
      `}</style>

            <div className="gh-wrap">
                <div className="gh-eyebrow">// Activité open source</div>
                <h2 className="gh-title">
                    Mes <span>Contributions GitHub</span>
                </h2>

                <div className="gh-calendar-wrap">
                    <GitHubCalendar
                        username="DIOP18"
                        blockSize={14}
                        blockMargin={5}
                        theme={{
                            light: ["#0d0f1d", "#2d1b4e", "#6b21a8", "#a855f7", "#c084fc"],
                            dark:  ["#0d0f1d", "#2d1b4e", "#6b21a8", "#a855f7", "#c084fc"],
                        }}
                        fontSize={13}
                        style={{ color: "rgba(255,255,255,0.4)" }}
                    />
                </div>

                <div className="gh-stats">
                    {[
                        { val:"DIOP18",  lbl:"Profil GitHub"   },
                        { val:"Public",  lbl:"Repos"            },
                        { val:"Active",  lbl:"Statut"           },
                    ].map(s => (
                        <div key={s.lbl} className="gh-stat">
                            <span className="gh-stat-val">{s.val}</span>
                            <span className="gh-stat-lbl">{s.lbl}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Github;