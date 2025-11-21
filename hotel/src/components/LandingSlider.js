import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "./css/LandingSlider.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../assets/images/slider1.jpg";
import slider2 from "../assets/images/slider2.jpg";
import slider3 from "../assets/images/slider3.jpg";

const slides = [
  {
    image: slider2,
    smallTitle: "SURVIVAL",
    mainTitle: "BEAR GRYLLS SURVIVAL ACADEMY",
    cta: "Discover More",
  },
  {
    image: slider1,
    smallTitle: "ADVENTURE",
    mainTitle: "EXPLORING THE WILDERNESS",
    cta: "Explore Now",
  },
  {
    image: slider3,
    smallTitle: "NATURE",
    mainTitle: "GREEN & WILD JOURNEY",
    cta: "Join Us",
  },
];

const LandingSlider = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [showCursor, setShowCursor] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderRef = useRef(null);

  // Capture mouse movement to update cursor position 
  useEffect(() => {
    const move = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

      // Show cursor only if mouse is on left third of viewport
      if (e.clientX < window.innerWidth / 3) {
        setShowCursor(true);
      } else {
        setShowCursor(false);
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
  };

  // Calculate previous slide index circularly
  const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
  const prevSlide = slides[prevIndex];

  return (
    <>
      <div
        className="landing-slider"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
          setShowCursor(false);
        }}
      >
        <Slider ref={sliderRef} {...settings}>
          {slides.map(({ image, smallTitle, mainTitle, cta }, idx) => (
            <div className="slide" key={idx}>
              <img src={image} alt={mainTitle} className="slide-image" />
              <div className="slide-text">
                <div className="small-title">{smallTitle}</div>
                <h1 className="main-title">{mainTitle}</h1>
                <a href="#!" className="slide-cta">{cta}</a>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Custom circular "PREVIOUS" cursor with previous slide text */}
      {isHovering && showCursor && (
        <div
          className="custom-cursor"
          style={{
            left: cursorPos.x,
            top: cursorPos.y,
          }}
          onClick={() => sliderRef.current.slickPrev()}
        >
          <span className="cursor-text">PREVIOUS</span>
          <div className="prev-slide-text">
            <div className="prev-small-title">{prevSlide.smallTitle}</div>
            <h2 className="prev-main-title">{prevSlide.mainTitle}</h2>
            <a href="#!" className="prev-cta">{prevSlide.cta}</a>
          </div>
        </div>
      )}
    </>
  );
};

export default LandingSlider;