import React from "react";

import Hero from "../components/Hero";
import Carousel from "../components/Carousel";

function Home(_props) {
  return (
    <div>
      <Hero
        title={"Olive Branch Translations"}
        subTitle={""}
        text={" EN / NL / PT / JP "}
      />
      <Carousel />
    </div>
  );
}

export default Home;
