
// import { useDispatch, useSelector } from "react-redux";
// const ColorSimple = () => {
//   const dispatch = useDispatch();

//   function changeColorCallBack({ target}){
//     dispatch({type: "change_color", color: target.value})
//   }
//   return (
//     <div><h2> Simple controls</h2>
//    <input type="color" onChange={changeColorCallBack}/>
//     </div>
//   );
// }
// export default ColorSimple;
import { useDispatch } from "react-redux";

const ColorSimple = () => {
    const dispatch = useDispatch();
    
    function colore({ target }) {
        dispatch({ type: "color", color: target.value })
    }

    return ( 
        <div>
            <input type="color" onChange={colore}/>
        </div>
    );
}
 
export default ColorSimple;