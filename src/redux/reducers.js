import {todos} from './reducers/todos';
import {filters} from './reducers/filters'
import {combineReducers} from 'redux';

export default combineReducers({
    todos,
    filters
})