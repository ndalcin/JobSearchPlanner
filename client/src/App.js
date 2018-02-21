import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TasksIndex from './containers/tasks_index';
import TasksNew from './containers/tasks_new';

class App extends Component {
  render() {
      return (
        <Router>
          <div className="app">
            <Switch>
              <Route path="/tasks/new" component={ TasksNew } />
              <Route path="/" component={ TasksIndex } />
            </Switch>
          </div>
        </Router>
      );
    }
}

export default App;
