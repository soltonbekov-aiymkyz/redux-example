
// import { useSelector } from "react-redux";
// const CounterDisplay = () => {
//     const number = useSelector(
//         store => store.counter.number
//         );
    
//     return ( 
//         <div>
//         <h1>number</h1>
//         {number}
//         </div>
//     );
// }
// export default CounterDisplay;
import { useSelector } from "react-redux";

const CounterDisplay = () => {
    const number = useSelector(state => state.counter.number);

    console.log(number)

    return ( 
        <h1>{number}</h1>
    );
}
 
export default CounterDisplay;