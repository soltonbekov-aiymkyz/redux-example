import { useState } from "react"
import { useDispatch } from "react-redux"
const AiymSimple = () => {
    const dispatch = useDispatch()
    function email ({ target }) {
        dispatch({ type: "email", text: target.value })
    }
   
    return ( 
        <div>

<div>
<input refs="email" type="text"  placeholder="Email"/>  
</div>



        </div>
    );
}
export default AiymSimple;