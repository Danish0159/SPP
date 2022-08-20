import React from "react";
import { NavbarWelcome } from "../components_ar/Navigations";
import {
  AboutHero,
  // AboutCards,
  AboutDetails,
} from "../components_ar/AboutPublic";
import { Footer } from "../components_ar";



const AboutPage = () => {
  return (
    <main>
      <NavbarWelcome></NavbarWelcome>
      <AboutHero></AboutHero>
      <AboutDetails></AboutDetails>
      {/* <AboutCards
        title="التق بفريقنا"
        bgColor="true"
      ></AboutCards> */}
      <Footer></Footer>
    </main>
  );
};

export default AboutPage;
