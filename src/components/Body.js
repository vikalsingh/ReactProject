import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import useCustomHook from "../utils/useCustomHook";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const custom = useCustomHook();
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>Looks like you are offline.</h1>;
  return (
    <div className="body px-6">
      <div className="flex my-5 mx-5">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("hi");
          }}
        >
          Top Rated Restaurant
        </button>
        <input
          type="text"
          className="m-4 p-2 border border-solid border-black"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <p className="flex self-center">{custom}</p>
      </div>
      <div className="flex flex-wrap justify-center">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

export default Body;
