
import { useSelector } from "react-redux";
const AiymDisplay = () => {
    const text = useSelector(store => store.text.text)
   
    return ( 
        <div>
            <p >{text}</p>
        </div>
    );
}
export default AiymDisplay;