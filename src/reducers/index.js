import {combineReducers} from 'redux';
import Todos from './Todos'
import Filters from './Filters'

export default combineReducers({
    Todos,
    Filters
})