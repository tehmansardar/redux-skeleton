import ACTIONS from "./index";

import axios from "../../axios";

export const fetchProducts = () => async (dispatch) => {
  const response = await axios.get("/products");
  dispatch({
    type: ACTIONS.FETCH_PRODUCTS,
    payload: response.data,
  });
};
