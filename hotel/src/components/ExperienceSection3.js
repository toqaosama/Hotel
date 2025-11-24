import React from "react";
import AOS from "aos";
import "./css/ExperienceSection3.css";

export default function ExperienceSection() {
  React.useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section className="exp3-section" data-aos="fade-up">
      {/* Highlight animated background */}
      <div className="exp3-bg-anim" aria-hidden="true"></div>

      <div className="exp3-inner">
        {/* LEFT COLUMN: Text */}
        <div className="exp3-text">
          <p className="exp3-sub">EXPERIENCES</p>
          <div className="exp3-head-wrapper">
            <h3 className="exp3-head line">A SANCTUARY</h3>
            <h3 className="exp3-head line">OF ADVENTURE</h3>
          </div>
          <div className="exp3-paragraphs">
            <p>
              Discover a resort where possibilities are endless. Whether it's scuba diving, beekeeping, bird watching, waterskiing – inspiration is found at every turn. Hone your game at world class facilities; including the Rafa Nadal Tennis Center, Bear Grylls Survival Academy, Chelsea Football FC Academy or Sani Treetop Adventure. Or if you want space, explore Sani Resort's 1,000 acres of unspoilt wilderness by bike.
            </p>
            <p className="exp3-link-row">
              <a className="exp3-link" href="/experiences">
                Explore More
                <span className="exp3-link-underline" />
              </a>
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Image + Video */}
        <div className="exp3-media">
          <div className="exp3-media-wrapper">
            <picture className="exp3-main-picture">
              <source
                media="(min-width: 1025px)"
                srcSet="https://sani-prd-cdn.azureedge.net/media/t2shqkge/sani_wetlands_2_792x593.jpg?v=1db679823b44bf0&format=webp&quality=80&width=720&height=720"
                type="image/jpg"
              />
              <source
                media="(max-width: 1024px)"
                srcSet="https://sani-prd-cdn.azureedge.net/media/t2shqkge/sani_wetlands_2_792x593.jpg?v=1db679823b44bf0&format=webp&quality=80&width=720&height=720"
                type="image/webp"
              />
              <img
                className="exp3-main-image"
                src="/mnt/data/9a2dce41-931f-469f-a890-61b6a0d27f6b.png"
                alt="Woman walking next to pool"
                loading="lazy"
              />
            </picture>

            {/* Video overlay */}
            <div className="exp3-video-overlay">
              <video playsInline autoPlay loop muted className="exp3-hero-video">
                <source
                  src="https://sani-prd-cdn.azureedge.net/media/t4fhsj2w/birds.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}