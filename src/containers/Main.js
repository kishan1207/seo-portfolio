import React, { Component } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Error404 from "../pages/errors/error404/Error";
import HashLinkPage from '../components/HashLinkPage';

export default class Main extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => <HashLinkPage {...props} theme={this.props.theme} />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}