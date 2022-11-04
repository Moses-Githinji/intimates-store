import React from 'react';

function Newsletter() {
  return (
    <div className="overall-newsletter-container">
      <div className="overall-newsletter-big-heading-container">
        <p>subscribe to our newsletter</p>
      </div>
      <div className="overall-newsletter-small-heading-container">
        <p>no spamming. we promise!!</p>
      </div>
      <div className="email-address-input-submit-btn-container">
        <input
          type="email"
          placeholder="enter your email address here..."
          className="email-address-input"
        />
        <button type="submit" className="submit-email-address-cta">
          <svg
            width="25"
            height="25"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.125 2.42188L1.875 17.9219L8.44617 20.1853L26.25 4.35938L12.2698 21.5023L18.75 23.7344L28.125 2.42188ZM12.1875 22.7656L11.25 28.5781L14.1757 23.5005L12.1875 22.7656Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
