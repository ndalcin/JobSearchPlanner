import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import TasksIndex from './containers/TasksIndex';
import TasksForm from './containers/TasksForm';
import TypesIndex from './containers/TypesIndex';
import NavBar from './components/Navbar';
import TasksShow from './containers/TasksShow';
import HomeNavBar from './components/HomeNavBar';
import About from './components/About';
import Footer from './components/Footer';

class App extends Component {
  render() {
      return (
        <div className="App">
          <Router>
            <div className="routes">
              <Switch>
                <Route exact path="/" component={HomeNavBar} />
                <Route path="/" component={NavBar} />
              </Switch>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route exact path="/tasks/new" component={ TasksForm } />
                <Route path="/tasks/:id" component={ TasksShow } />
                <Route exact path="/tasks" component={ TasksIndex } />
                <Route exact path="/types" component={ TypesIndex } />
              </Switch>
            </div>
          </Router>
          <Footer />
        </div>
      );
    }
}

export default App;
