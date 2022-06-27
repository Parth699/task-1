import React from "react";
import logo from "./logo512.png";
import Button from "./Button";
import { FaRegHeart , FaShare } from "react-icons/fa";

function About() {
  return (
    <div className="w-1/2">
      <p id="description" className="text-sm font-semibold text-slate-700 mt-0">
        In this 5 day class we will explore artists Monet, Marisse, Van Gogh,
        among others and then recreate painting using crayon and watercolor.
        Students will have fun learning about the artists & creating their own
        art inspired by their work.
      </p>
      <div className="flex space-x-1 mt-4">
        <img src={logo} className="w-5" />
        <p className="text-sm font-bold text-blue-700 ">Kimberly R Moseler</p>
      </div>

      <div className="flex items-center space-x-1 mt-3">
        <div id="stars" className="flex space-x-0.5 items-center">
          {[0, 0, 0, 0, 0].map((e,i) => {
            return (
              <img
                src="https://img.icons8.com/external-kmg-design-flat-kmg-design/32/000000/external-star-user-interface-kmg-design-flat-kmg-design.png"
                className="w-5" id={i}
              />
            );
          })}
        </div>
        <p className="text-xs  text-slate-400">
          467 total reviews for this teacher
        </p>
      </div>
      <div className="flex items-center space-x-1 mt-1.5">
        <div id="stars" className="flex space-x-0.5 items-center">
          {[0, 0, 0, 0, 0].map((e) => {
            return (
              <img
                src="https://img.icons8.com/external-kmg-design-flat-kmg-design/32/000000/external-star-user-interface-kmg-design-flat-kmg-design.png"
                className="w-5"
              />
            );
          })}
        </div>
        <p className="text-xs  text-slate-400">5 reviews for this class</p>
      </div>

      <p className="text-sm font-semibold text-slate-700 mt-3">
        Completed by 21 learners
      </p>
      <div id="butten-group" className="flex space-x-5 pt-5">
        <Button text="See Class Schedule >" bg={true} />
        <Button bg={false}>
          <FaRegHeart />
          <p>Love</p>
        </Button>
        <Button bg={false}>
          <FaShare />
          <p>Share</p>
        </Button>
      </div>

      </div>
  );
}

export default About;
