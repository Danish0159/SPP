import React from "react";
import { Footer } from "../../components_en";
import { SingleUser } from "../../components_en/GuestFlow";
import { NavbarWelcome } from '../../components_en/Navigations'

const SingleUserPage = () => {
  return (
    <main>
      <NavbarWelcome></NavbarWelcome>
      <SingleUser></SingleUser>
      <Footer></Footer>
    </main>
  );
};

export default SingleUserPage;