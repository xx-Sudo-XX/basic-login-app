import React from "react";
import { Route, Switch, Router } from "react-router-dom";

import history from "./history";

import { Auth } from "./components/auth/Auth";
import { Home } from "./components/home/Home";
import { Counter } from "./components/counter/Counter";
import { TodoList } from "./components/todo/TodoList";

import "./App.scss";

const css_prefix = "app__";

const AppComponent = () => {
  return (
    <Router history={history}>
      <div className={`${css_prefix}main`}>
        <Switch>
          <Route path="/" component={Auth} exact />
          <Route path="/home" component={Home} exact />
          <Route path="/counter" component={Counter} exact />
          <Route path="/todo" component={TodoList} exact />
        </Switch>
      </div>
    </Router>
  );
};

export const App = AppComponent;
