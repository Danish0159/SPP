import React from "react";
import { Navbar, Footer } from "../../components";
import { Projects } from "../../components/GuestFlow";

const SearchProjectPage = () => {
  return (
    <main>
      <Navbar page="welcome"></Navbar>
      <Projects></Projects>
      <Footer></Footer>
    </main>
  );
};

export default SearchProjectPage;
