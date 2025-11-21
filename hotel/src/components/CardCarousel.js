import React, { useRef, useState } from "react";
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
  const [mouseX, setMouseX] = useState(0);

  const letters = "NEWS".split("");

  /* ------------------ CURSOR MOVEMENT ------------------ */
  const handleMouseMove = (e) => {
    const circle = document.getElementById("cursorCircle");
    const text = document.getElementById("cursorText");

    circle.style.opacity = 1;
    circle.style.transform = `translate(${e.clientX - 40}px, ${e.clientY - 40}px)`;

    const wrap = carouselRef.current.getBoundingClientRect();

    if (e.clientX < wrap.left + wrap.width / 2) {
      text.innerText = "Prev";
    } else {
      text.innerText = "Next";
    }

    setMouseX(e.clientX);
  };

  const handleMouseLeave = () => {
    const circle = document.getElementById("cursorCircle");
    circle.style.opacity = 0;
  };

  const handleClick = () => {
    const wrap = carouselRef.current.getBoundingClientRect();

    if (mouseX < wrap.left + wrap.width / 2) {
      carouselRef.current.scrollBy({ left: -350, behavior: "smooth" });
    } else {
      carouselRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  

  return (
    <section className="carousel-section">
      {/* -------- HEADER -------- */}
      <div className="carousel-header-wrapper">

        {/* LEFT BLOCK */}
        <div className="header-left">
          <p className="header-category"></p>

          <div className="animated-title">
            {letters.map((letter, i) => (
              <span
                key={i}
                className="letter"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT BLOCK */}
        <div className="header-right">
          <p className="header-desc">
            Stay informed of Sani Resort’s latest initiatives and accomplishments.
          </p>

          <a href="/news" className="all-news-link">
            All news
            <span></span>
          </a>
        </div>
      </div>

      {/* -------- CAROUSEL -------- */}
      <div
        className="carousel-wrapper"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {/* CUSTOM CURSOR CIRCLE */}
        <div className="cursor-circle" id="cursorCircle">
          <span id="cursorText">Next</span>
        </div>

        {/* CARDS */}
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
                <a href={card.link} className="discover">Discover More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
