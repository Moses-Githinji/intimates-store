import React from 'react';

function login() {
  return (
    <div className="login-page-container">
      <div className="company-logo-container">
        <p>intimates store</p>
      </div>
      <div className="registration-route-container">
        <p>
          not yet registered?{' '}
          <a href="/register" className="registration-route">
            sign up
          </a>
        </p>
      </div>
      <div className="all-inputs-container">
        <input
          type="email"
          placeholder="email here"
          className="email-login-text login-only"
        />
        <input
          type="password"
          placeholder="password here"
          className="email-login-text login-only"
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

export default login;
