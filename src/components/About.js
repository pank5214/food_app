import React, { useState } from "react";
import food from "../../Images/burger-image.png";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="flex flex-col justify-center items-center m-4">
        {show ? (
          <>
            <Link to={"/about"}>
              <button
                className="bg-green-300 hover:bg-green-400 rounded-lg p-3"
                onClick={() => setShow(false)}
              >
                Hide My Profile
              </button>
            </Link>
            <Outlet />
          </>
        ) : (
          <Link to={"profile"}>
            <button
              className="bg-green-300 hover:bg-green-400 rounded-lg p-3"
              onClick={() => setShow(true)}
            >
              Show My Profile
            </button>
          </Link>
        )}
      </div>

      <div className="flex flex-col items-center md:flex-row md:justify-between p-4 m-4">
        <div className="mx-15 md:mx-0 md:self-center">
          <h1 className="font-bold text-3xl md:text-4xl my-4 text-green-900 md:text-start text-center">
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
            className="h-[180px] my-12 md:m-0 md:w-auto md:h-auto"
            src={food}
            alt="Food-Image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
