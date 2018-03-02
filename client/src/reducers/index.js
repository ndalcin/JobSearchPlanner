import { combineReducers } from 'redux';
import TasksReducer from './reducerTasks';
import TypesReducer from './reducerTypes';

const RootReducer = combineReducers({
  types: TypesReducer,
  tasks: TasksReducer
});

export default RootReducer;
