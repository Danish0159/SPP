import React from "react";
import { cardsData } from "../utils/constants";
import { Navbar, Welcome, Cards, Footer } from "../components";

const WelcomePage = () => {
  return (
    <main>
      <Navbar page="welcome"></Navbar>
      <Welcome></Welcome>
      <Cards
        id="1"
        title="Easy way to find the best Contractor in your Area"
        cardsData={cardsData.slice(3, 6)}
        bgColor="true"
      ></Cards>
      <Footer></Footer>
    </main>
  );
};

export default WelcomePage;
