
import { useSelector } from "react-redux";

const CounterDisplay = () => {
    const number = useSelector(state => state.counter.number);

    console.log(number)

    return ( 
        <h1>{number}</h1>
    );
}
 
export default CounterDisplay;