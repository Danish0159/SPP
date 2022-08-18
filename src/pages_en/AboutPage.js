import React from "react";
import styled from "styled-components";
import { NavbarWelcome } from "../components_en/Navigations";
import {
  AboutHero,
  AboutCards,
  AboutDetails,
  AboutNews,
} from "../components_en/AboutPublic";
import { Footer } from "../components_en";

const AboutPage = () => {
  return (
    <main>
      <NavbarWelcome></NavbarWelcome>
      <AboutHero></AboutHero>
      <AboutDetails></AboutDetails>
      <AboutCards
        title="Meet Our Team"
        bgColor="true"
      ></AboutCards>
      <AboutNews></AboutNews>
      <Footer></Footer>
    </main>
  );
};

export default AboutPage;

const Wrapper = styled.section``;