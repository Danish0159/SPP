import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  HomePage,
  ErrorPage,
  LoginPage,
  SignupPage,
  WelcomePage,
} from "./pages";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
        <Route exact path="/Login">
          <LoginPage></LoginPage>
        </Route>
        <Route exact path="/Signup">
          <SignupPage></SignupPage>
        </Route>
        <Route exact path="/Welcome">
          <WelcomePage></WelcomePage>
        </Route>
        <Route exact path="*">
          <ErrorPage></ErrorPage>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
