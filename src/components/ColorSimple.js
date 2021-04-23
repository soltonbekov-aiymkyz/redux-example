// import { useSelector } from "react-redux";
// const ColorSimple = () => {
//   const color = useSelector(state => state.color);
//   return (
//     <div>{color}
    
//     <input type="color" onChange={({ target }) => (target.value.color)} />
//     </div>
//   );
// }
// export default ColorSimple





import { useDispatch, useSelector } from "react-redux";

const ColorSimple = () => {
  const dispatch = useDispatch();

  function changeColorCallBack({ target}){
    dispatch({type: "change_color", color: target.value})
  }
  return (
    <div><h2> Simple controls</h2>
   <input type="color" onChange={changeColorCallBack}/>
    </div>
  );
}
export default ColorSimple;
