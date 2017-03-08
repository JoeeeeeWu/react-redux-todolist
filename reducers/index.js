import todos from './todos';
import visibilityFilter from './visibilityFilter';
import { combineReducers } from 'redux';

/*状态树：{
    todos:[{},{},{},...],
    visibilityFilter: string
}*/

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

export default todoApp;
