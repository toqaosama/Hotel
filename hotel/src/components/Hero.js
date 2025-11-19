import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "./css/Hero.css";


const Hero = () => {
    return(
        <div className="hero-container">
      <video playsInline autoPlay loop muted className="hero-video">
        <source
          src="https://player.vimeo.com/progressive_redirect/playback/1098192613/rendition/1080p/file.mp4?loc=external&log_user=0&signature=dd01f33c37df02f47a1e988bc03c51d7864eb059b283df173106592df1b41b08#t=1.2"
          type="video/mp4"
        />
      </video>

            <Container className="hero-content">
                <Row className="justify-content-left align-items-left text-left">
                    <Col md={10}>
                    <motion.h1
                    initial={{ opacity:0, y:-50}}
                    animate={{opacity:1 , y:0}}
                    transition={{duration:3}}
                    className="hero-title"
                    >
                        A SANCTUARY<br />FULL OF STORIES <br />& EXPERIENCES
                    </motion.h1>
                    <p className="hero-subtitle">A destination that speaks through its rich <br />history, enchanting nature and endless<br /> beaches. Where the whispers of ancient Greek<br /> philosophers echo through thetrees and the <br /> breathtaking beauty of the Aegean Sea unfolds <br />before you.</p>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default Hero;