import {
    ADD_TODO,
    TOGGLE_TODO,
    DELETE_TODO
} from '../constants'
const initialState={
    todoList:[]
}
export const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            
            return {
                ...state,
                todoList: state.todoList.push({
                    key: Math.random,
                    name: action.data
                })
            }

        case TOGGLE_TODO:
            return {
                ...state,
                todoList: state.todoList.map((item)=>{
                    if(item.key === action.key){
                        item.completed = !item.completed
                    }
                })
            }

        case DELETE_TODO:
             return{
                 ...state,
                 todoList: state.todoList.filter((
                     (item) => item.key !== action.key
                     )
                 )
             }
        
        default:
            return state
    }
}