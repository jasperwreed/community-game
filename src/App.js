import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import LoginContainer from "./containers/LoginContainer";

class App extends Component {
  handleLogin = () => <LoginContainer />;

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={this.handleLogin} />
        </Switch>
      </div>
    );
  }
}

export default App;
