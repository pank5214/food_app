import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log("resData:",resData)

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData;
  console.log("cloudinaryImageId:",cloudinaryImageId, "CDN_URL:",CDN_URL)

  return (
    <div
      data-testid="resCard"
      className="grid m-2 p-3 md:m-3 md:p-4 w-[255px] h-[350px] rounded-lg bg-gray-100 hover:bg-gray-200"
    >
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-semibold pt-3 line-clamp-1">{name}</h3>
      <h4 className="pb-1 pt-2 line-clamp-2">
        {cuisines && cuisines.length > 0
          ? cuisines.join(", ")
          : "No cuisines available"}
      </h4>

      <h4>
        <span className="font-medium">Rating:</span> {avgRating} stars
      </h4>
      <h4 className="py-1">
        <span className="font-medium">Cost:</span> {costForTwo}{" "}
      </h4>
      {resData && resData.sla && resData.sla.deliveryTime !== undefined ? (
        <h4>
          {" "}
          <span className="font-medium">Delivery Time:</span>{" "}
          {resData.sla.deliveryTime} minutes
        </h4>
      ) : (
        <h4>
          <span className="font-medium">Delivery Time:</span> N/A
        </h4>
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
