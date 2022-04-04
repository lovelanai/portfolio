import About from "./About";
import Contact from "./Contact";
import Nameicon from "./Nameicon";
import Portfolio from "./Portfolio";
import "./Startpage.css";

export default function Startpage() {
  return (
    <div>
      <div id="start" className="startPageContainer">
        <Nameicon />
        <Portfolio />
        <About />
        <Contact />
      </div>
    </div>
  );
}
