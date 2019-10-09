import React from 'react'
import Tasks from './Tasks'


const TodoList = (props) => {
    console.log(`todolist props.state`, props) //returns and array
    return(
<div>
<h2>{props.item}</h2>
            {props.todo.map(todoItem=>(
            <Tasks key={todoItem.id} todoItem={todoItem} dispatch={props.dispatch}/>
            ))}
 

</div>

    )
}
export default TodoList;