
const initialState = {
    number: 0,
}
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "increment_by_1":
            return { ...state, number: state.number + 1 }
        case "decrement_by_1":
            return { ...state, number: state.number - 1 }



            case "increment_by_5":
                return { ...state, number: state.number * 1 }
            case "decrement_by_5":
                return { ...state, number: state.number / 1 }
    }
    return state;
}
export default counterReducer;