import React from "react";
import "./TextReveal.css";

const TextReveal = ({ children }) => {
  return (
    <div className="text-reveal-container">
      <span className="text-reveal">{children}</span>
    </div>
  );
};

export default TextReveal;
