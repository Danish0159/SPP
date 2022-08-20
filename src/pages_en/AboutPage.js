import React from "react";
import { NavbarWelcome } from "../components_en/Navigations";
import {
  AboutHero,
  // AboutCards,
  AboutDetails,
} from "../components_en/AboutPublic";
import { Footer } from "../components_en";

const AboutPage = () => {
  return (
    <main>
      <NavbarWelcome></NavbarWelcome>
      <AboutHero></AboutHero>
      <AboutDetails></AboutDetails>
      {/* <AboutCards
        title="Meet Our Team"
        bgColor="true"
      ></AboutCards> */}
      <Footer></Footer>
    </main>
  );
};

export default AboutPage;
