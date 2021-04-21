
import { useDispatch } from "react-redux";

const CounterSimpleControls = () => {

  const dispatch = useDispatch();

  function incrementBy1Callback() {
    dispatch({ type: "increment_by_1" });
  }
  function decrementBy1Callback() {
    dispatch({ type: "decrement_by_1" });
  }

  function incrementBy10Callback() {
    dispatch({ type: "increment_by_10" });
  }
  
  function decrementBy10Callback() {
    dispatch({ type: "decrement_by_10" });
  }

  function incrementBy100Callback() {
    dispatch({ type: "increment_by_100" });
  }
  function decrementBy100Callback() {
    dispatch({ type: "decrement_by_100" });
  }






  return (
    <div>
      <button onClick={incrementBy1Callback}>+1</button>
      <button onClick={decrementBy1Callback}>-1</button>



      <button onClick={incrementBy10Callback}>+10</button>
      <button onClick={decrementBy10Callback}>-10</button>
    
   
      <button onClick={incrementBy100Callback}>+100</button>
      <button onClick={decrementBy100Callback}>-100</button>
    


    </div>
  );
};
export default CounterSimpleControls;





