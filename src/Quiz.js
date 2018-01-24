import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import App from "./App";

class Quiz extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h2>Javascript questions</h2>
          <ul className="header">
            <li><NavLink to="/">Quiz</NavLink></li>
          </ul>
            <div className="content">
              <Route exact path="/" component={App}/>
            </div>
        </div>
      </HashRouter>
    );
  }
}

export default Quiz;
