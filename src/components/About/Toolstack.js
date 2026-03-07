import React, { useState } from "react";
import chrome   from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode   from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";
import {
    SiPostman, SiGit, SiGithub, SiGitlab, SiFigma,
    SiAndroidstudio, SiLinux, SiMysql, SiNotion,
    SiWireshark, SiVmware, SiApache,
    SiTrello, SiSlack,
} from "react-icons/si";
import { VscTerminalPowershell } from "react-icons/vsc";
import { BsShieldLockFill } from "react-icons/bs";

const categories = [
    {
        label: "Éditeurs & IDEs",
        color: "#67e8f9",
        tools: [
            { kind:"img",  icon:vsCode,   label:"VS Code",        color:"#67e8f9" },
            { kind:"img",  icon:intelliJ, label:"IntelliJ IDEA",  color:"#e879f9" },
            { kind:"icon", icon:<SiAndroidstudio />, label:"Android Studio", color:"#a8e6cf" },
        ],
    },
    {
        label: "Versioning & Collaboration",
        color: "#f97316",
        tools: [
            { kind:"img",  icon:chrome,   label:"Google Chrome",  color:"#f97316" },
            { kind:"icon", icon:<SiGit />,    label:"Git",         color:"#f97316" },
            { kind:"icon", icon:<SiGithub />, label:"GitHub",      color:"#c084fc" },
            { kind:"icon", icon:<SiGitlab />, label:"GitLab",      color:"#fb923c" },
            { kind:"icon", icon:<SiTrello />, label:"Trello",      color:"#60a5fa" },
            { kind:"icon", icon:<SiSlack />,  label:"Slack",       color:"#a78bfa" },
            { kind:"icon", icon:<SiNotion />, label:"Notion",      color:"rgba(255,255,255,.7)" },
        ],
    },
    {
        label: "API & Base de données",
        color: "#818cf8",
        tools: [
            { kind:"icon", icon:<SiPostman />,  label:"Postman",        color:"#f97316" },
            { kind:"icon", icon:<SiMysql />,    label:"MySQL Workbench", color:"#7dd3fc" },
            { kind:"icon", icon:<SiApache />,   label:"XAMPP / Apache",  color:"#fb923c" },
        ],
    },
    {
        label: "Cybersécurité & Réseau",
        color: "#c084fc",
        tools: [
            { kind:"icon", icon:<SiWireshark />,           label:"Wireshark",           color:"#67e8f9" },
            { kind:"icon", icon:<BsShieldLockFill />,       label:"Burp Suite",          color:"#f97316" },
            { kind:"icon", icon:<VscTerminalPowershell />,  label:"Terminal / CLI",      color:"#a8e6cf" },
            { kind:"icon", icon:<SiLinux />,                label:"Linux (Kali/Ubuntu)", color:"#facc15" },
            { kind:"icon", icon:<SiVmware />,               label:"VirtualBox / VMware", color:"#60a5fa" },
        ],
    },
    {
        label: "Design & Maquettes",
        color: "#e879f9",
        tools: [
            { kind:"icon", icon:<SiFigma />, label:"Figma", color:"#e879f9" },
        ],
    },
];

function ToolCard({ tool, index }) {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            className="tl-card"
            style={{
                animationDelay: `${index * 0.055}s`,
                borderColor:  hovered ? tool.color + "66" : "rgba(255,255,255,.07)",
                background:   hovered ? tool.color + "11" : "rgba(13,15,29,.65)",
                boxShadow:    hovered ? `0 8px 28px ${tool.color}22` : "none",
                transform:    hovered ? "translateY(-4px)" : "translateY(0)",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="tl-icon-wrap">
                {tool.kind === "img" ? (
                    <img
                        src={tool.icon} alt={tool.label} className="tl-img"
                        style={{
                            filter: hovered ? `drop-shadow(0 0 10px ${tool.color}80)` : "none",
                            transition:"filter .25s",
                        }}
                    />
                ) : (
                    <span
                        className="tl-react-icon"
                        style={{
                            color: hovered ? tool.color : "rgba(255,255,255,.45)",
                            filter: hovered ? `drop-shadow(0 0 8px ${tool.color}80)` : "none",
                            transition:"color .25s, filter .25s",
                        }}
                    >
            {tool.icon}
          </span>
                )}
            </div>
            <span className="tl-label" style={{ color: hovered ? tool.color : "rgba(255,255,255,.4)" }}>
        {tool.label}
      </span>
        </div>
    );
}

function Toolstack() {
    const [activeCategory, setActiveCategory] = useState(null);

    const displayed = activeCategory === null
        ? categories
        : categories.filter(c => c.label === activeCategory);

    const totalTools = categories.reduce((acc, c) => acc + c.tools.length, 0);

    return (
        <>
            <style>{`
        @keyframes tl-cardIn {
          from { opacity:0; transform:scale(.86) translateY(12px); }
          to   { opacity:1; transform:scale(1)   translateY(0);    }
        }
        @keyframes tl-catIn {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0);    }
        }

        .tl-count {
          text-align:center; margin-bottom:28px;
          font-family:'JetBrains Mono', monospace;
          font-size:.76rem; color:rgba(255,255,255,.25);
          letter-spacing:.1em;
        }
        .tl-count span {
          background:linear-gradient(130deg,#c084fc,#818cf8);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          font-weight:700;
        }

        .tl-filters {
          display:flex; flex-wrap:wrap; justify-content:center;
          gap:10px; margin-bottom:40px;
        }
        .tl-filter-btn {
          padding:7px 16px; border-radius:100px;
          font-family:'JetBrains Mono', monospace; font-size:.72rem;
          letter-spacing:.08em; cursor:pointer;
          transition:all .22s; border:1px solid;
          background:none;
        }
        .tl-filter-btn:hover { opacity:.85; }

        .tl-category { margin-bottom:44px; animation: tl-catIn .5s ease both; }
        .tl-cat-header {
          display:flex; align-items:center; gap:12px; margin-bottom:18px;
        }
        .tl-cat-line { flex:1; height:1px; background:rgba(255,255,255,.06); }
        .tl-cat-label {
          font-family:'JetBrains Mono', monospace;
          font-size:.7rem; letter-spacing:.18em; text-transform:uppercase; white-space:nowrap;
        }

        .tl-grid {
          display:grid;
          grid-template-columns:repeat(auto-fill, minmax(128px, 1fr));
          gap:14px;
        }
        @media(max-width:480px) { .tl-grid { grid-template-columns:repeat(3,1fr); gap:10px; } }

        .tl-card {
          display:flex; flex-direction:column; align-items:center;
          gap:10px; padding:20px 12px; border-radius:14px;
          border:1px solid; cursor:default;
          transition:all .25s; animation: tl-cardIn .45s ease both;
          backdrop-filter:blur(8px);
        }
        .tl-icon-wrap { display:flex; align-items:center; justify-content:center; height:40px; }
        .tl-img { height:36px; width:auto; object-fit:contain; }
        .tl-react-icon { font-size:2.1rem; display:flex; }
        .tl-label {
          font-family:'JetBrains Mono', monospace;
          font-size:.68rem; text-align:center;
          line-height:1.45; letter-spacing:.03em; transition:color .25s;
        }
      `}</style>

            <div className="tl-count">
                <span>{totalTools}</span> outils maîtrisés
            </div>

            <div className="tl-filters">
                <button
                    className="tl-filter-btn"
                    style={{
                        borderColor: activeCategory === null ? "#c084fc" : "rgba(255,255,255,.1)",
                        color:        activeCategory === null ? "#c084fc" : "rgba(255,255,255,.4)",
                        background:   activeCategory === null ? "rgba(192,132,252,.1)" : "transparent",
                    }}
                    onClick={() => setActiveCategory(null)}
                >
                    Tous
                </button>
                {categories.map(c => (
                    <button
                        key={c.label}
                        className="tl-filter-btn"
                        style={{
                            borderColor: activeCategory === c.label ? c.color : "rgba(255,255,255,.08)",
                            color:        activeCategory === c.label ? c.color : "rgba(255,255,255,.38)",
                            background:   activeCategory === c.label ? c.color + "14" : "transparent",
                        }}
                        onClick={() => setActiveCategory(prev => prev === c.label ? null : c.label)}
                    >
                        {c.label}
                    </button>
                ))}
            </div>

            {displayed.map(cat => (
                <div key={cat.label} className="tl-category">
                    <div className="tl-cat-header">
                        <div className="tl-cat-line" />
                        <span className="tl-cat-label" style={{ color: cat.color }}>{cat.label}</span>
                        <div className="tl-cat-line" />
                    </div>
                    <div className="tl-grid">
                        {cat.tools.map((tool, i) => (
                            <ToolCard key={tool.label} tool={tool} index={i} />
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
}

export default Toolstack;