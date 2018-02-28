import { FETCH_TYPES, RECEIVED_TYPES } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TYPES:
      return [...state]
    case RECEIVED_TYPES:
      console.log(action.payload)
      return [...state, action.payload]
    default:
      return state;
  }
}
