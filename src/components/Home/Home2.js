import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                <span className="purple"> Qui suis-je ?</span>
              </h1>
              <p className="home-about-body">
                Je suis titulaire d’une Licence en Génie Logiciel et actuellement
                en Master Sécurité des Systèmes Informatiques (SSI).
                Passionnée par les technologies numériques, je conçois des
                applications performantes tout en intégrant des principes solides
                de sécurité et d’architecture logicielle.
                <br />
                <br />
                Je travaille principalement avec
                <i>
                  <b className="purple">
                    {" "}
                    Laravel, Angular, Flutter, JavaFX, C# et MySQL
                  </b>
                </i>
                , en développant des solutions web et mobiles robustes et sécurisées.
                <br />
                <br />
                Mes domaines d’intérêt incluent le développement
                <i>
                  <b className="purple">
                    {" "}
                    d’applications web sécurisées, la gestion des bases de données,
                    la conception d’architectures fiables et la cybersécurité
                  </b>
                </i>
                .
                <br />
                <br />
                Mon objectif est de créer des systèmes à la fois performants,
                sécurisés et centrés sur l’expérience utilisateur.
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="Soda DIOP - Avatar" />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
  );
}

export default Home2;