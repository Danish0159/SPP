import React from "react";
import { Footer } from "../../components_en";
import { Users } from "../../components_en/GuestFlow";
import { NavbarWelcome } from '../../components_en/Navigations'
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