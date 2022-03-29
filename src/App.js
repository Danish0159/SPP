import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Flow 1
import {
  WelcomePage,
  SearchResultPage,
  SearchProfilePage,
  SearchProjectPage,
  SearchProjectDetailPage,
  SearchProjectGalleryPage,
} from "./pages/GuestFlow";

import { HomePage, ErrorPage, LoginPage, SignupPage } from "./pages";

// Flow 2
import { JoinUs, Driver } from "./pages/ProfileCreation";

// Flow 3
import TestCommunity from "./pages/Community/TestCommunity";

// Private Route.
import PrivateRouteUser from "./pages/ProtectedRoutes/PrivateRouteUser";
import PrivateRouteCDC from "./pages/ProtectedRoutes/PrivateRouteCDC";
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
          {/* ----------------------------------------------- */}
          {/* ----------------------------------------------- */}
          {/* Box1 (User Protection) */}
          <PrivateRouteUser
            exact
            path="/Welcome"
            component={WelcomePage}
          ></PrivateRouteUser>
          <PrivateRouteUser
            exact
            path="/Users"
            component={SearchResultPage}
          ></PrivateRouteUser>
          <PrivateRouteUser
            exact
            path="/Users/:id"
            component={SearchProfilePage}
          ></PrivateRouteUser>
          <PrivateRouteUser
            exact
            path="/Projects/:id"
            component={SearchProjectPage}
          ></PrivateRouteUser>
          <PrivateRouteUser
            exact
            path="/Projects/:userId/:id"
            component={SearchProjectDetailPage}
          ></PrivateRouteUser>
          {/* <PrivateRouteUser
            exact
            path="/Gallery"
            component={SearchProjectGalleryPage}
          ></PrivateRouteUser> */}
          {/* Box1 END */}
          {/* ----------------------------------------------- */}
          {/* ----------------------------------------------- */}
          {/* Box2 (Desinger||Contractor||Company Protection) */}
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
          <Route exact path="/TestCommunity">
            <TestCommunity></TestCommunity>
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
