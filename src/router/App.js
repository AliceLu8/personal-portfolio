import Header from "../components/Header";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import Work from "../pages/Work";
import Contact from "../pages/Contact";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <NavBar />
        <Work />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
