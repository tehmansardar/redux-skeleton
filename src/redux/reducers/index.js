import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productReducer from "./prodcutReducer";

export default combineReducers({ userReducer, products: productReducer });
