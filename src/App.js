import "./App.css";
// import { Header } from "./Components/header/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import { CustomNavbar } from "./Components/navbar/CustomNavbar";
import { Hero } from "./Components/hero/Hero";
import { Skills } from "./Components/skills/Skills";
import { Project } from "./Components/project/Project";
import { About } from "./Components/about/About";
import { Contact } from "./Components/contact/Contact";
import { Footer } from "./Components/footer/Footer";

function App() {
  return (
    <div className="wrapper">
      <div id="top-nav" className="top-nav">
        <CustomNavbar />

        <Hero />
      </div>

      {/* <!-- Skills --> */}
      <Skills />
      {/* <!-- Project --> */}

      <Project />
      {/* <!-- About Me --> */}
      <About />

      {/* <!-- Contact --> */}
      <Contact />

      {/* <!-- footer --> */}
      <Footer />
    </div>
  );
}

export default App;
