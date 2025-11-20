import React, { useRef } from "react";
import "./css/CardCarousel.css";

const cardsData = [
  {
    category: "Updates",
    title: "Sani Asterias’ Elegant New Residences",
    description:
      "Boasting a luxurious look and feel, in 2025 guests can enjoy the very ultimate in sophistication staying in Sani Asterias’ newly renovated chic and homely residences, some of which come with private pools.",
    img: "https://sani-prd-cdn.azureedge.net/media/1urhyzgq/sani25-00256_2880x2159.jpg",
    link: "/news/sani-asterias-new-residences-2025",
  },
  {
    category: "Music",
    title: "Sani, a Sanctuary for Inspiration",
    description:
      "Discover an extraordinary creative retreat where six remarkable artists found inspiration - turning the rhythm of the sea, the whispers of the pines and the warmth of connection into unforgettable melodies.",
    img: "https://sani-prd-cdn.azureedge.net/media/jzlnh13c/sani-full13_2880x1920.jpg",
    link: "/sani-a-sanctuary-for-inspiration",
  },
  {
    category: "Festival",
    title: "Sani Gourmet Festival Highlights",
    description:
      "Enjoy world-class culinary experiences, live music and unforgettable events at the Sani Gourmet Festival.",
    img: "https://sani-prd-cdn.azureedge.net/media/3d1iitjh/sani-festival_sani-gourmet.jpg",
    link: "/sani-gourmet-festival",
  },
];

export default function CardCarousel({ title }) {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <section className="carousel-section">
      <div className="carousel-header">
        <h2>{title}</h2>
        <p>Stay informed of Sani Resort’s latest initiatives and accomplishments.</p>
        <a href="/news" className="all-news">
          All news
        </a>
      </div>
      <div className="carousel-wrapper">
        <button className="scroll-btn left" onClick={scrollLeft}>
          &#10094;
        </button>
        <div className="carousel" ref={carouselRef}>
          {cardsData.map((card, index) => (
            <div className="card" key={index}>
              <div className="card-img">
                <img src={card.img} alt={card.title} />
              </div>
              <div className="card-content">
                <p className="category">{card.category}</p>
                <h3>{card.title}</h3>
                <p className="description">{card.description}</p>
                <a href={card.link} className="discover">
                  Discover More
                </a>
              </div>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={scrollRight}>
          &#10095;
        </button>
      </div>
    </section>
  );
}
