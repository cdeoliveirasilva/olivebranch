import React from "react";

import Hero from "../components/Hero";
import Carousel from "../components/Carousel";

function Home(_props) {
  return (
    <div>
      <Hero
        title={"Hey!"}
        subTitle={"You there!"}
        text={"I see you over there!"}
      />
      <Carousel />
    </div>
  );
}

export default Home;
