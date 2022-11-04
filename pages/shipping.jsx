import React from 'react';
import Layout from '../components/Layout';

function shipping() {
  return (
    <Layout title="Shipping Address">
      <div className="company-logo-container shipping-address">
        <p>your shipping address information</p>
      </div>
      <div className="all-inputs-container">
        <input
          type="text"
          placeholder="your name"
          className="email-login-text"
        />
        <input
          type="email"
          placeholder="email here"
          className="email-login-text"
        />
        <input
          type="password"
          placeholder="your password here"
          className="email-login-text"
        />
        <input
          type="password"
          placeholder="confirm your password here"
          className="email-login-text"
        />
      </div>
      <div className="media-login-btns-container shipping-page">
        <button type="submit" className="facebook-login-btn blue-color">
          continue
        </button>
      </div>
    </Layout>
  );
}

export default shipping;
