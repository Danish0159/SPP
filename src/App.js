import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Public Pages. 
import { HomePage, ErrorPage, LoginPage, SignupPage } from "./pages";

// Flow 1
import {
  WelcomePage,
  UsersPage,
  SingleUserPage,
  ProjectsPage,
  SingleProjectPage,
} from "./pages/GuestFlow";

// Flow 2
import { JoinUs, Driver } from "./pages/ProfileCreation";

// Flow 3
import { HomeFeed } from "./pages/Community";
import { ProfileDriver } from "./pages/Community/Profile";

// Private Route.
import PrivateRouteCDC from "./pages/ProtectedRoutes/PrivateRouteCDC";
import PrivateWithOutProfile from "./pages/ProtectedRoutes/PrivateWithOutProfile";
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
          <Route exact path="/Users">
            <UsersPage></UsersPage>
          </Route>
          <Route exact path="/Users/:id">
            <SingleUserPage></SingleUserPage>
          </Route>
          <Route exact path="/Projects/:id">
            <ProjectsPage></ProjectsPage>
          </Route>
          <Route exact path="/Projects/:userId/:id">
            <SingleProjectPage></SingleProjectPage>
          </Route>
          {/* Box1 Start (Private Routes).  */}
          {/* ----------------------------------------------- */}
          {/* ----------------------------------------------- */}
          <PrivateRouteCDC
            exact
            path="/JoinUs"
            component={JoinUs}
          ></PrivateRouteCDC>

          <PrivateRouteCDC
            exact
            path="/RegistrationPage"
            component={Driver}
          ></PrivateRouteCDC>
          {/* Box2 END  */}
          {/* ----------------------------------------------- */}
          {/* ----------------------------------------------- */}
          {/* Box2 Start (Private Routes.)  */}
          {/* ----------------------------------------------- */}
          {/* ----------------------------------------------- */}
          <PrivateWithOutProfile
            exact
            path="/HomeFeed"
            component={HomeFeed}
          ></PrivateWithOutProfile>
          <PrivateWithOutProfile
            exact
            path="/Profile"
            component={ProfileDriver}
          ></PrivateWithOutProfile>
          {/* ----------------------------------------------- */}
          {/* Box2 End (Private Routes.)  */}
          {/* ----------------------------------------------- */}
          {/* ----------------------------------------------- */}
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