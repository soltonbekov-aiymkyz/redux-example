const redux = require("redux");
const createStore = redux.createStore;
const initialState = {
  number: 0,
};
// Reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const newState = { ...state };
      newState.number++;
      return newState;
    case 'INCREMENT_BY_10':
      const newState2 = { ...state };
      newState2.number += 10;
      return newState2;
      case 'DECREMENT':
        const newState3 = { ...state };
        newState3.number--;
        return newState3;

        case 'INCREMENT_BY_1':
          const newState4 = { ...state };
          newState4.number = 10;
          return newState4;


          case 'INCREMENT_BY_5':
            const newState5 = { ...state };
            newState5.number = 20;
            return newState5;



            case 'INCREMENT_BY_100':
              const newState100 = { ...state };
              newState5.number = 100;
              return newState100;
  
  
              case 'INCREMENT_BY_0':
                const newState0 = { ...state };
                newState0.number = random;
                return newState0;
    
    
  




  }
  return state;
}
// Store
const store = createStore(counterReducer);
// Subscriber
store.subscribe(() => {
  console.log(store.getState());
});
// Action
const newAction = { type: "INCREMENT" };
store.dispatch(newAction);
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "INCREMENT_BY_10" });


// store.dispatch({ type: "INCREMENT_BY_100" });

