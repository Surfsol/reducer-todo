import React, {useState, useEffect} from 'react';
import '../tasks.css'
// const useStyles = {
//   line:{text-decoration: line-through}
// }

//renders list on screen
// <p>displays items on screen
const Tasks= props => {
//const [isCompleted, setCompleted]=useState(props.todoItem.completed ? true : false)

// if(props.todoItem.completed === true){
//   setCompleted(isCompleted === true)
// }

//console.log(`isCompleted`,isCompleted)

// const changeComplete = () =>{
//   //e.preventDefault()
//   console.log('change')
//   setCompleted(!isCompleted)
// }


  // const diplay = () => {
  //  if(props.todoItem.completed === false){
     
  //  }
  // }
  if (props.todoItem.completed === true){
    
  }
    // console.log(`tasks props`,props)
    console.log(`tasks props.todoItem.id`,props)
  return (
    <>
    <div className={props.todoItem.completed ? 'crossout': 'notdone'}  onClick={()=> props.dispatch({ type: 'TOGGLE_COMPLETED', payload : props.todoItem.id})}>
      {props.todoItem.task} 
    </div>
    </>
  );
};

export default Tasks;