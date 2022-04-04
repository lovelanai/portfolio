import "./Portfolio.css";
import kameraweb from "../assets/img/kameraproffsetweb.png";
import asos from "../assets/img/asos.png";
import obeseman from "../assets/img/obeseman.png";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <div id="portfolio" className="portfolio">
      <Link className="img-container" to="Kameraproffset">
        <img src={kameraweb} alt="" />
      </Link>

      <Link to="Asos" className="img-container">
        <img src={asos} alt="" />
      </Link>

      <Link to="Obeseman" className="img-container">
        <img src={obeseman} alt="" />
      </Link>
    </div>
  );
}
