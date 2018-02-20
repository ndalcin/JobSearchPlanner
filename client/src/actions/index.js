import fetch from 'isomorphic-fetch';
require('es6-promise').polyfill();
export const FETCH_TASKS = 'FETCH_TASKS';
export const RECEIVED_TASKS = 'RECEIVED_TASKS';
const ROOT_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

export function fetchTasks() {
  return (dispatch) => {
    dispatch({type: FETCH_TASKS});
    fetch(`${ROOT_URL}/tasks`)
      .then(response => response.json())
      .then(json => {
        dispatch({type: RECEIVED_TASKS, payload: json.tasks})
      })
  };
}
