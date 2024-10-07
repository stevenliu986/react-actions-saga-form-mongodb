import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "./reducer.js";
import "./App.css";

function App() {
  const counterValue = useSelector((state) => state.counter);
  const hello = useSelector((state) => state.hello);
  const dispatch = useDispatch();
  return (
    <>
      count: {hello}
      <button onClick={() => dispatch({ type: "JIA", payload: { amount: 1 } })}>
        +
      </button>
    </>
  );
}

export default App;
