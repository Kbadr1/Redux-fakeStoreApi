const intialState = {
  loading: false,
  error: null,
  errorMessage: undefined,
  products: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case "PRODUCTS_FETCH_REQUEST":
      return { ...state, loading: true, error: null };
    case "PRODUCTS_FETCH_SUCCESS":
      return { ...state, products: payload, loading: false };
    case "PRODUCTS_FETCH_ERROR":
      return { ...state, loading: false, error: true, errorMessage: payload };
    default:
      return state;
  }
};
