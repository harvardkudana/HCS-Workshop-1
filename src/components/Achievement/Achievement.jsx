import React from "react";
import "./Achievement.css";
import { useState } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

export default function Achievement({imagesource, year, award, description }) {
  const [clicked, setClicked] = useState(false);
  if (clicked) {
    return (
        <Container>
            <Jumbotron onClick={() => setClicked(true)}>
            <h4>{award}, <i>{year}</i></h4>
            <p>{description}</p>
            </Jumbotron>
        </Container>
        
      );
  }
  else
  {
    return (
        <div onClick={() => setClicked(true)}>
            <h4>{award}, <i>{year}</i></h4>
            <p>Click Me</p>
        </div>
      );
  }
}