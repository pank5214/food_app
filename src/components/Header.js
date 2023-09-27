import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  // Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between shadow-lg">
      <div className="logo-container self-center">
        <Link to={"/"}>
          <img className="w-48" src={LOGO_URL} alt="logo" />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-7">
          <li className="p-2 hidden md:block">
            Online Status: {onlineStatus ? "✅" : "🔴"}{" "}
          </li>
          <li className="p-2 hover:bg-pink-100 rounded-lg">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="p-2 hover:bg-pink-100 rounded-lg">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="p-2 hover:bg-pink-100 rounded-lg">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="p-2 font-bold text-lg">
            <Link to={"/cart"}>🛒{cartItems.length} </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
