import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLaravel,
  SiAngular,
  SiFlutter,
  SiCsharp,
  SiCplusplus,
  SiReact,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiUml,
} from "react-icons/si";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import CppIcon from "../../Assets/TechIcons/C++.svg";

const iconStyle = { fontSize: "2.5em", marginBottom: "5px" };

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel style={iconStyle} />
        <div className="tech-icons-text">PHP (Laravel)</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="typescript" />
        <div className="tech-icons-text">TypeScript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAngular style={iconStyle} />
        <div className="tech-icons-text">Angular</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter style={iconStyle} />
        <div className="tech-icons-text">Flutter</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="java" />
        <div className="tech-icons-text">Java</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp style={iconStyle} />
        <div className="tech-icons-text">C#</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">MySQL / PostgreSQL</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="docker" />
        <div className="tech-icons-text">Docker</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={CppIcon} alt="C++" />
        <div className="tech-icons-text">C++</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiUml style={iconStyle} />
        <div className="tech-icons-text">UML</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="React" />
        <div className="tech-icons-text">React JS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons" style={{ flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginBottom: "5px" }}>
          <SiMongodb style={{ fontSize: "1.8em" }} />
          <SiExpress style={{ fontSize: "1.8em" }} />
          <SiReact style={{ fontSize: "1.8em" }} />
          <SiNodedotjs style={{ fontSize: "1.8em" }} />
        </div>
        <div className="tech-icons-text" style={{ marginLeft: 0 }}>MERN Stack</div>
      </Col>
    </Row>
  );
}

export default Techstack;
