import { useEffect } from "react";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";

import { setUser } from "./redux/actions/nameActions";

import { fetchProducts } from "./redux/actions/productActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  });

  const name = useSelector((state) => state.userReducer);

  return (
    <div className="App">
      <input type="text" onChange={(e) => dispatch(setUser(e.target.value))} />
      {/* <p>{name}</p> */}
    </div>
  );
}

export default App;
