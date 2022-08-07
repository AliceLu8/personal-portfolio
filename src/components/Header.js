import React from "react";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h2>hello, I'm</h2>
        <h1>Alice Lu</h1>
        <h3>a Front-End Web Developer | Designer</h3>

        <a href="#about" className="scroll__down">
          Scroll Down
        </a>
      </div>
      <span className="sr-only"></span>
    </header>
  );
}

export default Header;
