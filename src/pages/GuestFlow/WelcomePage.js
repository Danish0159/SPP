import React from "react";
import { cardsData } from "../../utils/constants";
import { Navbar, Footer } from "../../components";
import { Welcome, Cards } from "../../components/GuestFlow";
import { useTranslation } from "react-i18next";

const WelcomePage = () => {
  const { t } = useTranslation();

  return (
    <main>
      <Navbar page="welcome"></Navbar>
      <Welcome></Welcome>
      <Cards
        title={t("card_h2")}
        cardsData={cardsData.slice(3, 6)}
        bgColor="true"
      ></Cards>
      <Footer></Footer>
    </main>
  );
};

export default WelcomePage;
