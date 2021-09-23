import { combineReducers } from "redux";
import { productsReducer } from "./products";
import { singleProductReducer } from "./product";
import { cartReducer } from "./cart";

const allReducers = combineReducers({
  productsReducer,
  singleProductReducer,
  cartReducer,
});

export default allReducers;
