import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  // Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-50">
      <div className="logo-container">
        <img className="w-48" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-5 m-4">
          <li className="px-10">
            Online Status: {onlineStatus ? "✅" : "🔴"}{" "}
          </li>
          <li className="px-3 hover:bg-pink-100 rounded-lg">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-3 hover:bg-pink-100 rounded-lg">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="px-3 hover:bg-pink-100 rounded-lg">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="px-3 font-bold text-lg">
            <Link to={"/cart"}>Cart - ({cartItems.length} items)</Link>
          </li>
          <li className="px-3 hover:bg-pink-100 rounded-lg">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <button
            className="ml-2 py-[1.8px] w-24 resize bg-green-200 rounded-lg hover:bg-green-300"
            onClick={() =>
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login")
            }
          >
            {btnNameReact}
          </button>
          <li className="px-3 font-semibold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
