import React from "react";
import AOS from "aos";
import "./TextReveal.css";

const TextReveal = ({ children }) => {
  React.useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="text-reveal-container" data-aos="fade-up">
      <span className="text-reveal">{children}</span>
    </div>
  );
};

export default TextReveal;
