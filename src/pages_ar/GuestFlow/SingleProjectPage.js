import React from "react";
import { Footer } from "../../components_ar";
import { SingleProject } from "../../components_ar/GuestFlow";
import { NavbarWelcome } from '../../components_ar/Navigations'

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