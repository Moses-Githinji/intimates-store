import React from 'react';

function register() {
  return (
    <div className="login-page-container">
      <div className="company-logo-container">
        <p>intimates store</p>
      </div>
      <div className="registration-route-container">
        <p>
          already registered?{' '}
          <a href="/login" className="registration-route">
            sign in
          </a>
        </p>
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
      <div className="alternative-login-method">
        <p>or</p>
      </div>
      <div className="media-login-btns-container">
        <button type="submit" className="facebook-login-btn blue-color">
          sign in with facebook
        </button>
        <button type="submit" className="facebook-login-btn white-color">
          sign in with google
        </button>
        <button type="submit" className="facebook-login-btn black-color">
          sign in with apple
        </button>
      </div>
    </div>
  );
}

export default register;
