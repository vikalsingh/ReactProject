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
    <div className="body">
      <div className="filter">
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
          className="searchBox"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <p>{custom}</p>
      </div>
      <div className="resturent-container">
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
