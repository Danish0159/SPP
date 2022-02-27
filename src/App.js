import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Flow 1
import {
  HomePage,
  ErrorPage,
  LoginPage,
  SignupPage,
  WelcomePage,
  SearchResultPage,
  SearchProfilePage,
  SearchProjectPage,
  SearchProjectDetailPage,
  SearchProjectGalleryPage,
} from "./pages";

// Flow 2
import { JoinUs, Driver } from "./pages/Registration";

const App = () => {
  return (
    <>
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
          <Route exact path="/Results">
            <SearchResultPage></SearchResultPage>
          </Route>
          <Route exact path="/Profiles">
            <SearchProfilePage></SearchProfilePage>
          </Route>
          <Route exact path="/Projects">
            <SearchProjectPage></SearchProjectPage>
          </Route>
          <Route exact path="/Details">
            <SearchProjectDetailPage></SearchProjectDetailPage>
          </Route>
          <Route exact path="/Gallery">
            <SearchProjectGalleryPage></SearchProjectGalleryPage>
          </Route>
          <Route exact path="/JoinUs">
            <JoinUs></JoinUs>
          </Route>
          <Route exact path="/RegistrationPage">
            <Driver></Driver>
          </Route>
          <Route exact path="*">
            <ErrorPage></ErrorPage>
          </Route>
        </Switch>
      </Router>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default App;

// Create Protected Routes.

// import { useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";

// const history = useHistory();
// const { user } = useSelector((state) => state.auth);
// if (!user) {
//   history.push("/");
// }
