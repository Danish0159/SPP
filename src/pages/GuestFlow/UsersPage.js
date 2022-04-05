import React from "react";
import { Navbar, Footer } from "../../components";
import { Users } from "../../components/GuestFlow";

const UsersPage = () => {
  return (
    <main>
      <Navbar page="welcome"></Navbar>
      <Users></Users>
      <Footer></Footer>
    </main>
  );
};

export default UsersPage;
