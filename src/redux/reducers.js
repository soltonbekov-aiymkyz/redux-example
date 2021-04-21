
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
            return { ...state, number: state.number *= 2 }
        case "decrement_by_5":
            return { ...state, number: state.number /= 2 }
        case "increment_by_10":
            return { ...state, number: state.number + 10 }
        case "decrement_by_10":
            return { ...state, number: state.number - 10 }
        case "increment_by_100":
            return { ...state, number: state.number + 100 }
        case "decrement_by_100":
            return { ...state, number: state.number - 100 }

            case "increment_by_0":
                return { ...state, number: Math.floor(Math.random() * 101)  }
            case "decrement_by_0":
                return { ...state, number: Math.floor(Math.random() * 101)        }
    
    }
return state;
}
export default counterReducer;


