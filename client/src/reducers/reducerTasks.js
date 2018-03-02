import _ from 'lodash';
import { FETCH_TASK, RECEIVED_TASK, FETCH_TASKS, RECEIVED_TASKS, DELETE_TASK, CREATE_TASK } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_TASK: //not really doing anything in my app, but could be
      return { ...state }
    case RECEIVED_TASK:
      return { ...state, [action.payload.id]: [action.payload][0]} // easier to add in when state is an object (compared to an array)
    case FETCH_TASKS:
      return { ...state }
    case RECEIVED_TASKS:
      return _.mapKeys(action.payload, 'id') // takes an array and maps the key to 'id' and the remainder of the payload as the value
    case CREATE_TASK:
      return {...state, [action.payload.task.id]: [action.payload.task][0] }
    case DELETE_TASK:
      return _.omit(state, action.payload) // updates the state to omit/leave out the object with the key === action.payload (id)
    default:
      return state;
  }
}

// In Redux, all reducers get called regardless of the action,
// so inside each one you have to return the original state if the action is not applicable.
// Reducers are “pure functions”.
// They should not have any side-effects nor mutate the state — they must return a modified copy.
