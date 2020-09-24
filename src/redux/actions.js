import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./constants"

export const addTodo =(todo) =>{
  return  {
        type: ADD_TODO,
        data: todo
    }
}
export const deleteTodo =(key)=>{
   return {
        type: DELETE_TODO,
        key: key
    }
}
export const toggleTodo=(key)=>{
return {
    type: TOGGLE_TODO,
    key: key
}
}


