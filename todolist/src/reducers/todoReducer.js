//setup reducer need inital state and reducer f()
// eaiser to keep add task in App.js, cause has input
export const initialState =[
  {
  task: 'Learn about reducers',
  completed: false,
  id: 3892987589,
}
]

//actions
//toggle complete
// add new task
export const todoReducer = (state, action) => {
  switch(action.type){
    case 'TOGGLE_COMPLETED':
      console.log('TOGGLE_COMPLETED')
            // return{
            //   ...state,
            //   completed: !state.completed
            // }
          return state.map(e =>{
            return e.id === action.payload ? {
              ...e, completed: !e.completed 
            }: e;
          })
      
    case 'ADD_TASK':
      //add to an array
      const newT = {
        task: action.payload,
        completed: false,
        id:Math.random()*10
      }
      return[
      ...state,
      newT
      ]
    case 'COMPLETED':
        return state.filter(e =>{
          return !e.completed
        })
    default:
      return state;
  }
}
