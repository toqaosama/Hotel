import React from "react";
import AOS from "aos";
import "./css/DreamSection.css";
import sea from "../assets/images/sea.jpg";

export default function DreamSection() {
  React.useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="dream-wrapper">
      <div className="dream-container">

       

        {/* TEXT */}
        <div className="dream-text-area" data-aos="fade-up">

          {/* QUOTE MARKS */}
          <div className="quote-icon top-quote">“</div>

          {/* TEXT */}
          <blockquote className="dream-text TextReveal">
            With me, you’ll experience moments straight out of a dream.
            Can you hear them? The whispers of Greek philosophers echoing
            through this ancient forest. Stories from people around the world
            come alive on this endless beach. Here, the sea and sky unite to
            frame the most mythical mountain of all – Mount Olympus. And the
            entire Aegean unfolds its flavours before you. No, I’m not a dream.
            I am Sani – a sanctuary full of stories and experiences.
          </blockquote>

          {/* BOTTOM QUOTE */}
          <div className="quote-icon bottom-quote">”</div>

        </div>

 {/* IMAGE */}
        <div className="dream-image-wrapper" data-aos="fade-up" data-aos-delay="200">
          <img
            src={sea}  // <-- replace with your image
            alt="Aerial beach"
            className="dream-image"
          />
        </div>
      </div>
    </div>
  );
}
