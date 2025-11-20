import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TextReveal from "../components/animation/TextReveal";
import "./css/Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <video playsInline autoPlay loop muted className="hero-video">
        <source
          src="https://player.vimeo.com/progressive_redirect/playback/1098192613/rendition/1080p/file.mp4?loc=external&log_user=0&signature=dd01f33c37df02f47a1e988bc03c51d7864eb059b283df173106592df1b41b08#t=1.2"
          type="video/mp4"
        />
      </video>

      <Container className="hero-content">
        <Row>
          <Col md={10}>
            <h1 className="hero-title">
              <TextReveal>A SANCTUARY</TextReveal><br />
              <TextReveal>FULL OF STORIES</TextReveal><br />
              <TextReveal>& EXPERIENCES</TextReveal>
            </h1>

            <p className="hero-subtitle">
              A destination that speaks through its rich <br />
              history, enchanting nature and endless<br />
              beaches. Where the whispers of ancient Greek<br />
              philosophers echo through the trees and the <br />
              breathtaking beauty of the Aegean Sea unfolds <br />
              before you.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
