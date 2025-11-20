import React from "react";
import "./css/ExperienceSection2.css";

export default function ExperienceSection() {
  return (
    <>
      {/* MAIN EXPERIENCE SECTION */}
      <section className="exp3-section">
        <div className="exp3-bg-anim" aria-hidden="true"></div>

        <div className="exp3-inner">
          {/* LEFT COLUMN: big image + video overlay */}
          <div className="exp3-media">
            <div className="exp3-media-wrapper">
              <picture className="exp3-main-picture">
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
                  className="exp3-main-image"
                  src="/mnt/data/9a2dce41-931f-469f-a890-61b6a0d27f6b.png"
                  alt="Woman walking next to pool"
                  loading="lazy"
                />
              </picture>

              <div className="exp3-video-overlay">
                <video playsInline autoPlay loop muted className="exp3-hero-video">
                  <source
                    src="https://sani-prd-cdn.azureedge.net/media/w1mcgpml/fit.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: text */}
          <div className="exp3-text">
            <p className="exp3-sub exp3-animate" style={{ animationDelay: '0.2s' }}>EXPERIENCES</p>
            <div className="exp3-head-wrapper">
              <h3 className="exp3-head line exp3-animate" style={{ animationDelay: '0.4s' }}>A SANCTUARY</h3>
              <h3 className="exp3-head line exp3-animate" style={{ animationDelay: '0.6s' }}>OF ADVENTURE</h3>
            </div>
            <div className="exp3-paragraphs exp3-animate" style={{ animationDelay: '0.8s' }}>
              <p>
                Discover a resort where possibilities are endless. Whether it’s scuba diving, beekeeping, bird watching, waterskiing – inspiration is found at every turn. Hone your game at world class facilities; including the Rafa Nadal Tennis Center, Bear Grylls Survival Academy, Chelsea Football FC Academy or Sani Treetop Adventure. Or if you want space, explore Sani Resort’s 1,000 acres of unspoilt wilderness by bike.
              </p>
              <p className="exp3-link-row">
                <a className="exp3-link" href="/experiences">
                  Explore More
                  <span className="exp3-link-underline" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AWARD / WINNER SECTION */}
      <section className="award-section">
        <div className="award-inner">
          <div className="award-image award-animate" style={{ animationDelay: '0.2s' }}>
            <img
              src="https://sani-prd-cdn.azureedge.net/media/y20b1k41/worlds-leading-family-beach-resort-2024-winner-shield-black-256.png?v=1dbca31e9a75ef0"
              alt="World’s Leading Family & Beach Resort - WINNER 2024"
            />
          </div>
          <div className="award-text">
            <p className="award-subtitle award-animate" style={{ animationDelay: '0.4s' }}>WINNER 2024</p>
            <p className="award-title award-animate" style={{ animationDelay: '0.6s' }}>
              World’s Leading Family & Beach Resort
            </p>
            <p className="award-description award-animate" style={{ animationDelay: '0.8s' }}>
              Named the World’s Leading Family & Beach Resort for the sixth consecutive year, Sani celebrates success at the prestigious World Travel Awards.
            </p>
          </div>
          <div className="award-link award-animate" style={{ animationDelay: '1s' }}>
            <a href="/news/world-travel-awards-2024">
              Discover More
              <span className="award-link-underline"></span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
