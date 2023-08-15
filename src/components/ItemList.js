import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      <div>
        {items.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="m-2 p-2 text-left border-b-2 flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item?.card?.info?.name}</span>
                <span>
                  - ₹
                  {item?.card?.info?.price
                    ? item?.card?.info?.price / 100
                    : item?.card?.info?.defaultPrice / 100}
                </span>
              </div>

              <p className="text-xs">{item?.card?.info?.description}</p>
            </div>

            <div className="w-3/12 p-4">
              <div className="absolute">
                <button
                  className="px-4 mx-8 my-[70px] rounded-lg bg-gray-50 text-blue-400 shadow-lg"
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>
              <img src={CDN_URL + item?.card?.info?.imageId} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
