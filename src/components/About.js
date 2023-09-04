import React from "react";
import food from "../../Images/burger-image.png";

const About = () => {
  return (
    <div className="flex justify-between m-4 p-4">
      <div className="self-center">
        <h1 className="font-bold text-4xl my-4  text-green-900">
          Welcome to the
          <br />
          <br />
          World of Flavor with Our
          <br />
          <br />
          <span className="bg-red-500 text-white rounded-lg p-2">
            Tasty and Fresh Creations!
          </span>
        </h1>
        <h4 className="text-lg font-style: italic text-slate-500">
          "Fueling Your Day with FoodHunger's Healthy Delight!"
        </h4>
      </div>
      <div className="">
        <img src={food} alt="Food Image" />
      </div>
    </div>
  );
};

export default About;
