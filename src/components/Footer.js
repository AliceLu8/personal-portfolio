import React from "react";
import { getYear } from "../data/getDates";
import ScrollToTop from "../components/ScrollToTop";

// Import React icons
import IconSocials from "./IconSocials";

function Footer({ copyright, author }) {
  return (
    <footer id="footer" className="footer-wrapper">
      <div>
        <IconSocials />

        <div className="scroll-up">
          <ScrollToTop />
        </div>
      </div>
      <div className="copyright">
        <p>
          &copy; {copyright} | {author}{" "}
        </p>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  author: "Alice Lu",
  copyright: getYear(),
};

export default Footer;
