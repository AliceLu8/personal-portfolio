import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

// Import React icons
import { AiOutlineHome } from "react-icons/ai";
import { HiCode } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";

function NavBar() {
  return (
    <div className="header">
      <Header />
      <nav>
        <ul className="navbar-menu wrapper">
          <li>
            <Link to="/home">
              <div className="icon-desktop">
                <AiOutlineHome size={25} />
              </div>
              Home
            </Link>
          </li>

          <li>
            <Link to="/work">
              <div className="icon-desktop">
                <HiCode size={25} />
              </div>
              Work
            </Link>
          </li>

          <li>
            <Link to="/contact">
              <div className="icon-desktop">
                <HiOutlineMail size={25} />
              </div>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
