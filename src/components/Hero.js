import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Hero(props) {
  return (
    <Jumbotron className="jumbotron-fluid p-0 hero">
      <Container fluid={true}>
        <Row className="justify-content-center py-5">
          <Col md={8} sm={6}>
            {props.title && (
              <h1 className="display-4 text-uppercase">{props.title}</h1>
            )}
            {props.text && <h3 className="header3">{props.text}</h3>}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Hero;

// maybe later:
// {props.subTitle && <h2 className="display-6">{props.subTitle}</h2>}
