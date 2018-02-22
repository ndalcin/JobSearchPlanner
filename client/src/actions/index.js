// Action creators are functions that send actions to the reducer.
// An action is the type: so i.e. type: 'FETCH_TASKS' is an action.
// Function fetchTasks creates the action FETCH_TASKS and sends it to a reducer which then updates the state based on the actions properties.

import fetch from 'isomorphic-fetch';

export const FETCH_TASKS = 'FETCH_TASKS';
export const RECEIVED_TASKS = 'RECEIVED_TASKS';
export const CREATE_TASK = 'CREATE_TASK';

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
    return fetch('http://localhost:3000/api/tasks', {
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
