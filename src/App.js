import React, { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from './Shared/Styles';
import ErrorPage from './utils/ErrorPage'
import LinearProgress from '@mui/material/LinearProgress';

// Public Pages. 
import {
  LoginPageEn,
  SignupPageEn,
  AboutPageEn,
  ContactPageEn,
  VerifyPageEn
} from "./pages_en";

import {
  LoginPageAr,
  SignupPageAr,
  AboutPageAr,
  ContactPageAr,
  VerifyPageAr
} from "./pages_ar";

// Flow 1 (Guest Flow)
import {
  HomePageEn,
  UsersPageEn,
  SingleUserPageEn,
  ProjectsPageEn,
  SingleProjectPageEn,
} from "./pages_en/GuestFlow";

import {
  HomePageAr,
  UsersPageAr,
  SingleUserPageAr,
  ProjectsPageAr,
  SingleProjectPageAr,
} from "./pages_ar/GuestFlow";

// Flow 2 (ProfileCreation Flow)
import { JoinUsEn, DriverEn } from "./pages_en/ProfileCreation";
import { JoinUsAr, DriverAr } from "./pages_ar/ProfileCreation";

// Flow 3 (Community Flow)
import { FeedDriverEn } from "./pages_en/Community/Feed";
import { ProfileDriverEn, ClientReviewEn } from "./pages_en/Community/Profile";

// import { FeedDriverAr } from "./pages_ar/Community/Feed";
import { ProfileDriverAr, ClientReviewAr } from "./pages_ar/Community/Profile";

// Private Routes.
import { PrivateWithOutProfileEn, PrivateWithProfileEn, PrivateWithUserEn, PrivateWithOutUserEn } from "./pages_en/ProtectedRoutes";
import { PrivateWithOutProfileAr, PrivateWithProfileAr, PrivateWithUserAr, PrivateWithOutUserAr } from "./pages_ar/ProtectedRoutes";

const App = () => {

  return (
    <>
      <Router>
        <Suspense fallback={<LinearProgress />}>
          <ThemeProvider theme={theme}>
            <Switch>
              <Route exact path="/ContactUs">
                <ContactPageEn></ContactPageEn>
              </Route>

              <Route exact path="/ContactUsar">
                <ContactPageAr></ContactPageAr>
              </Route>

              <Route exact path="/About">
                <AboutPageEn></AboutPageEn>
              </Route>

              <Route exact path="/About">
                <AboutPageEn></AboutPageEn>
              </Route>
              <Route exact path="/Aboutar">
                <AboutPageAr></AboutPageAr>
              </Route>

              {/* ----------------------------------------------- */}
              {/* Cannot Access login+SignUp Page If user is already loggedIn */}
              <PrivateWithUserEn
                exact
                path="/Login"
                component={LoginPageEn}
              ></PrivateWithUserEn>

              <PrivateWithUserAr
                exact
                path="/Loginar"
                component={LoginPageAr}
              ></PrivateWithUserAr>

              <PrivateWithUserEn
                exact
                path="/Signup"
                component={SignupPageEn}
              ></PrivateWithUserEn>

              <PrivateWithOutUserEn
                exact
                path="/Verify"
                component={VerifyPageEn}
              ></PrivateWithOutUserEn>

              <PrivateWithUserAr
                exact
                path="/Signupar"
                component={SignupPageAr}
              ></PrivateWithUserAr>

              <PrivateWithOutUserAr
                exact
                path="/Verifyar"
                component={VerifyPageAr}
              ></PrivateWithOutUserAr>

              {/* ----------------------------------------------- */}
              {/* Guest Flow (Public) */}

              <Route exact path="/">
                <HomePageEn></HomePageEn>
              </Route>

              <Route exact path="/ar">
                <HomePageAr></HomePageAr>
              </Route>

              <Route exact path="/Users">
                <UsersPageEn></UsersPageEn>
              </Route>

              <Route exact path="/Usersar">
                <UsersPageAr></UsersPageAr>
              </Route>

              <Route exact path="/Users/:id">
                <SingleUserPageEn></SingleUserPageEn>
              </Route>

              <Route exact path="/Usersar/:id">
                <SingleUserPageAr></SingleUserPageAr>
              </Route>

              <Route exact path="/Projects/:id">
                <ProjectsPageEn></ProjectsPageEn>
              </Route>

              <Route exact path="/Projectsar/:id">
                <ProjectsPageAr></ProjectsPageAr>
              </Route>

              <Route exact path="/Projects/:userId/:id">
                <SingleProjectPageEn></SingleProjectPageEn>
              </Route>

              <Route exact path="/Projectsar/:userId/:id">
                <SingleProjectPageAr></SingleProjectPageAr>
              </Route>

              {/* ----------------------------------------------- */}
              {/* NewUser (Can Access if Profile is Not Created). */}

              <PrivateWithProfileEn
                exact
                path="/JoinUs"
                component={JoinUsEn}
              ></PrivateWithProfileEn>

              <PrivateWithProfileAr
                exact
                path="/JoinUsar"
                component={JoinUsAr}
              ></PrivateWithProfileAr>

              <PrivateWithProfileEn
                exact
                path="/RegistrationPage"
                component={DriverEn}
              ></PrivateWithProfileEn>

              <PrivateWithProfileAr
                exact
                path="/RegistrationPagear"
                component={DriverAr}
              ></PrivateWithProfileAr>

              {/* ----------------------------------------------- */}
              {/* ExistingUser (Can Access if Profile is Created). */}

          
              <Route exact path="/HomeFeed">
                <FeedDriverEn></FeedDriverEn>
              </Route>

              <PrivateWithOutProfileEn
                exact
                path="/Profile"
                component={ProfileDriverEn}
              ></PrivateWithOutProfileEn>

              <PrivateWithOutProfileAr
                exact
                path="/Profilear"
                component={ProfileDriverAr}
              ></PrivateWithOutProfileAr>

              {/* ----------------------------------------------- */}
              {/* End Of Private Routes. */}
              {/* Public Route(For Giving Reviews) */}

              <Route exact path="/Review/:userId/:id">
                <ClientReviewEn></ClientReviewEn>
              </Route>

              <Route exact path="/Reviewar/:userId/:id">
                <ClientReviewAr></ClientReviewAr>
              </Route>

              <Route exact path="*">
                <ErrorPage></ErrorPage>
              </Route>
            </Switch>
          </ThemeProvider>
        </Suspense>
      </Router>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default App;