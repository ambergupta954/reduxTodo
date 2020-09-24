import {todos} from './reducers/todos';
import {filters} from './reducers/filters'
import {combineReducers} from 'redux';

const reducers = combineReducers({
    todos,
    filters
})
export default reducers;