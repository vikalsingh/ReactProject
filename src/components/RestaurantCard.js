
const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-img-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vsvedox5cyszhaz5cbcg"
      />
      <div className="res-details">
        <h3 className="res-name">Meghana Foods</h3>
        <h5 className="res-cusign">4.3 Stars</h5>
        <h5 className="res-cusign">Burger, North Indian, MacD</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
