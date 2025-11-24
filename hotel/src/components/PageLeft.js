import React from "react";
import AOS from "aos";
import "./css/PageLeft.css";

export default function PageLeft() {
  React.useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section className="expL-section" data-aos="fade-up">
      <div className="expL-bg-anim" aria-hidden="true"></div>

      <div className="expL-inner">
        {/* LEFT COLUMN: Image */}
        <div className="expL-left">
          <img
          src="https://sani-prd-cdn.azureedge.net/media/jeqb4jw3/_dsc7751.jpg?rxy=0.4949874686716792,0.5939849624060151&v=1db679b02491f60&format=jpg&quality=80&width=685&height=400"
     alt="Couple enjoying their evening on Sani Marina"
            className="expL-image"
          />
        </div>

        {/* RIGHT COLUMN: Text */}
        <div className="expL-right">
          <p className="expL-sub">RELAXING EVENINGS</p>

          <div className="expL-head-wrapper">
            <h3 className="expL-head line">RELAX</h3>
            <h3 className="expL-head line">ESPACE</h3>
          </div>

          <div className="expL-paragraphs">
            <p>
              At Sani, we understand the need for a little peace and calm. We believe in providing you the opportunity to indulge in an uninterrupted dinner and to swim lengths without being splashed. That’s why a number of locations, from our soothing spas to serene beachfront spots, certain restaurants and crystal-clear pools are designated as adult-only.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
