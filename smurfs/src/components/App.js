// React
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Styling
import "./App.css";
// Component
import SmurfList from './SmurfList';
import SmurfEdit from './SmurfEdit';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Router>
          <Switch>
            <Route exact path="/" component={SmurfList} />
            <Route path="/edit" component={SmurfEdit} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;