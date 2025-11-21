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
                <div className="dropdown-content-wrapper">
                  <div className="dropdown-menu-left">
                    <NavDropdown.Item href="#" onClick={handleNavClick}>BEACHES & POOLS</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={handleNavClick}>RESTAURANTS & BARS</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={handleNavClick}>GASTRONOMY</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={handleNavClick}>EXPERIENCES</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={handleNavClick}>THE MARINA</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={handleNavClick}>GALLERY</NavDropdown.Item>
                  </div>
                  <div className="dropdown-menu-right">
                    <NavDropdown.Item href="#" onClick={handleNavClick} className="image-menu-item">
                      <img
                        src="https://sani-prd-cdn.azureedge.net/media/dwfg4dks/sani_masterplan_1_2880x1918.jpg"
                        alt="Resort Map"
                        className="menu-image"
                      />
                      <div className="image-caption">
                        <span>RESORT MAP</span>
                      </div>
                    </NavDropdown.Item>
                  </div>
                </div>
              </NavDropdown>

              {/* HOTELS Dropdown */}
              <NavDropdown 
                title="HOTELS" 
                id="hotels-dropdown"
                className="nav-dropdown-custom"
              >
                <div className="dropdown-content-wrapper">
                  <div className="dropdown-menu-left">
                    <NavDropdown.Item href="#" onClick={handleNavClick}>HOTEL 1</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={handleNavClick}>HOTEL 2</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={handleNavClick}>HOTEL 3</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={handleNavClick}>HOTEL 4</NavDropdown.Item>
                  </div>
                  <div className="dropdown-menu-right">
                    <div className="promo-banner">
                      <div className="promo-text">
                        <div className="promo-title">FREE TRANSFERS</div>
                        <div className="promo-subtitle">FREE FULL BOARD</div>
                        <div className="promo-discount">
                          For a limited time only, secure an additional 5% discount when you book before December 1st
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </NavDropdown>

              {/* Other Nav Items */}
              <Nav.Link href="#" onClick={handleNavClick} className="nav-link-custom">FAMILIES</Nav.Link>
              <Nav.Link href="#" onClick={handleNavClick} className="nav-link-custom">GASTRONOMY</Nav.Link>
              <Nav.Link href="#" onClick={handleNavClick} className="nav-link-custom">EXPERIENCES</Nav.Link>
              <Nav.Link href="#" onClick={handleNavClick} className="nav-link-custom">OFFERS</Nav.Link>
              <Nav.Link href="#" onClick={handleNavClick} className="nav-link-custom">THE MARINA</Nav.Link>
              <Nav.Link href="#" onClick={handleNavClick} className="nav-link-custom">GALLERY</Nav.Link>

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