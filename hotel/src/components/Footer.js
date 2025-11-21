// Footer.jsx
import React from 'react';
import './css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="brand-name">
            <span className="brand-sani">SANI</span>
            <span className="brand-resort">RESORT</span>
          </div>
        </div>
        
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="section-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/book-hotel">Book Hotel</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/covid-19">Covid-19</a></li>
              <li><a href="/sustainability">Sustainability</a></li>
              <li><a href="/news">News</a></li>
              <li><a href="/awards">Awards</a></li>
              <li><a href="/weddings">Weddings</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="section-title">Connect</h3>
            <ul className="footer-links">
              <li><a href="/app">Our San App</a></li>
              <li><a href="/rewards">San Rewards</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/location">Location</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="section-title">Get In Touch</h3>
            <div className="contact-info">
              <p className="contact-email">infosan@saniresort.gr</p>
              <p className="contact-phone">0800 949 6809</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-policies">
            <a href="/disclaimer">DISCLAIMER</a>
            <a href="/accessibility">ACCESSIBILITY</a>
            <a href="/privacy-policy">PRIVACY POLICY</a>
            <a href="/usc-hymge-policy">USC & HYMGE POLICY</a>
            <a href="/conform-it-conference">CONFORM IT CONFERENCE</a>
            <a href="/cookies-policy">COOKIES POLICY</a>
            <a href="/terms-conditions">TERMS & CONDITIONS</a>
            <a href="/package-cornies">PACKAGE CORNIES</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;