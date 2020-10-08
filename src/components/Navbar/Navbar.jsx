import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>Kudana Lionel Gwatidzo</h1>
        <div className="info-bar">
          <p className="info-item">kudanagwatidzo@college.harvard.edu</p>
        </div>
        <div className="info-bar">
          <p><a href="https://linkedin.com/in/kudanagwatidzo">LinkedIn</a> | <a href="https://github.com/harvardkudana">GitHub</a> | <a href="https://www.instagram.com/kudanagwatidzo/">Instagram</a></p>
        </div>
      </div>
      <div className="nav-background">
        <p>
          <a className="nav-link" href="/feature-alpha">Feature A</a>
          <a className="nav-link" href="/feature-beta">Feature B</a>
          <a className="nav-link" href="/about">About</a>
          <a className="nav-link" href="/experience">Experience</a>
          <a className="nav-link" href="projects">Projects</a>
        </p>
      </div>
      <br></br>
    </>
  );
}
