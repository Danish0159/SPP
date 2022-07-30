import React from "react";
import { Footer } from "../../components_en";
import { SingleProject } from "../../components_en/GuestFlow";
import { NavbarWelcome } from '../../components_en/Navigations'

const SingleProjectPage = () => {
  return (
    <main>
      <NavbarWelcome></NavbarWelcome>
      <SingleProject></SingleProject>
      <Footer></Footer>
    </main>
  );
};

export default SingleProjectPage;