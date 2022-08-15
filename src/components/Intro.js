import React from "react";

// Import React icons
import { TiArrowDownOutline } from "react-icons/ti";

function Intro() {
  return (
    <div className="intro-wrapper">
      <div className="intro-container">
        <h2>hello, I'm</h2>
        <h1>Alice Lu</h1>
        <h3>a Front-End Developer | Designer</h3>
        <p>based in Vancouver, BC, Canada</p>

        <a href="#about" className="scroll-down">
          <TiArrowDownOutline size={50} />
        </a>
      </div>
    </div>
  );
}

export default Intro;
