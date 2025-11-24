import React from "react";
import AOS from "aos";
import "./css/AboutSection.css";

export default function AboutSection() {
  React.useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section className="about-section">
      <div className="about-inner">
        <div className="about-content" data-aos="fade-up">
          <div className="about-subtitle">GASTRONOMY</div>

          <div className="about-title-wrapper">
            <h1 className="about-title">
              <span data-aos="fade-up" data-aos-delay="0">F</span><span data-aos="fade-up" data-aos-delay="100">O</span><span data-aos="fade-up" data-aos-delay="200">R</span><span data-aos="fade-up" data-aos-delay="300">F</span><span data-aos="fade-up" data-aos-delay="400">O</span><span data-aos="fade-up" data-aos-delay="500">O</span><span data-aos="fade-up" data-aos-delay="600">D</span>
            </h1>
            <h1 className="about-title">
              <span data-aos="fade-up" data-aos-delay="0">P</span><span data-aos="fade-up" data-aos-delay="100">L</span><span data-aos="fade-up" data-aos-delay="200">A</span><span data-aos="fade-up" data-aos-delay="300">T</span><span data-aos="fade-up" data-aos-delay="400">E</span>
            </h1>
          </div>

          <div className="about-paragraphs">
            <p>
              Home to 26 restaurants, we pride ourselves on world-class cuisines to suit every palate. 
              From authentic Greek fare to timeless Italian favourites or the freshest sushi; 
              with exclusive menus expertly crafted by Michelin-starred chefs and kitchens run with passion, 
              choice is abundant at Sani Resort.
            </p>
            <p>
              <a href="/gastronomy" className="about-link">
                Explore the tastes of Sani
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="about-video-wrapper">
        <video
          className="about-video"
          poster="https://sani-prd-cdn.azureedge.net/media/c1opuhj1/_dsc2481.jpg?v=1db68319d2f4a90&format=jpg&quality=80&width=1024&height=512"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://sani-prd-cdn.azureedge.net/media/by4n2pud/gastronomy.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
}