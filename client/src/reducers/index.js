import { combineReducers } from 'redux';
import TasksReducer from './reducerTasks';
import TypesReducer from './reducerTypes';

const RootReducer = combineReducers({
  types: TypesReducer,
  tasks: TasksReducer
});

export default RootReducer;

//Individual reducers are combined into a single rootReducer to create 
//the discrete properties of the state.
