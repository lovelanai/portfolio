import "./Main.css";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Startpage from "./Startpage";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

export default function Main() {
  return (
    <div className="mainContainer">
      <Routes>
        <Route path="/" element={<Startpage />} />
      </Routes>

      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}
