
const initialState = {
    number: 0,
    color:"#000000",
}
const counterReducer = (state = initialState, action) => {
    const newState = { ...state };
    // const newState = { ...state };
    
    switch (action.type) {

        case "change_slider":
            newState.slider = action.slider;
            return newState;

        case "change_color":
            newState.color = action.color;
            return newState;

        case "set_number":
            newState.number = action.number;
            return newState;


            case "set_number2":
                newState.number += action.number;
                return newState;
    


        case "increment_by_1":
            newState.number++;
            return newState;
        case "increment_by_10":
            newState.number += 10;
            return newState;

            return { ...state, number: state.number + 100 }
        case "decrement_by_100":
            return { ...state, number: state.number - 100 }
        case "increment_by_0":

        case "increment_by_0":
            return { ...state, number: Math.floor(Math.random() * 101) }
        case "decrement_by_0":
            return { ...state, number: Math.floor(Math.random() * 101) }



        default:
            break;
    }
    return state;
}
export default counterReducer









