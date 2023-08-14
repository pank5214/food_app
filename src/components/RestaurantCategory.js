import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ categoryData, showItems, setShowIndex }) => {
  const [show, setShow] = useState();

  const clickHandler = () => {
    const value = setShow(!show);
    setShowIndex(value);
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 p-4 bg-gray-50 shadow-lg ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={clickHandler}
        >
          <span className="font-semibold text-lg">
            {categoryData.title} ({categoryData.itemCards.length})
          </span>
          <span>🔽</span>
        </div>

        {show && showItems && <ItemList items={categoryData.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
