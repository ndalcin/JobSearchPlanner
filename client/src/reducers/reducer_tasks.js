import _ from 'lodash';
import { FETCH_TASK, RECEIVED_TASK, FETCH_TASKS, RECEIVED_TASKS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_TASK:
      return { ...state }
    case RECEIVED_TASK:
      return { ...state, [action.payload.id]: [action.payload][0]}
    case FETCH_TASKS:
      return { ...state }
    case RECEIVED_TASKS:
      return _.mapKeys(action.payload, 'id')
    default:
      return state;
  }
}
