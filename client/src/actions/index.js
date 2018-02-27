// Action creators are functions that send actions to the reducer.
// An action is the type: so i.e. type: 'FETCH_TASKS' is an action.
// Function fetchTasks creates the action FETCH_TASKS and sends it to a reducer which then updates the state based on the actions properties.

import fetch from 'isomorphic-fetch';

export const FETCH_TASKS = 'FETCH_TASKS';
export const RECEIVED_TASKS = 'RECEIVED_TASKS';
export const CREATE_TASK = 'CREATE_TASK';
export const FETCH_TASK = 'FETCH_TASK';
export const RECEIVED_TASK = 'RECEIVED_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const FETCH_TYPES = 'FETCH_TYPES';
export const RECEIVED_TYPES = 'RECEIVED_TYPES';

const ROOT_URL = 'http://localhost:3000/api';

//Dispatching an Action means calling the dispatch function w/ the action JSON object.

export function fetchTasks() {
  return (dispatch) => {
    dispatch({type: FETCH_TASKS});
    fetch(`${ROOT_URL}/tasks`)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: RECEIVED_TASKS, payload: json })
      })
  };
}

export function createTask(values, callback) {
  return (dispatch) => {
    return fetch(`${ROOT_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values), //you stringify this bc you can only send strings across webs
    })
    .then(response => response.json())
    .then(json => {
      dispatch({ type: CREATE_TASK, payload: json })
    })
    .then(() => callback())
  };
}

export function fetchTask(id) {
  return (dispatch) => {
    dispatch({type: FETCH_TASK});
    fetch(`${ROOT_URL}/tasks/${id}`)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: RECEIVED_TASK, payload: json.task })
      })
  };
}

export function deleteTask(id, callback) {
  return (dispatch) => {
    dispatch({type: DELETE_TASK, payload: id});
    fetch(`${ROOT_URL}/tasks/${id}`, {
      method: 'DELETE',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(id)
    })
    .then(() => callback())
  }
}

export function fetchTypes() {
  return (dispatch) => {
    dispatch({type: FETCH_TYPES});
    fetch(`${ROOT_URL}/types`)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: RECEIVED_TYPES, payload: json })
      })
  };
}
