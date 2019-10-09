import React from "react";

//add new item to shopping list
//form will manage its own state, dont pass in props
const TodoForm = props => {
 // console.log(`form`, props);
  //const [newTask, setNewTask] = useState();

  const handleChanges = e => {
    props.setNewTask(e.target.value); //e.target.name is same as task, line 9
  };
  //create a form to submit a new task

  return (
    <form>
      <input
        type="text"
        value={props.newTask}
        name="task"
        onChange={handleChanges}
      />
      <button
        onClick={e => {
          e.preventDefault();
          props.dispatch({ type: "ADD_TASK", payload: props.newTask });
        }}
      >
        Add Task
      </button>
      <button
        onClick={e => {
          e.preventDefault();
          props.dispatch({ type: "COMPLETED" });
        }}
      >
        Clear Completed Tasks
      </button>
    </form>
  );
};

export default TodoForm;
