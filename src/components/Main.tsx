import { CSSProperties } from "@mui/styled-engine";
import { useRef } from "react";
import "./Main.css";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Startpage from "./Startpage";

export default function Main() {
  return (
    <div className="mainContainer">
      <Routes>
        <Route path="/" element={<Startpage />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}
