//setup reducer need inital state and reducer f()

//will always be an object
// eaiser to keep add task in App.js, cause has input
export const initialState = [
  {
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
},{
  item: 'Review',
  completed: false,
  id: 3892987588
}
]

//actions
//toggle complete
// add new task
export const todoReducer = (state, action) => {
  switch(action.type){
    case 'TOGGLE_COMPLETED':
      return{
        ...state,
        completed: !state.completed //change complete f to t
      }
    case 'Add_Task':
      //add to an array
      const newT = {
        item: action.payload,
        completed: false,
        id:Math.random()*10
      }
      return{
      ...state,
      item: [...state, newT]
        
        }
    default:
      return state;
  }
}
