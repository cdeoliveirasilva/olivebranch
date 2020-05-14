import React from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Content from "./components/Content";
import Contact from "./pages/Contact";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import Nav from "react-bootstrap/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <NavbarBrand>C. de Oliveira Silva</NavbarBrand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link nav" to="/">
                  Home
                </Link>
                <Link className="nav-link nav" to="/about">
                  About
                </Link>
                <Link className="nav-link nav" to="/services">
                  Services
                </Link>
                <Link className="nav-link nav" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Content} />
          <Route exact path="/contact" component={Contact} />

          <Footer />
        </Container>
      </Router>
    </div>
  );
}

export default App;
