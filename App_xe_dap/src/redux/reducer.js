const initialState ={
    count: 0
}

const rootReducer = (state = initialState, action)=>{
    switch (action.type) {
        case 'INCREMENT':
          return {
            ...state,
            count: state.count + 1
          };
        case 'DECREMENT':
          if (state.count > 0) {
            return {
              ...state,
              count: state.count - 1,
            };
          } else {
            return state;
          }
        default:
          return state;
      }
}


export default rootReducer;