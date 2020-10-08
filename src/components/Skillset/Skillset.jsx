import React from "react";
import "./Skillset.css";
import { useState } from "react";

export default function Skillset({imagesource}) {
    const [hover, setHovered] = useState(false);
    if (hover) {
      return (
          <img onMouseLeave={() => setHovered(false)} className="hovering" src={imagesource}></img>
        );
    }
    else
    {
      return (
          <img onMouseEnter={() => setHovered(true)} className="nothovering" src={imagesource} width="150px"></img>
        );
    }
  }