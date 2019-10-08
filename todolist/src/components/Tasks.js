import React from 'react';

//renders list on screen
// <p>displays items on screen
const Tasks= props => {
    console.log(`tasks props`,props)
    console.log(`tasks props.item.task`,props.item.item)
  return (
    <div onClick={()=> props.dispatch({ type: 'TOGGLE_EDITING'})}>
      <p>{props.item.item}</p> 
    </div>
  );
};

export default Tasks;