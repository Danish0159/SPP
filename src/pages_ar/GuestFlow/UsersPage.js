import React from "react";
import { Footer } from "../../components_ar";
import { Users } from "../../components_ar/GuestFlow";
import { NavbarWelcome } from '../../components_ar/Navigations'
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