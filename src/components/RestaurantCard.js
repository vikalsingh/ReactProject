import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const RestaurantCard = () => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    // dispatch a action
    dispatch(addItem("burger"));
  };
  const handleRemoveItem = () => {
    dispatch(removeItem());
  };

  return (
    <div className="bg-gray-200 m-4 rounded-sm hover:animate-pulse">
      <img
        className="w-56 rounded-xl p-2"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vsvedox5cyszhaz5cbcg"
      />
      <div className="p-4">
        <h3 className="">Meghana Foods</h3>
        <h5 className="">4.3 Stars</h5>
        <h5 className="">Burger, North Indian, MacD</h5>
        <div className="flex justify-between">
          <button onClick={handleAddItem}>Add+</button>
          <button onClick={handleRemoveItem}>Remove-</button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
