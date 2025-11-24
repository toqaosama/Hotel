import React, { useState, useEffect } from 'react';
import { Menu, MenuItem, HoveredLink } from './ui/Menu';
import './css/Navbar.css';
import Logo from '../assets/images/logo.png';

const BootstrapNavbar = () => {
  const [active, setActive] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setActive(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="custom-navbar">
      <div className="nav-container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-brand">
            <img 
              src={Logo} 
              alt="Logo" 
              width="82" 
              height="35"
              className="navbar-logo"
            />
          </div>

          {/* Main Navigation */}
          <Menu setActive={setActive} bookNowBtn={<button className="book-now-btn">BOOK NOW</button>}>
            {/* THE RESORT */}
            <MenuItem setActive={setActive} active={active} item="THE RESORT" isMobile={isMobile}>
              <div className="mega-menu-content">
                <div className="mega-menu-columns">
                  <div className="mega-menu-left">
                    <HoveredLink href="#">BEACHES & POOLS</HoveredLink>
                    <HoveredLink href="#">RESTAURANTS & BARS</HoveredLink>
                    <HoveredLink href="#">WELLNESS & SPA</HoveredLink>
                    <HoveredLink href="#">ACTIVITIES</HoveredLink>
                    <HoveredLink href="#">EVENTS</HoveredLink>
                    <HoveredLink href="#">SUSTAINABILITY</HoveredLink>
                  </div>
                  <div className="mega-menu-right">
                    <div className="mega-menu-promo">
                      <div className="promo-image-item">
                        <img
                          src="https://sani-prd-cdn.azureedge.net/media/dwfg4dks/sani_masterplan_1_2880x1918.jpg"
                          alt="Resort Map"
                          className="promo-image"
                        />
                        <div className="promo-text-center">
                          <span>RESORT MAP</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MenuItem>

            {/* HOTELS */}
            <MenuItem setActive={setActive} active={active} item="HOTELS" isMobile={isMobile}>
              <div className="mega-menu-content">
                <div className="mega-menu-columns">
                  <div className="mega-menu-left">
                    <HoveredLink href="#">SANI LODGE</HoveredLink>
                    <HoveredLink href="#">SANI CLUB</HoveredLink>
                    <HoveredLink href="#">SANI SUITES</HoveredLink>
                    <HoveredLink href="#">SANI VILLAS</HoveredLink>
                    <HoveredLink href="#">SANI GRAND</HoveredLink>
                    <HoveredLink href="#">ALL HOTELS</HoveredLink>
                  </div>
                  <div className="mega-menu-right">
                    <div className="mega-menu-promo">
                      <div className="promo-banner-center">
                        <div className="promo-title-center">FREE TRANSFERS</div>
                        <div className="promo-title-center">FREE FULL BOARD</div>
                        <div className="promo-discount-center">
                          For a limited time only, secure an additional 5% discount when you book before December 1st
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MenuItem>

            {/* FAMILIES */}
            <MenuItem setActive={setActive} active={active} item="FAMILIES" isMobile={isMobile}>
              <div className="mega-menu-content">
                <div className="mega-menu-columns">
                  <div className="mega-menu-left">
                    <HoveredLink href="#">KIDS CLUBS</HoveredLink>
                    <HoveredLink href="#">FAMILY ACTIVITIES</HoveredLink>
                    <HoveredLink href="#">FAMILY ROOMS</HoveredLink>
                    <HoveredLink href="#">BABY SERVICES</HoveredLink>
                    <HoveredLink href="#">TEEN ACTIVITIES</HoveredLink>
                    <HoveredLink href="#">FAMILY OFFERS</HoveredLink>
                  </div>
                  <div className="mega-menu-right">
                    <div className="mega-menu-promo">
                      <div className="promo-banner-center">
                        <div className="promo-title-center">FAMILY FUN</div>
                        <div className="promo-discount-center">
                          Special activities and entertainment for all ages
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MenuItem>

            {/* GASTRONOMY */}
            <MenuItem setActive={setActive} active={active} item="GASTRONOMY" isMobile={isMobile}>
              <div className="mega-menu-content">
                <div className="mega-menu-columns">
                  <div className="mega-menu-left">
                    <HoveredLink href="#">RESTAURANTS</HoveredLink>
                    <HoveredLink href="#">BARS & LOUNGES</HoveredLink>
                    <HoveredLink href="#">WINE TASTING</HoveredLink>
                    <HoveredLink href="#">COOKING CLASSES</HoveredLink>
                    <HoveredLink href="#">PRIVATE DINING</HoveredLink>
                    <HoveredLink href="#">CHEF'S TABLE</HoveredLink>
                  </div>
                  <div className="mega-menu-right">
                    <div className="mega-menu-promo">
                      <div className="promo-image-item">
                        <img
                          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                          alt="Fine Dining"
                          className="promo-image"
                        />
                        <div className="promo-text-center">
                          <span>FINE DINING</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MenuItem>

            {/* EXPERIENCES */}
            <MenuItem setActive={setActive} active={active} item="EXPERIENCES" isMobile={isMobile}>
              <div className="mega-menu-content">
                <div className="mega-menu-columns">
                  <div className="mega-menu-left">
                    <HoveredLink href="#">WATER SPORTS</HoveredLink>
                    <HoveredLink href="#">LAND ACTIVITIES</HoveredLink>
                    <HoveredLink href="#">WELLNESS RETREATS</HoveredLink>
                    <HoveredLink href="#">CULTURAL TOURS</HoveredLink>
                    <HoveredLink href="#">ADVENTURE SPORTS</HoveredLink>
                    <HoveredLink href="#">SEASONAL EVENTS</HoveredLink>
                  </div>
                  <div className="mega-menu-right">
                    <div className="mega-menu-promo">
                      <div className="promo-banner-center">
                        <div className="promo-title-center">UNFORGETTABLE</div>
                        <div className="promo-title-center">EXPERIENCES</div>
                        <div className="promo-discount-center">
                          Create lasting memories with our curated activities
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MenuItem>

            {/* OFFERS */}
            <MenuItem setActive={setActive} active={active} item="OFFERS" isMobile={isMobile}>
              <div className="mega-menu-content">
                <div className="mega-menu-columns">
                  <div className="mega-menu-left">
                    <HoveredLink href="#">SPECIAL PACKAGES</HoveredLink>
                    <HoveredLink href="#">EARLY BOOKING</HoveredLink>
                    <HoveredLink href="#">LAST MINUTE DEALS</HoveredLink>
                    <HoveredLink href="#">LONG STAY OFFERS</HoveredLink>
                    <HoveredLink href="#">HONEYMOON PACKAGES</HoveredLink>
                    <HoveredLink href="#">ALL OFFERS</HoveredLink>
                  </div>
                  <div className="mega-menu-right">
                    <div className="mega-menu-promo">
                      <div className="promo-banner-center">
                        <div className="promo-title-center">SPECIAL OFFER</div>
                        <div className="promo-title-center">-20% OFF</div>
                        <div className="promo-discount-center">
                          Book now and save 20% on selected packages
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MenuItem>

            {/* THE MARINA */}
            <MenuItem setActive={setActive} active={active} item="THE MARINA" isMobile={isMobile}>
              <div className="mega-menu-content">
                <div className="mega-menu-columns">
                  <div className="mega-menu-left">
                    <HoveredLink href="#">YACHT SERVICES</HoveredLink>
                    <HoveredLink href="#">MARINA FACILITIES</HoveredLink>
                    <HoveredLink href="#">BOAT RENTALS</HoveredLink>
                    <HoveredLink href="#">FISHING TRIPS</HoveredLink>
                    <HoveredLink href="#">SUNSET CRUISES</HoveredLink>
                    <HoveredLink href="#">MARINA RESTAURANTS</HoveredLink>
                  </div>
                  <div className="mega-menu-right">
                    <div className="mega-menu-promo">
                      <div className="promo-image-item">
                        <img
                          src="https://images.unsplash.com/photo-1501950183564-3c8ac97d08f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                          alt="Marina View"
                          className="promo-image"
                        />
                        <div className="promo-text-center">
                          <span>MARINA VIEW</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MenuItem>

            {/* GALLERY */}
            <MenuItem setActive={setActive} active={active} item="GALLERY" isMobile={isMobile}>
              <div className="mega-menu-content">
                <div className="mega-menu-columns">
                  <div className="mega-menu-left">
                    <HoveredLink href="#">PHOTO GALLERY</HoveredLink>
                    <HoveredLink href="#">VIDEO TOUR</HoveredLink>
                    <HoveredLink href="#">VIRTUAL TOUR</HoveredLink>
                    <HoveredLink href="#">ROOM TOUR</HoveredLink>
                    <HoveredLink href="#">RESTAURANT GALLERY</HoveredLink>
                    <HoveredLink href="#">360° VIEWS</HoveredLink>
                  </div>
                  <div className="mega-menu-right">
                    <div className="mega-menu-promo">
                      <div className="promo-banner-center">
                        <div className="promo-title-center">EXPLORE OUR</div>
                        <div className="promo-title-center">GALLERY</div>
                        <div className="promo-discount-center">
                          Discover the beauty of our resort through photos and videos
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MenuItem>
          </Menu>
        </div>
      </div>

      {/* Full Screen Menu Background */}
      {active && <div className="menu-overlay" onClick={() => setActive(null)} />}
    </div>
  );
};

export default BootstrapNavbar;