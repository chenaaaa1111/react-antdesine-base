import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {  Route, Switch } from "react-router";
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/about" component={About} />
        <Route path="/:user" component={User} />
        <Route component={NoMatch} /> */}
        </Switch>
      </BrowserRouter>

    </div>
  }
}
export default App;
