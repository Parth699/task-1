import React from "react";
import About from "./About";
import Images from "./Images";
import Title from "./Title";

function Card() {
  return (
    <div className="max-w-5xl p-3 ">
      <Title />
      <div className="flex pt-9 space-x-9">
        <About />
        <Images />
      </div>
    </div>
  );
}

export default Card;
