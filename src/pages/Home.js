import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Product from "../components/Product";
import { productsFetch } from "../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const productsError = useSelector((state) => state.productsReducer.error);
  const productsLoading = useSelector((state) => state.productsReducer.loading);
  const products = useSelector((state) => state.productsReducer.products);

  useEffect(() => {
    dispatch(productsFetch());
  }, []);

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 grid-rows-1 grid-flow-row  row sm:grid-cols-2  lg:grid-cols-3 gap-20 lg:px-32">
      {productsError && <h1>Error!</h1>}
      {productsLoading ? (
        <h1>Loading...</h1>
      ) : (
        products.map((product) => (
          <Product product={product} key={product.id} />
        ))
      )}
    </div>
  );
};

export default Home;
