import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes  <strong className="purple">Projets réalisés</strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets académiques et personnels que j’ai réalisés.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Plateforme de Rendez-vous Médicaux"
              description="Application web avec Laravel et Angular pour gérer les rendez-vous médicaux, authentification et rôles sécurisés."
              ghLink="https://github.com/DIOP18/Gestion-de-la-Clinique-Dr-Dramane-DIOP"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Application Todo List (Flask)"
              description="Application web pour gérer les tâches, avec authentification et gestion d'utilisateurs, notifications et rappels."
              ghLink="https://github.com/DIOP18/gestion-des-taches-en-python-"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Application de gestion des emargements des professeurs "
              description="Application java fx pour gérer les matières, les heures de cours des professeurs et leurs emargements"
              ghLink="https://github.com/DIOP18/soda_examen_java"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Gestions des commandes "
              description="Application Web avec laravel comme backend et front end avec ces vues. Permet au client d'éffectuer des commandes en lignes et de recevoir leur colis par liveaison"
              ghLink="https://github.com/DIOP18/laravel_projet"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
