import React from "react";
import { FaMehRollingEyes } from "react-icons/fa";

export default function Header() {
  return (
    <nav>
      <FaMehRollingEyes className="img" />
      <h1>Meme Generator</h1>
      <h4>React Course - Project 3</h4>
    </nav>
  );
}
