


const initialState = {
  number: 0,
};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment_by_1":
      return { ...state, number: state.number + 1 };
      
      case "decriment_by_1":
        return { ...state, number: state.number - 1 };
        
  }
  return state;
}
export default counterReducer;
import { useSelector } from "react-redux";

const CounterDisplay = () => {
  const number = useSelector(state => state.number);
  return (
    <h1>{number}</h1>
  );
}
export default CounterDisplay;