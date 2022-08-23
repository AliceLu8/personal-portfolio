import React from "react";

import IconSocials from "./IconSocials";

// Import React icons
import { BsChevronDoubleDown } from "react-icons/bs";

function Header() {
  return (
    <header id="home">
      <div className="wrapper header-wrapper">
        <h2>hello, I'm</h2>
        <h1>Alice Lu</h1>
        <h3>
          a <span>Front-End Developer | Designer</span>
        </h3>
        <p>based in Vancouver, BC, Canada</p>

        <a href="#about" className="scroll-down">
          <BsChevronDoubleDown size={70} />
        </a>
        <IconSocials />
      </div>
    </header>
  );
}

export default Header;
