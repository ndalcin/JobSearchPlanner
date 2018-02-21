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
            <Route path="/" component={ TasksContainer } />
            <Route path="/tasks/new" component={ TasksNew } />
          </div>
        </Router>
      );
    }
}

export default App;
