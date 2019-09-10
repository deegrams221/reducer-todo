// Step 2 - Set up state in your component
import React, {useState, useReducer} from "react";
import {initialState, todoReducer} from '../reducers/TodoReducer';
import TodoForm from './TodoForm';

const Todo = () => {
  const [addTodo, setAddTodo] = useState();
  // Set up dispatch
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log(state);

  return (
    <div>
      <TodoForm />
    </div>
  );
};

export default Todo;
