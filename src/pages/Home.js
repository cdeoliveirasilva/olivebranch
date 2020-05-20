import React from "react";

import Hero from "../components/Hero";
import Carousel from "../components/Carousel";

function Home(_props) {
  return (
    <div>
      <Hero
        title={"Olive Branch Translations"}
        subTitle={"add something later"}
        text={" * This website is still in development mode."}
      />
      <Carousel />
    </div>
  );
}

export default Home;
