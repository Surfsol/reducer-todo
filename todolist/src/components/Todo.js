//actions
//toogle complete
//update todolist
import React, {useState, useReducer} from 'react'
import {initialState, todoReducer} from '../reducers/todoReducer'
import TodoList from './TodoList'

const Todo = () => {
    const [newTask, setNewTask] = useState();

      //Dispatched actions are processed by a reducer that accepts the
      // previous state and the action and returns the next state of your application.
      const[state, dispatch] = useReducer(todoReducer, initialState)
      console.log(`state`, state)
      console.log(`dispatch`, dispatch)

      const handleChanges = e => {
        setNewTask(e.target.value);
      }
    //
      return (
      <TodoList state={state}
      dispatch={dispatch}
      />
      )
  }

export default Todo;
