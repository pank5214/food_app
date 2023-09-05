import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData;

  return (
    <div
      data-testid="resCard"
      className="m-2 p-3 md:m-4 md:p-4 w-[250px] h-[400px] rounded-lg bg-gray-100 hover:bg-gray-200"
    >
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-semibold py-3">{name}</h3>
      <h4 className="pb-1">
        {cuisines && cuisines.length > 0
          ? cuisines.join(", ")
          : "No cuisines available"}
      </h4>

      <h4>Rating: {avgRating} stars</h4>
      <h4 className="py-1">Cost: {costForTwo} </h4>
      {resData && resData.sla && resData.sla.deliveryTime !== undefined ? (
        <h4>Delivery Time: {resData.sla.deliveryTime} minutes</h4>
      ) : (
        <h4>Delivery Time: N/A</h4>
      )}
    </div>
  );
};

export const withDiscountLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-300 text-black m-2 p-2 rounded-r-lg">
          Discount
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
