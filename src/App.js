import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact to="/" component={Home} />
      <Route exact to="/" component={About} />
      <Route exact to="/" component={Projects} />
      <Route exact to="/" component={Contact} />
    </div>
  );
}

export default App;
