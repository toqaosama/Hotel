import React from "react";
import "./css/AboutSection.css";

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-inner">
        <div className="about-content">
          <div className="about-subtitle">GASTRONOMY</div>

          <div className="about-title-wrapper">
            <h1 className="about-title">
              <span>F</span><span>O</span><span>R</span><span>F</span><span>O</span><span>O</span><span>D</span>
            </h1>
            <h1 className="about-title">
              <span>P</span><span>L</span><span>A</span><span>T</span><span>E</span>
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
