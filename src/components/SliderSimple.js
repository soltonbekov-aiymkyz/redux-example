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









import { useDispatch, useSelector } from "react-redux";
const SliderSimple = () => {
  const dispatch = useDispatch();
  function changeSliderCallBack({ target}){
    dispatch({type: "change_slider", color: target.value})
  }
  return (
    <div><h2> Slider simple</h2>
   <input type="range" onChange={changeSliderCallBack}/><br></br>
   <input type="range" onChange={changeSliderCallBack} /><br></br>
   <input type="range" onChange={changeSliderCallBack} />
    </div>
  );
}
export default SliderSimple;


