import React, { useEffect } from "react";

import Header from "../components/Header";
import NavBar from "../components/NavBar";
import About from "../pages/About";
import Work from "../pages/Work";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";

function Home() {
  // Start from the Top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <Header />
      <NavBar />
      <About />
      <Work />
      <Contact />
      <Footer />
    </section>
  );
}

export default Home;
