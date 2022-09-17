import React from "react";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="subscribe_container">
        <div className="subscribe_title"> Subscribe our newsletter to be notified when it’ll be live.</div>
        <div className="d-flex justify-content-center align-items-center">
          <input className="subscribe_input" type="email" placeholder="Email Address" />
          <button className="subscribe_button">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
