import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Navbar from "./Navbar";
import { Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </Container>
  );
}

export default App;
