import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { cartTotal, clearCart, totalSum } from "../redux/actions";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);
  const cartTotalSum = useSelector((state) => state.cartReducer.totalSum);

  useEffect(() => {
    dispatch(totalSum());
    dispatch(cartTotal());
  }, [cart]);

  return (
    <div>
      {cart.length ? (
        <div className="container mx-auto my-10 ">
          <div className="pb-5">
            <button className=" bg-purple-700 text-white rounded py-2 px-4">
              <Link to="/">Continue shopping</Link>
            </button>
            <button
              className="float-right bg-purple-700 text-white rounded py-2 px-4"
              onClick={() => dispatch(clearCart())}
            >
              Clear cart
            </button>
          </div>
          <div className="border border-gray-200 rounded-lg px-10">
            {cart.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </div>
          <h6 className="float-right py-5 font-medium text-lg">
            Total sum: <span className="">${cartTotalSum}</span>
          </h6>
        </div>
      ) : (
        <div className="text-center flex justify-center items-center flex-col  h-screen">
          <h1 className="text-xl font-medium mb-5">
            You don't have any products added to cart yet.
          </h1>
          <button className="bg-purple-700 text-white rounded py-2 px-4">
            <Link to="/">Continue shopping</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
