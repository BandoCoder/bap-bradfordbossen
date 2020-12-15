import { Link, Route } from "react-router-dom";
import React from "react";
import Sequencer from "./components/Sequencer.js";
import Login from "./components/Login";
import SignupForm from "./components/SignupForm";
import Landing from "./components/Landing";

import "./App.css";

class App extends React.Component {
  renderRoutes() {
    return (
      <>
        <Route path="/sequencer/:userId/:patternId" component={Sequencer} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignupForm} />
      </>
    );
  }

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <Link to="/">
            <h1>BAP - Web Based Drum Sequencer</h1>
          </Link>
          <Landing />
        </header>
        <div className="app-routes">{this.renderRoutes()}</div>
      </main>
    );
  }
}

export default App;
