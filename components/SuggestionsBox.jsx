import React from 'react';

function SuggestionsBox() {
  return (
    <div className="suggestions-box-container">
      <div className="suggestion-box-title-container">
        <p>questions, complaints & suggestions</p>
      </div>
      <div className="suggestions-box-inputs-container">
        <div className="person-name-container">
          <input
            type="text"
            placeholder="your name here"
            className="person-name-text"
          />
        </div>
        <div className="person-email-container">
          <input
            type="text"
            placeholder="your email here"
            className="person-email-text"
          />
        </div>
        <div className="person-subject-container">
          <textarea
            placeholder="your message here"
            cols="30"
            rows="10"
            className="person-subject-message"
          ></textarea>
        </div>
        <div className="submit-message-btn">
          <button type="submit" className="message-btn-cta">
            submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuggestionsBox;
