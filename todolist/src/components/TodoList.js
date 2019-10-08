import React from 'react'
import Tasks from './Tasks'


const TodoList = (props) => {
    console.log(`todolist props`, props) //returns and array
    return(
<div>

            {props.state.map(e=>(
            <Tasks key={e.id} item={e} dispatch={props.dispatch}/>
            ))}
 

</div>

    )
}
export default TodoList;