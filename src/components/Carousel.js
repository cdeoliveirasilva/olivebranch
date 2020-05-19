import React from "react";

import Card from "../components/Card";

import translate from "../assets/images/translate.svg";
import translation from "../assets/images/translation.svg";
import subtitles2 from "../assets/images/subtitles2.svg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Translation",
          subTitle:
            "Translation from/to Portuguese and Japanese to/from English and Dutch.",
          imgSrc: translate,
          link: "/Services",
          selected: false,
        },
        {
          id: 1,
          title: "Website localization",
          subTitle:
            "Translating an existing website to the local language taking the (business) culture in the target market into consideration.",
          imgSrc: translation,
          link: "/Services",
          selected: false,
        },
        {
          id: 2,
          title: "Transcription",
          subTitle:
            "Transcription of audio and/or video files, translation also possible.",
          imgSrc: subtitles2,
          link: "/Services",
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
