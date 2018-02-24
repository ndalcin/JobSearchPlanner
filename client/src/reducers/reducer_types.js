import _ from 'lodash';
import { FETCH_TYPES, RECEIVED_TYPES } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_TYPES:
      return { ...state }
    case RECEIVED_TYPES:
      return _.mapKeys(action.payload, 'id') // takes an array and maps the key to 'id' and the remainder of the payload as the value
    default:
      return state;
  }
}
