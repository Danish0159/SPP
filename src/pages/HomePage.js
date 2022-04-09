import React, { useEffect } from "react";
import { cardsData } from "../utils/constants";
import { Navbar, Hero, Footer } from "../components";
import { Cards } from "../components/GuestFlow";
import { resetData } from "../slices/users";
import { useDispatch } from "react-redux";

const HomePage = () => {

  // Reset ALl the data for welcome flow.
  const dispatch = useDispatch();
  // Reset Everthing.
  useEffect(() => {
    dispatch(resetData());
  }, []);


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
};

export default HomePage;
