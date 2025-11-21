import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { motion } from "framer-motion";
import "./css/DiscoverSection.css";

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
    <div className="resort-section-wrapper">
      <Container fluid className="resort-container-fluid">
        <Row className="resort-row align-items-center">
          {/* Left Carousel */}
          <Col lg={4} md={4} className="carousel-column left-carousel">
            <Carousel indicators={false} controls={false} fade interval={3000}>
              {leftImages.map((img, i) => (
                <Carousel.Item key={i}>
                  <div className="image-wrapper">
                    <img
                      src={img}
                      alt={`left-${i}`}
                      className="carousel-img"
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>

          {/* Middle Text Content */}
          <Col lg={4} md={4} className="text-content-column">
            <motion.div
              className="text-content-wrapper"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="resort-title">The Resort</p>
              <div className="resort-heading-wrapper">
                <h2 className="resort-heading">FIVE</h2>
                <h2 className="resort-heading">HOTELS</h2>
                <h2 className="resort-heading highlight-gold">ONE</h2>
                <h2 className="resort-heading highlight-gold">RESORT</h2>
              </div>

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

              <div className="button-wrapper">
                <a href="/our-hotels" className="resort-link button">
                  Choose Yours
                  <span className="link-underline"></span>
                </a>
              </div>
            </motion.div>
          </Col>

          {/* Right Carousel */}
          <Col lg={4} md={4} className="carousel-column right-carousel">
            <Carousel indicators={false} controls={false} fade interval={3000}>
              {rightImages.map((img, i) => (
                <Carousel.Item key={i}>
                  <div className="image-wrapper">
                    <img
                      src={img}
                      alt={`right-${i}`}
                      className="carousel-img"
                    />
                  </div>
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