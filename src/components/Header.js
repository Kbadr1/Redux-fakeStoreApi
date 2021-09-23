import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartTotal = useSelector((state) => state.cartReducer.cartTotal);

  return (
    <nav className="bg-purple-900 text-white">
      <div className="container mx-auto py-4 flex justify-between font-medium">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart {cartTotal}</Link>
      </div>
    </nav>
  );
};

export default Header;
