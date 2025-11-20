import React from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { motion } from "framer-motion";
import "./css/DiscoverSection.css";
import TextReveal from "../components/animation/TextReveal";

// Dummy images for left and right carousels
const leftImages = [
  "https://sani-prd-cdn.azureedge.net/media/qcrbkvtn/sani_beach_main_pool_v2-copy.jpg",
  "https://sani-prd-cdn.azureedge.net/media/kzzftmzw/sani-bousoulas-2-copy.jpg"
];

const rightImages = [
  "https://sani-prd-cdn.azureedge.net/media/1mspiyy3/sanibeach_main_pool_v2-copy.jpg",
  "https://sani-prd-cdn.azureedge.net/media/3x1byd1h/sani-club-_-ouzerie-restaurant-_-family-dining-copy.jpg"
];

// Animation variants for Framer Motion
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const ResortSection = () => {
  return (
    <div style={{ backgroundColor: "#fff", padding: "120px 10px" }}>
      <Container>
        <Row className="align-items-center text-center text-md-start">
          {/* Left Carousel */}
          <Col md={4} className="mb-4 mb-md-0" >
            <Carousel indicators={false} controls={false} fade interval={1000}>
              {leftImages.map((img, i) => (
                <Carousel.Item key={i}>
                  <img
                    src={img}
                    alt={`left-${i}`}
                    style={{ width: "100%", height: "80vh", objectFit: "cover" ,display: 'block'}}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>

          {/* Middle Text */}
          <Col md={4} style={{ backgroundColor: "#fff", padding: "0px 40px", borderRadius: "8px"   }}>

      <p className="resort-title">The Resort</p>
      <div className="resort-heading-wrapper">
  <h2 className="resort-heading">FIVE</h2>
  <h2 className="resort-heading">HOTELS</h2>
  <h2 className="resort-heading highlight-gold">ONE</h2>
  <h2 className="resort-heading highlight-gold">RESORT</h2>
</div>

                  <motion.div
      className="resort-container fade-up"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >

      <div className="resort-description">
        <p>
          Set at the heart of three natural worlds, Sani Resort is an enchanting
          paradise with a captivating spirit.
        </p>
        <p>
          Where the visions of five unique hotels intertwine to create an award
          winning 5* resort like no other.
        </p>
      </div>

      <p>
        <a href="/our-hotels" className="resort-link button">
          Choose Yours
          <span></span>
        </a>
      </p>
    </motion.div>
          </Col>

          {/* Right Carousel */}
          <Col md={4} className="mt-4 mt-md-0">
            <Carousel indicators={false} controls={false} fade interval={1000}>
              {rightImages.map((img, i) => (
                <Carousel.Item key={i}>
                  <img
                    src={img}
                    alt={`right-${i}`}
                    style={{ width: "100%", height: "80vh", objectFit: "cover" ,display: 'block' }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ResortSection;
