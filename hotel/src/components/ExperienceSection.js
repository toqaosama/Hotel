import React from "react";
import "./css/ExperienceSection.css";

export default function ExperienceSection() {
  return (
    <section className="exp2-section">
      {/* highlight animated background layer */}
      <div className="exp2-bg-anim" aria-hidden="true"></div>

      <div className="exp2-inner">
        {/* LEFT COLUMN: big image + small overlay */}
        <div className="exp2-left">
          <div className="exp2-left-media">
            <picture className="exp2-main-picture">
              {/* responsive sources */}
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
              <img
                className="exp2-main-image"
                src="/mnt/data/9a2dce41-931f-469f-a890-61b6a0d27f6b.png"
                alt="Woman walking next to pool"
                loading="lazy"
              />
            </picture>

            {/* small overlay image anchored to bottom-left of main image */}
            <div className="exp2-overlay-small" aria-hidden="true">
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
        <div className="exp2-right">
          <p className="exp2-sub">EXPERIENCES</p>

          <div className="exp2-head-wrapper">
            <h3 className="exp2-head line">A SANCTUARY</h3>
            <h3 className="exp2-head line">OF ADVENTURE</h3>
          </div>

          <div className="exp2-paragraphs">
            <p>
              Discover a resort where possibilities are endless. Whether it’s scuba diving, beekeeping, bird watching, waterskiing – inspiration is found at every turn. Hone your game at world class facilities; including the Rafa Nadal Tennis Center, Bear Grylls Survival Academy, Chelsea Football FC Academy or Sani Treetop Adventure. Or if you want space, explore Sani Resort’s 1,000 acres of unspoilt wilderness by bike.
            </p>

            <p className="exp2-link-row">
              <a className="exp2-link" href="/experiences">
                Explore More
                <span className="exp2-link-underline" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
