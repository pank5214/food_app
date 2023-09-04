import React from "react";
import food from "../../Images/burger-image.png";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between p-4 m-4">
      <div className="mx-15 md:mx-0 md:self-center">
        <h1 className="font-bold text-3xl md:text-4xl my-4 text-green-900">
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
        <h4 className="md:text-lg font-style: italic text-slate-500">
          "Fueling Your Day with FoodHunger's Healthy Delight!"
        </h4>
      </div>
      <div className="flex justify-center">
        <img
          className="w-[55%] h-[180px] my-12 md:m-0 md:w-auto md:h-auto"
          src={food}
          alt="Food Image"
        />
      </div>
    </div>
  );
};

export default About;
