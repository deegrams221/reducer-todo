// Step 2 - Set up state in your component
import React, {useState, useReducer} from "react";
import {initialState, todoReducer} from '../reducers/TodoReducer';

const Todo = () => {
  const [newTodo, setNewTodo] = useState();
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log(state);

  return (
    <div>

    </div>
  );
};

export default Todo;
