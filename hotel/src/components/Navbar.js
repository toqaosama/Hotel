import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Offcanvas, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Navbar.css';
import Logo from '../assets/images/logo.png';

const BootstrapNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false);
  };

  // Mega Menu content for each dropdown
  const renderMegaMenu = (leftItems, rightContent) => (
    <div className="mega-menu-content">
      <div className="mega-menu-columns">
        <div className="mega-menu-left">
          {leftItems.map((item, index) => (
            <NavDropdown.Item key={index} href="#" onClick={handleNavClick} className="mega-menu-item">
              {item}
            </NavDropdown.Item>
          ))}
        </div>
        <div className="mega-menu-right">
          {rightContent}
        </div>
      </div>
    </div>
  );

  return (
    <Navbar 
      expand="lg" 
      bg="light" 
      fixed="top" 
      className="py-3 custom-navbar"
      expanded={expanded}
      onToggle={(isOpen) => setExpanded(isOpen)}
    >
      <Container fluid className="nav-container">
        {/* Logo */}
        <Navbar.Brand href="#" onClick={handleNavClick}>
          <img 
            src={Logo} 
            alt="Logo" 
            width="82" 
            height="35"
            className="navbar-logo"
          />
        </Navbar.Brand>

        {/* Mobile Hamburger */}
        <Navbar.Toggle aria-controls="offcanvasNavbar" />

        {/* Desktop Menu & Mobile Offcanvas */}
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1 pe-3 main-nav">
              {/* THE RESORT Dropdown */}
              <NavDropdown 
                title="THE RESORT" 
                id="resort-dropdown"
                className="nav-dropdown-custom"
              >
                {renderMegaMenu(
                  [
                    "BEACHES & POOLS",
                    "RESTAURANTS & BARS", 
                    "WELLNESS & SPA",
                    "ACTIVITIES",
                    "EVENTS",
                    "SUSTAINABILITY"
                  ],
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
                )}
              </NavDropdown>

              {/* HOTELS Dropdown */}
              <NavDropdown 
                title="HOTELS" 
                id="hotels-dropdown"
                className="nav-dropdown-custom"
              >
                {renderMegaMenu(
                  [
                    "SANI LODGE",
                    "SANI CLUB",
                    "SANI SUITES", 
                    "SANI VILLAS",
                    "SANI GRAND",
                    "ALL HOTELS"
                  ],
                  <div className="mega-menu-promo">
                    <div className="promo-banner-center">
                      <div className="promo-title-center">FREE TRANSFERS</div>
                      <div className="promo-title-center">FREE FULL BOARD</div>
                      <div className="promo-discount-center">
                        For a limited time only, secure an additional 5% discount when you book before December 1st
                      </div>
                    </div>
                  </div>
                )}
              </NavDropdown>

              {/* FAMILIES Dropdown */}
              <NavDropdown 
                title="FAMILIES" 
                id="families-dropdown"
                className="nav-dropdown-custom"
              >
                {renderMegaMenu(
                  [
                    "KIDS CLUBS",
                    "FAMILY ACTIVITIES",
                    "FAMILY ROOMS",
                    "BABY SERVICES",
                    "TEEN ACTIVITIES",
                    "FAMILY OFFERS"
                  ],
                  <div className="mega-menu-promo">
                    <div className="promo-banner-center">
                      <div className="promo-title-center">FAMILY FUN</div>
                      <div className="promo-discount-center">
                        Special activities and entertainment for all ages
                      </div>
                    </div>
                  </div>
                )}
              </NavDropdown>

              {/* GASTRONOMY Dropdown */}
              <NavDropdown 
                title="GASTRONOMY" 
                id="gastronomy-dropdown"
                className="nav-dropdown-custom"
              >
                {renderMegaMenu(
                  [
                    "RESTAURANTS",
                    "BARS & LOUNGES", 
                    "WINE TASTING",
                    "COOKING CLASSES",
                    "PRIVATE DINING",
                    "CHEF'S TABLE"
                  ],
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
                )}
              </NavDropdown>

              {/* EXPERIENCES Dropdown */}
              <NavDropdown 
                title="EXPERIENCES" 
                id="experiences-dropdown"
                className="nav-dropdown-custom"
              >
                {renderMegaMenu(
                  [
                    "WATER SPORTS",
                    "LAND ACTIVITIES",
                    "WELLNESS RETREATS", 
                    "CULTURAL TOURS",
                    "ADVENTURE SPORTS",
                    "SEASONAL EVENTS"
                  ],
                  <div className="mega-menu-promo">
                    <div className="promo-banner-center">
                      <div className="promo-title-center">UNFORGETTABLE</div>
                      <div className="promo-title-center">EXPERIENCES</div>
                      <div className="promo-discount-center">
                        Create lasting memories with our curated activities
                      </div>
                    </div>
                  </div>
                )}
              </NavDropdown>

              {/* OFFERS Dropdown */}
              <NavDropdown 
                title="OFFERS" 
                id="offers-dropdown"
                className="nav-dropdown-custom"
              >
                {renderMegaMenu(
                  [
                    "SPECIAL PACKAGES",
                    "EARLY BOOKING",
                    "LAST MINUTE DEALS",
                    "LONG STAY OFFERS", 
                    "HONEYMOON PACKAGES",
                    "ALL OFFERS"
                  ],
                  <div className="mega-menu-promo">
                    <div className="promo-banner-center">
                      <div className="promo-title-center">SPECIAL OFFER</div>
                      <div className="promo-title-center">-20% OFF</div>
                      <div className="promo-discount-center">
                        Book now and save 20% on selected packages
                      </div>
                    </div>
                  </div>
                )}
              </NavDropdown>

              {/* THE MARINA Dropdown */}
              <NavDropdown 
                title="THE MARINA" 
                id="marina-dropdown"
                className="nav-dropdown-custom"
              >
                {renderMegaMenu(
                  [
                    "YACHT SERVICES",
                    "MARINA FACILITIES", 
                    "BOAT RENTALS",
                    "FISHING TRIPS",
                    "SUNSET CRUISES",
                    "MARINA RESTAURANTS"
                  ],
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
                )}
              </NavDropdown>

              {/* GALLERY Dropdown */}
              <NavDropdown 
                title="GALLERY" 
                id="gallery-dropdown"
                className="nav-dropdown-custom"
              >
                {renderMegaMenu(
                  [
                    "PHOTO GALLERY",
                    "VIDEO TOUR", 
                    "VIRTUAL TOUR",
                    "ROOM TOUR",
                    "RESTAURANT GALLERY",
                    "360° VIEWS"
                  ],
                  <div className="mega-menu-promo">
                    <div className="promo-banner-center">
                      <div className="promo-title-center">EXPLORE OUR</div>
                      <div className="promo-title-center">GALLERY</div>
                      <div className="promo-discount-center">
                        Discover the beauty of our resort through photos and videos
                      </div>
                    </div>
                  </div>
                )}
              </NavDropdown>

              {/* Language Dropdown */}
              <NavDropdown 
                title="EN" 
                id="language-dropdown" 
                align="end"
                className="language-dropdown"
              >
                <NavDropdown.Item href="#" onClick={handleNavClick}>ENGLISH</NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={handleNavClick}>GREEK</NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={handleNavClick}>FRENCH</NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={handleNavClick}>GERMAN</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            {/* Book Now Button */}
            <Button 
              variant="warning" 
              className="book-now-btn text-uppercase"
              onClick={handleNavClick}
            >
              BOOK NOW
            </Button>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default BootstrapNavbar;