import React from "react";
import "./About.css";
import SexySexyYes from "../../assets/profile.JPG";

export default function AboutScreen() {
  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <div className="intro-picture"><img src={ SexySexyYes }></img></div>
        </div>
        <br></br>
        <div className="intro-item">
          Harvard student, developer, and analyst seeking opportunities in Software Engineering, Backend Development, Systems Analysis and Venture Capital.
        </div>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}
