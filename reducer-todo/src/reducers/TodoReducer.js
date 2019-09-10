// Step 1 - Build a simple reducer and initial state

export const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },
  {
    item: 'Learn about redux',
    completed: false,
    id: 3892987590
  }
];

export const todoReducer = (state, action) => {
  // step 3 - write a case in reducer for adding a todo
  switch(action.type){
    case "ADD_TODO":
      return [
        ...state,
        {
          item: action.payload,
          completed:false,
          id: Date.now()
        }
      ]
    // Step 4 - Toggle the completed field
    case "TOGGLE_TODO":
      let clickNewState = state.map(state => {
        if(state.id === action.payload) {
          return{
            ...state,
            completed: !state.completed
          }
        } else {
          return state;
        }
      })
      return clickNewState;
      
    default: return state;
  }
};