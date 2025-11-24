import React, { useState } from "react";

export const Menu = ({ setActive, children }) => {
  return (
    <div className="navbar-menu-container">
      {children}
    </div>
  );
};

export const MenuItem = ({ setActive, active, item, children }) => {
  const isActive = active === item;

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActive(isActive ? null : item);
    }
    if (e.key === "Escape") {
      setActive(null);
    }
  };

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
