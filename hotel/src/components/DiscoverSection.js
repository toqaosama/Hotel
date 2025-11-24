import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { motion } from "framer-motion";
import AOS from "aos";
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
  React.useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section className="resort-section-wrapper" aria-labelledby="resort-heading">
      <Container className="resort-container">
        <Row className="resort-row align-items-center">
          {/* Left Carousel - Hidden on mobile */}
          <Col xl={4} lg={4} md={4} className="carousel-column left-carousel d-none d-md-block">
            <Carousel 
              indicators={false} 
              controls={false} 
              fade 
              interval={3000}
              touch={false}
            >
              {leftImages.map((img, i) => (
                <Carousel.Item key={i}>
                  <div className="image-wrapper">
                    <img
                      src={img}
                      alt={`Resort view ${i + 1}`}
                      className="carousel-img"
                      loading="lazy"
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>

          {/* Middle Text Content - Full width on mobile */}
          <Col xl={4} lg={4} md={4} xs={12} className="text-content-column">
            <motion.div
              className="text-content-wrapper"
              data-aos="fade-up"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
            >
              <p className="resort-title">The Resort</p>
              
              {/* Updated Heading Structure */}
              <div className="resort-heading-wrapper" id="resort-heading">
                <div className="heading-line">
                  <h2 className="resort-heading">FIVE</h2>
                  <h2 className="resort-heading">HOTELS</h2>
                </div>
                <div className="heading-line">
                  <h2 className="resort-heading highlight-gold">ONE</h2>
                  <h2 className="resort-heading highlight-gold">RESORT</h2>
                </div>
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

          {/* Right Carousel - Hidden on mobile */}
          <Col xl={4} lg={4} md={4} className="carousel-column right-carousel d-none d-md-block">
            <Carousel 
              indicators={false} 
              controls={false} 
              fade 
              interval={3000}
              touch={false}
            >
              {rightImages.map((img, i) => (
                <Carousel.Item key={i}>
                  <div className="image-wrapper">
                    <img
                      src={img}
                      alt={`Resort view ${i + 3}`}
                      className="carousel-img"
                      loading="lazy"
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>

          {/* Mobile Image Carousel - Only shows on mobile */}
          <Col xs={12} className="carousel-column mobile-carousel d-md-none">
            <Carousel 
              indicators={true} 
              controls={true} 
              interval={4000}
              touch={true}
            >
              {[...leftImages, ...rightImages].map((img, i) => (
                <Carousel.Item key={i}>
                  <div className="image-wrapper mobile-image-wrapper">
                    <img
                      src={img}
                      alt={`Sani Resort view ${i + 1}`}
                      className="carousel-img mobile-img"
                      loading="lazy"
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ResortSection;