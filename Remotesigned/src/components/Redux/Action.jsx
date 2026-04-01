import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./Counterslice";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{count}</h1>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default App;