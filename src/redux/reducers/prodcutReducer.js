import ACTIONS from "../actions";

const initialState = {
  products: [],
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIONS.FETCH_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
export default productReducer;
