import fakeStoreApi from "../../apis/fakeStoreApi";
// products actions
export const productsFetchRequest = () => {
  return {
    type: "PRODUCTS_FETCH_REQUEST",
  };
};

export const productsFetchSuccess = (products) => {
  return {
    type: "PRODUCTS_FETCH_SUCCESS",
    payload: products,
  };
};

export const productsFetchError = (error) => {
  return {
    type: "PRODUCTS_FETCH_ERROR",
    payload: error,
  };
};

export const productsFetch = () => {
  return (dispatch) => {
    dispatch(productsFetchRequest());
    fakeStoreApi
      .get("/products")
      .then(({ data }) => {
        dispatch(productsFetchSuccess(data));
      })
      .catch(({ error }) => {
        dispatch(productsFetchError(error));
      });
  };
};
// product actions

export const singleProductFetchRequest = () => {
  return {
    type: "SINGLE_PRODUCT_FETCH_REQUEST",
  };
};

export const singleProductFetchSuccess = (product) => {
  return {
    type: "SINGLE_PRODUCT_FETCH_SUCCESS",
    payload: product,
  };
};

export const singleProductFetchError = (error) => {
  return {
    type: "SINGLE_PRODUCT_FETCH_ERROR",
    payload: error,
  };
};

export const singleProductFetch = (productID) => {
  return (dispatch) => {
    dispatch(singleProductFetchRequest());
    fakeStoreApi
      .get(`/products/${productID}`)
      .then(({ data }) => {
        dispatch(singleProductFetchSuccess(data));
      })
      .catch(({ error }) => {
        dispatch(singleProductFetchError(error));
      });
  };
};

// cart actions

export const addToCart = (itemID) => {
  return (dispatch, getState) => {
    const appState = getState();
    const allProducts = appState.productsReducer.products;
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: itemID,
        allProducts: allProducts,
      },
    });
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: {
      id: itemID,
    },
  };
};

export const adjustItemQty = (itemID, qty) => {
  return {
    type: "ADJUST_ITEM_QTY",
    payload: {
      id: itemID,
      qty,
    },
  };
};

export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};

export const totalSum = () => {
  return {
    type: "TOTAL_SUM",
  };
};

export const cartTotal = () => {
  return {
    type: "CART_TOTAL",
  };
};
