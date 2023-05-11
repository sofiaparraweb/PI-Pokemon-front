import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'

const Landing = () => {
  return (
    <div className="landing-page">
      <div className="background-animation"></div>
      <Link to="/home" className="enter-button">HOME</Link>
    </div>
  );
}

export default Landing;
