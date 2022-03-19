import Typewriter from "typewriter-effect";
import "./Nameicon.css";
import React, { Component } from "react";

import ParticlesBg from "particles-bg";

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
      <ParticlesBg type="cobweb" color="#ff0000" num={200} bg={true} />
    </div>
  );
}
