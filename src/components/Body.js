import RestaurantCard, { withDiscountLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const DiscountedRestaurantCard = withDiscountLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API);

    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1 className="px-2 m-4 font-bold">
        🔴 You'r offline ! Please check your internet connection!!
      </h1>
    );
  }

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex flex-col justify-center">
        <div className="p-4 w-full flex justify-center">
          <input
            type="text"
            data-testid="searchInput"
            className="p-2 w-2/3 md:w-1/3 border border-solid rounded-l-lg"
            required
            placeholder="Search Restaurant Name..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="p-2 px-4 bg-green-300 rounded-r-lg hover:bg-green-400"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants?.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  ?.includes(searchText?.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <div className="flex self-center">
          <button
            className="px-4 py-2 bg-green-300 rounded-lg hover:bg-green-400"
            onClick={() => {
              const filteredList = listOfRestaurants?.filter(
                (restaurant) => restaurant?.info?.avgRating >= 4.3
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center my-2 mb-20">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            {restaurant?.info?.aggregatedDiscountInfoV3?.discountTag ===
            "FLAT DEAL" ? (
              <DiscountedRestaurantCard resData={restaurant?.info} />
            ) : (
              <RestaurantCard resData={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
