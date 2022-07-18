import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from './components/Shared/styles';

// Public Pages. 
import { LoginPage, SignupPage, ErrorPage } from "./pages";

// Flow 1 (Guest Flow)
import {
  HomePage,
  UsersPage,
  SingleUserPage,
  ProjectsPage,
  SingleProjectPage,
} from "./pages/GuestFlow";

// Flow 2 (ProfileCreation Flow)
import { JoinUs, Driver } from "./pages/ProfileCreation";

// Flow 3 (Community Flow)
import { FeedDriver } from "./pages/Community/Feed";
import { ProfileDriver, ClientReview } from "./pages/Community/Profile";

// Private Routes.
import { PrivateWithOutProfile, PrivateWithProfile, PrivateWithUser } from "./pages/ProtectedRoutes";

const App = () => {

  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <Switch>
            {/* ----------------------------------------------- */}
            {/* Cannot Access login+SignUp Page If user is already loggedIn */}
            <PrivateWithUser
              exact
              path="/Login"
              component={LoginPage}
            ></PrivateWithUser>
            <PrivateWithUser
              exact
              path="/Signup"
              component={SignupPage}
            ></PrivateWithUser>

            {/* ----------------------------------------------- */}
            {/* Guest Flow (Public) */}
            <Route exact path="/">
              <HomePage></HomePage>
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
            {/* ----------------------------------------------- */}
            {/* NewUser (Can Access if Profile is Not Created). */}
            <PrivateWithProfile
              exact
              path="/JoinUs"
              component={JoinUs}
            ></PrivateWithProfile>

            <PrivateWithProfile
              exact
              path="/RegistrationPage"
              component={Driver}
            ></PrivateWithProfile>
            {/* ----------------------------------------------- */}
            {/* ExistingUser (Can Access if Profile is Created). */}
            <PrivateWithOutProfile
              exact
              path="/HomeFeed"
              component={FeedDriver}
            ></PrivateWithOutProfile>

            <PrivateWithOutProfile
              exact
              path="/Profile"
              component={ProfileDriver}
            ></PrivateWithOutProfile>
            {/* ----------------------------------------------- */}
            {/* End Of Private Routes. */}
            {/* Public Route(For Giving Reviews) */}
            <Route exact path="/Review/:userId/:id">
              <ClientReview></ClientReview>
            </Route>
            <Route exact path="*">
              <ErrorPage></ErrorPage>
            </Route>
          </Switch>
        </ThemeProvider>
      </Router>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default App;