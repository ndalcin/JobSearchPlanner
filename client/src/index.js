import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import RootReducer from './reducers/index';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  RootReducer,
  compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();


// The Store is the thing that brings it all together:
// it represents the state by using the rootReducer,
// // any middleware (Thunk in our case), and allows you to actually dispatch actions.
// By using this specific middleware, an action creator can return a function instead of an action object.
// This way, the action creator becomes a thunk.
// For using Redux in React, the <Provider /> component wraps the entire application 
// and passes the storedown to all children.
