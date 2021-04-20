
import { useSelector } from "react-redux";
const IncericeDisplay = () => {
    const number = useSelector(state => state.number);
    console.log(number)
    return ( 
        <h2>{number}</h2>
    );
}
export default IncericeDisplay;