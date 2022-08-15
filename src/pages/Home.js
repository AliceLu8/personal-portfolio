import React from "react";

import NavBar from "../components/NavBar";
import Intro from "../components/Intro";
import About from "../pages/About";
import Work from "../pages/Work";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";

// Import React icons
import { TiArrowDownOutline } from "react-icons/ti";

function Home() {
  return (
    <div className="home-wrapper" id="home">
      <NavBar />

      <div className="container">
        <Intro />
        {/* <h2>hello, I'm</h2>
        <h1>Alice Lu</h1>
        <h3>a Front-End Developer | Designer</h3>
        <p>based in Vancouver, BC, Canada</p>

        <a href="#about" className="scroll-down">
          <TiArrowDownOutline size={50} />
        </a> */}
        <About />
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
