import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[0].card?.card?.info;

  const itemCards =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards ||
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  return (
    <div className="px-4 py-4">
      <h1 className="font-bold text-red-700">{name}</h1>
      <h3 className="font-thin">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <h2 className="font-semibold pt-4 text-zinc-700">Menu:)-</h2>
      <ul className="py-1 text-black">
        {itemCards?.map((items) => (
          <li key={items?.card?.info?.id}>
            {items?.card?.info?.name} = Rs{" "}
            {items?.card?.info?.price / 100 ||
              items?.card?.info?.defaultPrice / 100}
          </li>
        ))}
        
      </ul>
    </div>
  );
};

export default RestaurantMenu;
