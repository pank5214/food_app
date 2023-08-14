import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="m-4 p-4 w-[250px] h-[400px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-semibold py-3">{name}</h3>
      <h4 className="pb-1">{cuisines.join(", ")}</h4>
      <h4>Rating: {avgRating} stars</h4>
      <h4 className="py-1">Cost: {costForTwo} </h4>
      <h4>Delivery Time: {resData.sla.deliveryTime} minutes</h4>
      <h4>User: {loggedInUser} </h4>
    </div>
  );
};

export const withDiscountLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 round">
          Discount
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
