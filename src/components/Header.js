import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-50">
      <div className="logo-container">
        <img className="w-48" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"} </li>
          <li className="px-4 hover:bg-pink-100 rounded-lg">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4 hover:bg-pink-100">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-4 hover:bg-pink-100">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-4 ">Cart</li>
          <li className="px-4 hover:bg-pink-100">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <button
            className="px-4 ml-4 resize bg-green-200 rounded-lg hover:bg-green-300"
            onClick={() =>
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login")
            }
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
