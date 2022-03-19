import { CSSProperties } from "react";
import "./Header.css";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="headerContainer">
      <Navbar />
      <div className="logo">
        <h1>Love Lanai</h1>
      </div>
    </div>
  );
}
