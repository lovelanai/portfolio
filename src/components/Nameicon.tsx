import Typewriter from "typewriter-effect";
import "./Nameicon.css";

export default function Nameicon() {
  return (
    <div className="fullContainer">
      <div className="typeWriter">
        <h1>Love Lanai</h1>
        <div>
          <Typewriter
            options={{
              strings: ["Front End Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </div>
  );
}
