import { Box, Button } from "@mui/material";
import "./Portfolio.css";
import kameraweb from "../assets/img/kameraproffsetweb.png";
import asos from "../assets/img/asos.png";
import obeseman from "../assets/img/obeseman123.png";

export default function Projects() {
  return (
    <div id="portfolio" className="portfolio">
      <img src={kameraweb} alt="" />
      <img src={asos} alt="" />
      <img src={obeseman} alt="" />
    </div>
  );
}
