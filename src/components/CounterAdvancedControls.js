import { useState } from "react";
import { useDispatch } from "react-redux";
const CounterAdvancedControls = () => {
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch();
  function setCallback() {
    dispatch({ type: "set_number", number: +number });
  }
  return (
    <div>
      <h2>Advanced controls</h2>
      <div>
        <input type="number" onChange={({ target }) => setNumber(target.value)} />
        <button onClick={setCallback}>Set</button>


        <input type="number" onChange={({ target }) => setNumber(target.value)} />+
        <input type="number" onChange={({ target }) => setNumber(target.value)} />
        <button onClick={setCallback}>Set result</button>

      </div>
    </div>
  );
}
export default CounterAdvancedControls;
