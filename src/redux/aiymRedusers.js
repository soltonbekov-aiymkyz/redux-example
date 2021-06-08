
const initialState = {
    text: "",
}
const aiymRedusers = (state = initialState, action)  => {
    const newState = { ...state };
    switch (action.type) {
        case "text":
            newState.text = action.text;
            return newState;
        
          
    }  
    return state;
}
export default aiymRedusers;