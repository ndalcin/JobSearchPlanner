import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TasksIndex from './components/tasks_index';


class App extends Component {
  render() {
      return (
        <Router>
          <div className="app">
            <Route path="/" component={ TasksIndex } />
          </div>
        </Router>
      );
    }
}

export default App;
