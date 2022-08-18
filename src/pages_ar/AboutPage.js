import React from "react";
import styled from "styled-components";
import { NavbarWelcome } from "../components_ar/Navigations";
import {
  AboutHero,
  AboutCards,
  AboutDetails,
  AboutNews,
} from "../components_ar/AboutPublic";
import { Footer } from "../components_ar";



const AboutPage = () => {
  return (
    <main>
      <NavbarWelcome></NavbarWelcome>
      <AboutHero></AboutHero>
      <AboutDetails></AboutDetails>
      <AboutCards
        title="التق بفريقنا"
        bgColor="true"
      ></AboutCards>
      <AboutNews></AboutNews>
      <Footer></Footer>
    </main>
  );
};

export default AboutPage;

const Wrapper = styled.section``;