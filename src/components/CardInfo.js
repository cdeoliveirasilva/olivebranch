import React from "react";

import { useSpring, animated } from "react-spring";

function CardInfo(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div className="p-card-info" style={style}>
      <p className="p-card-title">{props.title}</p>
      <p className="p-card-sub">{props.subTitle}</p>
    </animated.div>
  );
}

export default CardInfo;

// <a href={props.link} rel="noopener noreferrer">Read more</a>
// Read more
