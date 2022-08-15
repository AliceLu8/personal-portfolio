import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Work from "../pages/Work";
import SingleWork from "../pages/SingleWork";
import Contact from "../pages/Contact";
import PageNotFound from "../pages/PageNotFound";

function App() {
  return (
    <section className="wrapper">
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/singlework" element={<SingleWork />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </section>
  );
}

export default App;
