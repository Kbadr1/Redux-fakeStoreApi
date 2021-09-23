import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, cartTotal } from "../redux/actions";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { id, image, title, price } = product;
  const cart = useSelector((state) => state.cartReducer.cart);

  useEffect(() => {
    dispatch(cartTotal());
  }, [cart]);

  return (
    <div>
      <div className=" bg-white p-3 border border-gray-50 shadow rounded-md flex flex-col h-full">
        <Link to={`/product/${id}`}>
          <img className="h-72 w-full p-5" src={image} alt="" />
        </Link>
        <Link to={`/product/${id}`}>
          <h5 className="font-medium text-lg my-2">{title}</h5>
        </Link>
        <h6 className="font-bold text-lg my-2">${price}</h6>
        <button
          className="bg-purple-800 font-medium rounded text-white py-2 px-4 w-full mt-auto"
          onClick={() => dispatch(addToCart(id))}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
