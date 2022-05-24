import React, { useEffect } from "react";
import { cardsData } from "../utils/constants";
import { Navbar, Hero, Footer } from "../components";
import { Cards } from "../components/GuestFlow";
import { resetData } from "../slices/users";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {

  // Reset ALl the data for welcome flow.
  const dispatch = useDispatch();
  // Reset Everthing.
  useEffect(() => {
    dispatch(resetData());
  }, []);

  // State.
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));
  // If user is already logedIN and trying to access the homePage, Redirect him to HomeFeed Page.
  if (user) {
    history.push("/HomeFeed");
  }
  else {
    history.push("/");
  }

  return (
    <main>
      <Navbar page="home"></Navbar>
      <Hero></Hero>
      <Cards
        title="A community of where you can find contractors, designers and companies"
        cardsData={cardsData.slice(0, 3)}
        bgColor="null"
      ></Cards>
      <Cards
        title="Easy way to find the best Contractor in your Area"
        cardsData={cardsData.slice(3, 6)}
        bgColor="true"
      ></Cards>
      <Cards
        title="A way to Learn and Excel your Skills"
        cardsData={cardsData.slice(6, 9)}
        bgColor="null"
      ></Cards>
      <Footer></Footer>
    </main>
  );
}
export default HomePage;
