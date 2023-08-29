import { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import reactLogo from "./../../images/logo.png";
import UserContext from "../utils/UserContext";


const Header = () => {

  const {loggedInUser} = useContext(UserContext);

  // subscribing to the store using this selector hook

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems)

  return (
    <div className="flex justify-between shadow-lg px-6 sticky top-0 bg-amber-200">
      <div className="logo-container">
        <img
          className="w-36 bg-amber-200"
          src={reactLogo}
        />
      </div>
      <div className="flex items-center">
        <ul className="flex m-4">
          <li className="p-4"><Link to="/">Home</Link></li>
          <li className="p-4"><Link to="/about">About Us</Link></li>
          <li className="p-4">Contact Us</li>
          <li className="p-4 font-bold text-xl">Cart ({cartItems.length} items)</li>
          <li className="p-4"><Link to="/flightticket">FlightTicket</Link></li>
          <li className="p-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
