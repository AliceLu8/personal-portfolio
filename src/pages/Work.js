import React from "react";
import { Link } from "react-router-dom";

import Movie from "../images/mockup-moogle-banner.png";
// import Fetch from "../images/mockup-fetch-banner.png";
// import Portfolio from "../images/mockup-portfolio-banner.png";

// Import React icons
// import { SiAdobephotoshop } from "react-icons/si";

function Work() {
  return (
    <section id="work" className="work-wrapper">
      <div>
        <h2>Featured Projects</h2>
        <div className="work-container">
          <div className="work-card">
            <img src={Movie} alt="movie" />
            <h3>Moogle</h3>
            <p className="pro-length">5 Weeks</p>
            <p className="pro-tools">React, SCSS, TMDB API, Adobe Photoshop</p>
            <p className="pro-details">
              Moogle movie database is a React JS web application that lets
              users browse, find, and keep track of their favourite movies.
            </p>
            <div className="pro-btns">
              <Link to="/works/1/moogle">GitHub</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
