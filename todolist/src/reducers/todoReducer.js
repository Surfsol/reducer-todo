//setup reducer need inital state and reducer f()

//will always be an object
// eaiser to keep add task in App.js, cause has input
export const initialState =
  {
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589,
  todo: []
}



//actions
//toggle complete
// add new task
export const todoReducer = (state, action) => {
  switch(action.type){
    case 'TOGGLE_COMPLETED':
        let id =action.payload
        state.todo.map(item => {
          if(item.id === id){
            return{
              ...item,
              completed: !item.completed
            }
          }
        })
    case 'ADD_TASK':
      //add to an array
      const newT = {
        task: action.payload,
        completed: false,
        id:Math.random()*10
      }
      return{
      ...state,
      todo: [...state.todo, newT]
        }
    case 'COMPLETED':
        return{
          ...state,
          todo: state.todo.filter(item =>
          !item.completed)
        }
    default:
      return state;
  }
}
