import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              Bonjour ! Je suis <span className="purple">Soda DIOP</span>,
              diplômée d’une <span className="purple">Licence en Génie Logiciel </span>
              et actuellement en <span className="purple">Master Sécurité des Systèmes Informatiques (SSI)</span>.
              <br />
              <br />
              Je suis passionnée par le développement d’applications web et mobiles
              sécurisées, performantes et centrées sur l’utilisateur.
              Mon objectif est de concevoir des solutions numériques fiables
              intégrant des standards élevés en matière de sécurité.
              <br />
              <br />
              En parallèle du développement, je m’intéresse particulièrement à :
            </p>

            <ul>
              <li className="about-activity">
                <ImPointRight /> La cybersécurité et la protection des données
              </li>
              <li className="about-activity">
                <ImPointRight /> La conception d’architectures logicielles robustes
              </li>
              <li className="about-activity">
                <ImPointRight /> L’apprentissage continu et l’innovation technologique
              </li>
            </ul>

            <p style={{ color: "rgb(155 126 172)" }}>
              "Construire des solutions sécurisées aujourd’hui pour un monde numérique plus fiable demain."
            </p>
            <footer className="blockquote-footer">Soda DIOP</footer>
          </blockquote>
        </Card.Body>
      </Card>
  );
}

export default AboutCard;