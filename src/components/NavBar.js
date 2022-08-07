import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { VscCode } from "react-icons/vsc";
import { HiOutlineMail } from "react-icons/hi";

function NavBar() {
  const [navActive, setNavActive] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setNavActive("#")}
        className={navActive === "#" ? "active-nav" : ""}
      >
        <AiOutlineHome />
      </a>

      <a
        href="#work"
        onClick={() => setNavActive("#work")}
        className={navActive === "#about" ? "active-nav" : ""}
      >
        <VscCode />
      </a>

      <a
        href="#contact"
        onClick={() => setNavActive("#contact")}
        className={navActive === "#contact" ? "active-nav" : ""}
      >
        <HiOutlineMail />
      </a>
    </nav>
  );
}

export default NavBar;
