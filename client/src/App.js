import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TasksContainer from './containers/tasks_container';
import TasksNew from './containers/tasks_new';

class App extends Component {
  render() {
      return (
        <Router>
          <div className="app">
            <Route exact path="/" component={ TasksContainer } />
            <Route exact path="/tasks/new" component={ TasksNew } />
          </div>
        </Router>
      );
    }
}

export default App;
