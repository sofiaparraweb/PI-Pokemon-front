import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing-page">
      <div className="background-animation"></div>
      <div className="enter-button">
        <Link to="/">
          <span className="enter-button-icon">
            <img src="https://cdn-icons-png.flaticon.com/512/48/48821.png" alt="Back Home" />
          </span>
          <span className="enter-button-text">Enter</span>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
