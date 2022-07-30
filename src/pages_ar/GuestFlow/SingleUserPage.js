import React from "react";
import { Footer } from "../../components_ar";
import { SingleUser } from "../../components_ar/GuestFlow";
import { NavbarWelcome } from '../../components_ar/Navigations'

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