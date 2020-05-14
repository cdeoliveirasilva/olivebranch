import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid={true}>
        <Row className="border-top p-2">
          <Col className="p-2" md={4} sm={6}>
            @ 2020 | Olive Branch Translations. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
