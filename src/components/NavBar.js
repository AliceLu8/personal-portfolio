import React from "react";
import { HashLink } from "react-router-hash-link";

// Import React icons
import { AiOutlineHome } from "react-icons/ai";
import { HiCode } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";

function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <HashLink to="#home" smooth>
              <AiOutlineHome size={25} />
            </HashLink>
          </li>

          <li>
            <HashLink to="#work" smooth>
              <HiCode size={25} />
            </HashLink>
          </li>

          <li>
            <HashLink to="#contact" smooth>
              <HiOutlineMail size={25} />
            </HashLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
