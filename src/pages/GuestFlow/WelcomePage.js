import React from "react";
import { cardsData } from "../../utils/constants";
import { Navbar, Footer } from "../../components";
import { Welcome, Cards } from "../../components/GuestFlow";

const WelcomePage = () => {
  return (
    <main>
      <Navbar page="welcome"></Navbar>
      <Welcome></Welcome>
      <Cards
        title="Easy way to find the best Contractor in your Area"
        cardsData={cardsData.slice(3, 6)}
        bgColor="true"
      ></Cards>
      <Footer></Footer>
    </main>
  );
};

export default WelcomePage;
