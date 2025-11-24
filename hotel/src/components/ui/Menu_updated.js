import React, { useState } from "react";

export const Menu = ({ setActive, children, bookNowBtn }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Hamburger Menu Button - Only visible on mobile */}
      <button 
        className="hamburger-menu"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className="navbar-menu-container">
        {children}
      </div>
      
      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <>
          <div 
            className="sidebar-overlay" 
            onClick={() => setIsSidebarOpen(false)}
          />
          <div className="mobile-sidebar">
            {children}
            {bookNowBtn && <div className="mobile-sidebar-footer">{bookNowBtn}</div>}
          </div>
        </>
      )}
    </>
  );
};

export const MenuItem = ({ setActive, active, item, children, isMobile }) => {
  const isActive = active === item;
  const [isExpanded, setIsExpanded] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActive(isActive ? null : item);
      setIsExpanded(!isExpanded);
    }
    if (e.key === "Escape") {
      setActive(null);
      setIsExpanded(false);
    }
  };

  const handleMobileToggle = () => {
    setIsExpanded(!isExpanded);
  };

  if (isMobile) {
    return (
      <div className="mobile-menu-item">
        <button
          className={`mobile-menu-trigger ${isExpanded ? "expanded" : ""}`}
          onClick={handleMobileToggle}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <span className="menu-title">{item}</span>
          <span className="toggle-icon">▼</span>
        </button>
        {isExpanded && (
          <div className="mobile-menu-content">
            {children}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className="menu-item-wrapper"
      onMouseEnter={() => setActive(item)}
      onMouseLeave={() => setActive(null)}
    >
      <div
        className={`menu-item-trigger ${isActive ? "active" : ""}`}
        role="button"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onClick={() => setActive(isActive ? null : item)}
      >
        {item}
      </div>
      {isActive && (
        <div className="menu-content-wrapper">
          {children}
        </div>
      )}
    </div>
  );
};

export const HoveredLink = ({ href, children }) => {
  return (
    <a href={href} className="hovered-link" tabIndex={0}>
      {children}
    </a>
  );
};

export const ProductItem = ({ title, href, src, description }) => {
  return (
    <a href={href} className="product-item" tabIndex={0}>
      <div className="product-item-image">
        <img src={src} alt={title} />
      </div>
      <div className="product-item-content">
        <h4 className="product-item-title">{title}</h4>
        <p className="product-item-description">{description}</p>
      </div>
    </a>
  );
};
