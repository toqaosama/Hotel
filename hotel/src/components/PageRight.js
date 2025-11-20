import React from "react";
import "./css/PageRight.css";

export default function PageRight() {
  return (
    <section className="expR-section">
      {/* background animation */}
      <div className="expR-bg-anim" aria-hidden="true"></div>

      <div className="expR-inner">
        {/* LEFT COLUMN: Text */}
        <div className="expR-left">
          <p className="expR-sub">RELAXING EVENINGS</p>

          <div className="expR-head-wrapper">
            <h3 className="expR-head line">RELAX</h3>
            <h3 className="expR-head line">ESPACE</h3>
          </div>

          <div className="expR-paragraphs">
            <p>
              At Sani, we understand the need for a little peace and calm. We believe in providing you the opportunity to indulge in an uninterrupted dinner and to swim lengths without being splashed. That’s why a number of locations, from our soothing spas to serene beachfront spots, certain restaurants and crystal-clear pools are designated as adult-only.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Image */}
        <div className="expR-right">
          <img
            src="https://sani-prd-cdn.azureedge.net/media/4rrppfwf/_dsc7191.jpg?v=1db67983c3185d0&format=webp&quality=80&width=685&height=400"

                       alt="Couple enjoying their evening on Sani Marina"
            className="expR-image"
          />
        </div>
      </div>
    </section>
  );
}
