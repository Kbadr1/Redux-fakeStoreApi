const intialState = {
  loading: false,
  error: null,
  errorMessage: undefined,
  product: {},
};

export const singleProductReducer = (
  state = intialState,
  { type, payload }
) => {
  switch (type) {
    case "SINGLE_PRODUCT_FETCH_REQUEST":
      return { ...state, loading: true, error: null };
    case "SINGLE_PRODUCT_FETCH_SUCCESS":
      return { ...state, product: payload, loading: false };
    case "SINGLE_PRODUCT_FETCH_ERROR":
      return { ...state, loading: false, error: true, errorMessage: payload };
    default:
      return state;
  }
};
