import "./Main.css";
import { Routes, Route } from "react-router-dom";
import Startpage from "./Startpage";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import About from "./About";
import Kameraproffset from "./pages/Kameraproffset";
import Asos from "./pages/Asos";
import Obeseman from "./pages/Obeseman";

export default function Main() {
  return (
    <div className="mainContainer">
      <Routes>
        <Route path="/" element={<Startpage />} />
        <Route path="Kameraproffset" element={<Kameraproffset />} />
        <Route path="Asos" element={<Asos />} />
        <Route path="Obeseman" element={<Obeseman />} />
      </Routes>
    </div>
  );
}
