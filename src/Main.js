import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import SkillSet from "./SkillSet";
import Contact from "./Contact";
import Quiz from "./Quiz";
import About from "./About";

class Main extends Component {
  render() {
    return (
      <HashRouter>
          <div>
            <ul className="header">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/skillset">Skill Set</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/quiz">Quiz</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
            </ul>

            <h1>React App</h1>

            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/skillset" component={SkillSet}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/quiz" component={Quiz}/>
              <Route path="/about" component={About}/>
            </div>
          </div>
      </HashRouter>
    );
  }
}

export default Main;
