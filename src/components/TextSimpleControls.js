// import {useDispatch} from "react-redux"
// const TextSimpleControls = () => {
// const dispatch = useDispatch();

// function textChangeCallback ({target}){
//     dispatch({type: "set_text", text:target.value})
// }

//     return ( 
//         <div>
//             <h2>simple controls</h2>
//             <input type="text" onChange={textChangeCallback}></input>
//         </div>
//      );
// }
//  //trim
//  //toupercase
// export default TextSimpleControls;


import { useDispatch } from "react-redux"

const TextSimpleComtrols = () => {
    const dispatch = useDispatch()

    function textChangeCallBack({ target }) {
        dispatch({ type: "set_text", text: target.value })
    }
    return ( 
        <div>
            <input type="text" onChange={textChangeCallBack} />
        </div>
    );
}
 
export default TextSimpleComtrols;