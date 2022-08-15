import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../logo/logo.png";

function Header() {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div>
      {/* <div className={color ? "header header-section-bg" : "header"}> */}
      <Link to="/home">
        <img src={logo} alt="logo" className="logo" />
        {/* <h1>logo</h1> */}
      </Link>
      {/* </div> */}
    </div>
  );
}

export default Header;
