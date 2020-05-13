import React from "react";

import Card from "../components/Card";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import portfolio from "../assets/images/portfolio.png";
import weatherapi from "../assets/images/weatherapi.jpg";
import wavegame from "../assets/images/wavegame.jpg";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: "React portfolio",
          subTitle: "React and Bootstrap based portfolio app",
          imgSrc: portfolio,
          link: "https://portfolio.domain.com",
          selected: false,
        },
        {
          id: 2,
          title: "Weather API",
          subTitle: "React for fetching worldwide weather information",
          imgSrc: weatherapi,
          link: "https://weatherapi.domain.com",
          selected: false,
        },
        {
          id: 3,
          title: "The Wave Game",
          subTitle: "Level-up game built with Java",
          imgSrc: wavegame,
          link: "https://wavegame.domain.com",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          onClick={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
