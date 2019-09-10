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
    default: return state;
  }
};