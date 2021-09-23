import React, { useState } from "react";
import { adjustItemQty, removeFromCart } from "../redux/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  const [qty, setQty] = useState(item.qty);
  const dispatch = useDispatch();
  // add one x
  const plusOne = (e) => {
    setQty(qty + 1);
    dispatch(adjustItemQty(item.id, qty + 1));
  };
  // remove one x
  const minusOne = () => {
    if (qty > 1) {
      setQty(qty - 1);
      dispatch(adjustItemQty(item.id, qty - 1));
    } else {
      return;
    }
  };

  return (
    <div className="grid grid-cols-12 items-center  py-2  border-b-2 border-gray-100">
      <div className="col-span-3 md:col-span-2 p-5 ">
        <Link to={`/product/${item.id}`}>
          <img src={item.image} className="h-24 w-24" alt="" />
        </Link>
      </div>
      <div className="col-span-9 md:col-span-4 lg:col-span-7">
        <Link to={`/product/${item.id}`}>
          <h1 className="font-medium sm:text-xs lg:text-base">{item.title}</h1>
        </Link>
      </div>
      <div className="col-span-4 md:col-span-2 lg:col-span-1 justify-self-center border border-gray-200 rounded-md py-1">
        <button onClick={plusOne} className="font-medium sm:px-1 px-2">
          +
        </button>
        <span className="px-4 sm:px-2 py-1 border-r-2 border-l-2">{qty}</span>
        <button onClick={minusOne} className="font-medium sm:px-1  px-2">
          -
        </button>
      </div>
      <div className="col-span-4 md:col-span-2 lg:col-span-1 justify-self-center">
        <h6 className="font-medium">${item.price * item.qty}</h6>
      </div>
      <div className="col-span-4 md:col-span-2 lg:col-span-1 justify-self-center lg:justify-self-end">
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="bg-red-400 px-2 py-1 rounded font-medium text-white text-xs"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
