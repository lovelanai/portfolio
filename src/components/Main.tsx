import "./Main.css";
import { Routes, Route } from "react-router-dom";
import Startpage from "./Startpage";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import About from "./About";

export default function Main() {
  return (
    <div className="mainContainer">
      <Routes>
        <Route path="/" element={<Startpage />} />
      </Routes>

      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}
