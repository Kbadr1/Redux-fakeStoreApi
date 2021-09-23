import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import {
  addToCart,
  cartTotal,
  productsFetch,
  singleProductFetch,
} from "../redux/actions";

const Product = () => {
  const dispatch = useDispatch();
  const { productID } = useParams();
  const productError = useSelector((state) => state.singleProductReducer.error);
  const productLoading = useSelector(
    (state) => state.singleProductReducer.loading
  );
  const product = useSelector((state) => state.singleProductReducer.product);
  const cart = useSelector((state) => state.cartReducer.cart);

  const { image, title, category, description, price, id } = product;

  useEffect(() => {
    dispatch(productsFetch());
    dispatch(singleProductFetch(productID));
  }, []);

  useEffect(() => {
    dispatch(cartTotal());
  }, [cart]);

  return (
    <div className="container mx-auto  lg:px-32 py-10 ">
      {productError && <h1>Error...</h1>}
      {productLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="grid grid-cols-4 gap-16">
          <div className="col-span-4 md:col-span-1 w-1/3 md:w-full justify-self-center ">
            <img className=" md:w-full " src={image} alt="" />
          </div>
          <div className="col-span-4 md:col-span-3">
            <h2 className="font-bold text-2xl">{title}</h2>
            <h6 className="font-light">{category}</h6>
            <p className="my-10 text-md">{description}</p>
            <h6 className="font-medium text-2xl">${price}</h6>
            <button
              className="bg-purple-800 text-white rounded-md font-medium py-2 px-6 my-10"
              onClick={() => dispatch(addToCart(id))}
            >
              Add to cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
