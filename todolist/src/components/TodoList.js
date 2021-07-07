import React from 'react'
import Tasks from './Tasks'


const TodoList = (props) => {
    console.log(`todolist props.state`, props) //returns and array
    return(
<div>

            {props.state.map(todoItem=>(
            <Tasks key={todoItem.id} todoItem={todoItem} dispatch={props.dispatch}/>
            ))}
 

</div>

    )
}
export default TodoList;