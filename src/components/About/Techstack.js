import React, { useState } from "react";
import {
    SiLaravel, SiAngular, SiFlutter, SiCsharp, SiReact,
    SiMongodb, SiExpress, SiNodedotjs, SiUml,
} from "react-icons/si";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Typescript  from "../../Assets/TechIcons/Typescript.svg";
import Java        from "../../Assets/TechIcons/Java.svg";
import Python      from "../../Assets/TechIcons/Python.svg";
import Git         from "../../Assets/TechIcons/Git.svg";
import Docker      from "../../Assets/TechIcons/Docker.svg";
import SQL         from "../../Assets/TechIcons/SQL.svg";
import ReactIcon   from "../../Assets/TechIcons/React.svg";
import CppIcon     from "../../Assets/TechIcons/C++.svg";

const techs = [
    { label:"PHP / Laravel",  icon:<SiLaravel />,   color:"#e879f9", kind:"icon" },
    { label:"JavaScript",     icon:Javascript,       color:"#fbbf24", kind:"img"  },
    { label:"TypeScript",     icon:Typescript,       color:"#60a5fa", kind:"img"  },
    { label:"Angular",        icon:<SiAngular />,    color:"#f87171", kind:"icon" },
    { label:"Flutter",        icon:<SiFlutter />,    color:"#67e8f9", kind:"icon" },
    { label:"Java",           icon:Java,             color:"#fb923c", kind:"img"  },
    { label:"C#",             icon:<SiCsharp />,     color:"#a78bfa", kind:"icon" },
    { label:"Python",         icon:Python,           color:"#facc15", kind:"img"  },
    { label:"MySQL / PostgreSQL", icon:SQL,          color:"#7dd3fc", kind:"img"  },
    { label:"Git",            icon:Git,              color:"#f97316", kind:"img"  },
    { label:"Docker",         icon:Docker,           color:"#38bdf8", kind:"img"  },
    { label:"C++",            icon:CppIcon,          color:"#818cf8", kind:"img"  },
    { label:"UML",            icon:<SiUml />,        color:"#c084fc", kind:"icon" },
    { label:"React JS",       icon:ReactIcon,        color:"#67e8f9", kind:"img"  },
    {
        label:"MERN Stack",
        color:"#a78bfa", kind:"mern",
        icons:[<SiMongodb />, <SiExpress />, <SiReact />, <SiNodedotjs />],
        iconColors:["#4ade80","#e2e8f0","#67e8f9","#86efac"],
    },
];

function TechCard({ tech, index }) {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            className="ts-card"
            style={{
                animationDelay: `${index * 0.05}s`,
                borderColor: hovered ? tech.color + "55" : "rgba(255,255,255,.07)",
                background:   hovered ? tech.color + "0d" : "rgba(13,15,29,.6)",
                boxShadow:    hovered ? `0 8px 28px ${tech.color}18` : "none",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="ts-icon-wrap">
                {tech.kind === "mern" ? (
                    <div className="ts-mern">
                        {tech.icons.map((ic, i) => (
                            <span key={i} style={{ color: tech.iconColors[i], fontSize:"1.5rem" }}>{ic}</span>
                        ))}
                    </div>
                ) : tech.kind === "img" ? (
                    <img src={tech.icon} alt={tech.label} className="ts-img" />
                ) : (
                    <span className="ts-react-icon" style={{ color: hovered ? tech.color : "rgba(255,255,255,.55)", transition:"color .22s", fontSize:"2.2rem" }}>
            {tech.icon}
          </span>
                )}
            </div>
            <span className="ts-label" style={{ color: hovered ? tech.color : "rgba(255,255,255,.42)" }}>
        {tech.label}
      </span>
        </div>
    );
}

function Techstack() {
    return (
        <>
            <style>{`
        @keyframes ts-cardIn { from{opacity:0;transform:scale(.88) translateY(14px);} to{opacity:1;transform:scale(1) translateY(0);} }

        .ts-grid {
          display:grid;
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          gap:16px;
          padding-bottom:16px;
        }
        @media(max-width:480px){ .ts-grid{ grid-template-columns:repeat(3,1fr); gap:12px; } }

        .ts-card {
          display:flex; flex-direction:column; align-items:center; justify-content:center;
          gap:10px; padding:22px 12px;
          border-radius:14px; border:1px solid;
          cursor:default; transition:all .25s;
          animation: ts-cardIn .5s ease both;
          backdrop-filter:blur(8px);
        }
        .ts-icon-wrap { display:flex; align-items:center; justify-content:center; height:40px; }
        .ts-img { height:36px; width:auto; object-fit:contain; }
        .ts-mern { display:flex; gap:6px; align-items:center; }
        .ts-label {
          font-family:'JetBrains Mono', monospace;
          font-size:.72rem; text-align:center; line-height:1.4;
          transition:color .22s;
          letter-spacing:.03em;
        }
      `}</style>

            <div className="ts-grid">
                {techs.map((t, i) => <TechCard key={t.label} tech={t} index={i} />)}
            </div>
        </>
    );
}

export default Techstack;