import React from "react";
import { NavLink } from "react-router-dom";

function PageNotFound() {
  return (
    <section className="page-not-found">
      <div className="section-wrapper">
        <div className="page-info">
          <h1>Oh No!!! 404.... Page Not Found</h1>
        </div>
        <div className="about-text">
          <p>
            Go to the{" "}
            <NavLink to="/" className="navlink">
              Home
            </NavLink>{" "}
            page.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PageNotFound;
