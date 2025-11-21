import React, { useState } from 'react';
import './css/preFooter.css';

const NewsletterSignup = () => {
  const [formData, setFormData] = useState({
    dot_salutationid: '',
    firstname: '',
    lastname: '',
    emailaddress1: '',
    birthdate: '',
    dot_countryofresidenceid: '',
    dot_haschildren: '0',
  });

  const [showOptional, setShowOptional] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Called when the user focuses any of the initial inputs
  const handleFocus = () => {
    if (!showOptional) setShowOptional(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      aria-label="Newsletter Signup"
      className="newsletter-signup-form"
      onSubmit={handleSubmit}
    >
      <div className="newsletter-layout">
        {/* Header Section */}
        <div className="header-section">
          <div className="header-container">
            <div className="header-title">SIGN-UP FOR OUR NEWSLETTER</div>
            <div className="header-subtitle">
              Sign up to our newsletter and keep up to date with all our exciting happenings and offers
            </div>
          </div>
        </div>

        {/* Title, First Name, Last Name Section */}
        <div className="name-section">
          <div className="name-container">
            {/* Title */}
            <div className="field-container">
              <div className="form-field">
                <label className="field-label">Title</label>
                <input
                  type="text"
                  name="dot_salutationid"
                  required
                  autoComplete="off"
                  value={formData.dot_salutationid}
                  onChange={handleChange}
                  onFocus={handleFocus}  // Trigger reveal on focus
                  className="field-input"
                />
              </div>
            </div>

            {/* First Name */}
            <div className="field-container">
              <div className="form-field">
                <label className="field-label">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  maxLength="50"
                  required
                  value={formData.firstname}
                  onChange={handleChange}
                  onFocus={handleFocus}  // Trigger reveal on focus
                  className="field-input"
                />
              </div>
            </div>

            {/* Last Name */}
            <div className="field-container">
              <div className="form-field">
                <label className="field-label">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  maxLength="160"
                  required
                  value={formData.lastname}
                  onChange={handleChange}
                  onFocus={handleFocus}  // Trigger reveal on focus
                  className="field-input"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Hidden section shown after focus */}
        {showOptional && (
          <>
            {/* Email Section */}
            <div className="email-section">
              <div className="email-container">
                <div className="email-field">
                  <label className="field-label">Email</label>
                  <input
                    type="email"
                    name="emailaddress1"
                    required
                    value={formData.emailaddress1}
                    onChange={handleChange}
                    className="email-input"
                  />
                </div>
              </div>
            </div>

            {/* Info Text */}
            <div className="info-section">
              <div className="info-container">
                <div className="info-text">
                  <p className="info-paragraph">
                    While not mandatory, the below information will assist us in curating content that is relevant to you.
                  </p>
                </div>
              </div>
            </div>

            {/* Optional Fields */}
            <div className="optional-section">
              <div className="optional-container">
                <div className="field-container">
                  <div className="form-field">
                    <label className="field-label">Date of Birth</label>
                    <input
                      type="date"
                      name="birthdate"
                      max="2007-11-21"
                      value={formData.birthdate}
                      onChange={handleChange}
                      className="date-input"
                    />
                  </div>
                </div>

                <div className="field-container">
                  <div className="form-field">
                    <label className="field-label">Country of Residence</label>
                    <input
                      type="text"
                      name="dot_countryofresidenceid"
                      value={formData.dot_countryofresidenceid}
                      onChange={handleChange}
                      className="field-input"
                    />
                  </div>
                </div>

                <div className="field-container">
                  <div className="form-field">
                    <label className="field-label">Children</label>
                    <select
                      name="dot_haschildren"
                      value={formData.dot_haschildren}
                      onChange={handleChange}
                      className="field-select"
                    >
                      <option value="" hidden></option>
                      <option value="1">Yes</option>
                      <option value="0">No</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="terms-section">
              <div className="terms-container">
                <div className="terms-text">
                  By signing up, you declare that you have read Sani Resort’s{' '}
                  <a href="https://sani-resort.com/terms-and-conditions" className="terms-link">
                    Terms & Conditions
                  </a>{' '}
                  and consent to receive offers, information and content via current means of communication as per our{' '}
                  <a href="https://sani-resort.com/privacy-policy" className="terms-link">
                    Privacy Policy
                  </a>.
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="submit-section">
              <div className="submit-container">
                <div className="submit-button-wrapper">
                  <button type="submit" className="submit-button">
                    <span>SIGN UP</span>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </form>
  );
};

export default NewsletterSignup;
