import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './components/home';
import TasksIndex from './containers/tasks_index';
import TasksForm from './containers/tasks_form';
import NavBar from './components/navbar';
import TasksShow from './containers/tasks_show';
import HomeNavBar from './components/home_nav_bar';

class App extends Component {
  render() {
      return (
        <div className="app">
          <Router>
            <div className="routes">
              <Switch>
                <Route exact path="/" component={HomeNavBar} />
                <Route path="/" component={NavBar} />
              </Switch>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/tasks/new" component={ TasksForm } />
                <Route path="/tasks/:id" component={ TasksShow } />
                <Route exact path="/tasks" component={ TasksIndex } />
              </Switch>
            </div>
          </Router>
        </div>
      );
    }
}

export default App;
