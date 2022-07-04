import React from "react";
import { Footer } from "../../components";
import { SingleProject } from "../../components/GuestFlow";
import { NavbarWelcome } from '../../components/Navigations'

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