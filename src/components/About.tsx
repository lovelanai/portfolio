import { Box } from "@mui/material";
import "./About.css";

import GitHubCalendar from "react-github-calendar";

export default function About() {
  return (
    <div id="about" className="aboutContainer">
      <h1>About</h1>
      <GitHubCalendar username="lovelanai" />;
    </div>
  );
}
