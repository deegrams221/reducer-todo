// Step 3 - Adding todos - build a form
import React, {useState, useReducer} from 'react';
import {initialState, todoReducer} from '../reducers/TodoReducer';

const TodoForm = (props) => {
// set up dispatch
  const [newtodo, setNewTodo] = useState('')
  const [state, dispatch] = useReducer(todoReducer, initialState)
  console.log('state',state)

  const handlechange = (e) => {
    let value = e.target.value;
      if (value !== null) {
        setNewTodo(value)
      }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <div className="completed-todo">
          {state.map(state => {
            return (
                // displays the todo list above the add todo form
              <p onClick={() => dispatch({type: "TOGGLE_TODO", payload:state.id})} style={state.completed ? {textDecoration: 'line-through'} : null}>{state.item}</p>
            )
          })}
        </div>
        <input type="text" name="todo" placeholder="...todo" value={newtodo} onChange={handlechange}></input>
        <button onClick={()=> dispatch({type: "ADD_TODO", payload:newtodo})}>Add Todo</button>
        <button onClick={() => dispatch({type: "COMPLETED_TODO"})}>Clear Completed</button>
      </form>
    </div>
  )
}

export default TodoForm;