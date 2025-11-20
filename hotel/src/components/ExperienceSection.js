import React from "react";
import "./css/ExperienceSection.css";



export default function ExperienceSection() {
  return (
    <section className="exp-section">
      {/* highlight animated background layer */}
      <div className="exp-bg-anim" aria-hidden="true"></div>

      <div className="exp-inner">
        {/* LEFT COLUMN: big image + small overlay */}
        <div className="exp-left">
          <div className="exp-left-media">
            <picture className="exp-main-picture">
              {/* responsive sources (kept your CDN versions) */}
              <source
                media="(min-width: 1025px)"
                srcSet="https://sani-prd-cdn.azureedge.net/media/l1cg2pjq/_dsc0435.jpg?v=1db6798543549f0&format=jpg&quality=80"
                type="image/jpg"
              />
              <source
                media="(max-width: 1024px)"
                srcSet="https://sani-prd-cdn.azureedge.net/media/l1cg2pjq/_dsc0435.jpg?v=1db6798543549f0&format=webp&quality=80"
                type="image/webp"
              />
              {/* fallback to uploaded local file for fast local testing */}
              <img
                className="exp-main-image"
                src="/mnt/data/9a2dce41-931f-469f-a890-61b6a0d27f6b.png"
                alt="Woman walking next to pool"
                loading="lazy"
              />
            </picture>

            {/* small overlay image anchored to bottom-left of main image */}
            <div className="exp-overlay-small" aria-hidden="true">
              <picture>
                <source
                  media="(min-width: 1024px)"
                  srcSet="https://sani-prd-cdn.azureedge.net/media/izyjs4ek/a003c0302_241030_xyed03vertical.jpg?v=1db679a45b9f180&format=jpg&quality=80"
                  type="image/jpg"
                />
                <img
                  src="https://sani-prd-cdn.azureedge.net/media/izyjs4ek/a003c0302_241030_xyed03vertical.jpg?v=1db679a45b9f180&format=jpg&quality=80"
                  alt="Sea view small"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: text */}
        <div className="exp-right">
          <p className="exp-sub">EXPERIENCES</p>

          {/* animated headline: line-by-line reveal via CSS */}
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
