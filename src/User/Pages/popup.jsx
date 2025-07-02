import React from "react";
import './popup.css'

function PopupModal({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-modal">
        <img
          src="/assets/thumsup.png"
          alt="Thumbs Up"
          className="thumb-icon"
        />
        <h3 id="great">Great Job!</h3>
        <p id="review">Your leave application would be reviewed by the admin.</p>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default PopupModal;
