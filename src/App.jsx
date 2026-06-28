import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Home/Main";
import About from "./About/Main";
import Programs from "./Programs/Main";
import Media from "./Media/Main";
import Foundation from "./Foundation/Main";
import Project2029 from "./Project2029/main";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/media" element={<Media />} />
        <Route path="/project-2029" element={<Project2029 />} />
        <Route path="/foundation" element={<Foundation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
