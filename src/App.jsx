import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Home/Main";
import About from "./About/Main";
import Programs from "./Programs/Main";
import Media from "./Media/Main";
import Foundation from "./Foundation/Main";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/media" element={<Media />} />
        <Route path="/foundation" element={<Foundation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
