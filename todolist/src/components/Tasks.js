import React from 'react';

//renders list on screen
// <p>displays items on screen
const Tasks= props => {
    // console.log(`tasks props`,props)
    console.log(`tasks props.todoItem.id`,props)
  return (
    <>
    <div onClick={()=> props.dispatch({ type: 'TOGGLE_EDITING', payload:props.todoItem.id})}>
      <p>{props.todoItem.task}</p> 
    </div>
    </>
  );
};

export default Tasks;