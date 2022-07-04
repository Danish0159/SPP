import React from "react";
import { Footer } from "../../components";
import { Users } from "../../components/GuestFlow";
import { NavbarWelcome } from '../../components/Navigations'
const UsersPage = () => {
  return (
    <main>
      <NavbarWelcome></NavbarWelcome>
      <Users></Users>
      <Footer></Footer>
    </main>
  );
};

export default UsersPage;