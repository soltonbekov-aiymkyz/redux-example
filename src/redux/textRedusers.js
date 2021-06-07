
const initialState = {
    text: "",
    size: 16,
     name:"aiymkyz",
}
const textRedusers = (state = initialState, action)  => {
    const newState = { ...state };
    switch (action.type) {
        case "set_text":
            newState.text = action.text;
            return newState;
        case "size":
            newState.size = action.size;
            return newState;

          

            case "toUpperCase":
                newState.text = action.text;
                return newState;
    }  
    return state;
}
export default textRedusers;
