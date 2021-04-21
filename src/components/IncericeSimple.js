
import { useDispatch } from "react-redux";
const IncericeSimple = () => {
  const dispatch = useDispatch();
  function incrementBy5Callback() {
    dispatch({ type: "increment_by_5" });
  }
  function decrementBy5Callback() {
    dispatch({ type: "decrement_by_5" });
  }

  return (
    <div>
      <button onClick={incrementBy5Callback}>*2</button>
      <button onClick={decrementBy5Callback}>:2</button>
    
    </div>
  );
};
export default IncericeSimple;