import React from "react";

import Card from "../components/Card";

import portfolio from "../assets/images/portfolio.png";
import weatherapi from "../assets/images/weatherapi.jpg";
import wavegame from "../assets/images/wavegame.jpg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "React portfolio",
          subTitle: "Portfolio app built with React and Bootstrap",
          imgSrc: portfolio,
          link: "https://portfolio.domain.com",
          selected: false,
        },
        {
          id: 1,
          title: "Weather API",
          subTitle:
            "API fetch for worldwide weather information built with React",
          imgSrc: weatherapi,
          link: "https://weatherapi.domain.com",
          selected: false,
        },
        {
          id: 2,
          title: "The Wave Game",
          subTitle: "Level-up game built with Java",
          imgSrc: wavegame,
          link: "https://wavegame.domain.com",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id) => {
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
          click={(e) => this.handleCardClick(item.id, e)}
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
