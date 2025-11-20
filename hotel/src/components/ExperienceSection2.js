import React from "react";
import "./css/ExperienceSection2.css";

export default function ExperienceSection() {
  return (
    <section className="exp-section">
      {/* highlight animated background layer */}
      <div className="exp-bg-anim" aria-hidden="true"></div>

      <div className="exp-inner">
        {/* LEFT COLUMN: big image + video overlay */}
        <div className="exp-left">
          <div className="exp-left-media">
            <picture className="exp-main-picture">
              <source
                media="(min-width: 1025px)"
                srcSet="https://sani-prd-cdn.azureedge.net/media/h15neh1i/a003c0302_241030_xyed03square.jpg?v=1db679aadc624b0&format=webp&quality=80&width=720&height=720"
                type="image/jpg"
              />
              <source
                media="(max-width: 1024px)"
                srcSet="https://sani-prd-cdn.azureedge.net/media/h15neh1i/a003c0302_241030_xyed03square.jpg?v=1db679aadc624b0&format=webp&quality=80&width=720&height=720"
                type="image/webp"
              />
              <img
                className="exp-main-image"
                src="/mnt/data/9a2dce41-931f-469f-a890-61b6a0d27f6b.png"
                alt="Woman walking next to pool"
                loading="lazy"
              />
            </picture>

            {/* video overlay anchored on top of main image */}
            <div className="exp-video-overlay">
              <video playsInline autoPlay loop muted className="hero-video">
                <source
                  src="https://sani-prd-cdn.azureedge.net/media/w1mcgpml/fit.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: text */}
        <div className="exp-right">
          <p className="exp-sub">EXPERIENCES</p>
          <div className="exp-head-wrapper">
            <h3 className="exp-head line">A SANCTUARY</h3>
            <h3 className="exp-head line">OF ADVENTURE</h3>
          </div>
          <div className="exp-paragraphs">
            <p>
              Discover a resort where possibilities are endless. Whether it’s scuba diving, beekeeping, bird watching, waterskiing – inspiration is found at every turn. Hone your game at world class facilities; including the Rafa Nadal Tennis Center, Bear Grylls Survival Academy, Chelsea Football FC Academy or Sani Treetop Adventure. Or if you want space, explore Sani Resort’s 1,000 acres of unspoilt wilderness by bike.
            </p>
            <p className="exp-link-row">
              <a className="exp-link" href="/experiences">
                Explore More
                <span className="exp-link-underline" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
