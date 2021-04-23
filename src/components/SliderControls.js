// import { useSelector } from "react-redux";
// const SliderSimple = () => {
//   const color = useSelector(state => state.color);
//   return (
//     <div>
//    {range}
// {/* 
//   <input type="range" min="1" max="100" value="50" class="slider" id="myRange"> 
      
//     <input type="color" onChange={({ target }) => (target.value.color)} />  */}


    
//     <input type="range" onChange={({ target }) => (target.value.range)} />

//     </div>
//   );
// }
// export default SliderSimple









// import { useDispatch, useSelector } from "react-redux";
// const SliderSimple = () => {
//   const dispatch = useDispatch();
//   function changeSliderCallBack({ target}){
//     dispatch({type: "change_slider", color: target.value})
//   }
//   return (
//     <div><h2> Slider simple</h2>
//    <input type="range" onChange={changeSliderCallBack}/><br></br>
//    <input type="range" onChange={changeSliderCallBack} /><br></br>
//    <input type="range" onChange={changeSliderCallBack} />
//     </div>
//   );
// }
// export default SliderSimple;


import { useState } from "react";
import { useDispatch } from "react-redux";

const SliderControls = () => {
    const dispatch = useDispatch();

    const [r, setR] = useState(0)
    const [g, setG] = useState(0)
    const [b, setB] = useState(0)

    function colorCallback(){
        dispatch({type: "color", color: `rgb(${r}, ${g}, ${b})`})
    }

    return ( 
        <div>
            <input type="range" min={0} max={255} onChange={({target})=> {setR(target.value); colorCallback()}}/>
            <input type="range" min={0} max={255} onChange={({target})=> {setG(target.value); colorCallback()}}/>
            <input type="range" min={0} max={255} onChange={({target})=> {setB(target.value); colorCallback()}}/>
        </div>
    );
}
 
export default SliderControls;