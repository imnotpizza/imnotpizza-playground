import {combineReducers} from 'redux';
import counter from './counter';
import todos from './todos';
import sample from './sample';



//couter, todos 합쳐 반환
const rootReducers=combineReducers({
    counter,
    todos,
    sample,
})

export default rootReducers;