import React from "react";
import "./css/SplitHoverSection.css";
import rightArrow from "../assets/images/rightArrow.png";

export default function SplitHoverSection() {
  return (
    <div className="split-section">
      <div className="split-inner">

        {/* LEFT ICON */}
        <span className="icon-left">
          <img
            src="https://sani-prd-cdn.azureedge.net/media/ea4df02f/vectorpaint.svg"
            alt="left"
          />
        </span>

        {/* TEXT (hidden until hover) */}
        <span className="split-title">
          <p>Resort Map</p>
        </span>

        {/* RIGHT ICON */}
        <span className="icon-right">
          <img src="https://img.icons8.com/?size=100&id=39777&format=png&color=FFFFFF" alt="right" />
        </span>

      </div>
    </div>
  );
}
