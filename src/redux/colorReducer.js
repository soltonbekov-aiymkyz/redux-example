
const initialState = {
    color:"#000000",
}
const colorReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case "change_color":
            newState.color = action.color;
            return newState;
    }
    return state;
}
export default colorReducer









