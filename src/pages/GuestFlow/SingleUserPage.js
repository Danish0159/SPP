import React from "react";
import { Footer } from "../../components";
import { SingleUser } from "../../components/GuestFlow";
import { NavbarWelcome } from '../../components/Navigations'

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