//actions
//toogle complete
//update todolist
import React, {useState, useReducer} from 'react'
import {initialState, todoReducer} from '../reducers/todoReducer'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

const Todo = () => {
    const [newTask, setNewTask] = useState();
    console.log(`newtast`,newTask)
    console.log(`setnewtast`,setNewTask)

      //Dispatched actions are processed by a reducer that accepts the
      // previous state and the action and returns the next state of your application.
      const[{item, completed, todo}, dispatch] = useReducer(todoReducer, initialState)
      console.log(`state`, )
      console.log(`dispatch`, dispatch)
    
      return (
      <>
      <TodoList todo={todo}
      item={item}
      dispatch={dispatch}/>

      <TodoForm dispatch={dispatch}
      newTask={newTask}
      setNewTask={setNewTask}
      />
      
      </>
      )
  }

export default Todo;
