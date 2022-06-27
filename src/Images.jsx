import React from "react";
import i1 from "./ben-wicks-6H_NvyaY3Bo-unsplash.jpg";
import i2 from "./henry-be-IicyiaPYGGI-unsplash.jpg";
import i3 from "./trees-g5d4522921_1920.jpg";

function Images() {
  return (
    <div className="h-80 flex w-1/2 space-x-2">
      <img src={i1} className="w-1/2 h-full object-cover" />
      <div className="w-1/2 flex flex-col space-y-2 mb-2">
        <img src={i2} className="h-1/2 w-full object-cover" />
        <img src={i3} className="h-1/2 w-full object-cover" />
      </div>
    </div>
  );
}

export default Images;
