import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Movie from "../images/mockup-moogle-banner.png";
import Fetch from "../images/mockup-fetch-banner.png";
import Portfolio from "../images/mockup-portfolio-banner.png";

function Work() {
  // Start from the Top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="work" className="work-wrapper">
      <div>
        <h2>Featured Projects</h2>
        <div className="project-container">
          <div className="project-card">
            <img src={Movie} alt="movie" />
            <div className="description-box">
              <h3>Moogle</h3>
              <p className="project-length">5 Weeks</p>
              <p className="project-tools">React, SCSS, Adobe Photoshop</p>
              <p className="project-details">
                Moogle movie database is a React JS web application that lets
                users browse, find, and keep track of their favourite movies.
              </p>
            </div>

            <div className="btn">
              <Link to="/singlework/moogle">Learn More</Link>
            </div>
          </div>

          <div className="project-card">
            <img src={Fetch} alt="fetch" />
            <div className="description-box">
              <h3>Fetch</h3>
              <p className="project-length">5 Weeks</p>
              <p className="project-tools">WordPress, PHP, SASS, WooCommerce</p>
              <p className="project-details">
                The dog walking company, is an E-Commerce website designed and
                created for dog owners to book their appointments with their
                personal dog-walker.
              </p>
            </div>

            <div className="btn">
              <Link to="/singlework/fetch">Learn More</Link>
            </div>
          </div>

          <div className="project-card">
            <img src={Portfolio} alt="portfolio" />
            <div className="description-box">
              <h3>Portfolio</h3>
              <p className="project-length">4 Weeks</p>
              <p className="project-tools">React, SCSS, Adobe Photoshop</p>
              <p className="project-details">
                A website where I showcase my personal design skills, abilities,
                and the projects that I have completed.
              </p>
            </div>

            <div className="btn">
              <Link to="/singlework/portfolio">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
